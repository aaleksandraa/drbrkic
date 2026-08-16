import { jsx, jsxs } from "react/jsx-runtime";
const FASADA_SRC = "/images/dr-brkic-doboj.png";
const CROP_META = {
  fasada: {
    src: FASADA_SRC,
    alt: "Objekat ZU Dr Brkić u Doboju — specijalistička ordinacija i apoteka",
    width: 1602,
    height: 982
  },
  ulaz: {
    prefix: "ulaz",
    widths: [480, 768, 1200],
    alt: "Prizemlje i ulazni dio objekta ZU Dr Brkić u Doboju",
    width: 1200,
    height: 427
  },
  mreza: {
    prefix: "mreza",
    widths: [480, 768, 1200],
    alt: "Tirkizna fasadna mreža objekta ZU Dr Brkić u Doboju",
    width: 1200,
    height: 1299
  },
  krilo: {
    prefix: "krilo",
    widths: [480, 768, 1200],
    alt: "Lijevo krilo objekta ZU Dr Brkić u Doboju",
    width: 1200,
    height: 1133
  },
  nebo: {
    prefix: "nebo",
    widths: [480, 768, 1200],
    alt: "Gornji dio fasade ZU Dr Brkić prema nebu",
    width: 1200,
    height: 352
  },
  detalj: {
    prefix: "detalj",
    widths: [480, 768, 1200],
    alt: "Detalj tirkizne geometrije fasade ZU Dr Brkić",
    width: 1200,
    height: 1728
  },
  natpis: {
    prefix: "natpis",
    widths: [480, 768, 1200],
    alt: "Natpis ZU Dr Brkić na fasadi objekta u Doboju",
    width: 1200,
    height: 709
  }
};
function isClinicCrop(value) {
  return Boolean(value && value in CROP_META);
}
function isCustomImagePath(value) {
  return Boolean(value && (value.startsWith("/") || value.startsWith("http")));
}
function ClinicImage({
  crop = "fasada",
  alt,
  className,
  sizes = "100vw",
  priority = false,
  decorative = false
}) {
  if (isCustomImagePath(crop)) {
    return /* @__PURE__ */ jsx(
      "img",
      {
        src: crop,
        alt: decorative ? "" : alt ?? "",
        width: 670,
        height: 446,
        loading: priority ? "eager" : "lazy",
        fetchPriority: priority ? "high" : void 0,
        decoding: priority ? "sync" : "async",
        className
      }
    );
  }
  const key = isClinicCrop(crop) ? crop : "fasada";
  const meta = CROP_META[key];
  const resolvedAlt = decorative ? "" : alt ?? meta.alt;
  const loading = priority ? "eager" : "lazy";
  const fetchPriority = priority ? "high" : void 0;
  const decoding = priority ? "sync" : "async";
  if (meta.src) {
    return /* @__PURE__ */ jsx(
      "img",
      {
        src: meta.src,
        alt: resolvedAlt,
        width: meta.width,
        height: meta.height,
        loading,
        fetchPriority,
        decoding,
        className
      }
    );
  }
  const widths = meta.widths ?? [];
  const webp = widths.map((w) => `/images/klinika/${meta.prefix}-${w}.webp ${w}w`).join(", ");
  const jpg = widths.map((w) => `/images/klinika/${meta.prefix}-${w}.jpg ${w}w`).join(", ");
  const fallback = `/images/klinika/${meta.prefix}-${widths[widths.length - 1]}.jpg`;
  return /* @__PURE__ */ jsxs("picture", { children: [
    /* @__PURE__ */ jsx("source", { type: "image/webp", srcSet: webp, sizes }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: fallback,
        srcSet: jpg,
        sizes,
        alt: resolvedAlt,
        width: meta.width,
        height: meta.height,
        loading,
        fetchPriority,
        decoding,
        className
      }
    )
  ] });
}
export {
  ClinicImage as C,
  isCustomImagePath as a,
  isClinicCrop as i
};
