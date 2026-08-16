import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { a as SectionMeta, c as phoneHref, w as whatsappHref, v as viberHref, t as telHref, S as SiteLayout, p as priceListHref, i as isPreparationGuide } from "./SiteLayout-8P92wQdx.js";
import { P as PageHero } from "./PageHero-Cg7Yz0UG.js";
import { P as PreparationGuide, F as FaqAccordion } from "./PreparationGuide-CtQ2uBUp.js";
import { P as PhotoGallery } from "./PhotoGallery-CMp9PdjY.js";
import { C as ClinicImage } from "./ClinicImage-Cuefd_Mz.js";
import { P as PhoneIcon } from "./PhoneIcon-Ca6ByOgu.js";
import { R as Reveal } from "./Reveal-QdFo9z57.js";
import "react";
function WhatsAppIcon({ className }) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M12.04 2.5A9.45 9.45 0 002.6 11.9c0 1.67.44 3.3 1.27 4.73L2.5 21.5l5.02-1.32a9.5 9.5 0 004.52 1.15h.01a9.46 9.46 0 000-18.83zm0 17.3h-.01a7.86 7.86 0 01-4-.1l-.29-.1-2.98.78.8-2.9-.19-.3a7.84 7.84 0 01-1.2-4.28 7.87 7.87 0 0113.44-5.57 7.86 7.86 0 01-5.57 13.47zm4.32-5.88c-.24-.12-1.4-.69-1.62-.77s-.37-.12-.53.12-.61.77-.75.93-.28.18-.52.06a6.44 6.44 0 01-1.9-1.17 7.1 7.1 0 01-1.31-1.63c-.14-.24 0-.37.1-.49s.24-.28.35-.42.16-.24.24-.4.04-.3-.02-.42-.53-1.27-.72-1.74c-.19-.46-.38-.4-.53-.4h-.45c-.16 0-.42.06-.64.3s-.84.82-.84 2 .86 2.32.98 2.48 1.69 2.58 4.1 3.62c.57.25 1.02.4 1.37.51.57.18 1.1.16 1.51.1.46-.07 1.4-.57 1.6-1.12s.2-1.02.14-1.12-.22-.18-.46-.3z" }) });
}
function ViberIcon({ className }) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M18.2 2.4H5.8A3.4 3.4 0 002.4 5.8v9.3A3.4 3.4 0 005.8 18.5h.9v2.4a.7.7 0 001.14.55l3.56-2.95h6.8a3.4 3.4 0 003.4-3.4V5.8a3.4 3.4 0 00-3.4-3.4zm-6.7 12.7c-2.3 0-4.3-1.5-4.8-3.6-.1-.4.2-.8.6-.8h.7c.3 0 .5.2.6.5.3 1.1 1.3 1.9 2.9 1.9s2.6-.8 2.9-1.9c.1-.3.3-.5.6-.5h.7c.4 0 .7.4.6.8-.5 2.1-2.5 3.6-4.8 3.6zm4.4-6.2c0 .4-.3.7-.7.7h-.8a.7.7 0 01-.7-.7V6.6c0-.4.3-.7.7-.7h.8c.4 0 .7.3.7.7zm-3.3 0c0 .4-.3.7-.7.7h-.8a.7.7 0 01-.7-.7V6.6c0-.4.3-.7.7-.7h.8c.4 0 .7.3.7.7zm-3.3 0c0 .4-.3.7-.7.7h-.8a.7.7 0 01-.7-.7V6.6c0-.4.3-.7.7-.7h.8c.4 0 .7.3.7.7z" }) });
}
function PinIcon({ className }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 20 20", className, fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("path", { d: "M10 18s6-5.1 6-9.5A6 6 0 004 8.5C4 12.9 10 18 10 18z" }),
    /* @__PURE__ */ jsx("circle", { cx: "10", cy: "8.5", r: "2.25" })
  ] });
}
function CalendarIcon({ className }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 20 20", className, fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "4.5", width: "14", height: "12.5", rx: "1.5" }),
    /* @__PURE__ */ jsx("path", { d: "M3 8.5h14M7 3v3M13 3v3" })
  ] });
}
function BookingActions({
  whatsapp,
  tone = "dark"
}) {
  const { settings } = usePage().props;
  const primary = tone === "light" ? "bg-teal-600 text-white hover:bg-teal-700" : "bg-white text-teal-900 hover:bg-teal-50";
  const secondary = tone === "light" ? "border border-ink/15 text-ink hover:border-teal-600 hover:text-teal-700" : "border border-white/25 text-white hover:border-white";
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2.5", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: whatsappHref(whatsapp),
        target: "_blank",
        rel: "noopener noreferrer",
        className: `inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] px-4 text-[0.92rem] font-semibold transition-colors ${primary}`,
        children: [
          /* @__PURE__ */ jsx(WhatsAppIcon, { className: "size-4 shrink-0" }),
          "WhatsApp"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: viberHref(whatsapp),
        className: `inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] px-4 text-[0.92rem] font-semibold transition-colors ${secondary}`,
        children: [
          /* @__PURE__ */ jsx(ViberIcon, { className: "size-4 shrink-0" }),
          "Viber"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: telHref(settings.phonePrimary),
        className: `inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] px-4 text-[0.92rem] font-semibold transition-colors col-span-2 ${secondary}`,
        children: [
          /* @__PURE__ */ jsx(PhoneIcon, { className: "size-4 shrink-0" }),
          settings.phonePrimary
        ]
      }
    )
  ] });
}
function SessionChips({ content }) {
  const items = content.sessionItems ?? [];
  if (items.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("ul", { className: "mt-5 flex flex-wrap gap-2", children: items.map((item) => /* @__PURE__ */ jsxs(
    "li",
    {
      className: "min-w-[4.5rem] border border-white/20 bg-white/5 px-3 py-2.5 text-center",
      children: [
        /* @__PURE__ */ jsx("span", { className: "block font-display text-2xl font-bold tabular-nums leading-none", children: item.day }),
        /* @__PURE__ */ jsx("span", { className: "mt-1 block text-[0.68rem] font-medium uppercase tracking-[0.12em] text-teal-200", children: item.month }),
        item.startTime && /* @__PURE__ */ jsxs("span", { className: "mt-1 block text-[0.75rem] tabular-nums text-teal-100/75", children: [
          item.startTime,
          item.endTime ? `–${item.endTime}` : ""
        ] })
      ]
    },
    item.date
  )) });
}
function WhatsAppHeroLink({ whatsapp }) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: whatsappHref(whatsapp),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[3px] border border-ink/20 px-6 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700 sm:w-auto",
      children: [
        /* @__PURE__ */ jsx(WhatsAppIcon, { className: "size-4 shrink-0" }),
        "WhatsApp"
      ]
    }
  );
}
function LymphDrainagePanel({
  content,
  intro
}) {
  const practitioner = content.practitioner;
  const paragraphs = (intro ?? "").split("\n\n").filter(Boolean);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-14 sm:space-y-16", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("section", { "aria-labelledby": "o-usluzi", children: [
      /* @__PURE__ */ jsx(SectionMeta, { index: "01", label: "O tretmanu" }),
      /* @__PURE__ */ jsx("h2", { id: "o-usluzi", className: "mt-4 font-display text-2xl font-bold tracking-[-0.015em] text-ink sm:text-3xl", children: "Šta je limfna drenaža?" }),
      paragraphs.map((paragraph) => /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft", children: paragraph }, paragraph)),
      /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl border-l-2 border-teal-600 pl-4 text-[0.92rem] leading-relaxed text-ink-soft", children: "Zakazivanje je obavezno. Tretmani se održavaju u okviru periodičnih dolazaka Gordane Kolb u Doboj." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-teal-900 p-5 text-white", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "mesh-dark pointer-events-none absolute inset-0 opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("p", { className: "meta-label text-teal-300", children: "Zakažite tretman" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-xl font-bold leading-snug", children: content.sessions ?? "Termini putem recepcije" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-[0.88rem] leading-relaxed text-teal-100/80", children: content.venue }),
        /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(BookingActions, { whatsapp: content.whatsapp }) }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: phoneHref(content.whatsapp),
            className: "mt-3 block text-center text-[0.88rem] tabular-nums text-teal-100/80",
            children: content.whatsapp
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("section", { "aria-labelledby": "indikacije", children: [
      /* @__PURE__ */ jsx(SectionMeta, { index: "02", label: "Indikacije" }),
      /* @__PURE__ */ jsx("h2", { id: "indikacije", className: "mt-4 font-display text-2xl font-bold tracking-[-0.015em] text-ink sm:text-3xl", children: content.indicationsHeading }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft", children: content.indicationsIntro }),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: content.indications.map((item, i) => /* @__PURE__ */ jsxs(
        "li",
        {
          className: "flex gap-3 border border-ink/10 bg-paper p-4 transition-colors hover:border-teal-500/40 hover:bg-teal-50/50 sm:p-5",
          children: [
            /* @__PURE__ */ jsx("span", { className: "shrink-0 font-display text-[1.05rem] font-semibold tabular-nums text-teal-600", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-display text-[1.05rem] font-semibold text-ink", children: item.title }),
              item.text && /* @__PURE__ */ jsx("p", { className: "mt-1 text-[0.88rem] leading-relaxed text-ink-soft", children: item.text })
            ] })
          ]
        },
        item.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("section", { "aria-labelledby": "gordana-kolb", children: [
      /* @__PURE__ */ jsx(SectionMeta, { index: "03", label: "Terapeutkinja" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-[0.95rem] font-medium text-teal-800", children: practitioner.kicker }),
      /* @__PURE__ */ jsx("h2", { id: "gordana-kolb", className: "mt-1 font-display text-2xl font-bold tracking-[-0.015em] text-ink sm:text-3xl", children: practitioner.name }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 overflow-hidden border border-ink/10 bg-mineral lg:grid lg:grid-cols-[minmax(200px,260px)_1fr]", children: [
        /* @__PURE__ */ jsxs("picture", { children: [
          /* @__PURE__ */ jsx("source", { type: "image/webp", srcSet: practitioner.photo }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: practitioner.photoFallback,
              alt: practitioner.name,
              width: 240,
              height: 360,
              className: "mx-auto aspect-[3/4] w-full max-w-[220px] object-cover object-top sm:max-w-[260px] lg:max-w-none lg:h-full"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center px-5 py-6 sm:px-8 sm:py-8", children: [
          /* @__PURE__ */ jsx("p", { className: "meta-label text-ink-faint", children: practitioner.role }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ink-soft", children: practitioner.bio })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("section", { "aria-labelledby": "naredni-termini-drenaze", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-teal-900 p-5 text-white sm:p-8 lg:p-10", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "mesh-dark pointer-events-none absolute inset-0 opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("p", { className: "meta-label text-teal-300", children: "Aktuelni raspored" }),
        /* @__PURE__ */ jsx("h2", { id: "naredni-termini-drenaze", className: "mt-3 font-display text-2xl font-bold tracking-[-0.015em] sm:text-3xl", children: "Naredni termini limfne drenaže" }),
        content.sessions ? /* @__PURE__ */ jsxs("p", { className: "mt-6 flex items-center gap-2.5 font-display text-[1.45rem] font-bold leading-snug tracking-[-0.02em] sm:text-3xl", children: [
          /* @__PURE__ */ jsx(CalendarIcon, { className: "size-[1.05em] shrink-0 text-teal-300" }),
          content.sessions
        ] }) : /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-lg text-[0.95rem] leading-relaxed text-teal-100/90", children: "Sljedeći termini objavljuju se putem recepcije. Pozovite nas ili pišite na WhatsApp i Viber." }),
        /* @__PURE__ */ jsx(SessionChips, { content }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 flex items-center gap-2 text-[0.95rem] text-teal-100/85", children: [
          /* @__PURE__ */ jsx(PinIcon, { className: "size-4 shrink-0 text-teal-300" }),
          content.venue
        ] })
      ] })
    ] }) }) })
  ] });
}
function LymphDrainageAside({ content }) {
  const { settings } = usePage().props;
  return /* @__PURE__ */ jsx("div", { className: "hidden space-y-4 lg:sticky lg:top-24 lg:block", children: /* @__PURE__ */ jsxs("div", { className: "border border-ink/12 bg-teal-900 p-5 text-white sm:p-6", children: [
    /* @__PURE__ */ jsx("p", { className: "meta-label text-teal-300", children: "Zakažite tretman" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-xl font-bold leading-snug", children: content.sessions ?? "Termini putem recepcije" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-[0.88rem] leading-relaxed text-teal-100/80", children: content.venue }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(BookingActions, { whatsapp: content.whatsapp }) }),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: telHref(settings.phoneSecondary),
        className: "mt-3 flex min-h-11 items-center gap-2 text-[0.92rem] font-semibold tabular-nums text-teal-100 transition-colors hover:text-white",
        children: [
          /* @__PURE__ */ jsx(PhoneIcon, { className: "size-4 shrink-0 text-teal-300" }),
          settings.phoneSecondary
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: phoneHref(content.whatsapp),
        className: "mt-2 block text-[0.82rem] tabular-nums text-teal-100/70 transition-colors hover:text-white",
        children: [
          "WhatsApp / Viber ",
          content.whatsapp
        ]
      }
    )
  ] }) });
}
function ServiceShow({ service, relatedServices, seo }) {
  const { settings } = usePage().props;
  const lymph = service.lymphDrainage;
  return /* @__PURE__ */ jsxs(SiteLayout, { seo, children: [
    /* @__PURE__ */ jsx(
      PageHero,
      {
        label: service.department?.name ?? "Usluga",
        title: lymph?.heading ?? service.name,
        intro: service.subtitle !== service.name ? service.subtitle : service.summary,
        kicker: lymph ? service.label ? `${service.label} · Fizijatrija` : "Fizijatrija" : void 0,
        image: service.hero ? null : service.image ?? "fasada",
        photo: service.hero,
        crumbs: [
          { label: "Početna", href: "/" },
          { label: "Usluge", href: "/#usluge" },
          { label: service.name }
        ],
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:flex-wrap", children: [
          /* @__PURE__ */ jsx("a", { href: telHref(settings.phonePrimary), className: "inline-flex min-h-12 w-full items-center justify-center rounded-[3px] bg-teal-600 px-6 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-teal-700 sm:w-auto", children: "Zakažite termin" }),
          lymph ? /* @__PURE__ */ jsx(WhatsAppHeroLink, { whatsapp: lymph.whatsapp }) : /* @__PURE__ */ jsx(Link, { href: "/kontakt", className: "inline-flex min-h-12 w-full items-center justify-center rounded-[3px] border border-ink/20 px-6 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700 sm:w-auto", children: "Kontaktirajte nas" }),
          /* @__PURE__ */ jsx(Link, { href: priceListHref(service.priceListHash), className: "inline-flex min-h-12 w-full items-center justify-center rounded-[3px] border border-ink/20 px-6 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700 sm:w-auto", children: "Cjenovnik" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "border-b border-ink/10 bg-mineral", children: /* @__PURE__ */ jsxs("dl", { className: "mx-auto grid max-w-[1360px] grid-cols-1 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-5 sm:px-6 lg:px-10", children: [
        /* @__PURE__ */ jsx("dt", { className: "meta-label text-ink-faint", children: lymph ? "Raspored" : "Trajanje" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 font-display font-semibold text-ink", children: lymph ? lymph.sessions ?? "Putem recepcije" : service.duration ?? "Prema vrsti pregleda" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-ink/10 px-4 py-5 sm:border-l sm:border-t-0 sm:px-6 lg:px-10", children: [
        /* @__PURE__ */ jsx("dt", { className: "meta-label text-ink-faint", children: lymph ? "Zakazivanje" : "Cijena" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 font-display font-semibold text-ink", children: lymph ? "Obavezno" : /* @__PURE__ */ jsxs(Fragment, { children: [
          service.price ?? "Informacije na upit",
          /* @__PURE__ */ jsx(Link, { href: priceListHref(service.priceListHash), className: "mt-1 block text-[0.78rem] font-medium text-teal-700 hover:text-teal-900", children: "Pogledajte u cjenovniku" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-ink/10 px-4 py-5 sm:border-l sm:border-t-0 sm:px-6 lg:px-10", children: [
        /* @__PURE__ */ jsx("dt", { className: "meta-label text-ink-faint", children: "Odjeljenje" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 font-display font-semibold text-ink", children: service.department ? /* @__PURE__ */ jsx(Link, { href: `/odjeljenja/${service.department.slug}`, className: "hover:text-teal-700", children: service.department.name }) : "—" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-14", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          lymph ? /* @__PURE__ */ jsx(LymphDrainagePanel, { content: lymph, intro: service.description }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("section", { "aria-labelledby": "o-usluzi", children: [
              /* @__PURE__ */ jsx("h2", { id: "o-usluzi", className: "font-display text-2xl font-bold text-ink", children: `Šta je ${service.name}?` }),
              (service.description ?? "").split("\n\n").map((paragraph, i) => /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl leading-relaxed text-ink-soft", children: paragraph }, i))
            ] }),
            service.benefits.length > 0 ? /* @__PURE__ */ jsxs("section", { "aria-labelledby": "prednosti", className: "mt-12", children: [
              /* @__PURE__ */ jsx("h2", { id: "prednosti", className: "font-display text-2xl font-bold text-ink", children: "Prednosti" }),
              /* @__PURE__ */ jsx("ul", { className: "mt-5 grid gap-3 sm:grid-cols-2", children: service.benefits.map((item) => /* @__PURE__ */ jsx("li", { className: "flex items-start gap-3 border-l-2 border-teal-500 bg-mineral px-4 py-3 text-[0.93rem] leading-snug text-ink", children: item }, item)) })
            ] }) : null
          ] }),
          isPreparationGuide(service.preparation) ? /* @__PURE__ */ jsx(PreparationGuide, { data: service.preparation }) : service.preparation.length > 0 ? /* @__PURE__ */ jsxs("section", { "aria-labelledby": "priprema", className: "mt-12 sm:mt-16", children: [
            lymph ? /* @__PURE__ */ jsx(SectionMeta, { index: "04", label: "Priprema" }) : null,
            /* @__PURE__ */ jsx("h2", { id: "priprema", className: `${lymph ? "mt-4" : ""} font-display text-2xl font-bold tracking-[-0.015em] text-ink ${lymph ? "sm:text-3xl" : ""}`, children: lymph ? "Priprema za tretman" : "Priprema za pregled" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-3", children: service.preparation.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-soft", children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mt-[9px] size-1.5 shrink-0 bg-teal-600" }),
              item
            ] }, item)) })
          ] }) : null,
          service.process.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "tok", className: "mt-12 sm:mt-16", children: [
            lymph ? /* @__PURE__ */ jsx(SectionMeta, { index: "05", label: "Tok tretmana" }) : null,
            /* @__PURE__ */ jsx("h2", { id: "tok", className: `${lymph ? "mt-4" : ""} font-display text-2xl font-bold tracking-[-0.015em] text-ink ${lymph ? "sm:text-3xl" : ""}`, children: lymph ? "Kako izgleda tretman" : "Tok pregleda" }),
            /* @__PURE__ */ jsx("ol", { className: "mt-5 border-l border-teal-500/40", children: service.process.map((step, i) => /* @__PURE__ */ jsxs("li", { className: "relative pb-6 pl-8 last:pb-0", children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "meta-label absolute -left-[13px] top-0 flex size-[26px] items-center justify-center border border-teal-500 bg-paper tabular-nums text-teal-700", children: i + 1 }),
              /* @__PURE__ */ jsx("p", { className: "pt-0.5 text-[0.98rem] font-medium text-ink", children: step })
            ] }, step)) })
          ] }),
          service.faq.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "faq", className: "mt-12 sm:mt-16", children: [
            lymph ? /* @__PURE__ */ jsx(SectionMeta, { index: "06", label: "Pitanja" }) : null,
            /* @__PURE__ */ jsx("h2", { id: "faq", className: `${lymph ? "mt-4 mb-5" : "mb-5"} font-display text-2xl font-bold tracking-[-0.015em] text-ink ${lymph ? "sm:text-3xl" : ""}`, children: "Česta pitanja" }),
            /* @__PURE__ */ jsx(FaqAccordion, { items: service.faq })
          ] }),
          /* @__PURE__ */ jsx(PhotoGallery, { crops: service.gallery })
        ] }),
        /* @__PURE__ */ jsx("aside", { className: `space-y-8 lg:pt-2 ${lymph ? "hidden lg:block" : ""}`, children: lymph ? /* @__PURE__ */ jsx(LymphDrainageAside, { content: lymph }) : /* @__PURE__ */ jsxs("div", { className: "border border-ink/12 bg-teal-900 p-6 text-white", children: [
          /* @__PURE__ */ jsx("h2", { className: "meta-label text-teal-300", children: "Zakažite danas" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 font-display text-xl font-bold leading-snug", children: [
            "Spremni za ",
            service.name,
            "?"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-[0.9rem] leading-relaxed text-teal-100/80", children: "Pozovite nas ili dođite lično – naš tim je tu da vam pomogne." }),
          /* @__PURE__ */ jsxs("a", { href: telHref(settings.phonePrimary), className: "mt-5 flex items-center gap-3 font-display text-2xl font-bold tabular-nums transition-colors hover:text-teal-300", children: [
            /* @__PURE__ */ jsx(PhoneIcon, { className: "size-5 shrink-0 text-teal-300" }),
            settings.phonePrimary
          ] }),
          /* @__PURE__ */ jsx(Link, { href: "/kontakt", className: "mt-4 inline-block rounded-[3px] bg-teal-600 px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-teal-700", children: "Kontaktirajte nas" })
        ] }) })
      ] }),
      relatedServices.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "povezane", className: "mt-20 border-t border-ink/12 pt-10", children: [
        /* @__PURE__ */ jsx("h2", { id: "povezane", className: "font-display text-2xl font-bold text-ink", children: "Povezane usluge" }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-3", children: relatedServices.map((related) => /* @__PURE__ */ jsxs(Link, { href: `/usluge/${related.slug}`, className: "group bg-paper transition-colors hover:bg-teal-50/60", children: [
          related.image && /* @__PURE__ */ jsx(ClinicImage, { crop: related.image, decorative: true, className: "aspect-[16/10] w-full object-cover", sizes: "(min-width: 1024px) 30vw, 100vw" }),
          /* @__PURE__ */ jsxs("span", { className: "block px-6 py-6", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-semibold text-ink group-hover:text-teal-800", children: related.name }),
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 block text-[0.88rem] leading-relaxed text-ink-soft", children: related.summary })
          ] })
        ] }, related.slug)) })
      ] })
    ] })
  ] });
}
export {
  ServiceShow as default
};
