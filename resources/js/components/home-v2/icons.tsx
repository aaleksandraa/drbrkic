import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
};

export function CalendarIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
            <path d="M3.5 10h17M8 3.5V7M16 3.5V7" />
        </svg>
    );
}

export function ArrowRightIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 12" {...base} {...props}>
            <path d="M0 6h22M17 1l5 5-5 5" />
        </svg>
    );
}

export function ScanIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 4v16M4 12h16" />
            <circle cx="14.5" cy="9.5" r="1.6" />
        </svg>
    );
}

export function MicroscopeIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <path d="M9 4.5h4.5M11.25 4.5v6.2" />
            <path d="M8 12.2h6.5a3.2 3.2 0 013.2 3.2V17" />
            <path d="M5 20.5h14M9.5 20.5v-2.2a2 2 0 012-2h1" />
            <circle cx="16.6" cy="17.4" r="1.7" />
        </svg>
    );
}

export function FamilyIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <circle cx="8.2" cy="7.2" r="2.1" />
            <circle cx="15.8" cy="7.2" r="2.1" />
            <path d="M4.4 19.5v-2.4a3.8 3.8 0 013.8-3.8h0a3.8 3.8 0 013.8 3.8v2.4" />
            <path d="M12 19.5v-2.4a3.8 3.8 0 013.8-3.8h0a3.8 3.8 0 013.8 3.8v2.4" />
        </svg>
    );
}

export function MedkitIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <rect x="3.5" y="8" width="17" height="12" rx="2" />
            <path d="M8.5 8V6.4A1.9 1.9 0 0110.4 4.5h3.2A1.9 1.9 0 0115.5 6.4V8" />
            <path d="M12 12v5M9.5 14.5h5" />
        </svg>
    );
}

export function TherapyIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <circle cx="12" cy="5.2" r="2" />
            <path d="M12 7.4v5.4M8.2 10.2 12 12.8l3.8-2.6" />
            <path d="M8.4 20.5 12 12.8l3.6 7.7" />
        </svg>
    );
}

export function StethoscopeIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <path d="M6.2 4.5v6.2a5.8 5.8 0 0011.6 0V4.5" />
            <path d="M4.6 4.5h3.2M16.2 4.5h3.2" />
            <circle cx="18.4" cy="16.6" r="2.1" />
            <path d="M18.4 14.5V12" />
        </svg>
    );
}

export function YearsIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v4.4l3 1.8" />
        </svg>
    );
}

export function PatientsIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <circle cx="9" cy="8" r="2.3" />
            <circle cx="16.2" cy="8.6" r="1.8" />
            <path d="M4.6 18.8v-1.6A4.4 4.4 0 019 12.8h0a4.4 4.4 0 014.4 4.4v1.6" />
            <path d="M14.2 18.8v-1.3a3.6 3.6 0 012.8-3.5" />
        </svg>
    );
}

export function DepartmentsIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <path d="M4.5 20.5V8.2L12 3.8l7.5 4.4v12.3" />
            <path d="M9.5 20.5v-5.2h5v5.2" />
            <path d="M9.6 10.6h.02M12 10.6h.02M14.4 10.6h.02" />
        </svg>
    );
}

export function TeamIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <circle cx="12" cy="7.2" r="2.2" />
            <path d="M7.2 18.8v-1.7A4.8 4.8 0 0112 12.3h0a4.8 4.8 0 014.8 4.8v1.7" />
            <circle cx="5.4" cy="8.4" r="1.6" />
            <circle cx="18.6" cy="8.4" r="1.6" />
        </svg>
    );
}

export function PhoneOutlineIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <path d="M7 4.5h3l1.6 4-2.1 1.6a11 11 0 005.4 5.4l1.6-2.1 4 1.6v3A1.8 1.8 0 0119 19.8C10.8 19.4 4.6 13.2 4.2 5.7A1.8 1.8 0 016 4.5z" />
        </svg>
    );
}

export function PinOutlineIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <path d="M12 20.5s6.2-5.3 6.2-10A6.2 6.2 0 005.8 10.5c0 4.7 6.2 10 6.2 10z" />
            <circle cx="12" cy="10.3" r="2.1" />
        </svg>
    );
}

export function ClockOutlineIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v4.2L15 14" />
        </svg>
    );
}

export function MailOutlineIcon(props: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...base} {...props}>
            <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
            <path d="m4.2 7.2 7.8 6.2 7.8-6.2" />
        </svg>
    );
}
