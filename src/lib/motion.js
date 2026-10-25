import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MQ = (q) => typeof matchMedia !== "undefined" && matchMedia(q).matches;
export const REDUCED = () => MQ("(prefers-reduced-motion: reduce)");
export const FINE = () => MQ("(hover: hover) and (pointer: fine)");
// Horizontal pinned project gallery is only used when motion is allowed.
export const HZ = !REDUCED();

export const tilt = (e) => {
  if (e.pointerType !== "mouse" || REDUCED()) return;
  const el = e.currentTarget, b = el.getBoundingClientRect();
  const x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5;
  gsap.to(el, { rotationY: x * 5, rotationX: -y * 5, transformPerspective: 900, duration: 0.5, ease: "power3.out" });
  const g = el.querySelector(".pp");
  if (g) gsap.to(g, { backgroundPosition: x * 20 + "px " + y * 20 + "px", duration: 0.6, ease: "power3.out" });
};

export const untilt = (e) => {
  if (REDUCED()) return;
  gsap.to(e.currentTarget, { rotationX: 0, rotationY: 0, duration: 0.6, ease: "power3.out" });
};

export { gsap, ScrollTrigger };
