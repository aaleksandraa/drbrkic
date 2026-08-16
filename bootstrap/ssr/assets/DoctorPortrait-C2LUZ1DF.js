import { jsx } from "react/jsx-runtime";
import { C as ClinicImage, i as isClinicCrop } from "./ClinicImage-Cuefd_Mz.js";
const PORTRAIT_CROPS = ["mreza", "krilo", "detalj"];
function doctorCrop(slug) {
  return PORTRAIT_CROPS[slug.length % PORTRAIT_CROPS.length];
}
function DoctorPortrait({
  name,
  photo,
  crop,
  sizes = "(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw",
  className = "",
  priority = false
}) {
  const resolvedCrop = isClinicCrop(crop) ? crop : "mreza";
  return /* @__PURE__ */ jsx("div", { className: `relative overflow-hidden bg-teal-950 ${className}`, children: photo ? /* @__PURE__ */ jsx(
    "img",
    {
      src: photo,
      alt: name,
      width: 400,
      height: 500,
      loading: priority ? "eager" : "lazy",
      fetchPriority: priority ? "high" : void 0,
      decoding: priority ? "sync" : "async",
      className: "size-full object-cover object-top"
    }
  ) : /* @__PURE__ */ jsx(
    ClinicImage,
    {
      crop: resolvedCrop,
      decorative: true,
      priority,
      className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
      sizes
    }
  ) });
}
export {
  DoctorPortrait as D,
  doctorCrop as d
};
