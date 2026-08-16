import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { S as SiteLayout, t as telHref, p as priceListHref } from "./SiteLayout-8P92wQdx.js";
import { P as PageHero } from "./PageHero-Cg7Yz0UG.js";
import { P as PreparationGuide, F as FaqAccordion } from "./PreparationGuide-CtQ2uBUp.js";
import { P as PhotoGallery } from "./PhotoGallery-CMp9PdjY.js";
import { C as ClinicImage } from "./ClinicImage-Cuefd_Mz.js";
import { P as PhoneIcon } from "./PhoneIcon-Ca6ByOgu.js";
import "react";
function DepartmentShow({ department, otherDepartments, seo }) {
  const { settings } = usePage().props;
  return /* @__PURE__ */ jsxs(SiteLayout, { seo, children: [
    /* @__PURE__ */ jsx(
      PageHero,
      {
        label: "Odjeljenje",
        title: department.pageTitle ?? department.name,
        intro: department.shortDescription,
        image: department.image ?? "fasada",
        crumbs: [
          { label: "Početna", href: "/" },
          { label: "Odjeljenja", href: "/#odjeljenja" },
          { label: department.name }
        ],
        children: /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: telHref(settings.phonePrimary), className: "rounded-[3px] bg-teal-600 px-6 py-3 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-teal-700", children: "Zakažite pregled" }),
          /* @__PURE__ */ jsx(Link, { href: "/kontakt", className: "rounded-[3px] border border-ink/20 px-6 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700", children: "Kontaktirajte nas" }),
          /* @__PURE__ */ jsx(Link, { href: priceListHref(department.slug), className: "rounded-[3px] border border-ink/20 px-6 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700", children: "Cjenovnik" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 py-14 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-14 lg:grid-cols-[2fr_1fr]", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("section", { "aria-labelledby": "o-odjeljenju", children: [
            /* @__PURE__ */ jsx("h2", { id: "o-odjeljenju", className: "font-display text-2xl font-bold text-ink", children: "O odjeljenju" }),
            (department.description ?? "").split("\n\n").map((paragraph, i) => /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl leading-relaxed text-ink-soft", children: paragraph }, i))
          ] }),
          department.equipment.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "oprema", className: "mt-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "oprema", className: "font-display text-2xl font-bold text-ink", children: "Oprema" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-5 grid gap-3 sm:grid-cols-2", children: department.equipment.map((item) => /* @__PURE__ */ jsx("li", { className: "flex items-start gap-3 border-l-2 border-teal-500 bg-mineral px-4 py-3 text-[0.93rem] leading-snug text-ink", children: item }, item)) })
          ] }),
          department.consultants && department.consultants.roster.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "specijalisti", className: "mt-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "specijalisti", className: "font-display text-2xl font-bold text-ink", children: "Specijalisti" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft", children: "Konsultativne preglede obavljaju specijalisti iz navedenih oblasti. Termini se objavljuju prema rasporedu dolazaka, a zakazivanje je obavezno preko recepcije." }),
            /* @__PURE__ */ jsx("ol", { className: "mt-6 border-t border-ink/12", children: department.consultants.roster.map((consultant, i) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "grid grid-cols-[auto_1fr] items-baseline gap-x-5 border-b border-ink/12 py-4",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "meta-label tabular-nums text-teal-600", children: String(i + 1).padStart(2, "0") }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "font-display text-[1.08rem] font-semibold text-ink", children: consultant.name }),
                    /* @__PURE__ */ jsx("span", { className: "mt-0.5 block text-[0.9rem] text-ink-soft", children: consultant.title }),
                    consultant.focus && /* @__PURE__ */ jsx("span", { className: "mt-1 inline-block text-[0.78rem] font-medium uppercase tracking-[0.08em] text-teal-700", children: consultant.focus })
                  ] })
                ]
              },
              `${consultant.name}-${consultant.title}`
            )) })
          ] }),
          department.upcomingVisits?.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "naredni-termini", className: "mt-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "naredni-termini", className: "font-display text-2xl font-bold text-ink", children: "Naredni termini" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft", children: "Aktuelni dolasci specijalista. Termin potvrdite pozivom recepcije." }),
            /* @__PURE__ */ jsx("ol", { className: "mt-6 border-t border-ink/12", children: department.upcomingVisits.map((visit) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "grid grid-cols-[72px_1fr] items-center gap-x-5 border-b border-ink/12 py-4 sm:grid-cols-[88px_1fr_auto]",
                children: [
                  /* @__PURE__ */ jsxs("time", { dateTime: visit.date, className: "border-r border-ink/12 pr-5 text-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "block font-display text-3xl font-bold leading-none tabular-nums text-ink", children: visit.day }),
                    /* @__PURE__ */ jsx("span", { className: "meta-label mt-1 block text-teal-600", children: visit.month })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    visit.href ? /* @__PURE__ */ jsx(Link, { href: visit.href, className: "font-display text-[1.05rem] font-semibold text-ink transition-colors hover:text-teal-800", children: visit.doctorName }) : /* @__PURE__ */ jsx("span", { className: "font-display text-[1.05rem] font-semibold text-ink", children: visit.doctorName }),
                    /* @__PURE__ */ jsx("span", { className: "mt-0.5 block text-[0.88rem] text-ink-soft", children: visit.specialty }),
                    visit.startTime && visit.endTime && /* @__PURE__ */ jsxs("span", { className: "mt-0.5 block text-[0.88rem] tabular-nums text-ink-soft", children: [
                      visit.startTime,
                      " – ",
                      visit.endTime
                    ] }),
                    visit.note && /* @__PURE__ */ jsx("span", { className: "mt-0.5 block text-[0.85rem] text-crimson/90", children: visit.note })
                  ] }),
                  visit.href ? /* @__PURE__ */ jsx(Link, { href: visit.href, className: "col-span-2 mt-2 text-[0.9rem] font-semibold text-teal-700 hover:text-teal-900 sm:col-span-1 sm:mt-0", children: "Detalji dolaska →" }) : /* @__PURE__ */ jsx("a", { href: telHref(settings.phonePrimary), className: "col-span-2 mt-2 text-[0.9rem] font-semibold text-teal-700 hover:text-teal-900 sm:col-span-1 sm:mt-0", children: "Zakažite termin →" })
                ]
              },
              `${visit.doctorName}-${visit.date}`
            )) })
          ] }),
          department.services.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "usluge-odjeljenja", className: "mt-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "usluge-odjeljenja", className: "font-display text-2xl font-bold text-ink", children: "Usluge odjeljenja" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-5 border-t border-ink/12", children: department.services.map((service, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: `/usluge/${service.slug}`, className: "group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 border-b border-ink/12 py-4 transition-colors hover:bg-teal-50/60", children: [
              /* @__PURE__ */ jsx("span", { className: "meta-label tabular-nums text-teal-600", children: String(i + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-display text-[1.08rem] font-semibold text-ink group-hover:text-teal-800", children: service.name }),
                service.summary && /* @__PURE__ */ jsx("span", { className: "mt-0.5 block text-[0.88rem] text-ink-soft", children: service.summary })
              ] }),
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "self-center text-teal-600 transition-transform group-hover:translate-x-1", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 12", className: "h-2.5 w-5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) }) })
            ] }) }, service.slug)) })
          ] }),
          department.preparation && /* @__PURE__ */ jsx(
            PreparationGuide,
            {
              data: department.preparation,
              heading: "Priprema za MR, CT i RTG preglede"
            }
          ),
          department.indications.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "kada", className: "mt-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "kada", className: "font-display text-2xl font-bold text-ink", children: "Kada se obratiti ovom odjeljenju?" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-3", children: department.indications.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-soft", children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mt-[9px] size-1.5 shrink-0 bg-teal-600" }),
              item
            ] }, item)) })
          ] }),
          department.faq.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "faq", className: "mt-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "faq", className: "mb-5 font-display text-2xl font-bold text-ink", children: "Česta pitanja" }),
            /* @__PURE__ */ jsx(FaqAccordion, { items: department.faq })
          ] }),
          /* @__PURE__ */ jsx(PhotoGallery, { crops: department.gallery })
        ] }),
        /* @__PURE__ */ jsxs("aside", { className: "space-y-8 lg:pt-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-ink/12 bg-mineral p-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-[0.95rem] font-semibold text-ink", children: "Zakazivanje" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: telHref(settings.phonePrimary),
                className: "mt-4 flex items-center gap-3 font-display text-2xl font-bold tabular-nums text-ink transition-colors hover:text-teal-700",
                children: [
                  /* @__PURE__ */ jsx(PhoneIcon, { className: "size-5 shrink-0 text-teal-600" }),
                  settings.phonePrimary
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: telHref(settings.phoneSecondary),
                className: "mt-2 flex items-center gap-3 font-display text-2xl font-bold tabular-nums text-ink transition-colors hover:text-teal-700",
                children: [
                  /* @__PURE__ */ jsx(PhoneIcon, { className: "size-5 shrink-0 text-teal-600" }),
                  settings.phoneSecondary
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 border-t border-ink/10 pt-4 text-[0.9rem] text-ink-soft", children: [
              /* @__PURE__ */ jsx("p", { children: settings.hoursWeekdays }),
              /* @__PURE__ */ jsx("p", { children: settings.hoursSaturday })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: priceListHref(department.slug),
              className: "flex items-center justify-between rounded-[3px] bg-teal-600 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-teal-700",
              children: [
                "Cjenovnik",
                /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 12", className: "h-2.5 w-5", fill: "none", stroke: "currentColor", strokeWidth: "1.6", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
              ]
            }
          ),
          department.consultants && department.consultants.fields.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "border border-ink/12 p-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "meta-label text-ink-faint", children: "Oblasti pregleda" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2", children: department.consultants.fields.map((field) => /* @__PURE__ */ jsx("li", { className: "text-[0.92rem] leading-snug text-ink", children: field }, field)) })
          ] }) : department.doctors.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "border border-ink/12 p-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "meta-label text-ink-faint", children: "Doktori odjeljenja" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: department.doctors.map((doctor) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { href: `/doktori/${doctor.slug}`, className: "group block", children: [
              /* @__PURE__ */ jsx("span", { className: "font-display font-semibold text-ink group-hover:text-teal-800", children: doctor.name }),
              /* @__PURE__ */ jsx("span", { className: "block text-[0.85rem] text-ink-soft", children: doctor.title })
            ] }) }, doctor.slug)) })
          ] }) : null
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "druga-odjeljenja", className: "mt-20 border-t border-ink/12 pt-10", children: [
        /* @__PURE__ */ jsx("h2", { id: "druga-odjeljenja", className: "font-display text-2xl font-bold text-ink", children: "Pogledajte i druga odjeljenja" }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-3", children: otherDepartments.map((other) => /* @__PURE__ */ jsxs(Link, { href: `/odjeljenja/${other.slug}`, className: "group bg-paper transition-colors hover:bg-teal-50/60", children: [
          other.image && /* @__PURE__ */ jsx(ClinicImage, { crop: other.image, decorative: true, className: "aspect-[16/10] w-full object-cover", sizes: "(min-width: 1024px) 30vw, 100vw" }),
          /* @__PURE__ */ jsxs("span", { className: "block px-6 py-6", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-semibold text-ink group-hover:text-teal-800", children: other.name }),
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 block text-[0.88rem] leading-relaxed text-ink-soft", children: other.shortDescription })
          ] })
        ] }, other.slug)) })
      ] })
    ] })
  ] });
}
export {
  DepartmentShow as default
};
