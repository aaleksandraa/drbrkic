import React, { useMemo, useState } from 'react';
import { TEAM_IMAGE, teamMembers as defaultMembers, type TeamMember } from './teamMembers';
import './interactive-team.css';

type Props = {
  imageSrc?: string;
  members?: TeamMember[];
  className?: string;
  showDebug?: boolean;
  onOpenProfile?: (member: TeamMember) => void;
};

export function InteractiveTeam({
  imageSrc = TEAM_IMAGE.src,
  members = defaultMembers,
  className = '',
  showDebug = false,
  onOpenProfile,
}: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [keyboardId, setKeyboardId] = useState<string | null>(null);

  const activeMember = useMemo(
    () => members.find((member) => member.id === activeId) ?? null,
    [activeId, members],
  );

  const openProfile = (member: TeamMember) => {
    if (!member.profileUrl) return;
    if (onOpenProfile) {
      onOpenProfile(member);
      return;
    }
    window.location.assign(member.profileUrl);
  };

  const handleMemberClick = (member: TeamMember) => {
    const coarsePointer = window.matchMedia?.('(hover: none), (pointer: coarse)').matches;

    // Mobile/tablet: first tap only selects and shows the label.
    if (coarsePointer && activeId !== member.id) {
      setActiveId(member.id);
      return;
    }

    openProfile(member);
  };

  return (
    <section
      className={`interactive-team ${activeId ? 'interactive-team--active' : ''} ${className}`}
      onMouseLeave={() => {
        if (!keyboardId) setActiveId(null);
      }}
      aria-label="Tim Specijalističkog centra Dr Brkić"
    >
      <div className="interactive-team__stage">
        <svg
          className="interactive-team__svg"
          viewBox={`0 0 ${TEAM_IMAGE.width} ${TEAM_IMAGE.height}`}
          role="img"
          aria-label="Grupna fotografija tima. Pređite mišem ili fokusirajte osobu za detalje."
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {members.map((member) => (
              <clipPath
                id={`team-clip-${member.id}`}
                key={`clip-${member.id}`}
                clipPathUnits="userSpaceOnUse"
              >
                {member.maskPolygons.map((points, index) => (
                  <polygon points={points} key={index} />
                ))}
              </clipPath>
            ))}
          </defs>

          <image
            href={imageSrc}
            x="0"
            y="0"
            width={TEAM_IMAGE.width}
            height={TEAM_IMAGE.height}
            className="interactive-team__base-image"
            preserveAspectRatio="xMidYMid slice"
          />

          {activeMember && (
            <image
              key={activeMember.id}
              href={imageSrc}
              x="0"
              y="0"
              width={TEAM_IMAGE.width}
              height={TEAM_IMAGE.height}
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#team-clip-${activeMember.id})`}
              className="interactive-team__active-image"
              aria-hidden="true"
            />
          )}

          <g className="interactive-team__hotspots">
            {members.map((member, index) => (
              <g
                key={member.id}
                className={`interactive-team__person ${activeId === member.id ? 'is-active' : ''}`}
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
                onClick={() => handleMemberClick(member)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleMemberClick(member);
                  }
                }}
              >
                {member.hitPolygons.map((points, polygonIndex) => (
                  <polygon
                    key={polygonIndex}
                    points={points}
                    className="interactive-team__hit-polygon"
                    data-debug={showDebug ? 'true' : 'false'}
                  />
                ))}
                {showDebug && (
                  <text
                    x={member.label.x}
                    y={member.label.y}
                    className="interactive-team__debug-number"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </text>
                )}
              </g>
            ))}
          </g>
        </svg>

        {activeMember && (
          <div
            className={`interactive-team__card interactive-team__card--${activeMember.label.side ?? 'center'}`}
            style={{
              left: `${(activeMember.label.x / TEAM_IMAGE.width) * 100}%`,
              top: `${(activeMember.label.y / TEAM_IMAGE.height) * 100}%`,
            }}
          >
            <div className="interactive-team__card-kicker">NAŠ TIM</div>
            <div className="interactive-team__card-name">{activeMember.name}</div>
            <div className="interactive-team__card-title">{activeMember.title}</div>
            {activeMember.profileUrl && (
              <a
                href={activeMember.profileUrl}
                className="interactive-team__card-link"
                onClick={(event) => {
                  if (onOpenProfile) {
                    event.preventDefault();
                    onOpenProfile(activeMember);
                  }
                }}
              >
                Pogledaj profil <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        )}
      </div>

      <p className="interactive-team__mobile-help">
        Dodirnite osobu da vidite ime i titulu.
      </p>
    </section>
  );
}

export default InteractiveTeam;
