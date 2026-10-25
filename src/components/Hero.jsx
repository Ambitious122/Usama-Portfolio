import { useEffect } from "react";
import photo from "../assets/usama.jpg";
import { initTerrain } from "../lib/terrain";
import Mag from "./Mag";
import Split from "./Split";
import Icon from "./Icon";
import { C, TOOLS } from "../data/content";

const OVERLAY =
  "linear-gradient(90deg,rgba(11,31,54,.85) 0%,rgba(11,31,54,.5) 50%,rgba(11,31,54,.05) 100%)," +
  "linear-gradient(180deg,rgba(11,31,54,.55) 0%,transparent 28%,transparent 68%,rgba(11,31,54,.96) 100%)";

export default function Hero() {
  useEffect(() => initTerrain(), []);

  return (
    <>
      <section id="top" className="relative border-b border-line overflow-hidden">
        <div className="aurora" aria-hidden="true">
          <i className="a1" /><i className="a2" />
          <canvas id="bg3d" className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0" style={{ background: OVERLAY }} />
          <span className="cue hidden sm:flex items-end gap-3 absolute left-8 bottom-5 text-xs text-dim"><b />Scroll</span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-16 sm:pt-16 sm:pb-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <p data-h className="inline-flex items-center gap-2 text-sm text-dim border border-line rounded-full px-3 py-1 bg-deep/60">
              <span className="w-2 h-2 rounded-full bg-hv" />Sydney NSW · Full Australian work rights
            </p>
            <h1 aria-label="Usama Arshad" className="mt-6 font-head font-bold uppercase text-6xl sm:text-8xl leading-[.9] tracking-tight">
              <Split t="Usama" /><Split t="Arshad" />
            </h1>
            <p data-h className="mt-4 font-head text-2xl sm:text-3xl text-hv">Civil Engineer · Site & Planning</p>
            <p data-h className="mt-6 max-w-xl text-dim leading-relaxed">
              I build roads, drainage and the programmes behind them. Master of Engineering (Civil) from UTS, with site and planning experience on a roughly AUD 24.75 million residential infrastructure project, now working as a Cadet Engineer with Citywide Civil Works.
            </p>
            <div data-h className="mt-8 flex flex-wrap items-center gap-3">
              <Mag>
                <a href="#contact" className="group inline-flex items-center gap-2 bg-hv text-ink font-semibold px-6 py-3 rounded hover:bg-white active:scale-95 transition-[background-color,transform]">
                  Get in touch<Icon n="ar" c="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Mag>
              <Mag>
                <a href="#experience" className="inline-block border border-line px-6 py-3 rounded hover:border-hv active:scale-95 transition-[border-color,transform]">View experience</a>
              </Mag>
              <Mag>
                <a href={C.linkedin} target="_blank" rel="noopener noreferrer" className="border border-line px-6 py-3 rounded hover:border-hv active:scale-95 transition-[border-color,transform] inline-flex items-center gap-2">
                  <Icon n="in" c="w-4 h-4" />LinkedIn
                </a>
              </Mag>
            </div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2 relative mx-auto w-full max-w-sm">
            <div id="frame" data-depth="12" className="relative p-3 border border-line bg-deep">
              <div className="overflow-hidden">
                <img data-img src={photo} alt="Usama Arshad standing in front of the Sydney Harbour Bridge at night"
                  className="w-full aspect-[4/5] object-cover object-top" width="900" height="1164" />
              </div>
              <span className="absolute -top-px -left-px w-6 h-6 border-t-4 border-l-4 border-hv" />
              <span className="absolute -bottom-px -right-px w-6 h-6 border-b-4 border-r-4 border-hv" />
            </div>
            <svg viewBox="0 0 400 60" className="w-full mt-3" aria-hidden="true">
              <path className="road" d="M0 45 C80 45 100 12 200 12 S320 45 400 45" fill="none" stroke="#FFC800" strokeWidth="3" />
              <path d="M0 55 C80 55 100 22 200 22 S320 55 400 55" fill="none" stroke="#24415F" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>
        </div>
      </section>

      <div className="mq border-b border-line overflow-hidden bg-deep" aria-hidden="true">
        <div className="marq flex py-4 font-head text-xl tracking-wide text-dim">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {TOOLS.map((t) => (
                <span key={t} className="px-6 whitespace-nowrap">{t}<span className="text-hv ml-12">/</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
