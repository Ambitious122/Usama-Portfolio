import Section from "./Section";
import { PROJECTS } from "../data/content";
import { HZ, tilt, untilt } from "../lib/motion";

// On desktop (lg+) with motion allowed, the cards sit in a horizontal track
// that useMotion pins and scrolls sideways. Otherwise they simply stack.
export default function Projects() {
  return (
    <Section id="projects" title="Projects" sub="Project values and scopes are taken from my resume. Drawings and site photos are available on request.">
      <div id="hz" className={HZ ? "lg:w-screen lg:relative lg:left-1/2 lg:-ml-[50vw] lg:overflow-hidden" : ""}>
        <div id="hzt" data-stagger
          className={"space-y-6 " + (HZ ? "lg:space-y-0 lg:flex lg:gap-6 lg:w-max lg:py-2 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))]" : "")}>
          {PROJECTS.map((p) => (
            <article key={p.t} data-cursor={p.label} onPointerMove={tilt} onPointerLeave={untilt}
              className={"border border-line bg-deep/50 grid md:grid-cols-12 hover:border-hv/60 transition-colors " + (HZ ? "lg:w-[min(80vw,880px)] lg:shrink-0" : "")}>
              <div className="pp md:col-span-4 p-7 border-b md:border-b-0 md:border-r border-line grid-bg">
                <p className="text-sm text-dim">{p.tag}</p>
                <h3 className="mt-2 font-head font-bold text-3xl leading-tight">{p.t}</h3>
                <p className="mt-6 font-head text-2xl text-hv">{p.v}</p>
              </div>
              <div className="md:col-span-8 p-7">
                <p className="text-dim leading-relaxed">{p.d}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => <li key={t} className="text-xs border border-line rounded-full px-3 py-1">{t}</li>)}
                </ul>
                <p className="mt-5 text-sm text-dim">{p.who}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
