import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { S as SiteLayout, t as telHref } from "./SiteLayout-8P92wQdx.js";
import { P as PageHero } from "./PageHero-Cg7Yz0UG.js";
import { a as isCustomImagePath, C as ClinicImage } from "./ClinicImage-Cuefd_Mz.js";
import { P as PhoneIcon } from "./PhoneIcon-Ca6ByOgu.js";
import "react";
function NewsBody({ body, title }) {
  return /* @__PURE__ */ jsx("div", { className: "mt-6 max-w-2xl space-y-4", children: body.split("\n\n").map((block, i) => {
    const image = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) {
      return /* @__PURE__ */ jsx(
        "img",
        {
          src: image[2],
          alt: image[1] || title,
          width: 670,
          height: 446,
          loading: "lazy",
          className: "w-full object-cover"
        },
        i
      );
    }
    const lines = block.split("\n").filter(Boolean);
    if (lines.length > 0 && lines.every((line) => line.startsWith("- "))) {
      return /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: lines.map((line, j) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "shrink-0 tabular-nums text-teal-600", children: String(j + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-ink-soft", children: line.slice(2) })
      ] }, j)) }, i);
    }
    return /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-ink-soft", children: block }, i);
  }) });
}
function NewsShow({ article, relatedArticles, visit = null, seo }) {
  const { settings } = usePage().props;
  const shareUrl = seo.canonical;
  const customPhoto = isCustomImagePath(article.image) ? { src: article.image, position: "object-center" } : null;
  return /* @__PURE__ */ jsxs(SiteLayout, { seo, children: [
    /* @__PURE__ */ jsx(
      PageHero,
      {
        label: article.category?.name ?? "Novost",
        title: article.title,
        image: customPhoto ? null : article.image ?? "fasada",
        photo: customPhoto,
        crumbs: [
          { label: "Početna", href: "/" },
          { label: "Novosti", href: "/novosti" },
          { label: article.title }
        ],
        children: /* @__PURE__ */ jsxs("p", { className: "meta-label mt-5 flex flex-wrap items-center gap-3 text-ink-faint", children: [
          article.publishedAtIso && /* @__PURE__ */ jsx("time", { dateTime: article.publishedAtIso, children: article.publishedAt }),
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "h-3 w-px bg-ink/15" }),
          /* @__PURE__ */ jsxs("span", { children: [
            article.readingMinutes,
            " min čitanja"
          ] }),
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "h-3 w-px bg-ink/15" }),
          /* @__PURE__ */ jsx("span", { children: "ZU SC Dr Brkić" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 py-14 sm:px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-14 lg:grid-cols-[2fr_1fr]", children: [
        /* @__PURE__ */ jsxs("article", { children: [
          article.image && /* @__PURE__ */ jsx(
            ClinicImage,
            {
              crop: article.image,
              alt: article.title,
              className: "mb-8 aspect-[16/9] w-full object-cover",
              sizes: "(min-width: 1024px) 60vw, 100vw"
            }
          ),
          article.excerpt && /* @__PURE__ */ jsx("p", { className: "border-l-2 border-teal-500 pl-5 text-lg font-medium leading-relaxed text-ink", children: article.excerpt }),
          visit && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "termin-naslov", className: "mt-8 border border-ink/12 bg-mineral p-6 sm:p-7", children: [
            /* @__PURE__ */ jsx("h2", { id: "termin-naslov", className: "font-display text-xl font-bold text-ink", children: "Termin dolaska" }),
            /* @__PURE__ */ jsxs("dl", { className: "mt-5 grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { className: "text-[0.75rem] text-ink-faint", children: "Specijalista" }),
                /* @__PURE__ */ jsx("dd", { className: "mt-1 font-semibold text-ink", children: visit.doctorName }),
                visit.specialty && /* @__PURE__ */ jsx("dd", { className: "text-[0.9rem] text-ink-soft", children: visit.specialty })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { className: "text-[0.75rem] text-ink-faint", children: "Datum i vrijeme" }),
                /* @__PURE__ */ jsx("dd", { className: "mt-1 font-semibold tabular-nums text-ink", children: /* @__PURE__ */ jsx("time", { dateTime: visit.dateIso, children: visit.dateLabel }) }),
                visit.startTime && visit.endTime && /* @__PURE__ */ jsxs("dd", { className: "text-[0.9rem] tabular-nums text-ink-soft", children: [
                  visit.startTime,
                  " – ",
                  visit.endTime
                ] })
              ] }),
              visit.note && /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsx("dt", { className: "text-[0.75rem] text-ink-faint", children: "Napomena" }),
                /* @__PURE__ */ jsx("dd", { className: "mt-1 font-medium text-crimson", children: visit.note })
              ] })
            ] }),
            visit.department && /* @__PURE__ */ jsxs("p", { className: "mt-5 text-[0.92rem] text-ink-soft", children: [
              "Odjeljenje:",
              " ",
              /* @__PURE__ */ jsx(Link, { href: `/odjeljenja/${visit.department.slug}`, className: "font-semibold text-teal-700 hover:text-teal-900", children: visit.department.name })
            ] })
          ] }),
          /* @__PURE__ */ jsx(NewsBody, { body: article.body ?? "", title: article.title }),
          visit && visit.services.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "pregledi-naslov", className: "mt-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
              /* @__PURE__ */ jsx("h2", { id: "pregledi-naslov", className: "font-display text-xl font-bold text-ink", children: visit.priceListTitle ?? "Pregledi" }),
              /* @__PURE__ */ jsx(Link, { href: visit.priceListHref, className: "text-[0.88rem] font-semibold text-teal-700 hover:text-teal-900", children: "Cijeli cjenovnik →" })
            ] }),
            /* @__PURE__ */ jsxs("table", { className: "mt-4 w-full text-[0.95rem]", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-ink/12 text-left text-ink-faint", children: [
                /* @__PURE__ */ jsx("th", { className: "py-2 pr-4 font-medium", children: "Usluga" }),
                /* @__PURE__ */ jsx("th", { className: "py-2 text-right font-medium", children: "Cijena" })
              ] }) }),
              /* @__PURE__ */ jsx("tbody", { children: visit.services.map((item) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-ink/8", children: [
                /* @__PURE__ */ jsx("td", { className: "py-2.5 pr-4 text-ink", children: item.href ? /* @__PURE__ */ jsx(Link, { href: item.href, className: "font-medium text-teal-700 hover:text-teal-900", children: item.name }) : item.name }),
                /* @__PURE__ */ jsx("td", { className: "py-2.5 text-right tabular-nums text-ink", children: item.price })
              ] }, item.name)) })
            ] })
          ] }),
          article.department && /* @__PURE__ */ jsxs("p", { className: "mt-8 text-[0.92rem] text-ink-soft", children: [
            "Povezano odjeljenje:",
            " ",
            /* @__PURE__ */ jsx(Link, { href: `/odjeljenja/${article.department.slug}`, className: "font-semibold text-teal-700 hover:text-teal-900", children: article.department.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 border-t border-ink/12 pt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "meta-label text-ink-faint", children: "Podijelite članak:" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 flex gap-3", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "rounded-[3px] border border-ink/20 px-4 py-2 text-[0.88rem] font-medium text-ink transition-colors hover:border-teal-600 hover:text-teal-700",
                  children: "Facebook"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `viber://forward?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`,
                  className: "rounded-[3px] border border-ink/20 px-4 py-2 text-[0.88rem] font-medium text-ink transition-colors hover:border-teal-600 hover:text-teal-700",
                  children: "Viber"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("aside", { className: "space-y-8 lg:pt-2", children: /* @__PURE__ */ jsxs("div", { className: "border border-ink/12 bg-teal-900 p-6 text-white", children: [
          /* @__PURE__ */ jsx("h2", { className: "meta-label text-teal-300", children: "Zakažite pregled" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-[0.92rem] leading-relaxed text-teal-100/80", children: "Pozovite nas za više informacija ili zakazivanje." }),
          /* @__PURE__ */ jsxs("a", { href: telHref(settings.phonePrimary), className: "mt-4 flex items-center gap-3 font-display text-2xl font-bold tabular-nums transition-colors hover:text-teal-300", children: [
            /* @__PURE__ */ jsx(PhoneIcon, { className: "size-5 shrink-0 text-teal-300" }),
            settings.phonePrimary
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 border-t border-white/15 pt-4 text-[0.88rem] text-teal-100/70", children: [
            /* @__PURE__ */ jsx("p", { children: settings.hoursWeekdays }),
            /* @__PURE__ */ jsx("p", { children: settings.hoursSaturday })
          ] })
        ] }) })
      ] }),
      relatedArticles.length > 0 && /* @__PURE__ */ jsxs("section", { "aria-labelledby": "ostale", className: "mt-20 border-t border-ink/12 pt-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between gap-4", children: [
          /* @__PURE__ */ jsx("h2", { id: "ostale", className: "font-display text-2xl font-bold text-ink", children: "Ostale novosti" }),
          /* @__PURE__ */ jsx(Link, { href: "/novosti", className: "meta-label text-teal-700 hover:text-teal-900", children: "Pročitajte još →" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-3", children: relatedArticles.map((related) => /* @__PURE__ */ jsxs(Link, { href: `/novosti/${related.slug}`, className: "group bg-paper transition-colors hover:bg-teal-50/60", children: [
          related.image && /* @__PURE__ */ jsx(ClinicImage, { crop: related.image, decorative: true, className: "aspect-[16/10] w-full object-cover", sizes: "(min-width: 1024px) 30vw, 100vw" }),
          /* @__PURE__ */ jsxs("span", { className: "block px-6 py-6", children: [
            /* @__PURE__ */ jsxs("span", { className: "meta-label text-ink-faint", children: [
              related.publishedAt,
              related.category ? ` · ${related.category}` : ""
            ] }),
            /* @__PURE__ */ jsx("span", { className: "mt-2 block font-display text-lg font-semibold leading-snug text-ink group-hover:text-teal-800", children: related.title })
          ] })
        ] }, related.slug)) })
      ] })
    ] })
  ] });
}
export {
  NewsShow as default
};
