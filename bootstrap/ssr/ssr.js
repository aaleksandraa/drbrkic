import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { renderToString } from "react-dom/server";
const pages = /* @__PURE__ */ Object.assign({ "./pages/About.tsx": () => import("./assets/About-CGoXMFzz.js"), "./pages/Contact.tsx": () => import("./assets/Contact-vJGddNHu.js"), "./pages/DepartmentShow.tsx": () => import("./assets/DepartmentShow-CNQuHktb.js"), "./pages/DoctorIndex.tsx": () => import("./assets/DoctorIndex-W103hfsd.js"), "./pages/DoctorShow.tsx": () => import("./assets/DoctorShow-D4E0YGqu.js"), "./pages/Home.tsx": () => import("./assets/Home-DIxwE7_w.js"), "./pages/NewsIndex.tsx": () => import("./assets/NewsIndex-B8FHfQiS.js"), "./pages/NewsShow.tsx": () => import("./assets/NewsShow-C8yQKxCL.js"), "./pages/NotFound.tsx": () => import("./assets/NotFound-DqV13o-e.js"), "./pages/PriceList.tsx": () => import("./assets/PriceList-cKLYkUte.js"), "./pages/ServiceShow.tsx": () => import("./assets/ServiceShow-DndT7lJh.js") });
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => title,
    resolve: (name) => {
      const resolved = pages[`./pages/${name}.tsx`];
      if (!resolved) throw new Error(`Page not found: ${name}`);
      return resolved().then((module) => module.default);
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
