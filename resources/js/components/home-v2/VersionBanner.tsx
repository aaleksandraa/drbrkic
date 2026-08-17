import { Link } from '@inertiajs/react';

export default function VersionBanner() {
    return (
        <div className="border-b border-teal-700/20 bg-teal-950 text-[0.8rem] text-teal-100/85">
            <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-10">
                <p>
                    <span className="font-semibold text-white">Prijedlog početne</span>
                    <span aria-hidden="true" className="mx-2 text-white/35">
                        ·
                    </span>
                    verzija 2 — trenutna stranica ostaje glavna
                </p>
                <Link href="/" className="font-semibold text-teal-300 transition-colors hover:text-white">
                    Pogledajte trenutnu početnu →
                </Link>
            </div>
        </div>
    );
}
