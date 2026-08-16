import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
function Reveal({ children, as: Tag = "div", delay = 0, className = "", id }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add("reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(Tag, { ref, id, className, style: { "--reveal-delay": `${delay}ms` }, children });
}
export {
  Reveal as R
};
