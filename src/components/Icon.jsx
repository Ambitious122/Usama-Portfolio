const PATHS = {
  in: "M4 4h4v16H4zM10 9h4v1.5c.8-1.2 2-1.8 3.5-1.8C20 8.7 21 10.3 21 13v7h-4v-6c0-1.2-.5-2-1.6-2S14 12.8 14 14v6h-4z",
  mail: "M3 6h18v12H3zM3 6l9 7 9-7",
  ph: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z",
  x: "M6 6l12 12M18 6L6 18",
  menu: "M4 7h16M4 12h16M4 17h16",
  up: "M12 19V5m0 0l-6 6m6-6l6 6",
  ar: "M5 12h14m0 0l-5-5m5 5l-5 5",
  ck: "M5 12l5 5L20 7",
};

export default function Icon({ n, c = "w-5 h-5" }) {
  return (
    <svg className={c} viewBox="0 0 24 24" fill={n === "in" ? "currentColor" : "none"} stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[n]} />
    </svg>
  );
}
