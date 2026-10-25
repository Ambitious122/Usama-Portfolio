import { useEffect } from "react";
import { gsap, ScrollTrigger, REDUCED, FINE } from "../lib/motion";

// Page-wide GSAP choreography: hero intro, mouse parallax, scroll reveals,
// Gantt bars, progress line and the pinned horizontal projects gallery.
export default function useMotion() {
  useEffect(() => {
    if (REDUCED()) return;
    const mm = gsap.matchMedia();
    let onMove = null;

    const ctx = gsap.context(() => {
      gsap.set("[data-img]", { scale: 1.12 });
      gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 })
        .from("[data-ch]", { yPercent: 110, opacity: 0, filter: "blur(8px)", duration: 1, stagger: 0.04, clearProps: "filter,opacity,transform" }, 0)
        .from("[data-h]", { y: 24, opacity: 0, filter: "blur(6px)", duration: 0.8, stagger: 0.1, clearProps: "filter,opacity,transform" }, 0.35)
        .from("#frame", { clipPath: "inset(100% 0% 0% 0%)", duration: 1.1, ease: "power4.inOut", clearProps: "clipPath" }, 0.2)
        .from("[data-img]", { scale: 1.3, duration: 1.4 }, 0.2)
        .from("#bg3d", { opacity: 0, duration: 2 }, 0);

      if (FINE()) {
        const els = gsap.utils.toArray("[data-depth]").map((el) => ({
          d: +el.dataset.depth,
          qx: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
          qy: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
        }));
        onMove = (e) => {
          const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;
          els.forEach((o) => { o.qx(nx * o.d); o.qy(ny * o.d); });
        };
        addEventListener("pointermove", onMove);
      }

      gsap.utils.toArray("[data-mask]").forEach((el) =>
        gsap.from(el, { yPercent: 110, duration: 1, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: el, start: "top 92%", once: true } }));
      gsap.utils.toArray("[data-reveal]").forEach((el) =>
        gsap.from(el, { y: 28, opacity: 0, filter: "blur(6px)", duration: 0.9, ease: "power3.out", clearProps: "filter,opacity,transform", scrollTrigger: { trigger: el, start: "top 90%", once: true } }));
      gsap.utils.toArray("[data-stagger]").forEach((p) =>
        gsap.from(p.children, { y: 32, opacity: 0, duration: 0.8, stagger: 0.09, ease: "power3.out", clearProps: "opacity,transform", scrollTrigger: { trigger: p, start: "top 88%", once: true } }));
      gsap.from("[data-bar]", { scaleX: 0, transformOrigin: "left center", duration: 0.9, stagger: 0.12, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: "#gantt", start: "top 80%", once: true } });
      gsap.to("[data-img]", { yPercent: 6, ease: "none", scrollTrigger: { trigger: "#top", scrub: true, start: "top top", end: "bottom top" } });
      gsap.to("#prog", { scaleX: 1, ease: "none", scrollTrigger: { scrub: 0.2, start: 0, end: "max" } });
    });

    mm.add("(min-width:1024px)", () => {
      const w = document.getElementById("hz"), t = document.getElementById("hzt");
      if (!w || !t) return;
      const dist = () => Math.max(0, t.scrollWidth - innerWidth);
      gsap.to(t, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: w, start: "top 12%", end: () => "+=" + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 } });
    });

    const refresh = () => ScrollTrigger.refresh();
    const timer = setTimeout(refresh, 500);
    addEventListener("load", refresh);
    document.fonts && document.fonts.ready.then(refresh);

    return () => {
      clearTimeout(timer);
      removeEventListener("load", refresh);
      if (onMove) removeEventListener("pointermove", onMove);
      mm.revert();
      ctx.revert();
    };
  }, []);
}
