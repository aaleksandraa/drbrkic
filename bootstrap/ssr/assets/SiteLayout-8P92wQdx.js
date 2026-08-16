import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { usePage, Link, Head } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
function isPreparationGuide(value) {
  return typeof value === "object" && value !== null && Array.isArray(value.sections);
}
const telHref = (phone) => `tel:+387${phone.replace(/[^0-9]/g, "").replace(/^0/, "")}`;
function phoneHref(phone) {
  const trimmed = phone.trim();
  if (trimmed.startsWith("+") || trimmed.startsWith("00")) {
    return `tel:${trimmed.replace(/[^\d+]/g, "").replace(/^00/, "+")}`;
  }
  return telHref(trimmed);
}
function whatsappHref(phone) {
  return `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;
}
function viberHref(phone) {
  return `viber://chat?number=%2B${phone.replace(/[^0-9]/g, "")}`;
}
const mapsHref = (address, city = "Doboj") => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`ZU SC Dr Brkić, ${address}, ${city}`)}`;
const mapsNavHref = (address, city = "Doboj") => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`ZU SC Dr Brkić, ${address}, ${city}`)}`;
const priceListHref = (hash) => hash ? `/cjenovnik#${hash}` : "/cjenovnik";
const labels = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn"
};
function FacebookIcon({ className }) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M13.5 21v-7.1h2.38l.36-2.77H13.5V9.36c0-.8.22-1.35 1.38-1.35h1.47V5.54A19.5 19.5 0 0014.2 5.4c-2.18 0-3.67 1.33-3.67 3.77v1.96H8.25v2.77h2.28V21H13.5z" }) });
}
function InstagramIcon({ className }) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className, fill: "none", stroke: "currentColor", strokeWidth: "1.6", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("rect", { x: "3.6", y: "3.6", width: "16.8", height: "16.8", rx: "4.4" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3.7" }),
    /* @__PURE__ */ jsx("circle", { cx: "17.15", cy: "6.85", r: "0.9", fill: "currentColor", stroke: "none" })
  ] });
}
function LinkedInIcon({ className }) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M6.54 9H3.9v12h2.64V9zM5.22 3.5A1.53 1.53 0 103.7 5.03 1.53 1.53 0 005.22 3.5zM20.1 13.08V21h-2.63v-7.36c0-1.85-.66-3.11-2.32-3.11a2.5 2.5 0 00-2.35 1.67 3.13 3.13 0 00-.15 1.12V21H10V9h2.53v1.64h.04a2.77 2.77 0 012.5-1.78c1.82 0 3.03 1.19 3.03 3.74z" }) });
}
const icons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon
};
function SocialIcons({
  networks,
  className = "",
  iconClassName = "size-4"
}) {
  const { settings } = usePage().props;
  const hrefs = {
    facebook: settings.facebook,
    instagram: settings.instagram,
    linkedin: settings.linkedin
  };
  return /* @__PURE__ */ jsx("div", { className: `flex items-center gap-1 ${className}`, children: networks.map((network) => {
    const href = hrefs[network];
    if (!href) return null;
    const Icon = icons[network];
    return /* @__PURE__ */ jsx(
      "a",
      {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": labels[network],
        className: "flex size-8 items-center justify-center text-current transition-colors hover:text-white",
        children: /* @__PURE__ */ jsx(Icon, { className: iconClassName })
      },
      network
    );
  }) });
}
const itemCls = "transition-colors hover:text-white";
function TopBar() {
  const { settings } = usePage().props;
  const mapsUrl = mapsHref(settings.address, settings.city);
  return /* @__PURE__ */ jsx("div", { className: "bg-teal-950 text-[0.8125rem] font-medium leading-none tracking-[-0.011em] text-teal-100/80", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-9 max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        href: "/#dvadeset-naslov",
        className: `flex items-center gap-2.5 whitespace-nowrap text-teal-300 ${itemCls}`,
        children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "inline-block size-1.5 rounded-full bg-teal-400" }),
          "20 godina sa vama",
          /* @__PURE__ */ jsx("span", { className: "hidden text-teal-100/45 sm:inline", children: "2006 — 2026" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 overflow-hidden whitespace-nowrap", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: mapsUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `hidden lg:inline ${itemCls}`,
          children: [
            settings.address,
            ", ",
            settings.city
          ]
        }
      ),
      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "hidden h-3 w-px bg-white/15 lg:inline-block" }),
      /* @__PURE__ */ jsx(Link, { href: "/kontakt", className: `hidden md:inline ${itemCls}`, children: settings.hoursWeekdays }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "hidden h-3 w-px bg-white/15 md:inline-block" }),
      /* @__PURE__ */ jsx("a", { href: `mailto:${settings.email}`, className: `hidden xl:inline ${itemCls}`, children: settings.email }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "hidden h-3 w-px bg-white/15 xl:inline-block" }),
      /* @__PURE__ */ jsx(SocialIcons, { networks: ["facebook", "instagram"] })
    ] })
  ] }) });
}
const mainLinks = [
  { label: "Početna", href: "/" },
  { label: "O nama", href: "/o-nama" },
  { label: "Doktori", href: "/doktori" },
  { label: "Novosti", href: "/novosti" },
  { label: "Cjenovnik", href: "/cjenovnik" },
  { label: "Kontakt", href: "/kontakt" }
];
const iconBtn = "flex size-11 items-center justify-center rounded-[3px] border border-ink/15 text-ink hover:border-teal-600 hover:text-teal-700";
function MapPinIcon() {
  return /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 20 20", className: "size-5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ jsx("path", { d: "M10 17.5s5.5-4.7 5.5-9.1a5.5 5.5 0 10-11 0c0 4.4 5.5 9.1 5.5 9.1z" }),
    /* @__PURE__ */ jsx("circle", { cx: "10", cy: "8.4", r: "1.7" })
  ] });
}
function Header() {
  const { settings, nav } = usePage().props;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const navRef = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);
  const linkCls = "px-3 py-2 text-[0.9375rem] font-medium text-ink hover:text-teal-700 transition-colors";
  const mapsUrl = mapsNavHref(settings.address, settings.city);
  return /* @__PURE__ */ jsxs("header", { className: `sticky top-0 z-40 border-b bg-paper/95 backdrop-blur transition-shadow ${scrolled ? "border-ink/10 shadow-[0_1px_0_rgba(20,28,30,0.06),0_8px_24px_-16px_rgba(20,28,30,0.25)]" : "border-transparent"}`, children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#sadrzaj",
        className: "absolute left-3 top-3 z-50 -translate-y-24 bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0",
        children: "Preskočite na sadržaj"
      }
    ),
    /* @__PURE__ */ jsxs("nav", { ref: navRef, "aria-label": "Glavna navigacija", className: "mx-auto flex h-[68px] max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[76px] lg:px-10", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", className: "shrink-0", "aria-label": "ZU Dr Brkić – početna stranica", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/logo-dr-brkic.png",
          alt: "ZU Dr Brkić – zdravstvena ustanova Doboj",
          width: 1024,
          height: 323,
          className: "h-9 w-auto lg:h-10"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden items-center xl:flex", children: [
        /* @__PURE__ */ jsx(Link, { href: "/", className: linkCls, children: "Početna" }),
        /* @__PURE__ */ jsx(Link, { href: "/o-nama", className: linkCls, children: "O nama" }),
        [
          ["odjeljenja", "Odjeljenja", nav.departments.map((d) => ({ label: d.name, href: `/odjeljenja/${d.slug}` }))],
          ["usluge", "Usluge", nav.services.map((s) => ({ label: s.name, href: `/usluge/${s.slug}` }))]
        ].map(([key, label, items]) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              "aria-expanded": open === key,
              "aria-haspopup": "true",
              className: `${linkCls} flex items-center gap-1.5`,
              onClick: () => setOpen(open === key ? null : key),
              children: [
                label,
                /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 10 6", className: `h-1.5 w-2.5 transition-transform ${open === key ? "rotate-180" : ""}`, children: /* @__PURE__ */ jsx("path", { d: "M1 1l4 4 4-4", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }) })
              ]
            }
          ),
          open === key && /* @__PURE__ */ jsx("div", { className: `absolute left-0 top-full border border-ink/10 bg-paper shadow-[0_20px_50px_-24px_rgba(20,28,30,0.4)] ${key === "usluge" ? "grid w-[560px] grid-cols-2 gap-x-2 p-4" : "w-72 p-4"}`, children: items.map((item) => /* @__PURE__ */ jsx(
            Link,
            {
              href: item.href,
              onClick: () => setOpen(null),
              className: "block border-l border-ink/10 px-4 py-2 text-[0.9rem] text-ink-soft transition-colors hover:border-teal-500 hover:bg-teal-50 hover:text-teal-800",
              children: item.label
            },
            item.href
          )) })
        ] }, key)),
        /* @__PURE__ */ jsx(Link, { href: "/doktori", className: linkCls, children: "Doktori" }),
        /* @__PURE__ */ jsx(Link, { href: "/novosti", className: linkCls, children: "Novosti" }),
        /* @__PURE__ */ jsx(Link, { href: "/cjenovnik", className: linkCls, children: "Cjenovnik" }),
        /* @__PURE__ */ jsx(Link, { href: "/kontakt", className: linkCls, children: "Kontakt" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-4 xl:flex", children: [
        /* @__PURE__ */ jsxs("a", { href: telHref(settings.phonePrimary), className: "group text-right", children: [
          /* @__PURE__ */ jsx("span", { className: "meta-label block text-ink-faint", children: "Recepcija" }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-[1.05rem] font-semibold tabular-nums text-ink transition-colors group-hover:text-teal-700", children: settings.phonePrimary })
        ] }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/kontakt",
            className: "rounded-[3px] bg-teal-600 px-5 py-2.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-teal-700",
            children: "Zakažite pregled"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: mapsUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Navigacija do ustanove na Google Maps",
            className: iconBtn,
            children: /* @__PURE__ */ jsx(MapPinIcon, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 xl:hidden", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: mapsUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Navigacija do ustanove na Google Maps",
            className: iconBtn,
            children: /* @__PURE__ */ jsx(MapPinIcon, {})
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: telHref(settings.phonePrimary),
            "aria-label": `Pozovite ${settings.phonePrimary}`,
            className: iconBtn,
            children: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 20 20", className: "size-5", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M3.5 3.5h3l1.5 4-2 1.5a12 12 0 005 5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5C7.6 17.6 2.4 12.4 2 5.1A1.5 1.5 0 013.5 3.5z" }) })
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            "aria-expanded": mobileOpen,
            "aria-label": "Otvorite meni",
            onClick: () => setMobileOpen(!mobileOpen),
            className: "flex size-11 flex-col items-center justify-center gap-[5px] rounded-[3px] border border-ink/15",
            children: [
              /* @__PURE__ */ jsx("span", { className: `h-px w-5 bg-ink transition-transform ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}` }),
              /* @__PURE__ */ jsx("span", { className: `h-px w-5 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}` }),
              /* @__PURE__ */ jsx("span", { className: `h-px w-5 bg-ink transition-transform ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}` })
            ]
          }
        )
      ] })
    ] }),
    mobileOpen && /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-full z-40 h-[calc(100dvh-68px)] overflow-y-auto bg-paper xl:hidden", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Mobilna navigacija", className: "flex min-h-full flex-col px-6 py-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 divide-y divide-ink/8", children: [
        mainLinks.slice(0, 2).map((l) => /* @__PURE__ */ jsx(Link, { href: l.href, onClick: () => setMobileOpen(false), className: "block py-4 font-display text-xl font-semibold", children: l.label }, l.href)),
        [
          ["odjeljenja", "Odjeljenja", nav.departments.map((d) => ({ label: d.name, href: `/odjeljenja/${d.slug}` }))],
          ["usluge", "Usluge", nav.services.map((s) => ({ label: s.name, href: `/usluge/${s.slug}` }))]
        ].map(([key, label, items]) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              "aria-expanded": mobileGroup === key,
              onClick: () => setMobileGroup(mobileGroup === key ? null : key),
              className: "flex w-full items-center justify-between py-4 font-display text-xl font-semibold",
              children: [
                label,
                /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 10 6", className: `h-2 w-3 transition-transform ${mobileGroup === key ? "rotate-180" : ""}`, children: /* @__PURE__ */ jsx("path", { d: "M1 1l4 4 4-4", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }) })
              ]
            }
          ),
          mobileGroup === key && /* @__PURE__ */ jsx("div", { className: "border-l border-teal-500/50 pb-4 pl-4", children: items.map((item) => /* @__PURE__ */ jsx(Link, { href: item.href, onClick: () => setMobileOpen(false), className: "block py-2.5 text-[0.95rem] text-ink-soft", children: item.label }, item.href)) })
        ] }, key)),
        mainLinks.slice(2).map((l) => /* @__PURE__ */ jsx(Link, { href: l.href, onClick: () => setMobileOpen(false), className: "block py-4 font-display text-xl font-semibold", children: l.label }, l.href))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-3 border-t border-ink/10 pt-6 pb-10", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: mapsUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center justify-center gap-2 rounded-[3px] border border-ink/20 px-5 py-3.5 font-semibold",
            children: "Navigacija"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: telHref(settings.phonePrimary),
            className: "flex items-center justify-center gap-2 rounded-[3px] border border-ink/20 px-5 py-3.5 font-semibold",
            children: settings.phonePrimary
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: "/kontakt",
            onClick: () => setMobileOpen(false),
            className: "flex items-center justify-center rounded-[3px] bg-teal-600 px-5 py-3.5 font-semibold text-white",
            children: "Zakažite pregled"
          }
        )
      ] })
    ] }) })
  ] });
}
function ModuleMark({ className = "", tone = "teal" }) {
  const filled = tone === "teal" ? "bg-teal-600" : "bg-teal-400";
  const empty = tone === "teal" ? "border border-ink/15" : "border border-white/20";
  return /* @__PURE__ */ jsxs("span", { "aria-hidden": "true", className: `grid w-fit grid-cols-3 gap-[3px] ${className}`, children: [
    /* @__PURE__ */ jsx("span", { className: `size-[7px] rounded-[1.5px] bg-crimson` }),
    /* @__PURE__ */ jsx("span", { className: `size-[7px] rounded-[1.5px] ${filled}` }),
    /* @__PURE__ */ jsx("span", { className: `size-[7px] rounded-[1.5px] ${empty}` }),
    /* @__PURE__ */ jsx("span", { className: `size-[7px] rounded-[1.5px] ${filled}` }),
    /* @__PURE__ */ jsx("span", { className: `size-[7px] rounded-[1.5px] ${filled}` }),
    /* @__PURE__ */ jsx("span", { className: `size-[7px] rounded-[1.5px] ${filled}` }),
    /* @__PURE__ */ jsx("span", { className: `size-[7px] rounded-[1.5px] ${empty}` }),
    /* @__PURE__ */ jsx("span", { className: `size-[7px] rounded-[1.5px] ${filled}` }),
    /* @__PURE__ */ jsx("span", { className: `size-[7px] rounded-[1.5px] ${empty}` })
  ] });
}
function SectionMeta({
  index,
  label,
  tone = "dark",
  className = ""
}) {
  const color = tone === "dark" ? "text-ink-soft" : "text-teal-300";
  const line = tone === "dark" ? "bg-ink/15" : "bg-white/20";
  return /* @__PURE__ */ jsxs("p", { className: `meta-label flex items-center gap-4 ${color} ${className}`, children: [
    /* @__PURE__ */ jsx("span", { className: tone === "light" ? "text-teal-300" : "text-teal-600", children: index }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: `h-px w-10 ${line}` }),
    /* @__PURE__ */ jsx("span", { children: label })
  ] });
}
function Footer() {
  const { settings, nav } = usePage().props;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const quickLinks = [
    { label: "Početna", href: "/" },
    { label: "O nama", href: "/o-nama" },
    { label: "Doktori", href: "/doktori" },
    { label: "Novosti", href: "/novosti" },
    { label: "Cjenovnik", href: "/cjenovnik" },
    { label: "Kontakt", href: "/kontakt" }
  ];
  const linkRow = "flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 text-[0.9rem] lg:flex-col lg:items-start lg:gap-y-2.5 lg:text-[0.95rem]";
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-teal-950 text-teal-100/80", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "mesh-dark absolute inset-0 opacity-60" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-[1360px] px-4 pt-12 pb-[calc(5.75rem+env(safe-area-inset-bottom))] sm:px-6 lg:px-10 lg:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-10 text-center lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12 lg:text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center lg:items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block bg-white p-3", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/images/logo-dr-brkic.png",
              alt: "ZU Dr Brkić – zdravstvena ustanova Doboj",
              width: 1024,
              height: 323,
              loading: "lazy",
              className: "h-9 w-auto"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xs text-[0.95rem] leading-relaxed", children: "Savremeni dijagnostički i specijalistički centar u Doboju. Više medicinskih usluga na jednom mjestu." }),
          /* @__PURE__ */ jsxs("p", { className: "meta-label mt-6 flex items-center justify-center gap-3 text-teal-300 lg:justify-start", children: [
            /* @__PURE__ */ jsx(ModuleMark, { tone: "light" }),
            "20 godina sa vama"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("nav", { "aria-label": "Brzi linkovi", children: [
          /* @__PURE__ */ jsx("h2", { className: "meta-label mb-4 text-teal-300 lg:mb-5", children: "Brzi linkovi" }),
          /* @__PURE__ */ jsx("ul", { className: linkRow, children: quickLinks.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: l.href, className: "transition-colors hover:text-white", children: l.label }) }, l.href)) })
        ] }),
        /* @__PURE__ */ jsxs("nav", { "aria-label": "Odjeljenja", children: [
          /* @__PURE__ */ jsx("h2", { className: "meta-label mb-4 text-teal-300 lg:mb-5", children: "Odjeljenja" }),
          /* @__PURE__ */ jsx("ul", { className: linkRow, children: nav.departments.map((d) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: `/odjeljenja/${d.slug}`, className: "transition-colors hover:text-white", children: d.name }) }, d.slug)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center lg:items-start", children: [
          /* @__PURE__ */ jsx("h2", { className: "meta-label mb-4 text-teal-300 lg:mb-5", children: "Kontakt" }),
          /* @__PURE__ */ jsxs("address", { className: "space-y-2.5 text-[0.95rem] not-italic", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              settings.address,
              ", ",
              settings.city
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 lg:justify-start", children: [
              /* @__PURE__ */ jsx("a", { href: telHref(settings.phonePrimary), className: "tabular-nums transition-colors hover:text-white", children: settings.phonePrimary }),
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "text-white/30", children: "·" }),
              /* @__PURE__ */ jsx("a", { href: telHref(settings.phoneSecondary), className: "tabular-nums transition-colors hover:text-white", children: settings.phoneSecondary })
            ] }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: `mailto:${settings.email}`, className: "transition-colors hover:text-white", children: settings.email }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 text-[0.9rem] lg:border-l lg:border-teal-500/40 lg:pl-4", children: [
            /* @__PURE__ */ jsx("p", { children: settings.hoursWeekdays }),
            /* @__PURE__ */ jsx("p", { children: settings.hoursSaturday })
          ] }),
          /* @__PURE__ */ jsx(
            SocialIcons,
            {
              networks: ["facebook", "instagram", "linkedin"],
              className: "mt-6 justify-center lg:justify-start",
              iconClassName: "size-[1.05rem]"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-[0.85rem] text-teal-100/50 sm:mt-14 sm:flex-row sm:justify-between sm:text-left", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "© ",
          year,
          " ZU SC Dr Brkić. Sva prava zadržana."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "meta-label", children: "Doboj · EST. 2006" })
      ] })
    ] })
  ] });
}
function MobileContactBar() {
  const { settings } = usePage().props;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-ink/10 bg-paper/95 backdrop-blur transition-transform duration-300 lg:hidden ${visible ? "translate-y-0" : "translate-y-full"}`,
      style: { paddingBottom: "env(safe-area-inset-bottom)" },
      children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: telHref(settings.phonePrimary),
            className: "flex h-[52px] items-center justify-center gap-2 border-r border-ink/10 font-semibold text-ink",
            children: [
              /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 20 20", className: "size-4 text-teal-600", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsx("path", { d: "M3.5 3.5h3l1.5 4-2 1.5a12 12 0 005 5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5C7.6 17.6 2.4 12.4 2 5.1A1.5 1.5 0 013.5 3.5z" }) }),
              "Pozovite"
            ]
          }
        ),
        /* @__PURE__ */ jsx(Link, { href: "/kontakt", className: "flex h-[52px] items-center justify-center bg-teal-600 font-semibold text-white", children: "Zakažite" })
      ]
    }
  );
}
function Seo({ seo }) {
  return /* @__PURE__ */ jsxs(Head, { title: seo.title, children: [
    /* @__PURE__ */ jsx("meta", { name: "description", content: seo.description }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: seo.canonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: seo.ogTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: seo.ogDescription }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: seo.ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: seo.canonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: seo.ogImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "bs_BA" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    seo.jsonLd.map((schema, i) => /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
      },
      i
    ))
  ] });
}
function SiteLayout({ seo, children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Seo, { seo }),
    /* @__PURE__ */ jsx(TopBar, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { id: "sadrzaj", children }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(MobileContactBar, {})
  ] });
}
export {
  SiteLayout as S,
  SectionMeta as a,
  mapsHref as b,
  phoneHref as c,
  isPreparationGuide as i,
  mapsNavHref as m,
  priceListHref as p,
  telHref as t,
  viberHref as v,
  whatsappHref as w
};
