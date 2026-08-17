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
        <section id="usluge" aria-labelledby="brzi-pristup-naslov" className="bg-mineral py-14 lg:py-20">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal>
                    <h2
                        id="brzi-pristup-naslov"
                        className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl"
                    >
                        Brzi pristup uslugama
                    </h2>
                </Reveal>

                <Reveal className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
                    {departments.map((department) => {
                        const meta = ACCESS[department.slug];
                        const Icon = meta?.icon ?? StethoscopeIcon;
                        const title = meta?.title ?? department.name;
                        const text = meta?.text ?? department.shortDescription ?? 'Saznajte više';

                        return (
                            <Link
                                key={department.slug}
                                href={`/odjeljenja/${department.slug}`}
                                className="group rounded-lg border border-ink/10 bg-paper px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/40 hover:shadow-[0_16px_36px_-24px_rgba(13,61,54,0.4)]"
                            >
                                <Icon className="size-8 text-teal-600" />
                                <h3 className="mt-4 font-display text-[1.02rem] font-semibold leading-snug text-ink transition-colors group-hover:text-teal-800">
                                    {title}
                                </h3>
                                <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ink-soft">{text}</p>
                            </Link>
                        );
                    })}
                </Reveal>
            </div>
        </section>
    );
}
