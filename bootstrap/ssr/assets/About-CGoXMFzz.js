import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { usePage, Link } from "@inertiajs/react";
import { S as SiteLayout, t as telHref, a as SectionMeta } from "./SiteLayout-8P92wQdx.js";
import { P as PageHero } from "./PageHero-Cg7Yz0UG.js";
import { R as Reveal } from "./Reveal-QdFo9z57.js";
import { C as ClinicImage } from "./ClinicImage-Cuefd_Mz.js";
import { P as PhotoGallery } from "./PhotoGallery-CMp9PdjY.js";
const timeline = [
  { year: "2006", text: "Osnivanje Specijalističke ambulante za kompjuterizovanu tomografiju „Dr. Brkić“ u Doboju" },
  { year: "2010", text: "Proširenje dijagnostičkih usluga – uvođenje ultrazvučne dijagnostike i laboratorijskih analiza" },
  { year: "2014", text: "Osnivanje Specijalističkog centra „Dr. Brkić“ – oporavak i rast nakon velikih poplava" },
  { year: "2018", text: "Uvođenje magnetne rezonance i proširenje kapaciteta ustanove" },
  { year: "2022", text: "Modernizacija laboratorije i uvođenje novih specijalističkih pregleda" },
  { year: "2024", text: "Nastavak ulaganja u najsavremeniju medicinsku opremu i stručni kadar" },
  { year: "2026", text: "20 godina neprekidnog rada sa pacijentima iz Doboja i regije", current: true }
];
const values = [
  {
    title: "Pacijent na prvom mjestu",
    text: "Svaki pacijent zaslužuje pažnju, razumijevanje i individualan pristup. Naša misija je pružiti kvalitetnu zdravstvenu uslugu u ugodnom okruženju."
  },
  {
    title: "Pouzdanost i tačnost",
    text: "Posvećeni smo tačnoj i pravovremenoj dijagnozi koristeći najsavremeniju medicinsku opremu i provjerene metode."
  },
  {
    title: "Kontinuirano unapređenje",
    text: "Stalno ulažemo u edukaciju našeg tima, novu opremu i razvoj usluga kako bismo bili u koraku sa svjetskim standardima."
  },
  {
    title: "Timski rad",
    text: "Naš multidisciplinarni tim specijalista sarađuje kako bi pružio sveobuhvatnu zdravstvenu zaštitu na jednom mjestu."
  }
];
const reasons = [
  "Više medicinskih usluga na jednom mjestu",
  "Najsavremenija dijagnostička oprema",
  "Tim iskusnih specijalista",
  "Brzi rezultati bez dugih čekanja",
  "Individualan pristup svakom pacijentu",
  "Kontinuirano ulaganje u kvalitet"
];
const stats = [
  { value: 20, suffix: "", label: "godina sa vama" },
  { value: 6, suffix: "", label: "odjeljenja" },
  { value: 10, suffix: "+", label: "specijalista" },
  { value: 1e3, suffix: "+", label: "pacijenata godišnje" }
];
function AnimatedStat({ value, suffix, label }) {
  const [shown, setShown] = useState(value);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = value >= 100 ? 1600 : 1200;
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - t) ** 3;
          setShown(Math.round(eased * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setShown(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);
  return /* @__PURE__ */ jsxs("div", { ref, className: "rounded-xl bg-paper px-4 py-6 sm:px-6 sm:py-8 lg:px-8", children: [
    /* @__PURE__ */ jsxs("dd", { className: "font-display text-3xl font-bold tabular-nums tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl", children: [
      shown,
      suffix
    ] }),
    /* @__PURE__ */ jsx("dt", { className: "mt-1.5 text-[0.82rem] leading-snug text-ink-soft sm:mt-2 sm:text-[0.95rem]", children: label })
  ] });
}
function About({ seo }) {
  const { settings } = usePage().props;
  return /* @__PURE__ */ jsxs(SiteLayout, { seo, children: [
    /* @__PURE__ */ jsx(
      PageHero,
      {
        label: "O nama",
        kicker: "20 godina uz vas • Specijalistički centar Dr Brkić",
        title: "Zdravstvena ustanova sa tradicijom i vizijom",
        intro: "Od 2006. godine pacijentima u Doboju i regiji omogućujemo kvalitetnu, dostupnu i savremenu zdravstvenu uslugu na jednom mjestu.",
        image: "fasada",
        crumbs: [{ label: "Početna", href: "/" }, { label: "O nama" }],
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#prica",
              className: "inline-flex justify-center rounded-[3px] bg-teal-600 px-6 py-3 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-teal-700",
              children: "Naša priča"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/doktori",
              className: "inline-flex justify-center rounded-[3px] border border-ink/20 px-6 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700",
              children: "Upoznajte tim"
            }
          ),
          /* @__PURE__ */ jsxs("a", { href: telHref(settings.phonePrimary), className: "group px-1 py-2.5 text-center text-[0.9rem] text-white/75 sm:text-left", children: [
            "ili pozovite",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold tabular-nums text-white underline decoration-teal-400 decoration-2 underline-offset-4 transition-colors group-hover:text-teal-200", children: settings.phonePrimary })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("section", { "aria-label": "U brojkama", className: "border-b border-ink/10 bg-mineral", children: /* @__PURE__ */ jsx("dl", { className: "mx-auto grid max-w-[1360px] grid-cols-2 gap-3 px-4 py-6 sm:gap-4 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-10 lg:py-10", children: stats.map((stat) => /* @__PURE__ */ jsx(AnimatedStat, { ...stat }, stat.label)) }) }),
    /* @__PURE__ */ jsxs("section", { "aria-labelledby": "prica", className: "mx-auto max-w-[1360px] scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20", children: [
        /* @__PURE__ */ jsxs(Reveal, { children: [
          /* @__PURE__ */ jsx(SectionMeta, { index: "01", label: "Naša priča" }),
          /* @__PURE__ */ jsx("h2", { id: "prica", className: "mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]", children: "Od ambulante do specijalističkog centra" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4 text-[0.98rem] leading-relaxed text-ink-soft sm:text-[1.02rem]", children: [
            /* @__PURE__ */ jsx("p", { children: "Zdravstvena ustanova Dr Brkić osnovana je 2006. godine kao Specijalistička ambulanta za kompjuterizovanu tomografiju u Doboju. Osnivač, dr Jovica Brkić, specijalista radiodijagnostike, želio je pacijentima u regiji pružiti pristup savremenoj dijagnostici bez dugih čekanja." }),
            /* @__PURE__ */ jsx("p", { children: "Kroz godine, ustanova je rasla i razvijala se. Uprkos izazovima, uključujući razorne poplave 2014. godine, ustanova je pokazala izuzetnu otpornost i posvećenost – obnovljena je i proširena u Specijalistički centar „Dr. Brkić“." }),
            /* @__PURE__ */ jsx("p", { children: "Danas, sa šest odjeljenja i timom od preko deset specijalista, pružamo širok spektar dijagnostičkih i specijalističkih usluga. Kontinuirano ulažemo u najsavremeniju opremu i stručni kadar, jer vjerujemo da svaki pacijent zaslužuje najbolju moguću njegu." })
          ] }),
          /* @__PURE__ */ jsxs("blockquote", { className: "mt-8 border-l-2 border-teal-600 pl-5", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-lg font-semibold leading-snug text-ink sm:text-xl", children: "Svaki pacijent zaslužuje pristup savremenoj dijagnostici, bez dugih čekanja." }),
            /* @__PURE__ */ jsx("footer", { className: "mt-2 text-[0.88rem] text-ink-soft", children: "dr Jovica Brkić, osnivač" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxs("div", { className: "media-zoom relative rounded-xl", children: [
          /* @__PURE__ */ jsx(
            ClinicImage,
            {
              crop: "mreza",
              className: "aspect-[4/3] w-full object-cover sm:aspect-[4/5]",
              sizes: "(min-width: 1024px) 40vw, 100vw"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-950/85 to-transparent px-5 py-5 sm:px-6 sm:py-6", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-4xl font-bold tabular-nums leading-none text-white sm:text-5xl", children: "2006" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-[0.88rem] text-white/80", children: "Godina osnivanja u Doboju" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 lg:mt-24", children: [
        /* @__PURE__ */ jsxs(Reveal, { children: [
          /* @__PURE__ */ jsx(SectionMeta, { index: "02", label: "Ključni momenti" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl", children: "Naš put kroz godine" })
        ] }),
        /* @__PURE__ */ jsx("ol", { className: "relative mt-8 space-y-3 sm:mt-10 sm:space-y-4", children: timeline.map((m, i) => /* @__PURE__ */ jsx(Reveal, { as: "li", delay: i * 70, children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: `group grid gap-2 rounded-xl border p-4 transition-all duration-300 sm:grid-cols-[6.5rem_1fr] sm:items-baseline sm:gap-8 sm:p-6 ${m.current ? "border-teal-500/50 bg-teal-50/80 shadow-[0_16px_40px_-24px_rgba(13,61,54,0.35)]" : "border-ink/10 bg-paper hover:border-teal-500/35 hover:shadow-[0_16px_40px_-24px_rgba(13,61,54,0.28)]"}`,
            children: [
              /* @__PURE__ */ jsx("p", { className: `font-display text-2xl font-bold tabular-nums sm:text-3xl ${m.current ? "text-teal-700" : "text-ink"}`, children: m.year }),
              /* @__PURE__ */ jsx("p", { className: "text-[0.92rem] leading-relaxed text-ink-soft sm:text-[0.98rem]", children: m.text })
            ]
          }
        ) }, m.year)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { "aria-labelledby": "vrijednosti", className: "border-y border-ink/10 bg-mineral py-14 sm:py-16 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx(SectionMeta, { index: "03", label: "Naše vrijednosti" }),
        /* @__PURE__ */ jsx("h2", { id: "vrijednosti", className: "mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl", children: "Principi koji nas vode" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-[0.95rem] leading-relaxed text-ink-soft sm:text-lg", children: "Svakodnevni rad u ustanovi počiva na jasnim principima — od prvog kontakta do nalaza." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:gap-6", children: values.map((value, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("article", { className: "group h-full rounded-xl border border-ink/10 bg-paper p-5 transition-all duration-300 hover:border-teal-500/40 hover:shadow-[0_16px_40px_-24px_rgba(13,61,54,0.35)] sm:p-8", children: [
        /* @__PURE__ */ jsxs("h3", { className: "flex items-baseline gap-3 font-display text-xl font-bold text-ink sm:text-[1.35rem]", children: [
          /* @__PURE__ */ jsx("span", { className: "tabular-nums text-teal-600", children: String(i + 1).padStart(2, "0") }),
          value.title
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft sm:text-[0.95rem]", children: value.text })
      ] }) }, value.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { "aria-labelledby": "misija", className: "mx-auto max-w-[1360px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "grid gap-3 sm:gap-5 lg:grid-cols-2 lg:gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-xl bg-teal-900 px-5 py-8 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-14", children: [
          /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "mesh-dark pointer-events-none absolute inset-0 opacity-60" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("h2", { id: "misija", className: "font-display text-2xl font-bold sm:text-3xl", children: "Naša misija" }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-[0.98rem] leading-relaxed text-teal-50/90 sm:text-[1.05rem]", children: "Pružiti pacijentima u Doboju i regiji kvalitetnu, dostupnu i savremenu zdravstvenu uslugu na jednom mjestu. Kroz profesionalan pristup, najsavremeniju opremu i tim posvećenih stručnjaka, želimo biti prva adresa za dijagnostiku i specijalističke preglede." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-ink/10 bg-paper px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-ink sm:text-3xl", children: "Naša vizija" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-[0.98rem] leading-relaxed text-ink-soft sm:text-[1.05rem]", children: "Biti vodeća privatna zdravstvena ustanova u regionu, prepoznata po kvalitetu usluga, pouzdanosti dijagnostike i brizi za pacijente. Težimo kontinuiranom unapređenju i uvođenju novih medicinskih usluga u skladu sa svjetskim standardima." })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { className: "mt-14 sm:mt-16", delay: 80, children: /* @__PURE__ */ jsx(PhotoGallery, { crops: ["fasada", "ulaz", "mreza", "natpis"] }) }),
      /* @__PURE__ */ jsxs(Reveal, { className: "mt-14 sm:mt-16 lg:mt-20", children: [
        /* @__PURE__ */ jsx(SectionMeta, { index: "04", label: "Zašto mi" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl", children: "Zašto izabrati Dr Brkić?" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3", children: reasons.map((reason) => /* @__PURE__ */ jsxs(
          "li",
          {
            className: "flex items-start gap-3 rounded-xl border border-ink/10 bg-paper px-4 py-4 text-[0.92rem] font-medium leading-snug text-ink sm:px-5 sm:py-5 sm:text-[0.95rem]",
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  "aria-hidden": "true",
                  className: "about-dot mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white",
                  children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 12 12", className: "size-3", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: /* @__PURE__ */ jsx("path", { d: "M2 6.2l2.6 2.6L10 3.4" }) })
                }
              ),
              reason
            ]
          },
          reason
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { "aria-labelledby": "o-nama-cta", className: "bg-teal-900 text-white", children: /* @__PURE__ */ jsxs(Reveal, { className: "mx-auto flex max-w-[1360px] flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx("h2", { id: "o-nama-cta", className: "font-display text-3xl font-bold tracking-[-0.015em] sm:text-4xl", children: "Dođite da se uvjerite" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-[0.98rem] leading-relaxed text-teal-100/80 sm:text-[1.05rem]", children: "Zakazivanje je brzo — pozovite recepciju ili pošaljite upit. Tim ZU SC Dr Brkić je tu za vas." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: telHref(settings.phonePrimary),
            className: "inline-flex justify-center rounded-[3px] bg-teal-600 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-teal-700",
            children: [
              "Pozovite ",
              settings.phonePrimary
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/kontakt",
            className: "inline-flex justify-center rounded-[3px] border border-white/30 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/10",
            children: "Pošaljite upit"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  About as default
};
