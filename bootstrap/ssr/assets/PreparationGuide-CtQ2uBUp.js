import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0);
  return /* @__PURE__ */ jsx("div", { className: "border-t border-ink/12", children: items.map((item, i) => {
    const expanded = open === i;
    return /* @__PURE__ */ jsxs("div", { className: "border-b border-ink/12", children: [
      /* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          "aria-expanded": expanded,
          onClick: () => setOpen(expanded ? null : i),
          className: "flex w-full items-center justify-between gap-4 py-4 text-left font-display text-[1.05rem] font-semibold text-ink transition-colors hover:text-teal-800",
          children: [
            item.question,
            /* @__PURE__ */ jsx(
              "span",
              {
                "aria-hidden": "true",
                className: `flex size-7 shrink-0 items-center justify-center border border-ink/15 text-teal-700 transition-transform ${expanded ? "rotate-45" : ""}`,
                children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 12 12", className: "size-3", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M6 0v12M0 6h12" }) })
              }
            )
          ]
        }
      ) }),
      expanded && /* @__PURE__ */ jsx("p", { className: "pb-5 pr-12 text-[0.95rem] leading-relaxed text-ink-soft", children: item.answer })
    ] }, i);
  }) });
}
function PreparationGuide({
  data,
  heading = "Priprema za pregled",
  headingId = "priprema"
}) {
  return /* @__PURE__ */ jsxs("section", { "aria-labelledby": headingId, className: "mt-12", children: [
    /* @__PURE__ */ jsx("h2", { id: headingId, className: "font-display text-2xl font-bold text-ink", children: heading }),
    data.intro && /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft", children: data.intro }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-4", children: data.sections.map((section) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: section.emphasis ? "border border-teal-600/25 bg-teal-50/70 px-5 py-5 sm:px-6" : "border border-ink/12 bg-paper px-5 py-5 sm:px-6",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold text-ink", children: section.title }),
          /* @__PURE__ */ jsx(SectionBody, { section })
        ]
      },
      section.id ?? section.title
    )) })
  ] });
}
function SectionBody({ section }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    section.intro && /* @__PURE__ */ jsx("p", { className: "mt-2 text-[0.95rem] leading-relaxed text-ink-soft", children: section.intro }),
    /* @__PURE__ */ jsx(ItemList, { items: section.items }),
    section.note && /* @__PURE__ */ jsx("p", { className: "mt-3 text-[0.9rem] leading-relaxed text-ink-soft", children: section.note }),
    section.groups && section.groups.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-4 lg:grid-cols-2", children: section.groups.map((group) => /* @__PURE__ */ jsx(GroupCard, { group }, group.title)) })
  ] });
}
function GroupCard({ group }) {
  return /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-teal-500 bg-mineral px-4 py-4", children: [
    /* @__PURE__ */ jsx("h4", { className: "font-display text-[1.02rem] font-semibold text-ink", children: group.title }),
    group.intro && /* @__PURE__ */ jsx("p", { className: "mt-2 text-[0.9rem] leading-relaxed text-ink-soft", children: group.intro }),
    /* @__PURE__ */ jsx(ItemList, { items: group.items })
  ] });
}
function ItemList({ items }) {
  if (!items || items.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2.5", children: items.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-soft", children: [
    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mt-[9px] size-1.5 shrink-0 bg-teal-600" }),
    item
  ] }, item)) });
}
export {
  FaqAccordion as F,
  PreparationGuide as P
};
