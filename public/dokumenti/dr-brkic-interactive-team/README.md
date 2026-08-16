# Interaktivna fotografija tima — Dr Brkić

Gotova React/TypeScript implementacija za originalnu fotografiju **2048 × 1365 px**.

## Šta radi

- default: cijela fotografija je u boji
- hover/focus na osobu: cijela fotografija prelazi u crno-bijelo
- aktivna osoba ostaje u boji
- prikazuje ime, prezime/titulu
- ako `profileUrl` postoji, klik otvara profil
- na touch uređaju prvi tap selektuje osobu, drugi tap otvara profil
- dostupno tastaturom (`Tab`, `Enter`, `Space`)
- `showDebug` prikazuje hotspot poligone i broj osobe
- bez dodatnih npm paketa

## Fajlovi

- `src/InteractiveTeam.tsx` — komponenta
- `src/interactive-team.css` — izgled/animacije
- `src/teamMembers.ts` — svi hotspotovi i podaci
- `public/images/cijeli-tim-unutar.jpg` — originalna fotografija
- `hotspot-reference.jpg` — brojevi osoba lijevo → desno
- `demo.html` — samostalni browser demo bez Reacta

## React upotreba

```tsx
import InteractiveTeam from './components/InteractiveTeam';

export default function TeamSection() {
  return (
    <InteractiveTeam
      showDebug={false}
      onOpenProfile={(member) => {
        // npr. React Router / Next router
        if (member.profileUrl) window.location.href = member.profileUrl;
      }}
    />
  );
}
```

## Unos stvarnih ljudi

U `src/teamMembers.ts` zamijeni npr.:

```ts
{
  id: 'person-10',
  name: 'Dr Ime Prezime',
  title: 'Specijalista radiologije',
  profileUrl: '/doktori/ime-prezime',
  // ... hotspotovi ostaju isti
}
```

Ako osoba nema profil:

```ts
profileUrl: null
```

Tada se ime/titula i dalje prikazuju, ali klik ne vodi nigdje.

## Debug / fino podešavanje

Privremeno uključi:

```tsx
<InteractiveTeam showDebug />
```

Zeleni poligoni su aktivne zone. Koordinate su u originalnom 2048×1365 koordinatnom sistemu, pa se automatski skaliraju na bilo koju širinu slike.

Hotspotovi su ručno mapirani na dostavljenu fotografiju i namjerno su nešto konzervativniji kod osoba koje stoje iza drugih ljudi, da hover ne "krade" osobu ispred. Za pixel-perfect izolaciju može se kasnije zamijeniti svaki `maskPolygons` preciznim SVG pathom ili PNG alpha maskom, bez mijenjanja ostatka komponente.

## Preporuka za produkciju

1. Fotografiju ostaviti u istom odnosu stranica.
2. Napraviti WebP/AVIF kopiju za produkciju, ali zadržati dimenzije 2048×1365.
3. Ne stavljati `object-fit: cover` sa cropovanjem bez prilagođavanja viewBoxa — hotspotovi moraju pratiti cijelu fotografiju.
4. Tooltip tekst puniti iz CMS/API-ja umjesto hardkodovanja.
5. Za Next.js `onOpenProfile` povezati na `router.push(member.profileUrl)`.
