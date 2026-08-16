import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import type { ComponentType } from 'react';

const pages = import.meta.glob<{ default: ComponentType<any> }>('./pages/**/*.tsx');

createInertiaApp({
    title: (title) => title,
    resolve: (name) => {
        const page = pages[`./pages/${name}.tsx`];
        if (!page) throw new Error(`Page not found: ${name}`);
        return page().then((module) => module.default);
    },
    setup({ el, App, props }) {
        if (el.hasChildNodes()) {
            hydrateRoot(el, <App {...props} />);
        } else {
            createRoot(el).render(<App {...props} />);
        }
    },
    progress: {
        color: '#23bca6',
    },
});
