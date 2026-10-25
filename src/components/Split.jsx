// Splits a word into characters inside a mask so the hero heading can reveal letter by letter.
export default function Split({ t }) {
  return (
    <span className="block overflow-hidden pb-[.08em]" aria-hidden="true">
      {[...t].map((c, i) => <span key={i} data-ch className="inline-block">{c}</span>)}
    </span>
  );
}
