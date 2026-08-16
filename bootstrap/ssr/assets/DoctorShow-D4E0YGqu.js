import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { S as SiteLayout, b as mapsHref, t as telHref, a as SectionMeta } from "./SiteLayout-8P92wQdx.js";
import { D as DoctorPortrait, d as doctorCrop } from "./DoctorPortrait-C2LUZ1DF.js";
import { P as PhoneIcon } from "./PhoneIcon-Ca6ByOgu.js";
import "react";
import "./ClinicImage-Cuefd_Mz.js";
function PinIcon({ className }) {
  return /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 20 20", className, fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ jsx("path", { d: "M10 17.5s5.5-4.7 5.5-9.1a5.5 5.5 0 10-11 0c0 4.4 5.5 9.1 5.5 9.1z" }),
    /* @__PURE__ */ jsx("circle", { cx: "10", cy: "8.4", r: "1.7" })
  ] });
}
function ClockIcon({ className }) {
  return /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 20 20", className, fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ jsx("circle", { cx: "10", cy: "10", r: "7.25" }),
    /* @__PURE__ */ jsx("path", { d: "M10 6.5V10l2.5 1.75" })
  ] });
}
function DoctorShow({ doctor, otherDoctors, seo }) {
  const { settings } = usePage().props;
  const educationLines = (doctor.education ?? "").split("\n").map((line) => line.trim()).filter(Boolean);
  return /* @__PURE__ */ jsxs(SiteLayout, { seo, children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-ink/10 bg-paper", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1360px] px-4 py-5 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Navigacioni put", className: "meta-label flex flex-wrap items-center gap-2 text-ink-faint", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", className: "transition-colors hover:text-teal-700", children: "Početna" }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "/" }),
      /* @__PURE__ */ jsx(Link, { href: "/doktori", className: "transition-colors hover:text-teal-700", children: "Doktori" }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "/" }),
      /* @__PURE__ */ jsx("span", { "aria-current": "page", className: "text-ink-soft", children: doctor.name })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 md:flex-row md:items-start md:gap-10 lg:gap-14", children: [
        /* @__PURE__ */ jsx(
          DoctorPortrait,
          {
            name: doctor.name,
            photo: doctor.photo,
            crop: doctorCrop(doctor.slug),
            priority: true,
            className: "mx-auto aspect-[4/5] w-full max-w-[17.5rem] shrink-0 rounded-xl md:mx-0 md:max-w-[15.5rem] lg:max-w-[20rem]",
            sizes: "(min-width: 1024px) 320px, (min-width: 768px) 248px, 280px"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1 md:pt-1", children: [
          doctor.department && /* @__PURE__ */ jsx("p", { className: "meta-label text-teal-700", children: /* @__PURE__ */ jsx(Link, { href: `/odjeljenja/${doctor.department.slug}`, className: "hover:text-teal-900", children: doctor.department.name }) }),
          /* @__PURE__ */ jsx("h1", { className: "mt-2 font-display text-3xl font-bold leading-[1.08] tracking-[-0.018em] text-ink sm:text-4xl lg:text-[2.75rem]", children: doctor.name }),
          doctor.title && /* @__PURE__ */ jsx("p", { className: "mt-3 text-[1.05rem] leading-relaxed text-ink-soft", children: doctor.title }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-6 flex flex-col gap-2.5 text-[0.92rem] text-ink-soft sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2", children: [
            doctor.experience && /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(ClockIcon, { className: "size-[1em] shrink-0 text-teal-700" }),
              doctor.experience
            ] }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: mapsHref(settings.address, settings.city),
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 transition-colors hover:text-teal-800",
                children: [
                  /* @__PURE__ */ jsx(PinIcon, { className: "size-[1em] shrink-0 text-teal-700" }),
                  settings.address,
                  ", Doboj"
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: telHref(settings.phonePrimary),
                className: "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[3px] bg-teal-600 px-6 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-teal-700 sm:w-auto",
                children: [
                  /* @__PURE__ */ jsx(PhoneIcon, { className: "size-4 shrink-0" }),
                  "Zakažite pregled"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/kontakt",
                className: "inline-flex min-h-12 w-full items-center justify-center rounded-[3px] border border-ink/20 px-6 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700 sm:w-auto",
                children: "Kontaktirajte nas"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-12 border-t border-ink/10 pt-12 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:gap-16 lg:pt-14", children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 space-y-12", children: [
          educationLines.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "diploma", children: [
            /* @__PURE__ */ jsx(SectionMeta, { index: "01", label: "Obrazovanje" }),
            /* @__PURE__ */ jsx("h2", { id: "diploma", className: "mt-4 font-display text-2xl font-bold text-ink", children: "Diploma" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-3", children: educationLines.map((line, i) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "shrink-0 tabular-nums text-teal-600", children: String(i + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-ink", children: line })
            ] }, line)) })
          ] }),
          doctor.specializations && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "specijalnosti", children: [
            /* @__PURE__ */ jsx(SectionMeta, { index: "02", label: "Stručnost" }),
            /* @__PURE__ */ jsx("h2", { id: "specijalnosti", className: "mt-4 font-display text-2xl font-bold text-ink", children: "Specijalnosti" }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-2xl leading-relaxed text-ink-soft", children: doctor.specializations })
          ] }),
          doctor.bio && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "biografija", children: [
            /* @__PURE__ */ jsx(SectionMeta, { index: "03", label: "O ljekaru" }),
            /* @__PURE__ */ jsx("h2", { id: "biografija", className: "mt-4 font-display text-2xl font-bold text-ink", children: "Biografija" }),
            /* @__PURE__ */ jsx("div", { className: "mt-5 max-w-2xl space-y-4 border-l-2 border-teal-500 pl-5", children: doctor.bio.split("\n\n").map((paragraph) => /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-ink-soft", children: paragraph }, paragraph.slice(0, 24))) })
          ] }),
          doctor.services.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "usluge-doktora", children: [
            /* @__PURE__ */ jsx(SectionMeta, { index: "04", label: "Pregledi" }),
            /* @__PURE__ */ jsx("h2", { id: "usluge-doktora", className: "mt-4 font-display text-2xl font-bold text-ink", children: "Usluge" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-5 grid gap-2 sm:grid-cols-2", children: doctor.services.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                href: `/usluge/${service.slug}`,
                className: "flex min-h-12 items-center border-l-2 border-teal-500 bg-mineral px-4 py-3 text-[0.93rem] font-medium text-ink transition-colors hover:bg-teal-50 hover:text-teal-800",
                children: service.name
              }
            ) }, service.slug)) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("aside", { className: "lg:sticky lg:top-28 lg:self-start", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-ink/12 bg-teal-900 p-6 text-white sm:p-7", children: [
          /* @__PURE__ */ jsx("h2", { className: "meta-label text-teal-300", children: "Zakažite pregled" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 text-[0.92rem] leading-relaxed text-teal-100/80", children: [
            "Pozovite recepciju za termin kod ",
            doctor.name,
            "."
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: telHref(settings.phonePrimary),
              className: "mt-5 flex items-center gap-3 font-display text-2xl font-bold tabular-nums transition-colors hover:text-teal-300",
              children: [
                /* @__PURE__ */ jsx(PhoneIcon, { className: "size-5 shrink-0 text-teal-300" }),
                settings.phonePrimary
              ]
            }
          ),
          /* @__PURE__ */ jsxs("dl", { className: "mt-6 space-y-4 border-t border-white/15 pt-5 text-[0.88rem] text-teal-100/80", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("dt", { className: "flex items-center gap-2 text-teal-300/80", children: [
                /* @__PURE__ */ jsx(ClockIcon, { className: "size-[1em] shrink-0" }),
                "Radno vrijeme"
              ] }),
              /* @__PURE__ */ jsx("dd", { className: "mt-1.5 font-medium text-white", children: settings.hoursWeekdays }),
              /* @__PURE__ */ jsx("dd", { className: "font-medium text-white", children: settings.hoursSaturday })
            ] }),
            doctor.department && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("dt", { className: "meta-label text-teal-300/80", children: "Odjeljenje" }),
              /* @__PURE__ */ jsx("dd", { className: "mt-1.5", children: /* @__PURE__ */ jsx(Link, { href: `/odjeljenja/${doctor.department.slug}`, className: "font-medium text-white hover:text-teal-200", children: doctor.department.name }) })
            ] })
          ] })
        ] }) })
      ] }),
      otherDoctors.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "ostali", className: "mt-16 border-t border-ink/12 pt-10 lg:mt-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
          /* @__PURE__ */ jsx("h2", { id: "ostali", className: "font-display text-2xl font-bold text-ink", children: "Ostali doktori" }),
          /* @__PURE__ */ jsx(Link, { href: "/doktori", className: "meta-label text-teal-700 hover:text-teal-900", children: "Svi doktori →" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: otherDoctors.map((other) => /* @__PURE__ */ jsxs(
          Link,
          {
            href: `/doktori/${other.slug}`,
            className: "group flex gap-4 rounded-xl border border-ink/10 bg-paper p-3 transition-colors hover:border-teal-500/35 hover:bg-teal-50/50",
            children: [
              /* @__PURE__ */ jsx(
                DoctorPortrait,
                {
                  name: other.name,
                  photo: other.photo,
                  crop: doctorCrop(other.slug),
                  className: "aspect-[4/5] w-[4.5rem] shrink-0 rounded-lg sm:w-20",
                  sizes: "80px"
                }
              ),
              /* @__PURE__ */ jsxs("span", { className: "flex min-w-0 flex-col justify-center py-1", children: [
                /* @__PURE__ */ jsx("span", { className: "font-display text-[1.05rem] font-semibold leading-snug text-ink group-hover:text-teal-800", children: other.name }),
                other.title && /* @__PURE__ */ jsx("span", { className: "mt-1 text-[0.88rem] leading-snug text-ink-soft", children: other.title })
              ] })
            ]
          },
          other.slug
        )) })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "zakazite", className: "mt-16 rounded-xl bg-teal-900 px-6 py-10 text-white sm:px-8 sm:py-12 lg:mt-20", children: [
        /* @__PURE__ */ jsxs("h2", { id: "zakazite", className: "font-display text-2xl font-bold sm:text-3xl", children: [
          "Zakažite pregled kod ",
          doctor.name
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-lg text-[0.98rem] leading-relaxed text-teal-100/80", children: "Pozovite nas ili pošaljite upit za zakazivanje. Naš tim će vam se javiti u najkraćem roku." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: telHref(settings.phonePrimary),
              className: "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[3px] bg-teal-600 px-6 font-semibold text-white transition-colors hover:bg-teal-700 sm:w-auto",
              children: [
                /* @__PURE__ */ jsx(PhoneIcon, { className: "size-4 shrink-0" }),
                "Pozovite nas"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/kontakt",
              className: "inline-flex min-h-12 w-full items-center justify-center rounded-[3px] border border-white/30 px-6 font-semibold text-white transition-colors hover:border-white/70 sm:w-auto",
              children: "Pošaljite upit"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  DoctorShow as default
};
