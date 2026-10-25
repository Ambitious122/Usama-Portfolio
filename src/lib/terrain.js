import * as THREE from "three";
import { REDUCED } from "./motion";

// Survey-style wireframe terrain for the hero background.
export function initTerrain() {
  const cv = document.getElementById("bg3d");
  if (!cv) return;
  let R;
  try { R = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true }); } catch (e) { return; }

  const small = innerWidth < 768, still = REDUCED();
  const w = () => cv.clientWidth || 1, h = () => cv.clientHeight || 1;
  R.setPixelRatio(Math.min(devicePixelRatio, small ? 1 : 1.5));
  R.setSize(w(), h(), false);

  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(50, w() / h(), 0.1, 120);
  cam.position.set(0, 6, 18);

  const U = { t: { value: 3 }, m: { value: new THREE.Vector2() } };
  const mat = new THREE.ShaderMaterial({
    uniforms: U, transparent: true, wireframe: true, depthWrite: false,
    vertexShader: `
      uniform float t; uniform vec2 m; varying float h; varying float vd;
      float f(vec2 p){return sin(p.x*.45+t*.35)*cos(p.y*.4-t*.28)*1.2+sin(p.x*.2-p.y*.3+t*.2)*1.7+sin(p.y*.85+t*.45)*.25;}
      void main(){vec3 p=position;h=f(p.xy+m*4.);p.z=h;vec4 mv=modelViewMatrix*vec4(p,1.);vd=-mv.z;gl_Position=projectionMatrix*mv;}`,
    fragmentShader: `
      varying float h; varying float vd;
      void main(){float k=smoothstep(-1.4,2.6,h);vec3 c=mix(vec3(.17,.33,.55),vec3(1.,.78,0.),pow(k,2.4));
      float a=(.22+.65*k)*smoothstep(62.,16.,vd);gl_FragColor=vec4(c,a);}`,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(90, 60, small ? 60 : 100, small ? 40 : 66), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(0, -2, -8);
  scene.add(mesh);

  let mx = 0, my = 0, on = true, raf, t = 3, last = performance.now();
  const onMove = (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; };
  addEventListener("pointermove", onMove);
  const io = new IntersectionObserver(([e]) => { on = e.isIntersecting; });
  io.observe(cv);

  const draw = () => {
    cam.position.x += (mx * 4 - cam.position.x) * 0.04;
    cam.position.y += (6 - my * 2 - cam.position.y) * 0.04;
    cam.lookAt(0, 0, -6);
    U.m.value.set(mx, my);
    R.render(scene, cam);
  };
  const loop = (n) => {
    raf = requestAnimationFrame(loop);
    if (!on || document.hidden) { last = n; return; }
    t += (n - last) / 1000; last = n; U.t.value = t; draw();
  };
  const resize = () => { R.setSize(w(), h(), false); cam.aspect = w() / h(); cam.updateProjectionMatrix(); if (still) draw(); };
  const ro = new ResizeObserver(resize);
  ro.observe(cv);

  if (still) draw(); else raf = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(raf);
    removeEventListener("pointermove", onMove);
    io.disconnect(); ro.disconnect();
    mesh.geometry.dispose(); mat.dispose(); R.dispose();
  };
}
