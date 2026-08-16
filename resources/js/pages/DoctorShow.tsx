import { Link, usePage } from '@inertiajs/react';
import SiteLayout from '@/layout/SiteLayout';
import DoctorPortrait, { doctorCrop } from '@/components/DoctorPortrait';
import PhoneIcon from '@/components/PhoneIcon';
import { SectionMeta } from '@/components/Motif';
import type { NavItem, SeoData, SharedProps } from '@/types';
import { mapsHref, telHref } from '@/types';

interface DoctorShowProps {
    doctor: {
        name: string;
        slug: string;
        title: string | null;
        specialty: string | null;
        experience: string | null;
        bio: string | null;
        education: string | null;
        specializations: string | null;
        photo: string | null;
        department: NavItem | null;
        services: NavItem[];
    };
    otherDoctors: { name: string; slug: string; title: string | null; photo: string | null }[];
    seo: SeoData;
}

function PinIcon({ className }: { className?: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 17.5s5.5-4.7 5.5-9.1a5.5 5.5 0 10-11 0c0 4.4 5.5 9.1 5.5 9.1z" />
            <circle cx="10" cy="8.4" r="1.7" />
        </svg>
    );
}

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="10" cy="10" r="7.25" />
            <path d="M10 6.5V10l2.5 1.75" />
        </svg>
    );
}

