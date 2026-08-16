import Reveal from '@/components/Reveal';

const reasons = [
    {
        title: 'Iskustvo i povjerenje',
        text: 'Dvije decenije kontinuiranog rada i razvoja u službi zdravlja pacijenata.',
    },
    {
        title: 'Savremena oprema',
        text: 'Napredna dijagnostička oprema za precizne i pouzdane rezultate.',
    },
    {
        title: 'Sve na jednom mjestu',
        text: 'Dijagnostika, pregledi i terapija objedinjeni u jednom centru.',
    },
    {
        title: 'Stručan tim',
        text: 'Iskusni doktori i saradnici iz više oblasti medicine.',
    },
    {
        title: 'Elektronska arhiva',
        text: 'Praćenje nalaza i kontinuitet zdravstvene brige za svakog pacijenta.',
    },
    {
        title: 'Posvećenost pacijentu',
        text: 'Pristup koji spaja dijagnostiku, pregled i praćenje zdravlja.',
    },
];

export default function WhyUs() {
    return (
        <section aria-labelledby="zasto-naslov" className="border-y border-ink/10 bg-mineral py-16 lg:py-24">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <p className="meta-label text-teal-700">Naše prednosti</p>
                    <h2 id="zasto-naslov" className="mt-4 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl">
                        Zašto pacijenti biraju ZU SC Dr Brkić
                    </h2>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft sm:text-lg">
                        Kombinacija iskustva, savremene opreme i posvećenog tima čini nas pouzdanim
                        partnerom za vaše zdravlje.
                    </p>
                </Reveal>

                <Reveal className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8" delay={100}>
                    {reasons.map((reason, i) => (
                        <div
                            key={reason.title}
                            className="group rounded-xl border border-ink/10 bg-paper p-4 transition-all duration-300 hover:border-teal-500/40 hover:shadow-[0_16px_40px_-24px_rgba(13,61,54,0.35)] sm:rounded-2xl sm:p-8"
                        >
                            <h3 className="flex items-baseline gap-2 font-display text-[0.95rem] font-semibold text-ink sm:gap-3 sm:text-xl">
                                <span className="tabular-nums text-teal-600">{String(i + 1).padStart(2, '0')}</span>
                                {reason.title}
                            </h3>
                            <p className="mt-1 text-[0.8rem] leading-relaxed text-ink-soft sm:mt-2.5 sm:text-[0.95rem]">
                                {reason.text}
                            </p>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
