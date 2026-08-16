import { jsxs, jsx } from "react/jsx-runtime";
import { Link, usePage } from "@inertiajs/react";
import { S as SiteLayout, t as telHref } from "./SiteLayout-8P92wQdx.js";
import { P as PageHero } from "./PageHero-Cg7Yz0UG.js";
import { useState, useMemo, useEffect } from "react";
import "./ClinicImage-Cuefd_Mz.js";
function normalize(value) {
  return value.toLowerCase().replace(/đ/g, "d").replace(/Đ/g, "d").normalize("NFD").replace(new RegExp("\\p{M}", "gu"), "");
}
function uslugaLabel(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} usluga`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} usluge`;
  return `${count} usluga`;
}
function groupCount(group) {
  return group.sections.reduce((sum, section) => sum + section.items.length, 0);
}
function highlight(text, query) {
  const trimmed = query.trim();
  if (!trimmed) return text;
  const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "ig"));
  if (parts.length === 1) return text;
  return parts.map(
    (part, i) => part.toLowerCase() === trimmed.toLowerCase() ? /* @__PURE__ */ jsx("mark", { className: "rounded-[2px] bg-teal-100 text-inherit", children: part }, i) : part
  );
}
function matchesQuery(text, query) {
  return normalize(text).includes(query);
}
function PriceListExplorer({ groups }) {
  const [query, setQuery] = useState("");
  const [openGroups, setOpenGroups] = useState(() => /* @__PURE__ */ new Set());
  const [openSections, setOpenSections] = useState(() => /* @__PURE__ */ new Set());
  const needle = normalize(query.trim());
  const visible = useMemo(() => {
    if (!needle) return groups;
    return groups.map((group) => {
      const groupHit = matchesQuery(group.title, needle);
      const sections = group.sections.map((section) => {
        if (groupHit || matchesQuery(section.title, needle)) return section;
        const items = section.items.filter(
          (item) => matchesQuery(item.name, needle) || matchesQuery(item.price, needle)
        );
        return items.length ? { ...section, items } : null;
      }).filter((section) => section !== null);
      return sections.length ? { ...group, sections } : null;
    }).filter((group) => group !== null);
  }, [groups, needle]);
  const resultCount = visible.reduce((sum, group) => sum + groupCount(group), 0);
  useEffect(() => {
    if (needle) {
      setOpenGroups(new Set(visible.map((group) => group.id)));
      setOpenSections(new Set(visible.flatMap((group) => group.sections.map((section) => section.id))));
    }
  }, [needle, visible]);
  useEffect(() => {
    const applyHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!hash) return;
      const parent = groups.find((group) => group.id === hash || group.sections.some((section) => section.id === hash));
      if (!parent) return;
      const sectionIds = parent.id === hash ? parent.sections.map((section) => section.id) : parent.sections.filter((section) => section.id === hash).map((section) => section.id);
      setOpenGroups(/* @__PURE__ */ new Set([parent.id]));
      setOpenSections(new Set(sectionIds));
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [groups]);
  const toggleGroup = (id, sections) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        setOpenSections((open) => {
          const merged = new Set(open);
          sections.forEach((section) => merged.add(section.id));
          return merged;
        });
      }
      return next;
    });
  };
  const toggleSection = (id) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const expandAll = () => {
    setOpenGroups(new Set(visible.map((group) => group.id)));
    setOpenSections(new Set(visible.flatMap((group) => group.sections.map((section) => section.id))));
  };
  const collapseAll = () => {
    setOpenGroups(/* @__PURE__ */ new Set());
    setOpenSections(/* @__PURE__ */ new Set());
  };
  const jumpTo = (group) => {
    setQuery("");
    setOpenGroups(/* @__PURE__ */ new Set([group.id]));
    setOpenSections(new Set(group.sections.map((section) => section.id)));
    window.history.replaceState(null, "", `#${group.id}`);
    window.setTimeout(() => {
      document.getElementById(group.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "sticky top-[68px] z-30 -mx-4 border-y border-ink/10 bg-paper/95 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6 lg:top-[76px] lg:-mx-10 lg:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            className: "pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-faint",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.6",
            children: [
              /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "7" }),
              /* @__PURE__ */ jsx("path", { d: "M20 20l-3.2-3.2" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "search",
            value: query,
            onChange: (e) => setQuery(e.target.value),
            onKeyDown: (e) => {
              if (e.key === "Escape") setQuery("");
            },
            placeholder: "Pretražite uslugu, npr. CT glave, Holter, mamografija…",
            autoComplete: "off",
            className: "w-full rounded-[3px] border border-ink/15 bg-paper py-3.5 pl-12 pr-4 text-[0.98rem] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20",
            "aria-label": "Pretraga cjenovnika"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-2", children: [
        groups.map((group) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => jumpTo(group),
            className: `rounded-[3px] border px-3 py-1.5 text-[0.82rem] font-medium transition-colors ${openGroups.has(group.id) && !needle ? "border-teal-600 bg-teal-600 text-white" : "border-ink/15 text-ink hover:border-teal-600 hover:text-teal-700"}`,
            children: group.title
          },
          group.id
        )),
        /* @__PURE__ */ jsxs("span", { className: "ml-auto flex gap-3 text-[0.8rem] font-medium", children: [
          /* @__PURE__ */ jsx("button", { type: "button", onClick: expandAll, className: "text-teal-700 hover:text-teal-900", children: "Otvori sve" }),
          /* @__PURE__ */ jsx("button", { type: "button", onClick: collapseAll, className: "text-ink-soft hover:text-ink", children: "Zatvori sve" })
        ] })
      ] }),
      needle && /* @__PURE__ */ jsx("p", { className: "mt-3 text-[0.88rem] text-ink-soft", children: resultCount > 0 ? `${uslugaLabel(resultCount)} za „${query.trim()}“` : `Nema usluga za „${query.trim()}“.` })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-3", children: visible.map((group) => {
      const expanded = openGroups.has(group.id);
      const count = groupCount(group);
      return /* @__PURE__ */ jsxs(
        "section",
        {
          id: group.id,
          className: "scroll-mt-32 overflow-hidden rounded-[3px] border border-ink/12 bg-paper lg:scroll-mt-36",
          children: [
            /* @__PURE__ */ jsx("h2", { children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                "aria-expanded": expanded,
                onClick: () => toggleGroup(group.id, group.sections),
                className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6",
                children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    /* @__PURE__ */ jsx("span", { className: "block font-display text-xl font-bold text-ink sm:text-[1.35rem]", children: group.title }),
                    /* @__PURE__ */ jsx("span", { className: "mt-0.5 block text-[0.82rem] text-ink-faint", children: uslugaLabel(count) })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      "aria-hidden": "true",
                      className: `flex size-8 shrink-0 items-center justify-center border border-ink/15 text-teal-700 transition-transform ${expanded ? "rotate-45" : ""}`,
                      children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 12 12", className: "size-3", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M6 0v12M0 6h12" }) })
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { hidden: !expanded, className: "border-t border-ink/10", children: [
              group.departmentSlug && /* @__PURE__ */ jsx("div", { className: "flex justify-end border-b border-ink/8 px-5 py-2.5 sm:px-6", children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: `/odjeljenja/${group.departmentSlug}`,
                  className: "text-[0.82rem] font-medium text-teal-700 hover:text-teal-900",
                  children: "Stranica odjeljenja"
                }
              ) }),
              group.sections.map((section) => {
                const sectionOpen = openSections.has(section.id);
                const showHeading = group.sections.length > 1;
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    id: section.id !== group.id ? section.id : void 0,
                    className: "scroll-mt-32 lg:scroll-mt-36",
                    children: [
                      showHeading && /* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsxs(
                        "button",
                        {
                          type: "button",
                          "aria-expanded": sectionOpen,
                          onClick: () => toggleSection(section.id),
                          className: "flex w-full items-center justify-between gap-3 bg-mineral/70 px-5 py-3 text-left font-display text-[1.02rem] font-semibold text-ink hover:text-teal-800 sm:px-6",
                          children: [
                            section.title,
                            /* @__PURE__ */ jsx("span", { className: "text-[0.75rem] font-medium text-ink-faint", children: uslugaLabel(section.items.length) })
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ jsx("div", { hidden: showHeading && !sectionOpen, children: /* @__PURE__ */ jsx(PriceTable, { items: section.items, query }) })
                    ]
                  },
                  section.id
                );
              })
            ] })
          ]
        },
        group.id
      );
    }) })
  ] });
}
function PriceTable({ items, query }) {
  return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-[0.9375rem]", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-ink/12", children: [
      /* @__PURE__ */ jsx("th", { className: "meta-label px-5 py-2.5 text-left font-medium text-ink-faint sm:px-6", children: "Usluga" }),
      /* @__PURE__ */ jsx("th", { className: "meta-label px-5 py-2.5 text-right font-medium text-ink-faint sm:px-6", children: "Cijena" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: items.map((item, i) => /* @__PURE__ */ jsxs("tr", { className: i % 2 === 1 ? "bg-teal-50/70 hover:bg-teal-50" : "bg-paper hover:bg-teal-50/50", children: [
      /* @__PURE__ */ jsx("td", { className: "px-5 py-2.5 leading-snug text-ink sm:px-6", children: item.href ? /* @__PURE__ */ jsx(
        Link,
        {
          href: item.href,
          className: "font-medium text-teal-700 underline-offset-2 hover:text-teal-900 hover:underline",
          children: highlight(item.name, query)
        }
      ) : highlight(item.name, query) }),
      /* @__PURE__ */ jsx("td", { className: "px-5 py-2.5 text-right font-semibold tabular-nums whitespace-nowrap text-ink sm:px-6", children: item.price })
    ] }, `${item.name}-${item.price}`)) })
  ] }) });
}
function PriceList({ groups, updatedAt, seo }) {
  const { settings } = usePage().props;
  return /* @__PURE__ */ jsxs(SiteLayout, { seo, children: [
    /* @__PURE__ */ jsx(
      PageHero,
      {
        label: "Cjenovnik",
        title: "Cjenovnik medicinskih usluga",
        intro: "Pretražite cijene po usluzi ili otvorite odjeljenje. Cijene su izražene u konvertibilnim markama (KM).",
        image: "natpis",
        crumbs: [{ label: "Početna", href: "/" }, { label: "Cjenovnik" }],
        children: /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-x-5 gap-y-3", children: [
          /* @__PURE__ */ jsx("a", { href: telHref(settings.phonePrimary), className: "rounded-[3px] bg-teal-600 px-6 py-3 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-teal-700", children: "Provjerite termin" }),
          /* @__PURE__ */ jsx(Link, { href: "/kontakt", className: "rounded-[3px] border border-ink/20 px-6 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700", children: "Pošaljite upit" }),
          updatedAt && /* @__PURE__ */ jsxs("p", { className: "meta-label text-ink-faint", children: [
            "Ažurirano: ",
            updatedAt
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14", children: [
      /* @__PURE__ */ jsx(PriceListExplorer, { groups }),
      /* @__PURE__ */ jsxs("p", { className: "mt-10 border-t border-ink/12 pt-6 text-[0.9rem] leading-relaxed text-ink-soft", children: [
        "Za laboratorijske analize i specifične procedure kontaktirajte ustanovu na",
        " ",
        /* @__PURE__ */ jsx("a", { href: telHref(settings.phonePrimary), className: "font-semibold text-teal-700 hover:text-teal-900", children: settings.phonePrimary }),
        "."
      ] })
    ] })
  ] });
}
export {
  PriceList as default
};
