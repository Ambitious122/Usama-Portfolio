export default function Section({ id, title, sub, children }) {
  return (
    <section id={id} className="px-5 sm:px-8 py-20 sm:py-28 max-w-6xl mx-auto">
      <div className="mb-10 sm:mb-14 max-w-2xl">
        <h2 className="font-head font-bold text-4xl sm:text-6xl leading-[1.05] tracking-tight overflow-hidden pb-[.1em]">
          <span data-mask className="block">{title}</span>
        </h2>
        {sub && <p data-reveal className="mt-4 text-dim leading-relaxed">{sub}</p>}
      </div>
      {children}
    </section>
  );
}
