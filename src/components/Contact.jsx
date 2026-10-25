import { useState } from "react";
import Section from "./Section";
import Mag from "./Mag";
import Icon from "./Icon";
import { C } from "../data/content";

const INPUT =
  "w-full bg-deep border border-line px-4 py-3 rounded transition-[border-color,box-shadow] duration-200 focus:border-hv focus:shadow-[0_0_0_4px_rgba(255,200,0,.15)]";

// Defined outside Contact so inputs keep focus while typing.
function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm mb-1.5">{label}</label>
      {children}
      {error && <p id={id + "-e"} className="fade text-sm text-hv mt-1" role="alert">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const [err, setErr] = useState({});
  const [st, setSt] = useState("idle"); // idle | sending | sent
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!f.name.trim()) x.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) x.email = "Enter a valid email address.";
    if (f.msg.trim().length < 10) x.msg = "Write at least 10 characters.";
    setErr(x);
    if (Object.keys(x).length) return;
    const body = encodeURIComponent(f.msg + "\n\n— " + f.name + " (" + f.email + ")");
    setSt("sending");
    // No backend: this opens the visitor's email app with a prepared draft.
    setTimeout(() => {
      window.open("mailto:" + C.email + "?subject=" + encodeURIComponent("Enquiry from " + f.name) + "&body=" + body, "_top");
      setSt("sent");
    }, 700);
  };

  return (
    <Section id="contact" title="Have a civil project or role in mind? Let’s talk." sub="I usually reply by email. A referee from Citywide Civil Works is available on request.">
      <div className="grid md:grid-cols-5 gap-10">
        <div data-stagger className="md:col-span-2 space-y-4">
          <a href={"mailto:" + C.email} className="flex items-center gap-3 border border-line p-4 hover:border-hv transition-colors"><Icon n="mail" /><span className="break-all">{C.email}</span></a>
          <a href={C.phoneHref} className="flex items-center gap-3 border border-line p-4 hover:border-hv transition-colors"><Icon n="ph" />{C.phone}</a>
          <a href={C.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-line p-4 hover:border-hv transition-colors"><Icon n="in" />linkedin.com/in/usama-arshad</a>
          <p className="text-sm text-dim">Sydney NSW · Full Australian work rights</p>
        </div>

        <form data-stagger className="md:col-span-3 space-y-4" onSubmit={submit} noValidate>
          <Field id="name" label="Name" error={err.name}>
            <input id="name" className={INPUT} value={f.name} onChange={set("name")} autoComplete="name" aria-invalid={!!err.name} aria-describedby={err.name ? "name-e" : undefined} />
          </Field>
          <Field id="email" label="Email" error={err.email}>
            <input id="email" type="email" className={INPUT} value={f.email} onChange={set("email")} autoComplete="email" aria-invalid={!!err.email} aria-describedby={err.email ? "email-e" : undefined} />
          </Field>
          <Field id="msg" label="Message" error={err.msg}>
            <textarea id="msg" rows="5" className={INPUT} value={f.msg} onChange={set("msg")} aria-invalid={!!err.msg} aria-describedby={err.msg ? "msg-e" : undefined} />
          </Field>
          <div>
            <Mag>
              <button type="submit" disabled={st === "sending"}
                className="inline-flex items-center gap-2 bg-hv text-ink font-semibold px-6 py-3 rounded hover:bg-white active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-[background-color,transform,opacity]">
                {st === "sending" ? (<><span className="w-4 h-4 rounded-full border-2 border-ink/30 border-t-ink animate-spin" />Preparing…</>)
                  : st === "sent" ? (<><Icon n="ck" c="w-4 h-4" />Draft opened</>)
                  : (<>Open email draft<Icon n="ar" c="w-4 h-4" /></>)}
              </button>
            </Mag>
          </div>
          {st === "sent" && (
            <p className="text-sm text-dim fade" role="status">
              Your email app should now show a draft addressed to {C.email}. If nothing opened, send it to that address directly.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
