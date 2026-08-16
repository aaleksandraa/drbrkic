import { jsxs, jsx } from "react/jsx-runtime";
import { C as ClinicImage } from "./ClinicImage-Cuefd_Mz.js";
function PhotoGallery({ crops, title = "Prostor ustanove" }) {
  const items = crops.filter(Boolean).slice(0, 4);
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxs("section", { "aria-labelledby": "galerija-naslov", className: "mt-12", children: [
    /* @__PURE__ */ jsx("h2", { id: "galerija-naslov", className: "font-display text-2xl font-bold text-ink", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-xl text-[0.92rem] leading-relaxed text-ink-soft", children: "Fotografije objekta ZU Dr Brkić u Doboju — tirkizna fasada, metalna mreža i ulazni dio ustanove." }),
    /* @__PURE__ */ jsx("ul", { className: "mt-5 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4", children: items.map((crop, i) => /* @__PURE__ */ jsx("li", { className: `media-zoom ${i === 0 ? "col-span-2 lg:col-span-2" : ""}`, children: /* @__PURE__ */ jsx(
      ClinicImage,
      {
        crop,
        sizes: i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw",
        className: `w-full object-cover ${i === 0 ? "aspect-[16/10] lg:aspect-[16/9]" : "aspect-[4/3]"}`
      }
    ) }, `${crop}-${i}`)) })
  ] });
}
export {
  PhotoGallery as P
};
