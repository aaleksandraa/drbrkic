<?php

namespace App\Support;

class ImagingPreparation
{
    /**
     * @return array{intro: string, sections: list<array<string, mixed>>}|null
     */
    public static function forDepartment(string $slug): ?array
    {
        return $slug === 'radiologija' ? self::guide() : null;
    }

    /**
     * @return array{intro: string, sections: list<array<string, mixed>>}|null
     */
    public static function forService(string $slug): ?array
    {
        return match ($slug) {
            'magnetna-rezonanca' => self::guide(includeCoronary: false, includeAbdominal: true, includeSafety: true),
            'ct-dijagnostika' => self::guide(includeCoronary: true, includeAbdominal: true, includeSafety: true),
            'rtg-i-mamografija' => self::guide(includeCoronary: false, includeAbdominal: false, includeSafety: false),
            default => null,
        };
    }

    /**
     * @return array{intro: string, sections: list<array<string, mixed>>}
     */
    public static function guide(
        bool $includeCoronary = true,
        bool $includeAbdominal = true,
        bool $includeSafety = true,
    ): array {
        $sections = [self::general()];

        if ($includeSafety) {
            $sections[] = self::safety();
            $sections[] = self::contraindications();
        }

        $groups = [];
        if ($includeCoronary) {
            $groups[] = self::coronary();
        }
        if ($includeAbdominal) {
            $groups[] = self::abdominal();
        }

        if ($groups !== []) {
            $sections[] = [
                'id' => 'odredjeni-pregledi',
                'title' => 'Priprema kod određenih pregleda',
                'intro' => 'Pojedini pregledi zahtijevaju dodatnu pripremu. Pratite upute za pregled koji vam je zakazan.',
                'groups' => $groups,
            ];
        }

        return [
            'intro' => $includeSafety
                ? 'Ispravna priprema omogućava jasan snimak i siguran pregled. Molimo vas da pažljivo pročitate upute prije dolaska. Tačnu pripremu potvrdite i prilikom zakazivanja, jer može zavisiti od vrste pregleda i vašeg zdravstvenog stanja.'
                : 'Prije RTG snimanja potrebno je ukloniti predmete koji mogu dati artefakt na snimku i otežati tumačenje nalaza.',
            'sections' => $sections,
        ];
    }

    /** @return array<string, mixed> */
    private static function general(): array
    {
        return [
            'id' => 'opsta',
            'title' => 'Opšta priprema',
            'intro' => 'Prije početka pregleda potrebno je ukloniti predmete koji mogu dati artefakt na snimku.',
            'items' => [
                'Uklonite odjeću sa cirkonima (patent-zatvaračima) i grudnjak.',
                'Skinite sav metal, nakit i pirsing.',
                'Uklonite zubne proteze koje sadrže metalne žice ili ojačanja.',
                'Kod otvorenog gipsa, longete ili drugog oblika imobilizacije, u zavisnosti od potreba snimanja, često je potrebno njihovo skidanje.',
            ],
        ];
    }

    /** @return array<string, mixed> */
    private static function safety(): array
    {
        return [
            'id' => 'sigurnost',
            'title' => 'Sigurnost kod MR i CT pregleda',
            'emphasis' => true,
            'intro' => 'Obavezno obavijestite medicinsko osoblje o svakom stranom tijelu ili implantatu u organizmu.',
            'items' => [
                'Prijavite strano tijelo, gelere ili metalne krhotine.',
                'Prijavite pejsmejker (elektrostimulator srca) i feromagnetne implantate.',
                'Ako imate implantat, ponesite identifikacionu karticu implantata kako bi se pregled mogao bezbjedno planirati, bez ugrožavanja vaše sigurnosti.',
            ],
        ];
    }

    /** @return array<string, mixed> */
    private static function contraindications(): array
    {
        return [
            'id' => 'kontraindikacije',
            'title' => 'Kontraindikacije',
            'intro' => 'Ako postoje opravdane kontraindikacije za traženi pregled, radi se konsultacija sa ordinirajućim radiologom i predlaže se alternativni pregled.',
            'items' => [],
        ];
    }

    /** @return array<string, mixed> */
    private static function coronary(): array
    {
        return [
            'title' => 'CT koronarografija',
            'items' => [
                'Ne preskačite redovnu terapiju za regulaciju krvnog pritiska i rada srčanog mišića.',
                'Ne pijte kafu, čaj, energetska pića ni alkohol prije pregleda.',
                'Ne jedite ništa 3–4 sata prije snimanja.',
            ],
        ];
    }

    /** @return array<string, mixed> */
    private static function abdominal(): array
    {
        return [
            'title' => 'MR abdomena, MRCP, enterografija i CT abdomena',
            'intro' => 'Potrebno je očistiti crijeva prije pregleda. Laksativ se može nabaviti u apoteci u slobodnoj prodaji, uz priložene smjernice za upotrebu. Zavisno od vrste pregleda, dodatna priprema se vrši u ordinaciji pod nadzorom medicinskog osoblja.',
            'items' => [
                'Jedan dan prije pregleda prestanite sa čvrstom hranom. Dozvoljeni su samo bistri napici: voda, bistri sokovi (ne crveni), čaj i bistra supa.',
                'Laksativ se obično uzima u dvije doze (podijeljena doza) — uveče prije pregleda i ujutru na dan pregleda — radi maksimalne efikasnosti.',
                'Uz laksativ popijte dodatnih 1,5–2 litre vode ili čaja. Ne pijte kafu ni crvene sokove.',
            ],
        ];
    }
}
