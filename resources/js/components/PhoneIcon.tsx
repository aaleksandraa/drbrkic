export default function PhoneIcon({ className = 'size-5 shrink-0' }: { className?: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3.5 3.5h3l1.5 4-2 1.5a12 12 0 005 5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5C7.6 17.6 2.4 12.4 2 5.1A1.5 1.5 0 013.5 3.5z" />
        </svg>
    );
}
