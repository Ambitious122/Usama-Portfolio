import { useEffect, useRef } from "react";
import { gsap, REDUCED, FINE } from "../lib/motion";

// Wraps a button/link so it is gently pulled toward the pointer (mouse devices only).
export default function Mag({ children, s = 0.3 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || REDUCED() || !FINE()) return;
    const qx = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const qy = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
    const move = (e) => {
      const b = el.getBoundingClientRect();
      qx((e.clientX - b.left - b.width / 2) * s);
      qy((e.clientY - b.top - b.height / 2) * s);
    };
    const leave = () => { qx(0); qy(0); };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); };
  }, [s]);
  return <span ref={ref} className="inline-block p-2 -m-2">{children}</span>;
}
