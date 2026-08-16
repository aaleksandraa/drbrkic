import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { C as ClinicImage } from "./ClinicImage-Cuefd_Mz.js";
function PageHero({ label, title, intro, kicker, crumbs, children, image, photo }) {
  if (photo?.src || image) {
    const position = photo?.position ?? "object-center";
    return /* @__PURE__ */ jsxs("section", { "aria-label": label, className: "relative isolate overflow-hidden bg-teal-950", children: [
      photo?.src ? /* @__PURE__ */ jsxs("picture", { children: [
        photo.webp && /* @__PURE__ */ jsx("source", { type: "image/webp", srcSet: photo.webpSrcSet ?? photo.webp, sizes: "100vw" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: photo.src,
            srcSet: photo.srcSet ?? void 0,
            sizes: "100vw",
            alt: "",
            width: 1600,
            height: 685,
            loading: "eager",
            fetchPriority: "high",
            decoding: "sync",
            className: `absolute inset-0 -z-10 size-full object-cover ${position}`
          }
        )
      ] }) : /* @__PURE__ */ jsx(
        ClinicImage,
        {
          crop: image,
          priority: true,
          className: "absolute inset-0 -z-10 size-full object-cover object-center",
          sizes: "100vw"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": "true",
          className: "absolute inset-0 -z-10 bg-gradient-to-r from-teal-950/88 via-teal-950/62 to-teal-950/28"
        }
      ),
      /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-teal-950/70 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16", children: [
        crumbs && crumbs.length > 0 && /* @__PURE__ */ jsx("nav", { "aria-label": "Navigacioni put", className: "meta-label mb-6 flex flex-wrap items-center gap-2 text-white/55", children: crumbs.map((crumb, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          i > 0 && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "/" }),
          crumb.href ? /* @__PURE__ */ jsx(Link, { href: crumb.href, className: "transition-colors hover:text-teal-200", children: crumb.label }) : /* @__PURE__ */ jsx("span", { "aria-current": "page", className: "text-white/80", children: crumb.label })
        ] }, i)) }),
        kicker && /* @__PURE__ */ jsx("p", { className: "mb-3 text-[0.78rem] font-medium tracking-[0.04em] text-teal-200 [text-shadow:0_1px_12px_rgb(0_0_0/0.35)] sm:text-[0.85rem]", children: kicker }),
        /* @__PURE__ */ jsx("h1", { className: "max-w-4xl font-display text-3xl font-bold leading-[1.08] tracking-[-0.018em] text-white [text-shadow:0_1px_18px_rgb(0_0_0/0.35)] sm:text-4xl lg:text-[3rem]", children: title }),
        intro && /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-3xl text-[1.02rem] leading-relaxed text-white/85 [text-shadow:0_1px_12px_rgb(0_0_0/0.3)]", children: intro }),
        children && /* @__PURE__ */ jsx("div", { className: "page-hero-photo-actions mt-8", children })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx("section", { className: "plan-grid border-b border-ink/10 bg-paper", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16", children: [
    crumbs && crumbs.length > 0 && /* @__PURE__ */ jsx("nav", { "aria-label": "Navigacioni put", className: "meta-label mb-6 flex flex-wrap items-center gap-2 text-ink-faint", children: crumbs.map((crumb, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
      i > 0 && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "/" }),
      crumb.href ? /* @__PURE__ */ jsx(Link, { href: crumb.href, className: "transition-colors hover:text-teal-700", children: crumb.label }) : /* @__PURE__ */ jsx("span", { "aria-current": "page", className: "text-ink-soft", children: crumb.label })
    ] }, i)) }),
    kicker && /* @__PURE__ */ jsx("p", { className: "mb-3 text-[0.78rem] font-medium tracking-[0.04em] text-teal-700 sm:text-[0.85rem]", children: kicker }),
    /* @__PURE__ */ jsx("h1", { className: "max-w-4xl font-display text-3xl font-bold leading-[1.08] tracking-[-0.018em] text-ink sm:text-4xl lg:text-[3rem]", children: title }),
    intro && /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-3xl text-[1.02rem] leading-relaxed text-ink-soft", children: intro }),
    children
  ] }) });
}
export {
  PageHero as P
};
