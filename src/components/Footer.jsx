import Icon from "./Icon";
import { C } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div data-stagger className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-dim">
        <p>© {new Date().getFullYear()} {C.name} · Civil Engineer, Sydney</p>
        <div className="flex items-center gap-5">
          <a href={C.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-hv">LinkedIn</a>
          <a href={"mailto:" + C.email} className="hover:text-hv">Email</a>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-hv"><Icon n="up" c="w-4 h-4" />Back to top</a>
        </div>
      </div>
    </footer>
  );
}
