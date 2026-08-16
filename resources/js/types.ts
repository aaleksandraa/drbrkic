export interface SiteSettings {
    siteName: string;
    phonePrimary: string;
    phoneSecondary: string;
    email: string;
    address: string;
    city: string;
    hoursWeekdays: string;
    hoursSaturday: string;
    facebook: string;
    instagram: string;
    linkedin: string;
}

export interface NavItem {
    name: string;
    slug: string;
}

export interface SharedProps {
    settings: SiteSettings;
    nav: {
        departments: NavItem[];
        services: NavItem[];
    };
    [key: string]: unknown;
}

export interface SeoData {
    title: string;
    description: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogType: string;
    ogImage: string;
    jsonLd: Record<string, unknown>[];
}

export interface HomeDepartment {
    name: string;
    slug: string;
    shortDescription: string | null;
    image?: string | null;
    services: NavItem[];
}

export interface HomeService {
    name: string;
    slug: string;
    label: string | null;
    summary: string | null;
    duration: string | null;
    department: NavItem | null;
}

export interface HomeDoctor {
    name: string;
    slug: string;
    title: string | null;
    specialty: string | null;
    experience: string | null;
    photo: string | null;
    department: NavItem | null;
    services: NavItem[];
}

export interface HomeNewsArticle {
    title: string;
    slug: string;
    excerpt: string | null;
    image?: string | null;
    category: string | null;
    isFeatured: boolean;
    publishedAt: string | null;
    publishedAtIso: string | null;
}

export interface Consultant {
    name: string;
    title: string;
    focus: string | null;
}

export interface SpecialistVisitItem {
    doctorName: string | null;
    specialty: string | null;
    date?: string;
    day: string;
    month: string;
    startTime: string | null;
    endTime: string | null;
    note: string | null;
    department?: NavItem | null;
    href?: string | null;
}

export interface Faq {
    question: string;
    answer: string;
}

export interface PreparationGroup {
    title: string;
    intro?: string;
    items?: string[];
}

export interface PreparationSection {
    id?: string;
    title: string;
    intro?: string;
    items?: string[];
    note?: string;
    emphasis?: boolean;
    groups?: PreparationGroup[];
}

export interface PreparationGuideData {
    intro?: string;
    sections: PreparationSection[];
}

export function isPreparationGuide(value: unknown): value is PreparationGuideData {
    return typeof value === 'object' && value !== null && Array.isArray((value as PreparationGuideData).sections);
}

export const telHref = (phone: string) => `tel:+387${phone.replace(/[^0-9]/g, '').replace(/^0/, '')}`;

export function phoneHref(phone: string): string {
    const trimmed = phone.trim();
    if (trimmed.startsWith('+') || trimmed.startsWith('00')) {
        return `tel:${trimmed.replace(/[^\d+]/g, '').replace(/^00/, '+')}`;
    }

    return telHref(trimmed);
}

export function whatsappHref(phone: string): string {
    return `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;
}

export function viberHref(phone: string): string {
    return `viber://chat?number=%2B${phone.replace(/[^0-9]/g, '')}`;
}

export interface LymphDrainageIndication {
    title: string;
    text?: string;
}

export interface LymphDrainagePractitioner {
    name: string;
    kicker: string;
    role: string;
    photo: string;
    photoFallback: string;
    bio: string;
}

export interface LymphDrainageSession {
    date: string;
    day: string;
    month: string;
    startTime: string | null;
    endTime: string | null;
    note: string | null;
}

export interface ServiceHeroPhoto {
    src: string;
    webp?: string | null;
    srcSet?: string | null;
    webpSrcSet?: string | null;
    position?: string;
}

export interface LymphDrainageContent {
    heading: string;
    indicationsHeading: string;
    indicationsIntro: string;
    indications: LymphDrainageIndication[];
    practitioner: LymphDrainagePractitioner;
    venue: string;
    whatsapp: string;
    sessions: string | null;
    sessionItems?: LymphDrainageSession[];
}

export const mapsHref = (address: string, city = 'Doboj') =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`ZU SC Dr Brkić, ${address}, ${city}`)}`;

export const mapsNavHref = (address: string, city = 'Doboj') =>
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`ZU SC Dr Brkić, ${address}, ${city}`)}`;

export const priceListHref = (hash?: string | null) => (hash ? `/cjenovnik#${hash}` : '/cjenovnik');

export interface PriceItem {
    name: string;
    price: string;
    href?: string | null;
}

export interface PriceSection {
    id: string;
    title: string;
    items: PriceItem[];
}

export interface PriceGroup {
    id: string;
    title: string;
    departmentSlug: string | null;
    sections: PriceSection[];
}
