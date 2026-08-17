import { Link } from '@inertiajs/react';
import type { ComponentType, SVGProps } from 'react';
import Reveal from '@/components/Reveal';
import type { HomeDepartment } from '@/types';
import {
    FamilyIcon,
    MedkitIcon,
    MicroscopeIcon,
    ScanIcon,
    StethoscopeIcon,
    TherapyIcon,
} from '@/components/home-v2/icons';

type IconComp = ComponentType<SVGProps<SVGSVGElement>>;

const ACCESS: Record<string, { title?: string; text: string; icon: IconComp }> = {
    radiologija: { title: 'Radiologija i UZV', text: 'RTG, UZV i dijagnostika', icon: ScanIcon },
    laboratorija: { text: 'Savremene laboratorijske analize', icon: MicroscopeIcon },
    'porodicna-medicina': { text: 'Zdravlje za cijelu porodicu', icon: FamilyIcon },
    'medicina-rada': { text: 'Pregledi i zaštita na radu', icon: MedkitIcon },
    fizijatrija: { text: 'Rehabilitacija i terapije', icon: TherapyIcon },
    'specijalisticki-pregledi': { text: 'Stručni tim i individualni pristup', icon: StethoscopeIcon },
};

export default function QuickAccessV2({ departments }: { departments: HomeDepartment[] }) {
    return (
        <section id="usluge" aria-labelledby="brzi-pristup-naslov" className="bg-white py-12 lg:py-16">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal>
                    <h2
                        id="brzi-pristup-naslov"
                        className="font-display text-[1.65rem] font-bold tracking-[-0.02em] text-ink sm:text-[1.85rem]"
                    >
                        Brzi pristup uslugama
                    </h2>
                </Reveal>

                <Reveal className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {departments.map((department) => {
                        const meta = ACCESS[department.slug];
                        const Icon = meta?.icon ?? StethoscopeIcon;
                        const title = meta?.title ?? department.name;
                        const text = meta?.text ?? department.shortDescription ?? 'Saznajte više';

                        return (
                            <Link
                                key={department.slug}
                                href={`/odjeljenja/${department.slug}`}
                                className="group rounded-md border border-ink/8 bg-white px-4 py-5 transition-colors hover:border-teal-500/40 hover:bg-teal-50/40"
                            >
                                <Icon className="size-9 text-teal-600" />
                                <h3 className="mt-4 font-display text-[0.98rem] font-semibold leading-snug text-ink group-hover:text-teal-800">
                                    {title}
                                </h3>
                                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ink-soft">{text}</p>
                            </Link>
                        );
                    })}
                </Reveal>
            </div>
        </section>
    );
}
