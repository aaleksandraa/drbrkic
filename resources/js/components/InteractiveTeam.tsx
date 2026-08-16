import { Link, router } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';
import { TEAM_IMAGE, teamMembers, type TeamMember } from '@/data/teamPhoto';
import './interactive-team.css';

function isCoarsePointer(): boolean {
    return window.matchMedia('(hover: none), (pointer: coarse)').matches;
}

export default function InteractiveTeam() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [keyboardId, setKeyboardId] = useState<string | null>(null);

    const active = useMemo(
        () => teamMembers.find((member) => member.id === activeId) ?? null,
        [activeId],
    );

    const hitMembers = useMemo(
        () => [...teamMembers].sort((a, b) => (a.layer === b.layer ? 0 : a.layer === 'back' ? -1 : 1)),
        [],
    );

    useEffect(() => {
        teamMembers.forEach((member) => {
            const image = new Image();
            image.src = member.maskSrc;
        });
    }, []);

    const openProfile = (member: TeamMember) => {
        if (member.profileUrl) router.visit(member.profileUrl);
    };

    const selectMember = (member: TeamMember) => {
        if (isCoarsePointer() && activeId !== member.id) {
            setActiveId(member.id);
            return;
        }
        openProfile(member);
    };

    return (
        <div
            className={`interactive-team ${active ? 'is-active' : ''}`}
            onMouseLeave={() => {
                if (!keyboardId) setActiveId(null);
            }}
        >
            <div className="relative overflow-hidden rounded-xl bg-mineral">
                <svg
                    className="block h-auto w-full"
                    viewBox={`0 0 ${TEAM_IMAGE.width} ${TEAM_IMAGE.height}`}
                    role="img"
                    aria-label="Grupna fotografija tima ZU Dr Brkić. Pređite mišem ili fokusirajte osobu za ime i titulu."
                    preserveAspectRatio="xMidYMid meet"
                >
                    <image
                        href={TEAM_IMAGE.src}
                        x="0"
                        y="0"
                        width={TEAM_IMAGE.width}
                        height={TEAM_IMAGE.height}
                        className="interactive-team__base"
                        preserveAspectRatio="none"
                    />

                    <g>
                        {hitMembers.map((member) => (
                            <g
                                key={member.id}
                                className={`interactive-team__person ${member.profileUrl ? 'cursor-pointer' : 'cursor-default'}`}
                                role={member.profileUrl ? 'link' : 'button'}
                                tabIndex={0}
                                aria-label={`${member.name}, ${member.title}${member.profileUrl ? ', otvori profil' : ''}`}
                                onMouseEnter={() => setActiveId(member.id)}
                                onFocus={() => {
                                    setKeyboardId(member.id);
                                    setActiveId(member.id);
                                }}
                                onBlur={() => {
                                    setKeyboardId(null);
                                    setActiveId(null);
                                }}
                                onClick={() => selectMember(member)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        selectMember(member);
                                    }
                                }}
                            >
                                {member.hitPolygons.map((points) => (
                                    <polygon key={points} points={points} className="interactive-team__hit" />
                                ))}
                            </g>
                        ))}
                    </g>
                </svg>

                {active && (
                    <img
                        key={active.id}
                        src={TEAM_IMAGE.src}
                        alt=""
                        aria-hidden="true"
                        className="interactive-team__focus"
                        style={{
                            WebkitMaskImage: `url(${active.maskSrc})`,
                            maskImage: `url(${active.maskSrc})`,
                        }}
                    />
                )}

                {active && (
                    <div
                        className={`pointer-events-none absolute z-10 min-w-[12rem] max-w-[16rem] rounded-xl border border-white/70 bg-paper/92 px-4 py-3 shadow-[0_18px_40px_-18px_rgba(13,61,54,0.45)] backdrop-blur-md sm:min-w-[13.5rem] sm:max-w-[18rem] ${
                            active.label.side === 'right'
                                ? '-translate-x-full -translate-y-1/2'
                                : active.label.side === 'center'
                                  ? '-translate-x-1/2 -translate-y-[calc(100%+12px)]'
                                  : 'translate-x-3 -translate-y-1/2'
                        }`}
                        style={{
                            left: `${(active.label.x / TEAM_IMAGE.width) * 100}%`,
                            top: `${(active.label.y / TEAM_IMAGE.height) * 100}%`,
                        }}
                    >
                        <p className="meta-label text-teal-700">Naš tim</p>
                        <p className="mt-1 font-display text-[1.05rem] font-semibold leading-snug text-ink">{active.name}</p>
                        <p className="mt-0.5 text-[0.82rem] leading-snug text-ink-soft">{active.title}</p>
                        {active.profileUrl && (
                            <p className="mt-2 text-[0.75rem] font-semibold text-teal-700">Pogledajte profil →</p>
                        )}
                    </div>
                )}
            </div>

            <div className="mt-4 min-h-[3.4rem] border-l-2 border-teal-600 pl-4" aria-live="polite">
                {active ? (
                    <>
                        <p className="font-display text-[1.05rem] font-semibold text-ink">{active.name}</p>
                        <p className="text-[0.88rem] text-ink-soft">{active.title}</p>
                        {active.profileUrl && (
                            <Link
                                href={active.profileUrl}
                                className="meta-label mt-1.5 inline-flex items-center gap-2 text-teal-700 transition-colors hover:text-teal-900"
                            >
                                Profil doktora
                                <svg aria-hidden="true" viewBox="0 0 24 12" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M0 6h22M17 1l5 5-5 5" />
                                </svg>
                            </Link>
                        )}
                    </>
                ) : null}
            </div>
        </div>
    );
}
