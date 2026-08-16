import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { useState } from "react";
import { S as SiteLayout, t as telHref } from "./SiteLayout-8P92wQdx.js";
import { P as PageHero } from "./PageHero-Cg7Yz0UG.js";
import { C as ClinicImage } from "./ClinicImage-Cuefd_Mz.js";
function NewsIndex({ articles, categories, specialistVisits, seo }) {
  const { settings } = usePage().props;
  const [filter, setFilter] = useState(null);
  const filtered = filter ? articles.data.filter((a) => a.category?.slug === filter || a.department?.slug === filter) : articles.data;
  return /* @__PURE__ */ jsxs(SiteLayout, { seo, children: [
    /* @__PURE__ */ jsx(
      PageHero,
      {
        label: "Aktuelno",
        title: "Novosti i obavještenja",
        intro: "Pratite najnovije informacije iz ZU SC Dr Brkić — nove usluge, dolaske specijalista, akcije i obavještenja.",
        image: "fasada",
        crumbs: [{ label: "Početna", href: "/" }, { label: "Novosti" }],
        children: /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap gap-x-8 gap-y-2 border-l-2 border-teal-500 pl-5", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-[0.92rem] text-ink-soft", children: [
            /* @__PURE__ */ jsx("span", { className: "meta-label block text-ink-faint", children: "Radno vrijeme" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-ink", children: settings.hoursWeekdays })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-[0.92rem] text-ink-soft", children: [
            /* @__PURE__ */ jsx("span", { className: "meta-label block text-ink-faint", children: "Kontakt" }),
            /* @__PURE__ */ jsx("a", { href: telHref(settings.phonePrimary), className: "font-medium tabular-nums text-ink hover:text-teal-700", children: settings.phonePrimary }),
            " · ",
            /* @__PURE__ */ jsx("a", { href: telHref(settings.phoneSecondary), className: "font-medium tabular-nums text-ink hover:text-teal-700", children: settings.phoneSecondary })
          ] })
        ] })
      }
    ),
    specialistVisits.length > 0 && /* @__PURE__ */ jsx("section", { "aria-labelledby": "dolasci", className: "border-b border-ink/10 bg-mineral py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsx("h2", { id: "dolasci", className: "meta-label text-teal-700", children: "Dolasci specijalista" }),
      /* @__PURE__ */ jsx("ol", { className: "mt-5 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2 xl:grid-cols-3", children: specialistVisits.map((visit) => {
        const inner = /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("span", { className: "border-r border-ink/12 pr-5 text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "block font-display text-3xl font-bold tabular-nums text-ink", children: visit.day }),
            /* @__PURE__ */ jsx("span", { className: "meta-label text-teal-600", children: visit.month })
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "block font-display font-semibold text-ink", children: visit.doctorName }),
            /* @__PURE__ */ jsxs("span", { className: "block text-[0.85rem] text-ink-soft", children: [
              visit.specialty,
              visit.startTime && visit.endTime ? ` · ${visit.startTime}–${visit.endTime}` : ""
            ] }),
            visit.note && /* @__PURE__ */ jsx("span", { className: "block text-[0.82rem] text-crimson/90", children: visit.note })
          ] })
        ] });
        return /* @__PURE__ */ jsx("li", { children: visit.href ? /* @__PURE__ */ jsx(Link, { href: visit.href, className: "flex items-center gap-5 bg-paper px-5 py-4 transition-colors hover:bg-teal-50/70", children: inner }) : /* @__PURE__ */ jsx("div", { className: "flex items-center gap-5 bg-paper px-5 py-4", children: inner }) }, `${visit.doctorName}-${visit.day}`);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", role: "group", "aria-label": "Filter po kategoriji", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setFilter(null),
            "aria-pressed": filter === null,
            className: `rounded-[3px] border px-4 py-2 text-[0.9rem] font-medium transition-colors ${filter === null ? "border-teal-600 bg-teal-600 text-white" : "border-ink/20 text-ink hover:border-teal-600 hover:text-teal-700"}`,
            children: "Sve"
          }
        ),
        categories.map((c) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setFilter(c.slug),
            "aria-pressed": filter === c.slug,
            className: `rounded-[3px] border px-4 py-2 text-[0.9rem] font-medium transition-colors ${filter === c.slug ? "border-teal-600 bg-teal-600 text-white" : "border-ink/20 text-ink hover:border-teal-600 hover:text-teal-700"}`,
            children: c.name
          },
          c.slug
        ))
      ] }),
      filtered.length > 0 ? /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-px border border-ink/12 bg-ink/12 md:grid-cols-2 xl:grid-cols-3", children: filtered.map((article) => /* @__PURE__ */ jsxs("article", { className: "group relative flex flex-col bg-paper transition-colors hover:bg-teal-50/50", children: [
        article.image && /* @__PURE__ */ jsx(ClinicImage, { crop: article.image, decorative: true, className: "aspect-[16/10] w-full object-cover", sizes: "(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col px-7 py-8", children: [
          /* @__PURE__ */ jsxs("p", { className: "meta-label flex items-center gap-3 text-ink-faint", children: [
            /* @__PURE__ */ jsx("span", { children: article.publishedAt }),
            article.category && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "h-3 w-px bg-ink/15" }),
              /* @__PURE__ */ jsx("span", { className: "text-teal-700", children: article.category.name })
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-xl font-bold leading-snug text-ink group-hover:text-teal-800", children: /* @__PURE__ */ jsx(Link, { href: `/novosti/${article.slug}`, className: "after:absolute after:inset-0", children: article.title }) }),
          article.excerpt && /* @__PURE__ */ jsx("p", { className: "mt-3 text-[0.92rem] leading-relaxed text-ink-soft", children: article.excerpt }),
          /* @__PURE__ */ jsxs("span", { className: "meta-label mt-auto flex items-center gap-2 pt-6 text-teal-700", children: [
            "Pročitajte više",
            /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 12", className: "h-2.5 w-5 transition-transform group-hover:translate-x-1", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M0 6h22M17 1l5 5-5 5" }) })
          ] })
        ] })
      ] }, article.slug)) }) : /* @__PURE__ */ jsx("div", { className: "mt-8 border border-ink/12 bg-mineral px-8 py-14 text-center", children: /* @__PURE__ */ jsx("p", { className: "font-display text-xl font-semibold text-ink", children: "Nema novosti u ovoj kategoriji." }) }),
      articles.links.length > 3 && /* @__PURE__ */ jsx("nav", { "aria-label": "Paginacija", className: "mt-10 flex flex-wrap gap-2", children: articles.links.map(
        (link, i) => link.url ? /* @__PURE__ */ jsx(
          Link,
          {
            href: link.url,
            className: `rounded-[3px] border px-4 py-2 text-[0.9rem] font-medium ${link.active ? "border-teal-600 bg-teal-600 text-white" : "border-ink/20 text-ink hover:border-teal-600"}`,
            dangerouslySetInnerHTML: { __html: link.label }
          },
          i
        ) : /* @__PURE__ */ jsx("span", { className: "px-3 py-2 text-[0.9rem] text-ink-faint", dangerouslySetInnerHTML: { __html: link.label } }, i)
      ) })
    ] })
  ] });
}
export {
  NewsIndex as default
};