export default function DoctorShow({ doctor, otherDoctors, seo }: DoctorShowProps) {
    const { settings } = usePage<SharedProps>().props;
    const educationLines = (doctor.education ?? '').split('\n').map((line) => line.trim()).filter(Boolean);

    return (
        <SiteLayout seo={seo}>
            <div className="border-b border-ink/10 bg-paper">
                <div className="mx-auto max-w-[1360px] px-4 py-5 sm:px-6 lg:px-10">
                    <nav aria-label="Navigacioni put" className="meta-label flex flex-wrap items-center gap-2 text-ink-faint">
                        <Link href="/" className="transition-colors hover:text-teal-700">Početna</Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/doktori" className="transition-colors hover:text-teal-700">Doktori</Link>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page" className="text-ink-soft">{doctor.name}</span>
                    </nav>
                </div>
            </div>

            <div className="mx-auto max-w-[1360px] px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10 lg:gap-14">
                    <DoctorPortrait
                        name={doctor.name}
                        photo={doctor.photo}
                        crop={doctorCrop(doctor.slug)}
                        priority
                        className="mx-auto aspect-[4/5] w-full max-w-[17.5rem] shrink-0 rounded-xl md:mx-0 md:max-w-[15.5rem] lg:max-w-[20rem]"
                        sizes="(min-width: 1024px) 320px, (min-width: 768px) 248px, 280px"
                    />

                    <div className="min-w-0 flex-1 md:pt-1">
                        {doctor.department && (
                            <p className="meta-label text-teal-700">
                                <Link href={`/odjeljenja/${doctor.department.slug}`} className="hover:text-teal-900">
                                    {doctor.department.name}
                                </Link>
                            </p>
                        )}
                        <h1 className="mt-2 font-display text-3xl font-bold leading-[1.08] tracking-[-0.018em] text-ink sm:text-4xl lg:text-[2.75rem]">
                            {doctor.name}
                        </h1>
                        {doctor.title && (
                            <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-soft">{doctor.title}</p>
                        )}

                        <ul className="mt-6 flex flex-col gap-2.5 text-[0.92rem] text-ink-soft sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                            {doctor.experience && (
                                <li className="flex items-center gap-2">
                                    <ClockIcon className="size-[1em] shrink-0 text-teal-700" />
                                    {doctor.experience}
                                </li>
                            )}
                            <li>
                                <a
                                    href={mapsHref(settings.address, settings.city)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 transition-colors hover:text-teal-800"
                                >
                                    <PinIcon className="size-[1em] shrink-0 text-teal-700" />
                                    {settings.address}, Doboj
                                </a>
                            </li>
                        </ul>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <a
                                href={telHref(settings.phonePrimary)}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[3px] bg-teal-600 px-6 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-teal-700 sm:w-auto"
                            >
                                <PhoneIcon className="size-4 shrink-0" />
                                Zakažite pregled
                            </a>
                            <Link
                                href="/kontakt"
                                className="inline-flex min-h-12 w-full items-center justify-center rounded-[3px] border border-ink/20 px-6 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700 sm:w-auto"
                            >
                                Kontaktirajte nas
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid gap-12 border-t border-ink/10 pt-12 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:gap-16 lg:pt-14">
                    <div className="min-w-0 space-y-12">
                        {educationLines.length > 0 && (
                            <section aria-labelledby="diploma">
                                <SectionMeta index="01" label="Obrazovanje" />
                                <h2 id="diploma" className="mt-4 font-display text-2xl font-bold text-ink">Diploma</h2>
                                <ul className="mt-5 space-y-3">
                                    {educationLines.map((line, i) => (
                                        <li key={line} className="flex gap-3">
                                            <span className="shrink-0 tabular-nums text-teal-600">{String(i + 1).padStart(2, '0')}</span>
                                            <p className="leading-relaxed text-ink">{line}</p>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {doctor.specializations && (
                            <section aria-labelledby="specijalnosti">
                                <SectionMeta index="02" label="Stručnost" />
                                <h2 id="specijalnosti" className="mt-4 font-display text-2xl font-bold text-ink">Specijalnosti</h2>
                                <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{doctor.specializations}</p>
                            </section>
                        )}

                        {doctor.bio && (
                            <section aria-labelledby="biografija">
                                <SectionMeta index="03" label="O ljekaru" />
                                <h2 id="biografija" className="mt-4 font-display text-2xl font-bold text-ink">Biografija</h2>
                                <div className="mt-5 max-w-2xl space-y-4 border-l-2 border-teal-500 pl-5">
                                    {doctor.bio.split('\n\n').map((paragraph) => (
                                        <p key={paragraph.slice(0, 24)} className="leading-relaxed text-ink-soft">{paragraph}</p>
                                    ))}
                                </div>
                            </section>
                        )}

                        {doctor.services.length > 0 && (
                            <section aria-labelledby="usluge-doktora">
                                <SectionMeta index="04" label="Pregledi" />
                                <h2 id="usluge-doktora" className="mt-4 font-display text-2xl font-bold text-ink">Usluge</h2>
                                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                                    {doctor.services.map((service) => (
                                        <li key={service.slug}>
                                            <Link
                                                href={`/usluge/${service.slug}`}
                                                className="flex min-h-12 items-center border-l-2 border-teal-500 bg-mineral px-4 py-3 text-[0.93rem] font-medium text-ink transition-colors hover:bg-teal-50 hover:text-teal-800"
                                            >
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    <aside className="lg:sticky lg:top-28 lg:self-start">
                        <div className="rounded-xl border border-ink/12 bg-teal-900 p-6 text-white sm:p-7">
                            <h2 className="meta-label text-teal-300">Zakažite pregled</h2>
                            <p className="mt-3 text-[0.92rem] leading-relaxed text-teal-100/80">
                                Pozovite recepciju za termin kod {doctor.name}.
                            </p>
                            <a
                                href={telHref(settings.phonePrimary)}
                                className="mt-5 flex items-center gap-3 font-display text-2xl font-bold tabular-nums transition-colors hover:text-teal-300"
                            >
                                <PhoneIcon className="size-5 shrink-0 text-teal-300" />
                                {settings.phonePrimary}
                            </a>
                            <dl className="mt-6 space-y-4 border-t border-white/15 pt-5 text-[0.88rem] text-teal-100/80">
                                <div>
                                    <dt className="flex items-center gap-2 text-teal-300/80">
                                        <ClockIcon className="size-[1em] shrink-0" />
                                        Radno vrijeme
                                    </dt>
                                    <dd className="mt-1.5 font-medium text-white">{settings.hoursWeekdays}</dd>
                                    <dd className="font-medium text-white">{settings.hoursSaturday}</dd>
                                </div>
                                {doctor.department && (
                                    <div>
                                        <dt className="meta-label text-teal-300/80">Odjeljenje</dt>
                                        <dd className="mt-1.5">
                                            <Link href={`/odjeljenja/${doctor.department.slug}`} className="font-medium text-white hover:text-teal-200">
                                                {doctor.department.name}
                                            </Link>
                                        </dd>
                                    </div>
                                )}
                            </dl>
                        </div>
                    </aside>
                </div>

                {otherDoctors.length > 0 && (
                    <section aria-labelledby="ostali" className="mt-16 border-t border-ink/12 pt-10 lg:mt-20">
                        <div className="flex flex-wrap items-end justify-between gap-4">
                            <h2 id="ostali" className="font-display text-2xl font-bold text-ink">Ostali doktori</h2>
                            <Link href="/doktori" className="meta-label text-teal-700 hover:text-teal-900">
                                Svi doktori →
                            </Link>
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {otherDoctors.map((other) => (
                                <Link
                                    key={other.slug}
                                    href={`/doktori/${other.slug}`}
                                    className="group flex gap-4 rounded-xl border border-ink/10 bg-paper p-3 transition-colors hover:border-teal-500/35 hover:bg-teal-50/50"
                                >
                                    <DoctorPortrait
                                        name={other.name}
                                        photo={other.photo}
                                        crop={doctorCrop(other.slug)}
                                        className="aspect-[4/5] w-[4.5rem] shrink-0 rounded-lg sm:w-20"
                                        sizes="80px"
                                    />
                                    <span className="flex min-w-0 flex-col justify-center py-1">
                                        <span className="font-display text-[1.05rem] font-semibold leading-snug text-ink group-hover:text-teal-800">
                                            {other.name}
                                        </span>
                                        {other.title && (
                                            <span className="mt-1 text-[0.88rem] leading-snug text-ink-soft">{other.title}</span>
                                        )}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <section aria-labelledby="zakazite" className="mt-16 rounded-xl bg-teal-900 px-6 py-10 text-white sm:px-8 sm:py-12 lg:mt-20">
                    <h2 id="zakazite" className="font-display text-2xl font-bold sm:text-3xl">
                        Zakažite pregled kod {doctor.name}
                    </h2>
                    <p className="mt-3 max-w-lg text-[0.98rem] leading-relaxed text-teal-100/80">
                        Pozovite nas ili pošaljite upit za zakazivanje. Naš tim će vam se javiti u najkraćem roku.
                    </p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a
                            href={telHref(settings.phonePrimary)}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[3px] bg-teal-600 px-6 font-semibold text-white transition-colors hover:bg-teal-700 sm:w-auto"
                        >
                            <PhoneIcon className="size-4 shrink-0" />
                            Pozovite nas
                        </a>
                        <Link
                            href="/kontakt"
                            className="inline-flex min-h-12 w-full items-center justify-center rounded-[3px] border border-white/30 px-6 font-semibold text-white transition-colors hover:border-white/70 sm:w-auto"
                        >
                            Pošaljite upit
                        </Link>
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}
