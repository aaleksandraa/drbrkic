import { jsxs, jsx } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import { S as SiteLayout, t as telHref, m as mapsNavHref, b as mapsHref } from "./SiteLayout-8P92wQdx.js";
import { P as PageHero } from "./PageHero-Cg7Yz0UG.js";
import { C as ClinicImage } from "./ClinicImage-Cuefd_Mz.js";
import "react";
function Contact({ seo }) {
  const { settings } = usePage().props;
  const query = `ZU SC Dr Brkić, ${settings.address}, ${settings.city}`;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return /* @__PURE__ */ jsxs(SiteLayout, { seo, children: [
    /* @__PURE__ */ jsx(
      PageHero,
      {
        label: "Kontakt",
        title: "Kontaktirajte nas",
        intro: "Tu smo za vas – pozovite, pišite ili nas posjetite lično. Rado ćemo odgovoriti na sva vaša pitanja.",
        image: "ulaz",
        crumbs: [{ label: "Početna", href: "/" }, { label: "Kontakt" }]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "border-b border-ink/10 bg-mineral", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-[1360px] sm:grid-cols-2 xl:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "border-b border-ink/10 px-4 py-6 sm:border-r sm:px-6 lg:px-10 xl:border-b-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "meta-label text-ink-faint", children: "Telefon" }),
        /* @__PURE__ */ jsx("a", { href: telHref(settings.phonePrimary), className: "mt-2 block font-display text-lg font-bold tabular-nums text-ink hover:text-teal-700", children: settings.phonePrimary }),
        /* @__PURE__ */ jsx("a", { href: telHref(settings.phoneSecondary), className: "block font-display font-semibold tabular-nums text-ink-soft hover:text-teal-700", children: settings.phoneSecondary })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-b border-ink/10 px-4 py-6 sm:px-6 lg:px-10 xl:border-b-0 xl:border-r", children: [
        /* @__PURE__ */ jsx("h2", { className: "meta-label text-ink-faint", children: "Email" }),
        /* @__PURE__ */ jsx("a", { href: `mailto:${settings.email}`, className: "mt-2 block font-display text-lg font-bold text-ink hover:text-teal-700", children: settings.email }),
        /* @__PURE__ */ jsx("p", { className: "text-[0.88rem] text-ink-soft", children: "Pišite nam bilo kada" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:border-r sm:px-6 lg:px-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "meta-label text-ink-faint", children: "Adresa" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-lg font-bold text-ink", children: settings.address }),
        /* @__PURE__ */ jsxs("p", { className: "text-[0.88rem] text-ink-soft", children: [
          settings.city,
          ", BiH"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "border-t border-ink/10 px-4 py-6 sm:border-t-0 sm:px-6 lg:px-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "meta-label text-ink-faint", children: "Radno vrijeme" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 font-display font-bold text-ink", children: settings.hoursWeekdays }),
        /* @__PURE__ */ jsx("p", { className: "font-display font-semibold text-ink-soft", children: settings.hoursSaturday })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1360px] px-4 py-14 sm:px-6 lg:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-14 lg:grid-cols-[1.15fr_1fr]", children: [
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "mapa-naslov", children: [
        /* @__PURE__ */ jsx("h2", { id: "mapa-naslov", className: "font-display text-2xl font-bold text-ink", children: "Lokacija" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-2 text-[0.95rem] text-ink-soft", children: [
          "ZU SC Dr Brkić – ",
          settings.address,
          ", ",
          settings.city
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 overflow-hidden rounded-xl border border-ink/12", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            title: "Mapa – ZU SC Dr Brkić, Bukovica Mala bb, Doboj",
            src: embedSrc,
            className: "h-[min(70vh,640px)] w-full",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: mapsNavHref(settings.address, settings.city),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "meta-label text-teal-700 hover:text-teal-900",
              children: "Navigacija"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: mapsHref(settings.address, settings.city),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "meta-label text-teal-700 hover:text-teal-900",
              children: "Otvori u Google Maps"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { "aria-labelledby": "dolazak-naslov", children: [
        /* @__PURE__ */ jsx("h2", { id: "dolazak-naslov", className: "font-display text-2xl font-bold text-ink", children: "Kako do nas?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-[0.95rem] text-ink-soft", children: "Objekat se nalazi u Bukovici Maloj, oko pet minuta od centra Doboja." }),
        /* @__PURE__ */ jsx(ClinicImage, { crop: "fasada", className: "mt-6 aspect-[16/10] w-full rounded-xl object-cover", sizes: "(min-width: 1024px) 45vw, 100vw" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-2.5", children: ["Besplatan parking ispred ustanove", "5 minuta od centra Doboja", "Pristupačno za osobe sa invaliditetom"].map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-[0.95rem] text-ink-soft", children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mt-[8px] size-1.5 shrink-0 bg-teal-600" }),
          item
        ] }, item)) })
      ] })
    ] }) })
  ] });
}
export {
  Contact as default
};
