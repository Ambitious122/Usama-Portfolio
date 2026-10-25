import { useEffect, useRef } from "react";
import { gsap, REDUCED, FINE } from "../lib/motion";

// Desktop-only dot + trailing ring. The native cursor is never hidden.
// Any element with data-cursor="Label" makes the ring grow and show that label.
export default function Cursor() {
  const wrap = useRef(), dot = useRef(), ring = useRef();
  useEffect(() => {
    if (REDUCED() || !FINE()) return;
    const W = wrap.current, D = dot.current, R = ring.current, T = R.querySelector("span");
    gsap.set([D, R], { xPercent: -50, yPercent: -50 });
    const dx = gsap.quickTo(D, "x", { duration: 0.1, ease: "power3" });
    const dy = gsap.quickTo(D, "y", { duration: 0.1, ease: "power3" });
    const rx = gsap.quickTo(R, "x", { duration: 0.55, ease: "power3" });
    const ry = gsap.quickTo(R, "y", { duration: 0.55, ease: "power3" });
    let shown = false;
    const move = (e) => {
      if (!shown) { shown = true; gsap.to(W, { opacity: 1, duration: 0.3 }); }
      dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
    };
    const over = (e) => {
      const l = e.target.closest("[data-cursor]"), t = e.target.closest("a,button");
      T.textContent = l ? l.dataset.cursor : "";
      const size = l ? 88 : t ? 52 : 34;
      gsap.to(R, { width: size, height: size, backgroundColor: l ? "#FFC800" : "rgba(255,200,0,0)", duration: 0.3, ease: "power3.out" });
      gsap.to(D, { opacity: l ? 0 : 1, duration: 0.2 });
    };
    const out = () => gsap.to(W, { opacity: 0, duration: 0.2 });
    const inn = () => shown && gsap.to(W, { opacity: 1, duration: 0.2 });
    addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    document.documentElement.addEventListener("mouseleave", out);
    document.documentElement.addEventListener("mouseenter", inn);
    return () => {
      removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("mouseleave", out);
      document.documentElement.removeEventListener("mouseenter", inn);
    };
  }, []);

  return (
    <div ref={wrap} aria-hidden="true" className="opacity-0">
      <div ref={dot} className="fixed top-0 left-0 z-[60] w-1.5 h-1.5 rounded-full bg-hv pointer-events-none" />
      <div ref={ring} className="fixed top-0 left-0 z-[60] w-[34px] h-[34px] rounded-full border border-hv/70 pointer-events-none flex items-center justify-center">
        <span className="text-[11px] font-semibold text-ink text-center leading-tight" />
      </div>
    </div>
  );
}
