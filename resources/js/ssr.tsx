import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { renderToString } from 'react-dom/server';
import type { ComponentType } from 'react';

const pages = import.meta.glob<{ default: ComponentType<any> }>('./pages/**/*.tsx');

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => title,
        resolve: (name) => {
            const resolved = pages[`./pages/${name}.tsx`];
            if (!resolved) throw new Error(`Page not found: ${name}`);
            return resolved().then((module) => module.default);
        },
        setup: ({ App, props }) => <App {...props} />,
    }),
);
