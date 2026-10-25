import { useEffect, useState } from "react";
import Icon from "./Icon";
import { C, NAV } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [act, setAct] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(scrollY > 8);
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setAct(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(([i]) => { const el = document.getElementById(i); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={"sticky z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 " +
        (scrolled ? "bg-ink/90 backdrop-blur border-line shadow-[0_8px_24px_-12px_rgba(0,0,0,.6)]" : "bg-transparent border-transparent")}
      style={{ top: "env(safe-area-inset-top,0px)" }}
    >
      <div id="prog" className="absolute left-0 -bottom-px h-0.5 w-full bg-hv" style={{ transform: "scaleX(0)", transformOrigin: "left" }} aria-hidden="true" />
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between" aria-label="Main">
        <a href="#top" className="font-head font-bold text-2xl tracking-wide">USAMA ARSHAD</a>
        <ul className="hidden md:flex gap-7 text-sm">
          {NAV.map(([i, l]) => (
            <li key={i}>
              <a href={"#" + i} className={"pb-1 border-b-2 transition-colors " + (act === i ? "border-hv text-mist" : "border-transparent text-dim hover:text-mist")}>{l}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={C.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-2 text-dim hover:text-hv transition-colors"><Icon n="in" /></a>
          <button className="md:hidden p-2" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <Icon n={open ? "x" : "menu"} c="w-6 h-6" />
          </button>
        </div>
      </nav>
      {open && (
        <ul className="md:hidden border-t border-line px-5 py-3 bg-ink">
          {NAV.map(([i, l], n) => (
            <li key={i} className="menu-in" style={{ animationDelay: n * 55 + "ms" }}>
              <a href={"#" + i} onClick={() => setOpen(false)} className="block py-3 border-b border-line/60 text-lg font-head tracking-wide">{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
