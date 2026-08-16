import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { S as SiteLayout } from "./SiteLayout-8P92wQdx.js";
import "react";
function NotFound({ seo }) {
  return /* @__PURE__ */ jsx(SiteLayout, { seo, children: /* @__PURE__ */ jsx("section", { className: "plan-grid flex min-h-[55vh] items-center bg-paper", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 py-20 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsx(
      "p",
      {
        "aria-hidden": "true",
        className: "font-display text-[7rem] font-bold leading-none tracking-[-0.04em] text-transparent sm:text-[10rem]",
        style: { WebkitTextStroke: "1.5px rgba(35,188,166,0.6)" },
        children: "404"
      }
    ),
    /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-3xl font-bold text-ink", children: "Ups! Stranica nije pronađena" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md text-ink-soft", children: "Stranica koju tražite ne postoji ili je premještena." }),
    /* @__PURE__ */ jsx(
      Link,
      {
        href: "/",
        className: "mt-8 inline-block rounded-[3px] bg-teal-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-700",
        children: "Povratak na početnu"
      }
    )
  ] }) }) });
}
export {
  NotFound as default
};
