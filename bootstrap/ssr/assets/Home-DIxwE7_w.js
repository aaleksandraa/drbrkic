import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { t as telHref, a as SectionMeta, S as SiteLayout } from "./SiteLayout-8P92wQdx.js";
import { usePage, Link } from "@inertiajs/react";
import { C as ClinicImage } from "./ClinicImage-Cuefd_Mz.js";
import { R as Reveal } from "./Reveal-QdFo9z57.js";
import { P as PhoneIcon$1 } from "./PhoneIcon-Ca6ByOgu.js";
import { useState, useCallback, useRef, useEffect } from "react";
import { D as DoctorPortrait, d as doctorCrop } from "./DoctorPortrait-C2LUZ1DF.js";
function PhoneIcon({ className }) {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 20 20", className, fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M3.5 3.5h3l1.5 4-2 1.5a12 12 0 005 5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5C7.6 17.6 2.4 12.4 2 5.1A1.5 1.5 0 013.5 3.5z" }) });
}
function MapPinIcon({ className }) {
  return /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 20 20", className, fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ jsx("path", { d: "M10 18s6-5.1 6-9.5A6 6 0 004 8.5C4 12.9 10 18 10 18z" }),
    /* @__PURE__ */ jsx("circle", { cx: "10", cy: "8.5", r: "2.25" })
  ] });
}
function ClockIcon({ className }) {
  return /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 20 20", className, fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ jsx("circle", { cx: "10", cy: "10", r: "7.25" }),
    /* @__PURE__ */ jsx("path", { d: "M10 5.5V10l3 2" })
  ] });
}
function SpotlightNews({ news }) {
  const article = news.find((item) => item.isFeatured) ?? news[0];
  if (!article) return null;
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href: `/novosti/${article.slug}`,
      className: "group flex w-full max-w-lg overflow-hidden rounded-xl border border-white/28 bg-teal-950/70 text-left shadow-[0_10px_28px_rgb(0_0_0/0.35)] backdrop-blur-md transition-colors hover:border-teal-300/55 hover:bg-teal-950/80",
      children: [
        /* @__PURE__ */ jsx("span", { className: "relative isolate min-h-[6.5rem] w-[6.25rem] shrink-0 overflow-hidden sm:w-[8.25rem]", children: /* @__PURE__ */ jsx(
          ClinicImage,
          {
            crop: article.image ?? "fasada",
            decorative: true,
            className: "absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.05]",
            sizes: "132px"
          }
        ) }),
        /* @__PURE__ */ jsxs("span", { className: "flex min-w-0 flex-1 flex-col justify-center px-4 py-3.5 sm:px-5", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex flex-wrap items-center gap-x-2.5 gap-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "rounded-full bg-teal-400/25 px-2 py-0.5 text-[0.7rem] font-semibold text-teal-100", children: article.category ?? "Novost" }),
            article.publishedAt && /* @__PURE__ */ jsx("span", { className: "text-[0.75rem] tabular-nums text-white/60", children: article.publishedAt })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "mt-1.5 font-display text-[1.05rem] font-semibold leading-snug text-white transition-colors group-hover:text-teal-200 sm:text-[1.12rem]", children: article.title }),
          /* @__PURE__ */ jsxs("span", { className: "mt-2 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-teal-200", children: [
            "Pročitajte",
            /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 12", className: "h-2 w-3.5 transition-transform group-hover:translate-x-0.5", fill: "none", stroke: "currentColor", strokeWidth: "1.6", children: /* @__PURE__ */ jsx("path", { d: "M0 6h14M10 2l4 4-4 4" }) })
          ] })
        ] })
      ]
    }
  );
}
function VisitsBar({ visits, phone }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 rounded-xl bg-teal-600 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-5", children: [
    /* @__PURE__ */ jsx("p", { className: "shrink-0 text-[1rem] font-semibold tracking-[-0.01em] text-white", children: "Dolasci specijalista" }),
    visits.length > 0 ? /* @__PURE__ */ jsx("ul", { className: "flex min-w-0 flex-1 items-center gap-2.5 overflow-x-auto", children: visits.slice(0, 3).map((visit) => {
      const content = /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("span", { className: "text-[0.95rem] font-semibold tabular-nums", children: [
          visit.day,
          ". ",
          visit.month.toLowerCase()
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-[1rem]", children: [
          visit.doctorName,
          visit.specialty ? ` · ${visit.specialty}` : ""
        ] }),
        visit.startTime && visit.endTime && /* @__PURE__ */ jsxs("span", { className: "text-[0.9rem] tabular-nums text-white/75", children: [
          visit.startTime,
          "–",
          visit.endTime
        ] })
      ] });
      return /* @__PURE__ */ jsx("li", { children: visit.href ? /* @__PURE__ */ jsx(
        Link,
        {
          href: visit.href,
          className: "flex shrink-0 items-center gap-3 rounded-lg bg-white/15 px-3.5 py-2 text-white transition-colors hover:bg-white/25",
          children: content
        }
      ) : /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center gap-3 rounded-lg bg-white/15 px-3.5 py-2 text-white", children: content }) }, `${visit.doctorName}-${visit.date}`);
    }) }) : /* @__PURE__ */ jsx("p", { className: "min-w-0 flex-1 text-[1rem] leading-snug text-white/85", children: "Trenutno nema najavljenih termina — nove objavljujemo u novostima." }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: telHref(phone),
        className: "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[0.95rem] font-semibold text-teal-800 transition-colors hover:bg-teal-50",
        children: [
          /* @__PURE__ */ jsx(PhoneIcon, { className: "size-4" }),
          "Zakažite"
        ]
      }
    )
  ] });
}
function QuickInfoItems({ settings }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`ZU Dr Brkić, ${settings.address}, Doboj`)}`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx("span", { className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-100", children: /* @__PURE__ */ jsx(MapPinIcon, { className: "size-4.5" }) }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "block text-[0.7rem] text-white/50", children: "Lokacija" }),
            /* @__PURE__ */ jsxs("span", { className: "block text-[0.88rem] font-medium text-white transition-colors group-hover:text-teal-200", children: [
              settings.address,
              ", Doboj"
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-100", children: /* @__PURE__ */ jsx(PhoneIcon, { className: "size-4.5" }) }),
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("span", { className: "block text-[0.7rem] text-white/50", children: "Telefon" }),
        /* @__PURE__ */ jsxs("span", { className: "block text-[0.88rem] font-medium tabular-nums", children: [
          /* @__PURE__ */ jsx("a", { href: telHref(settings.phonePrimary), className: "text-white transition-colors hover:text-teal-200", children: settings.phonePrimary }),
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "px-1.5 text-white/35", children: "·" }),
          /* @__PURE__ */ jsx("a", { href: telHref(settings.phoneSecondary), className: "text-white transition-colors hover:text-teal-200", children: settings.phoneSecondary })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-100", children: /* @__PURE__ */ jsx(ClockIcon, { className: "size-4.5" }) }),
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("span", { className: "block text-[0.7rem] text-white/50", children: "Radno vrijeme" }),
        /* @__PURE__ */ jsx("span", { className: "block text-[0.88rem] font-medium text-white", children: settings.hoursWeekdays }),
        /* @__PURE__ */ jsx("span", { className: "block text-[0.75rem] text-white/60", children: settings.hoursSaturday })
      ] })
    ] })
  ] });
}
function Hero({ visits, news }) {
  const { settings } = usePage().props;
  return /* @__PURE__ */ jsxs("section", { "aria-label": "Uvod", className: "relative isolate flex flex-col overflow-hidden bg-teal-950", children: [
    /* @__PURE__ */ jsx(
      ClinicImage,
      {
        crop: "fasada",
        priority: true,
        className: "absolute inset-0 -z-10 size-full object-cover object-center",
        sizes: "100vw"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 -z-10",
        style: {
          background: "linear-gradient(to bottom, rgb(8 33 30 / 0.22) 0%, rgb(8 33 30 / 0.28) 32%, rgb(8 33 30 / 0.55) 58%, rgb(8 33 30 / 0.84) 78%, rgb(8 33 30 / 0.96) 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full max-w-[1360px] flex-1 flex-col px-4 py-10 sm:px-6 lg:min-h-[calc(100svh-124px)] lg:px-10 lg:pb-5 lg:pt-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-auto mb-4 text-center lg:mb-16 lg:border-l-2 lg:border-teal-400/80 lg:pl-6 lg:text-left", children: [
        /* @__PURE__ */ jsxs(
          "p",
          {
            className: "hero-rise mb-3 text-[0.78rem] font-medium tracking-[0.04em] text-teal-200 [text-shadow:0_1px_12px_rgb(0_0_0/0.35)] sm:text-[0.85rem]",
            style: { "--rise-delay": "0ms" },
            children: [
              "20 godina uz vas",
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mx-2 text-white/45", children: "•" }),
              "Specijalistički centar Dr Brkić"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "h1",
          {
            className: "hero-rise font-display text-[1.9rem] font-bold leading-[1.12] tracking-[-0.02em] text-white [text-shadow:0_1px_18px_rgb(0_0_0/0.4)] sm:text-[2.45rem] lg:text-[3.05rem] lg:leading-[1.08] xl:text-[3.25rem]",
            style: { "--rise-delay": "60ms" },
            children: "Specijalistički pregledi, ultrazvuk i dijagnostika u Doboju"
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "hero-rise mt-4 max-w-none text-[0.98rem] leading-relaxed text-white/82 [text-shadow:0_1px_12px_rgb(0_0_0/0.35)] lg:mt-5 lg:text-[1.05rem]",
            style: { "--rise-delay": "120ms" },
            children: "Radiologija i ultrazvuk, laboratorijske analize, porodična medicina, medicina rada i fizijatrija, stručna zdravstvena zaštita na jednom mjestu."
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "hero-rise mt-6 flex flex-wrap items-center justify-center gap-3 lg:mt-7 lg:justify-start",
            style: { "--rise-delay": "180ms" },
            children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/kontakt",
                  className: "rounded-full bg-teal-600 px-7 py-3 text-[0.92rem] font-semibold text-white shadow-lg shadow-teal-950/25 transition-colors hover:bg-teal-700",
                  children: "Zakažite pregled"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#usluge",
                  className: "rounded-full border border-white/30 px-7 py-3 text-[0.92rem] font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/10",
                  children: "Naše usluge"
                }
              ),
              /* @__PURE__ */ jsxs("a", { href: telHref(settings.phonePrimary), className: "group px-1 py-2.5 text-[0.9rem] text-white/75", children: [
                "ili pozovite",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold tabular-nums text-white underline decoration-teal-400 decoration-2 underline-offset-4 transition-colors group-hover:text-teal-200", children: settings.phonePrimary })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "hero-rise mt-6 flex justify-center lg:mt-7 lg:justify-start",
            style: { "--rise-delay": "200ms" },
            children: /* @__PURE__ */ jsx(SpotlightNews, { news })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-rise mt-3 space-y-3 lg:mt-10", style: { "--rise-delay": "280ms" }, children: [
        /* @__PURE__ */ jsx(VisitsBar, { visits, phone: settings.phonePrimary }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 rounded-xl bg-teal-950/25 px-4 py-3.5 sm:grid-cols-3 sm:items-center sm:gap-6 lg:px-5", children: /* @__PURE__ */ jsx(QuickInfoItems, { settings }) })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#pomoc-naslov",
          "aria-label": "Skrolujte na sadržaj stranice",
          className: "hero-rise mx-auto mt-4 hidden text-white/50 transition-colors hover:text-teal-200 lg:block",
          style: { "--rise-delay": "360ms" },
          children: /* @__PURE__ */ jsxs(
            "svg",
            {
              "aria-hidden": "true",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.8",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "size-6 motion-safe:animate-bounce",
              children: [
                /* @__PURE__ */ jsx("path", { d: "M6 6.5l6 5.5 6-5.5", className: "opacity-50" }),
                /* @__PURE__ */ jsx("path", { d: "M6 12.5l6 5.5 6-5.5" })
              ]
            }
          )
        }
      )
    ] })
  ] });
}
const intents = [
  {
    title: "Trebam dijagnostiku",
    detail: "MR, CT, RTG, ultrazvuk, DEXA",
    href: "/odjeljenja/radiologija"
  },
  {
    title: "Trebam laboratorijske analize",
    detail: "Biohemijske, hematološke i hormonske analize",
    href: "/usluge/laboratorijske-analize"
  },
  {
    title: "Trebam specijalistički pregled",
    detail: "Konsultativni pregledi prema rasporedu specijalista",
    href: "/odjeljenja/specijalisticki-pregledi"
  },
  {
    title: "Imam bol ili poteškoće sa kretanjem",
    detail: "Fizijatrija i fizikalna terapija",
    href: "/odjeljenja/fizijatrija"
  },
  {
    title: "Imam otoke ili osjećaj težine u rukama ili nogama",
    detail: "Limfna drenaža, limfedem i lipoedem",
    href: "/usluge/limfna-drenaza"
  },
  {
    title: "Trebam medicinu rada ili ljekarsko uvjerenje",
    detail: "Pregledi za radnike, vozače i firme",
    href: "/odjeljenja/medicina-rada"
  },
  {
    title: "Želim sistematski pregled",
    detail: "Za pojedince i kompanije",
    href: "/usluge/sistematski-pregledi"
  }
];
function PatientIntent() {
  return /* @__PURE__ */ jsx("section", { "aria-labelledby": "pomoc-naslov", className: "bg-paper py-16 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx(SectionMeta, { index: "01", label: "Orijentacija" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsx("h2", { id: "pomoc-naslov", className: "font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]", children: "Kako vam možemo pomoći?" }),
        /* @__PURE__ */ jsx("p", { className: "max-w-sm text-[0.95rem] leading-relaxed text-ink-soft", children: "Ne morate poznavati strukturu ustanove — krenite od onoga što vam treba." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { className: "mt-10 border-t border-ink/12", children: /* @__PURE__ */ jsx("ul", { children: intents.map((intent, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      Link,
      {
        href: intent.href,
        className: "group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 border-b border-ink/12 py-5 transition-colors hover:bg-teal-50/70 sm:gap-x-8 sm:py-6 lg:grid-cols-[64px_1fr_auto_auto] lg:px-2",
        children: [
          /* @__PURE__ */ jsx("span", { className: "meta-label tabular-nums text-teal-600", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-teal-800 sm:text-xl lg:text-[1.45rem]", children: intent.title }),
          /* @__PURE__ */ jsx("span", { className: "col-start-2 mt-1 text-[0.9rem] text-ink-soft lg:col-start-3 lg:mt-0 lg:text-right", children: intent.detail }),
          /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "col-start-3 row-start-1 self-center text-teal-600 transition-transform group-hover:translate-x-1.5 lg:col-start-4",
              children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 12", className: "h-3 w-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
            }
          )
        ]
      }
    ) }, intent.href)) }) })
  ] }) });
}
function SpecialistSchedule({ visits }) {
  const { settings } = usePage().props;
  return /* @__PURE__ */ jsx("section", { "aria-labelledby": "specijalisti-naslov", className: "border-y border-ink/10 bg-mineral py-16 lg:py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxs(Reveal, { className: "grid gap-10 lg:grid-cols-[minmax(280px,0.9fr)_2fr] lg:gap-16", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(SectionMeta, { index: "02", label: "Raspored" }),
      /* @__PURE__ */ jsx("h2", { id: "specijalisti-naslov", className: "mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl", children: "Dolasci specijalista" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft", children: "Gostujući specijalisti primaju pacijente prema objavljenom rasporedu. Termin zakazujete pozivom na recepciju." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 inline-flex flex-col border-l-2 border-teal-500 pl-5", children: [
        /* @__PURE__ */ jsx("span", { className: "meta-label text-ink-faint", children: "Zakazivanje termina" }),
        /* @__PURE__ */ jsxs("a", { href: telHref(settings.phonePrimary), className: "mt-1 flex items-center gap-3 font-display text-2xl font-bold tabular-nums text-ink transition-colors hover:text-teal-700", children: [
          /* @__PURE__ */ jsx(PhoneIcon$1, { className: "size-5 shrink-0 text-teal-600" }),
          settings.phonePrimary
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { children: visits.length > 0 ? /* @__PURE__ */ jsx("ol", { className: "border-t border-ink/12", children: visits.map((visit) => /* @__PURE__ */ jsxs(
      "li",
      {
        className: "grid grid-cols-[72px_1fr] items-center gap-x-5 border-b border-ink/12 bg-paper/0 py-5 transition-colors hover:bg-paper sm:grid-cols-[88px_1.2fr_1fr_auto] sm:gap-x-8",
        children: [
          /* @__PURE__ */ jsxs("time", { dateTime: visit.date, className: "row-span-2 border-r border-ink/12 pr-5 text-center sm:row-span-1 sm:pr-8", children: [
            /* @__PURE__ */ jsx("span", { className: "block font-display text-4xl font-bold leading-none tabular-nums text-ink sm:text-[2.75rem]", children: visit.day }),
            /* @__PURE__ */ jsx("span", { className: "meta-label mt-1 block text-teal-600", children: visit.month })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            visit.href ? /* @__PURE__ */ jsx(Link, { href: visit.href, className: "font-display text-lg font-semibold text-ink transition-colors hover:text-teal-700", children: visit.doctorName }) : /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-ink", children: visit.doctorName }),
            /* @__PURE__ */ jsx("p", { className: "text-[0.9rem] text-ink-soft", children: visit.specialty })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-[0.9rem] text-ink-soft", children: [
            visit.startTime && visit.endTime && /* @__PURE__ */ jsxs("p", { className: "tabular-nums", children: [
              visit.startTime,
              " – ",
              visit.endTime
            ] }),
            visit.note && /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-crimson/90", children: visit.note })
          ] }),
          visit.href ? /* @__PURE__ */ jsx(
            Link,
            {
              href: visit.href,
              className: "col-span-2 mt-2 text-[0.9rem] font-semibold text-teal-700 transition-colors hover:text-teal-900 sm:col-span-1 sm:mt-0",
              children: "Detalji dolaska →"
            }
          ) : /* @__PURE__ */ jsx(
            "a",
            {
              href: telHref(settings.phonePrimary),
              className: "col-span-2 mt-2 text-[0.9rem] font-semibold text-teal-700 transition-colors hover:text-teal-900 sm:col-span-1 sm:mt-0",
              children: "Zakažite termin →"
            }
          )
        ]
      },
      `${visit.doctorName}-${visit.date}`
    )) }) : /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col justify-center border border-ink/12 bg-paper px-6 py-10 sm:px-10", children: [
      /* @__PURE__ */ jsx("p", { className: "meta-label text-ink-faint", children: "Trenutno stanje" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md font-display text-xl font-semibold leading-snug text-ink", children: "Trenutno nema najavljenih termina gostujućih specijalista." }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft", children: "Novi termini objavljuju se u novostima, a informacije možete dobiti i pozivom na recepciju." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: telHref(settings.phonePrimary),
            className: "rounded-[3px] bg-teal-600 px-5 py-3 text-[0.9rem] font-semibold text-white transition-colors hover:bg-teal-700",
            children: "Pozovite recepciju"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/novosti",
            className: "rounded-[3px] border border-ink/20 px-5 py-3 text-[0.9rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700",
            children: "Pratite novosti"
          }
        )
      ] })
    ] }) })
  ] }) }) });
}
function DepartmentIndex({ departments }) {
  return /* @__PURE__ */ jsx("section", { id: "odjeljenja", "aria-labelledby": "odjeljenja-naslov", className: "bg-paper py-16 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx(SectionMeta, { index: "03", label: "Struktura ustanove" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsx("h2", { id: "odjeljenja-naslov", className: "font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]", children: "Odjeljenja" }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-[0.95rem] leading-relaxed text-ink-soft", children: "Kroz jasno organizovana odjeljenja pacijentima omogućavamo brži put do dijagnoze, pregleda i terapijskog plana." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { className: "mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3", children: departments.map((department, i) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "group relative flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/35 hover:shadow-[0_18px_40px_-24px_rgba(13,61,54,0.45)]",
        children: [
          department.image && /* @__PURE__ */ jsx("div", { className: "overflow-hidden p-2.5 pb-0", children: /* @__PURE__ */ jsx(
            ClinicImage,
            {
              crop: department.image,
              decorative: true,
              className: "aspect-[16/10] w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-[1.04]",
              sizes: "(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6", children: [
            /* @__PURE__ */ jsxs("h3", { className: "flex items-baseline gap-3 font-display text-[1.28rem] font-bold leading-tight text-ink", children: [
              /* @__PURE__ */ jsx("span", { className: "shrink-0 font-mono text-[0.78rem] font-semibold tabular-nums tracking-[0.12em] text-teal-600", children: String(i + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: `/odjeljenja/${department.slug}`,
                  className: "transition-colors after:absolute after:inset-0 group-hover:text-teal-800",
                  children: department.name
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-[0.92rem] leading-relaxed text-ink-soft", children: department.shortDescription }),
            department.services.length > 0 && /* @__PURE__ */ jsx("ul", { className: "relative z-10 mt-4 flex flex-wrap gap-1.5", children: department.services.slice(0, 4).map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                href: `/usluge/${service.slug}`,
                className: "inline-block rounded-md border border-teal-600/20 bg-teal-50 px-2.5 py-1 text-[0.78rem] font-medium leading-none text-teal-800 transition-colors hover:border-teal-600/45 hover:bg-teal-100",
                children: service.name
              }
            ) }, service.slug)) }),
            /* @__PURE__ */ jsxs("span", { className: "meta-label mt-auto flex items-center gap-2 pt-5 text-teal-700", children: [
              "Saznajte više",
              /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 12", className: "h-2.5 w-5 transition-transform group-hover:translate-x-1", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
            ] })
          ] })
        ]
      },
      department.slug
    )) })
  ] }) });
}
function ServiceIndex({ services }) {
  return /* @__PURE__ */ jsx("section", { id: "usluge", "aria-labelledby": "usluge-naslov", className: "mesh-light border-y border-ink/10 bg-mineral py-16 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx(SectionMeta, { index: "04", label: "Medicinski indeks" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsx("h2", { id: "usluge-naslov", className: "font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]", children: "Najtraženije usluge" }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-[0.95rem] leading-relaxed text-ink-soft", children: "Pronađite uslugu koja vam je potrebna — brzo, pouzdano i na jednom mjestu." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { className: "mt-10 border-t border-ink/12", children: /* @__PURE__ */ jsx("ol", { children: services.map((service, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      Link,
      {
        href: `/usluge/${service.slug}`,
        className: "group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 border-b border-ink/12 bg-transparent py-4 transition-colors hover:bg-paper sm:gap-x-8 sm:py-5 lg:grid-cols-[64px_1fr_minmax(0,1.1fr)_150px_auto] lg:px-2",
        children: [
          /* @__PURE__ */ jsx("span", { className: "meta-label tabular-nums text-ink-faint transition-colors group-hover:text-teal-600", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-[1.15rem] font-semibold leading-snug text-ink transition-colors group-hover:text-teal-800 sm:text-[1.35rem]", children: service.name }),
          /* @__PURE__ */ jsx("p", { className: "col-start-2 mt-1 hidden text-[0.88rem] leading-relaxed text-ink-soft md:block lg:col-start-3 lg:mt-0", children: service.summary }),
          /* @__PURE__ */ jsx("span", { className: "meta-label col-start-2 mt-1 text-ink-faint lg:col-start-4 lg:mt-0", children: service.department?.name }),
          /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": "true",
              className: "col-start-3 row-start-1 self-center justify-self-end text-teal-600 transition-transform group-hover:translate-x-1.5 lg:col-start-5",
              children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 12", className: "h-3 w-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
            }
          )
        ]
      }
    ) }, service.slug)) }) }),
    /* @__PURE__ */ jsxs(Reveal, { className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-3", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          href: "/cjenovnik",
          className: "rounded-[3px] border border-ink/20 px-6 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700",
          children: "Pogledajte kompletan cjenovnik"
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "text-[0.9rem] text-ink-soft", children: [
        "Kompletna ponuda dostupna je i kroz meni ",
        /* @__PURE__ */ jsx("span", { className: "font-medium text-ink", children: "Usluge" }),
        "."
      ] })
    ] })
  ] }) });
}
const milestones = [
  { year: "2006", text: "Osnivanje Specijalističke ambulante za kompjuterizovanu tomografiju „Dr. Brkić“ u Doboju" },
  { year: "2010", text: "Uvođenje ultrazvučne dijagnostike i laboratorijskih analiza" },
  { year: "2014", text: "Osnivanje Specijalističkog centra „Dr. Brkić“ — oporavak i rast nakon velikih poplava" },
  { year: "2018", text: "Uvođenje magnetne rezonance i proširenje kapaciteta ustanove" },
  { year: "2022", text: "Modernizacija laboratorije i uvođenje novih specijalističkih pregleda" },
  { year: "2024", text: "Nastavak ulaganja u najsavremeniju medicinsku opremu i stručni kadar" }
];
function AnniversaryCount({ onArm }) {
  const [value, setValue] = useState(20);
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
        onArm();
        const start = performance.now();
        const duration = 1600;
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - t) ** 3;
          setValue(Math.round(eased * 20));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setValue(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [onArm]);
  return /* @__PURE__ */ jsx(
    "span",
    {
      ref,
      className: "anniversary-num block select-none font-display text-[11rem] font-bold leading-[0.78] tracking-[-0.04em] text-transparent sm:text-[15.5rem] lg:text-[19rem]",
      style: { WebkitTextStroke: "2px rgba(35,188,166,0.82)" },
      children: value
    }
  );
}
function AnniversaryStory() {
  const [armed, setArmed] = useState(false);
  const onArm = useCallback(() => setArmed(true), []);
  return /* @__PURE__ */ jsxs("section", { "aria-labelledby": "dvadeset-naslov", className: "relative isolate overflow-hidden bg-teal-950 py-20 text-teal-100/90 lg:py-28", children: [
    /* @__PURE__ */ jsx(
      ClinicImage,
      {
        crop: "fasada",
        decorative: true,
        className: "absolute inset-0 -z-10 size-full object-cover object-center",
        sizes: "100vw"
      }
    ),
    /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute inset-0 -z-10 bg-teal-950/72" }),
    /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "mesh-dark absolute inset-0 -z-10" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "absolute inset-0 -z-10 bg-gradient-to-r from-teal-950/88 via-teal-950/55 to-teal-950/30"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(SectionMeta, { index: "05", label: "Kontinuitet", tone: "light" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Reveal, { children: [
            /* @__PURE__ */ jsxs("h2", { id: "dvadeset-naslov", className: "font-display leading-none", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "20 godina sa vama" }),
              /* @__PURE__ */ jsxs("span", { "aria-hidden": "true", className: `block ${armed ? "anniversary-armed" : ""}`, children: [
                /* @__PURE__ */ jsxs("span", { className: "relative block w-fit", children: [
                  /* @__PURE__ */ jsx(AnniversaryCount, { onArm }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "anniversary-script",
                      style: { "--rise-delay": "280ms" },
                      children: "godina"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "anniversary-line mt-6 block text-3xl font-bold tracking-[-0.015em] text-white sm:mt-8 sm:text-4xl lg:text-[2.75rem]",
                    style: { "--rise-delay": "420ms" },
                    children: "sa vama"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "anniversary-line meta-label mt-6 text-teal-400",
                style: { "--rise-delay": "460ms" },
                children: "2006 — 2026 · Doboj"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(Reveal, { delay: 100, children: [
            /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-lg text-[1.02rem] leading-relaxed", children: "Dvije decenije povjerenja, razvoja i kontinuiranog ulaganja u savremenu zdravstvenu uslugu." }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-lg text-[0.95rem] leading-relaxed text-teal-100/70", children: "Zdravstvena ustanova Dr Brkić razvija svoju medicinsku priču od 2006. godine, sa jasnom misijom da pacijentima u Doboju i regiji omogući kvalitetnu, dostupnu i savremenu zdravstvenu uslugu na jednom mjestu." }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "/o-nama",
                className: "meta-label mt-8 inline-flex items-center gap-3 border-b border-teal-500/60 pb-1 text-teal-300 transition-colors hover:border-teal-300 hover:text-white",
                children: [
                  "Pročitajte našu priču",
                  /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 12", className: "h-2.5 w-5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxs("ol", { className: "relative border-l border-teal-500/30 pl-8", children: [
          milestones.map((m) => /* @__PURE__ */ jsxs("li", { className: "relative pb-8 last:pb-0", children: [
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "absolute -left-[37px] top-[7px] size-2 bg-teal-600" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl font-bold tabular-nums text-white", children: m.year }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 max-w-md text-[0.92rem] leading-relaxed text-teal-100/70", children: m.text })
          ] }, m.year)),
          /* @__PURE__ */ jsxs("li", { className: "relative", children: [
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "absolute -left-[39px] top-[7px] size-2.5 bg-crimson" }),
            /* @__PURE__ */ jsx("p", { className: "font-display text-xl font-bold tabular-nums text-teal-300", children: "2026" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 max-w-md text-[0.92rem] leading-relaxed text-teal-100/70", children: "20 godina neprekidnog rada sa pacijentima iz Doboja i regije" })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function DoctorsEditorial({ doctors }) {
  return /* @__PURE__ */ jsx("section", { "aria-labelledby": "tim-naslov", className: "bg-paper py-16 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx(SectionMeta, { index: "06", label: "Ljudi" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsx("h2", { id: "tim-naslov", className: "font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]", children: "Naš stručni tim" }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/doktori",
            className: "meta-label flex items-center gap-2 text-teal-700 transition-colors hover:text-teal-900",
            children: [
              "Pogledajte sve doktore",
              /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 12", className: "h-2.5 w-5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { className: "mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3", children: doctors.map((doctor) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "group relative flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/35 hover:shadow-[0_18px_40px_-24px_rgba(13,61,54,0.45)]",
        children: [
          /* @__PURE__ */ jsx(Link, { href: `/doktori/${doctor.slug}`, className: "absolute inset-0 z-[1]", "aria-label": doctor.name }),
          /* @__PURE__ */ jsxs("div", { className: "relative p-2.5 pb-0", children: [
            /* @__PURE__ */ jsx(
              DoctorPortrait,
              {
                name: doctor.name,
                photo: doctor.photo,
                crop: doctorCrop(doctor.slug),
                className: "aspect-[4/5] rounded-lg",
                sizes: "(min-width: 1024px) 33vw, 100vw"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-2.5 bottom-0 rounded-lg bg-gradient-to-t from-teal-950/90 via-teal-950/25 to-transparent" }),
            /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-x-2.5 bottom-0 p-5", children: [
              doctor.department && /* @__PURE__ */ jsx("p", { className: "meta-label text-teal-300", children: doctor.department.name }),
              /* @__PURE__ */ jsx("h3", { className: "mt-1.5 font-display text-[1.4rem] font-bold leading-tight text-white group-hover:text-teal-100", children: doctor.name }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-[0.9rem] text-white/75", children: doctor.title })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6", children: [
            doctor.experience && /* @__PURE__ */ jsx("span", { className: "meta-label text-ink-faint", children: doctor.experience }),
            doctor.services.length > 0 && /* @__PURE__ */ jsx("ul", { className: "relative z-10 mt-4 flex flex-wrap gap-1.5", children: doctor.services.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                href: `/usluge/${service.slug}`,
                className: "inline-block rounded-md border border-teal-600/20 bg-teal-50 px-2.5 py-1 text-[0.78rem] font-medium leading-none text-teal-800 transition-colors hover:border-teal-600/45 hover:bg-teal-100",
                children: service.name
              }
            ) }, service.slug)) }),
            /* @__PURE__ */ jsxs("span", { className: "meta-label mt-auto flex items-center gap-2 pt-5 text-teal-700", children: [
              "Pogledajte profil",
              /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 12", className: "h-2.5 w-5 transition-transform group-hover:translate-x-1", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
            ] })
          ] })
        ]
      },
      doctor.slug
    )) })
  ] }) });
}
const reasons = [
  {
    title: "Iskustvo i povjerenje",
    text: "Dvije decenije kontinuiranog rada i razvoja u službi zdravlja pacijenata."
  },
  {
    title: "Savremena oprema",
    text: "Napredna dijagnostička oprema za precizne i pouzdane rezultate."
  },
  {
    title: "Sve na jednom mjestu",
    text: "Dijagnostika, pregledi i terapija objedinjeni u jednom centru."
  },
  {
    title: "Stručan tim",
    text: "Iskusni doktori i saradnici iz više oblasti medicine."
  },
  {
    title: "Elektronska arhiva",
    text: "Praćenje nalaza i kontinuitet zdravstvene brige za svakog pacijenta."
  },
  {
    title: "Posvećenost pacijentu",
    text: "Pristup koji spaja dijagnostiku, pregled i praćenje zdravlja."
  }
];
function WhyUs() {
  return /* @__PURE__ */ jsx("section", { "aria-labelledby": "zasto-naslov", className: "border-y border-ink/10 bg-mineral py-16 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "meta-label text-teal-700", children: "Naše prednosti" }),
      /* @__PURE__ */ jsx("h2", { id: "zasto-naslov", className: "mt-4 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl", children: "Zašto pacijenti biraju ZU SC Dr Brkić" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-[0.95rem] leading-relaxed text-ink-soft sm:text-lg", children: "Kombinacija iskustva, savremene opreme i posvećenog tima čini nas pouzdanim partnerom za vaše zdravlje." })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { className: "mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8", delay: 100, children: reasons.map((reason, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group rounded-xl border border-ink/10 bg-paper p-4 transition-all duration-300 hover:border-teal-500/40 hover:shadow-[0_16px_40px_-24px_rgba(13,61,54,0.35)] sm:rounded-2xl sm:p-8",
        children: [
          /* @__PURE__ */ jsxs("h3", { className: "flex items-baseline gap-2 font-display text-[0.95rem] font-semibold text-ink sm:gap-3 sm:text-xl", children: [
            /* @__PURE__ */ jsx("span", { className: "tabular-nums text-teal-600", children: String(i + 1).padStart(2, "0") }),
            reason.title
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-[0.8rem] leading-relaxed text-ink-soft sm:mt-2.5 sm:text-[0.95rem]", children: reason.text })
        ]
      },
      reason.title
    )) })
  ] }) });
}
function NewsEditorial({ news }) {
  if (news.length === 0) return null;
  const [lead, ...rest] = news;
  return /* @__PURE__ */ jsx("section", { "aria-labelledby": "novosti-naslov", className: "bg-paper py-16 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx(SectionMeta, { index: "08", label: "Aktuelno" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsx("h2", { id: "novosti-naslov", className: "font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]", children: "Novosti i obavještenja" }),
        /* @__PURE__ */ jsxs(Link, { href: "/novosti", className: "meta-label flex items-center gap-2 text-teal-700 transition-colors hover:text-teal-900", children: [
          "Sve novosti",
          /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 12", className: "h-2.5 w-5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Reveal, { className: "mt-10 grid gap-10 border-t border-ink/12 pt-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16", children: [
      /* @__PURE__ */ jsxs("article", { className: "group relative", children: [
        lead.image && /* @__PURE__ */ jsx(
          ClinicImage,
          {
            crop: lead.image,
            decorative: true,
            className: "mb-6 aspect-[16/9] w-full object-cover",
            sizes: "(min-width: 1024px) 55vw, 100vw"
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "meta-label flex items-center gap-3 text-ink-faint", children: [
          lead.publishedAtIso && /* @__PURE__ */ jsx("time", { dateTime: lead.publishedAtIso, children: lead.publishedAt }),
          lead.category && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "h-3 w-px bg-ink/15" }),
            /* @__PURE__ */ jsx("span", { className: "text-teal-700", children: lead.category })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 max-w-xl font-display text-2xl font-bold leading-tight text-ink transition-colors group-hover:text-teal-800 sm:text-3xl lg:text-[2.35rem]", children: /* @__PURE__ */ jsx(Link, { href: `/novosti/${lead.slug}`, className: "after:absolute after:inset-0", children: lead.title }) }),
        lead.excerpt && /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ink-soft", children: lead.excerpt }),
        /* @__PURE__ */ jsxs("span", { className: "meta-label mt-6 flex items-center gap-2 text-teal-700", children: [
          "Pročitajte više",
          /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 12", className: "h-2.5 w-5 transition-transform group-hover:translate-x-1", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-between gap-8 lg:border-l lg:border-ink/12 lg:pl-16", children: rest.map((article) => /* @__PURE__ */ jsxs("article", { className: "group relative border-t border-ink/12 pt-6 first:border-t-0 first:pt-0 lg:first:border-t-0", children: [
        /* @__PURE__ */ jsxs("p", { className: "meta-label flex items-center gap-3 text-ink-faint", children: [
          article.publishedAtIso && /* @__PURE__ */ jsx("time", { dateTime: article.publishedAtIso, children: article.publishedAt }),
          article.category && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "h-3 w-px bg-ink/15" }),
            /* @__PURE__ */ jsx("span", { className: "text-teal-700", children: article.category })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-teal-800 sm:text-xl", children: /* @__PURE__ */ jsx(Link, { href: `/novosti/${article.slug}`, className: "after:absolute after:inset-0", children: article.title }) }),
        article.excerpt && /* @__PURE__ */ jsx("p", { className: "mt-2 text-[0.9rem] leading-relaxed text-ink-soft", children: article.excerpt })
      ] }, article.slug)) })
    ] })
  ] }) });
}
function ConversionCta() {
  const { settings } = usePage().props;
  return /* @__PURE__ */ jsx("section", { "aria-labelledby": "cta-naslov", className: "bg-teal-900 text-white", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxs(Reveal, { className: "grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-20", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { id: "cta-naslov", className: "font-display text-3xl font-bold tracking-[-0.015em] sm:text-4xl", children: "Vaše zdravlje ne treba čekati" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-md text-[1rem] leading-relaxed text-teal-100/80", children: "Zakažite pregled brzo i jednostavno. Naš tim je tu za vas." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 lg:items-end", children: [
      /* @__PURE__ */ jsxs("a", { href: telHref(settings.phonePrimary), className: "group", children: [
        /* @__PURE__ */ jsx("span", { className: "meta-label block text-teal-300", children: "Pozovite nas" }),
        /* @__PURE__ */ jsxs("span", { className: "mt-1 flex items-center gap-3 font-display text-3xl font-bold tabular-nums transition-colors group-hover:text-teal-300 sm:text-4xl", children: [
          /* @__PURE__ */ jsx(PhoneIcon$1, { className: "size-6 shrink-0 text-teal-300 sm:size-7" }),
          settings.phonePrimary
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/kontakt",
            className: "rounded-[3px] bg-teal-600 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-teal-700",
            children: "Pošaljite upit"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: telHref(settings.phoneSecondary),
            className: "rounded-[3px] border border-white/25 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:border-white/60",
            children: settings.phoneSecondary
          }
        )
      ] })
    ] })
  ] }) }) });
}
const arrival = [
  "Besplatan parking ispred ustanove",
  "5 minuta od centra Doboja",
  "Pristupačno za osobe sa invaliditetom"
];
function LocationPreview() {
  const { settings } = usePage().props;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`ZU SC Dr Brkić, ${settings.address}, Doboj`)}`;
  return /* @__PURE__ */ jsx("section", { "aria-labelledby": "lokacija-naslov", className: "plan-grid bg-paper py-16 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx(SectionMeta, { index: "09", label: "Lokacija i kontakt" }),
      /* @__PURE__ */ jsx("h2", { id: "lokacija-naslov", className: "mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl", children: "Kako do nas" })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { className: "mt-10 overflow-hidden border border-ink/12", children: /* @__PURE__ */ jsx(ClinicImage, { crop: "fasada", className: "aspect-[21/9] w-full object-cover", sizes: "100vw" }) }),
    /* @__PURE__ */ jsxs(Reveal, { className: "mt-0 grid border border-t-0 border-ink/12 bg-paper md:grid-cols-2 xl:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "border-b border-ink/12 px-6 py-7 md:border-r xl:border-b-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "meta-label text-ink-faint", children: "Adresa" }),
        /* @__PURE__ */ jsxs("address", { className: "mt-3 text-[1.02rem] font-medium not-italic leading-relaxed text-ink", children: [
          settings.address,
          /* @__PURE__ */ jsx("br", {}),
          settings.city
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: mapsUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "meta-label mt-4 inline-flex items-center gap-2 text-teal-700 transition-colors hover:text-teal-900",
            children: [
              "Prikažite na mapi",
              /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 12", className: "h-2.5 w-5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-b border-ink/12 px-6 py-7 xl:border-b-0 xl:border-r", children: [
        /* @__PURE__ */ jsx("h3", { className: "meta-label text-ink-faint", children: "Telefoni" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 space-y-1", children: [
          /* @__PURE__ */ jsx("a", { href: telHref(settings.phonePrimary), className: "block text-[1.02rem] font-medium tabular-nums text-ink transition-colors hover:text-teal-700", children: settings.phonePrimary }),
          /* @__PURE__ */ jsx("a", { href: telHref(settings.phoneSecondary), className: "block text-[1.02rem] font-medium tabular-nums text-ink transition-colors hover:text-teal-700", children: settings.phoneSecondary })
        ] }),
        /* @__PURE__ */ jsx("a", { href: `mailto:${settings.email}`, className: "mt-3 block text-[0.9rem] text-ink-soft transition-colors hover:text-teal-700", children: settings.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-b border-ink/12 px-6 py-7 md:border-b-0 md:border-r", children: [
        /* @__PURE__ */ jsx("h3", { className: "meta-label text-ink-faint", children: "Radno vrijeme" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-[1.02rem] font-medium leading-relaxed text-ink", children: settings.hoursWeekdays }),
        /* @__PURE__ */ jsx("p", { className: "text-[1.02rem] font-medium leading-relaxed text-ink", children: settings.hoursSaturday })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-6 py-7", children: [
        /* @__PURE__ */ jsx("h3", { className: "meta-label text-ink-faint", children: "Dolazak" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2", children: arrival.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-[0.92rem] leading-snug text-ink-soft", children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mt-[7px] size-1.5 shrink-0 bg-teal-600" }),
          item
        ] }, item)) }),
        /* @__PURE__ */ jsxs(Link, { href: "/kontakt", className: "meta-label mt-4 inline-flex items-center gap-2 text-teal-700 transition-colors hover:text-teal-900", children: [
          "Kontakt stranica",
          /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 12", className: "h-2.5 w-5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
        ] })
      ] })
    ] })
  ] }) });
}
function Home({ departments, services, doctors, news, specialistVisits, seo }) {
  return /* @__PURE__ */ jsxs(SiteLayout, { seo, children: [
    /* @__PURE__ */ jsx(Hero, { visits: specialistVisits, news }),
    /* @__PURE__ */ jsx(PatientIntent, {}),
    /* @__PURE__ */ jsx(SpecialistSchedule, { visits: specialistVisits }),
    /* @__PURE__ */ jsx(DepartmentIndex, { departments }),
    /* @__PURE__ */ jsx(ServiceIndex, { services }),
    /* @__PURE__ */ jsx(AnniversaryStory, {}),
    /* @__PURE__ */ jsx(DoctorsEditorial, { doctors }),
    /* @__PURE__ */ jsx(WhyUs, {}),
    /* @__PURE__ */ jsx(NewsEditorial, { news }),
    /* @__PURE__ */ jsx(ConversionCta, {}),
    /* @__PURE__ */ jsx(LocationPreview, {})
  ] });
}
export {
  Home as default
};
