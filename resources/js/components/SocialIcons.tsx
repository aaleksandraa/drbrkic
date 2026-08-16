import { usePage } from '@inertiajs/react';
import type { SharedProps } from '@/types';

export type SocialNetwork = 'facebook' | 'instagram' | 'linkedin';

const labels: Record<SocialNetwork, string> = {
    facebook: 'Facebook',
    instagram: 'Instagram',
    linkedin: 'LinkedIn',
};

function FacebookIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path d="M13.5 21v-7.1h2.38l.36-2.77H13.5V9.36c0-.8.22-1.35 1.38-1.35h1.47V5.54A19.5 19.5 0 0014.2 5.4c-2.18 0-3.67 1.33-3.67 3.77v1.96H8.25v2.77h2.28V21H13.5z" />
        </svg>
    );
}

function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.4" />
            <circle cx="12" cy="12" r="3.7" />
            <circle cx="17.15" cy="6.85" r="0.9" fill="currentColor" stroke="none" />
        </svg>
    );
}

function LinkedInIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path d="M6.54 9H3.9v12h2.64V9zM5.22 3.5A1.53 1.53 0 103.7 5.03 1.53 1.53 0 005.22 3.5zM20.1 13.08V21h-2.63v-7.36c0-1.85-.66-3.11-2.32-3.11a2.5 2.5 0 00-2.35 1.67 3.13 3.13 0 00-.15 1.12V21H10V9h2.53v1.64h.04a2.77 2.77 0 012.5-1.78c1.82 0 3.03 1.19 3.03 3.74z" />
        </svg>
    );
}

const icons: Record<SocialNetwork, typeof FacebookIcon> = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    linkedin: LinkedInIcon,
};

export default function SocialIcons({
    networks,
    className = '',
    iconClassName = 'size-4',
}: {
    networks: SocialNetwork[];
    className?: string;
    iconClassName?: string;
}) {
    const { settings } = usePage<SharedProps>().props;
    const hrefs: Record<SocialNetwork, string> = {
        facebook: settings.facebook,
        instagram: settings.instagram,
        linkedin: settings.linkedin,
    };

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {networks.map((network) => {
                const href = hrefs[network];
                if (!href) return null;
                const Icon = icons[network];

                return (
                    <a
                        key={network}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={labels[network]}
                        className="flex size-8 items-center justify-center text-current transition-colors hover:text-white"
                    >
                        <Icon className={iconClassName} />
                    </a>
                );
            })}
        </div>
    );
}
