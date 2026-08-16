import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { S as SiteLayout } from "./SiteLayout-8P92wQdx.js";
import { P as PageHero } from "./PageHero-Cg7Yz0UG.js";
import { D as DoctorPortrait, d as doctorCrop } from "./DoctorPortrait-C2LUZ1DF.js";
import "./ClinicImage-Cuefd_Mz.js";
function DoctorIndex({ doctors, departments, seo }) {
  const [filter, setFilter] = useState(null);
  const filtered = filter ? doctors.filter((d) => d.department?.slug === filter) : doctors;
  return /* @__PURE__ */ jsxs(SiteLayout, { seo, children: [
    /* @__PURE__ */ jsx(
      PageHero,
      {
        label: "Stručni tim",
        title: "Doktori i specijalisti ZU SC Dr Brkić",
        intro: "Pregledajte naš medicinski tim po odjeljenjima, specijalnostima i uslugama.",
        image: "krilo",
        crumbs: [{ label: "Početna", href: "/" }, { label: "Doktori" }]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", role: "group", "aria-label": "Filter po odjeljenju", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setFilter(null),
            "aria-pressed": filter === null,
            className: `rounded-md border px-4 py-2 text-[0.9rem] font-medium transition-colors ${filter === null ? "border-teal-600 bg-teal-600 text-white" : "border-ink/20 text-ink hover:border-teal-600 hover:text-teal-700"}`,
            children: "Svi doktori"
          }
        ),
        departments.map((d) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setFilter(d.slug),
            "aria-pressed": filter === d.slug,
            className: `rounded-md border px-4 py-2 text-[0.9rem] font-medium transition-colors ${filter === d.slug ? "border-teal-600 bg-teal-600 text-white" : "border-ink/20 text-ink hover:border-teal-600 hover:text-teal-700"}`,
            children: d.name
          },
          d.slug
        )),
        /* @__PURE__ */ jsx("p", { className: "meta-label ml-auto text-ink-faint", "aria-live": "polite", children: filtered.length })
      ] }),
      filtered.length > 0 ? /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3", children: filtered.map((doctor) => /* @__PURE__ */ jsxs(
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
                  className: "aspect-[4/5] rounded-lg"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-2.5 bottom-0 rounded-lg bg-gradient-to-t from-teal-950/90 via-teal-950/25 to-transparent" }),
              /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-x-2.5 bottom-0 p-5", children: [
                doctor.department && /* @__PURE__ */ jsx("p", { className: "meta-label text-teal-300", children: doctor.department.name }),
                /* @__PURE__ */ jsx("h2", { className: "mt-1.5 font-display text-[1.4rem] font-bold leading-tight text-white group-hover:text-teal-100", children: doctor.name }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-[0.9rem] text-white/75", children: doctor.title })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6", children: [
              doctor.experience && /* @__PURE__ */ jsx("p", { className: "meta-label text-ink-faint", children: doctor.experience }),
              doctor.services.length > 0 && /* @__PURE__ */ jsx("ul", { className: "relative z-10 mt-4 flex flex-wrap gap-1.5", children: doctor.services.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: `/usluge/${s.slug}`,
                  className: "inline-block rounded-md border border-teal-600/20 bg-teal-50 px-2.5 py-1 text-[0.78rem] font-medium leading-none text-teal-800 transition-colors hover:border-teal-600/45 hover:bg-teal-100",
                  children: s.name
                }
              ) }, s.slug)) }),
              /* @__PURE__ */ jsxs("span", { className: "meta-label mt-auto flex items-center gap-2 pt-5 text-teal-700", children: [
                "Pogledajte profil",
                /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 12", className: "h-2.5 w-5 transition-transform group-hover:translate-x-1", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
              ] })
            ] })
          ]
        },
        doctor.slug
      )) }) : /* @__PURE__ */ jsxs("div", { className: "mt-8 rounded-xl border border-ink/12 bg-mineral px-8 py-14 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-xl font-semibold text-ink", children: "Nema rezultata za odabrani filter." }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-ink-soft", children: "Promijenite odjeljenje." })
      ] })
    ] })
  ] });
}
export {
  DoctorIndex as default
};
