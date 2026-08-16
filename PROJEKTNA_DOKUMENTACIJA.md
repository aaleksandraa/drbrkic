# Detaljna dokumentacija web projekta ZU SC Dr Brkić Doboj

## Sadržaj dokumenta

### Dio I — opis weba, stranica i funkcionalnosti

1. Uvod i svrha dokumenta
2. Šta predstavlja ovaj web
3. Identitet ustanove i osnovne informacije
4. Ciljne grupe
5. Globalna navigacija i zajednički elementi
6. Mapa javnih stranica i URL adrese
7. Početna stranica
8. Stranica „O nama“
9. Odjeljenja
10. Detaljna stranica odjeljenja
11. Usluge
12. Detaljna stranica usluge
13. Doktori
14. Novosti i obavještenja
15. Kontakt stranica
16. Kompletan cjenovnik
17. Stranica 404
18. Administrativni panel
19. SEO
20. Tehnička arhitektura
21. Responsive ponašanje
22. Korisnički tokovi
23. Sigurnosne funkcionalnosti
24. Napomene o trenutnom stanju
25. Održavanje sadržaja
26. Sažetak projekta

### Dio II — potpuni sadržaj svih javnih stranica

27. Način čitanja sadržajnog kataloga
28. Potpuni globalni sadržaj
29. Početna stranica — svi tekstovi
30. O nama — svi tekstovi
31. Kontakt — svi tekstovi
32. Stranica doktora — svi tekstovi
33. Profili doktora — kompletni sadržaji
34. Odjeljenja — kompletni aktivni sadržaji
35. Usluge — kompletni aktivni sadržaji
36. Novosti — kompletni sadržaji
37. Potvrda potpune pokrivenosti cjenovnika
38. Stranice za nepostojeći sadržaj

---

## 1. Uvod i svrha dokumenta

Ovaj dokument predstavlja cjelovit funkcionalni, sadržajni i tehnički opis web stranice Zdravstvene ustanove Specijalistički centar „Dr Brkić“ u Doboju.

Dokument je izrađen na osnovu stvarne implementacije projekta: javnih ruta, Laravel kontrolera i modela, Inertia/React stranica i komponenti, sadržaja u bazi podataka, početnog seed sadržaja, cjenovnika, kontakt forme, SEO sistema i Filament administrativnog panela.

Namijenjen je:

- vlasniku i upravi zdravstvene ustanove;
- administratorima koji će održavati sadržaj;
- dizajnerima i marketing timu;
- programerima koji će razvijati ili održavati sistem;
- osobama koje trebaju razumjeti šta web nudi pacijentima;
- budućim saradnicima koji trebaju pregled kompletne informacione arhitekture.

Važno je razlikovati dvije vrste sadržaja:

1. **Dinamički sadržaj** dolazi iz baze i uređuje se kroz administrativni panel. To obuhvata odjeljenja, usluge, doktore, novosti, kategorije, dolaske specijalista, kontakt poruke, postavke sajta i redirekcije.
2. **Statički sadržaj** nalazi se direktno u React komponentama ili Markdown dokumentima. Tu spadaju pojedini marketinški tekstovi, istorija ustanove, misija, vizija, kontakt informacije, pojedini rezervni sadržaji i cjenovnik.

---

## 2. Šta predstavlja ovaj web

Web je zvanična digitalna prezentacija privatne zdravstvene ustanove ZU SC Dr Brkić u Doboju. Njegova osnovna namjena je da pacijentima omogući da na jednom mjestu:

- saznaju koje medicinske oblasti i odjeljenja ustanova pokriva;
- pregledaju dostupne dijagnostičke, specijalističke i terapijske usluge;
- razumiju čemu određena usluga služi, kako izgleda pregled i kako se pripremiti;
- upoznaju doktore i njihove oblasti rada;
- prate dolaske gostujućih specijalista;
- pročitaju novosti, obavještenja, akcije i informacije o novim uslugama;
- pregledaju javni cjenovnik;
- pronađu adresu, radno vrijeme, telefone i e-mail;
- direktno pozovu ustanovu;
- pošalju kontaktni upit i zatraže termin;
- pronađu ustanovu na mapi;
- dobiju osnovne informacije prije dolaska.

Web istovremeno ima nekoliko poslovnih uloga:

- **informativnu**, jer predstavlja ustanovu, tim, odjeljenja i usluge;
- **prodajnu/konverzijsku**, jer pacijenta usmjerava na poziv ili slanje upita;
- **operativnu**, jer objavljuje dolaske specijalista, radno vrijeme i aktuelna obavještenja;
- **marketinšku**, jer ističe iskustvo, opremu, stručni kadar i dostupnost više usluga na jednom mjestu;
- **SEO ulogu**, jer kreira posebne indeksabilne stranice za odjeljenja, usluge, doktore i novosti;
- **upravljačku**, jer administracija može mijenjati većinu sadržaja bez intervencije programera.

Glavna poruka weba glasi da pacijent u Doboju može dobiti savremenu dijagnostiku, specijalistički pregled i dio terapijskih usluga u okviru jednog centra, bez potrebe da za svaku uslugu traži drugu ustanovu.

---

## 3. Identitet ustanove i osnovne informacije

### 3.1. Naziv

U projektu se koristi naziv:

**ZU SC Dr Brkić**
Zdravstvena ustanova / Specijalistički centar Dr Brkić, Doboj

Na pojedinim `alt` oznakama logotipa pojavljuje se naziv „WizMedik“, ali javni tekstovi, SEO sadržaj i poslovni identitet projekta odnose se na ZU SC Dr Brkić.

### 3.2. Kontakt podaci

- Primarni telefon: **053 961 777**
- Sekundarni telefon: **053 223 751**
- E-mail: **info@drbrkic.ba**
- Adresa: **Bukovica Mala bb, 74000 Doboj, Bosna i Hercegovina**
- Radno vrijeme od ponedjeljka do petka: **07:00–20:00**
- Subota se u footeru, novostima i pojedinim bočnim informacijama navodi kao **08:00–14:00**

### 3.3. Ključne poruke brenda

Web ustanovu pozicionira kao:

- savremeni dijagnostički i specijalistički centar;
- ustanovu sa tradicijom od 2006. godine;
- centar sa više medicinskih usluga na jednom mjestu;
- ustanovu koja ulaže u opremu i stručni kadar;
- mjesto sa bržim pristupom dijagnostici i pregledima;
- tim koji njeguje individualan i odgovoran odnos prema pacijentu.

---

## 4. Ciljne grupe

### 4.1. Pacijenti kojima je potrebna dijagnostika

Ova grupa traži MR, CT, rendgen, ultrazvuk, DEXA ili laboratorijske analize. Web ih vodi kroz odjeljenje radiologije, laboratoriju, pojedinačne usluge, pripremu, tok pregleda, cijene i kontakt za zakazivanje.

### 4.2. Pacijenti kojima je potreban specijalistički pregled

Pacijent može pronaći doktore ustanove, otvoriti njihov profil, vidjeti specijalnost i povezane usluge. Posebno se objavljuju termini gostujućih specijalista.

### 4.3. Pacijenti za fizikalnu medicinu i rehabilitaciju

Za ovu grupu postoji naročito detaljan sadržaj: pregled fizijatra, fizikalna terapija, DEXA, dekompresiona terapija kičme, laseroterapija, terapijski ultrazvuk, horizontalna terapija, shockwave, masaža i hidžama/cupping.

### 4.4. Porodice i pacijenti kojima je potreban prvi pregled

Odjeljenje porodične medicine predstavljeno je kao prvi kontakt za opšte tegobe, preventivne i sistematske preglede, kontrolu terapije i praćenje hroničnih stanja.

### 4.5. Zaposleni, vozači, učenici i kompanije

Medicina rada obuhvata ljekarske preglede i uvjerenja za radnike, firme, vozačke dozvole, škole, fakultete i druge potrebe.

### 4.6. Kompanije

Kompanijama su relevantni sistematski i periodični pregledi zaposlenih, medicina rada i mogućnost dogovora organizovanih pregleda.

### 4.7. Korisnici koji samo traže praktične informacije

Za njih su najvažniji telefoni, adresa, radno vrijeme, mapa, parking, pristupačnost, cjenovnik i kontakt forma.

---

## 5. Globalna navigacija i elementi dostupni kroz web

## 5.1. Glavni meni

Desktop navigacija sadrži:

- Početna;
- O nama;
- Odjeljenja;
- Usluge;
- Doktori;
- Novosti;
- Cjenovnik;
- Kontakt.

„Odjeljenja“ i „Usluge“ imaju padajuće menije. Stavke se primarno učitavaju iz baze, tako da aktivno odjeljenje ili usluga mogu automatski ući u navigaciju. Ako dinamički podaci nisu dostupni, postoje rezervne statičke stavke.

### Padajući meni odjeljenja

- Radiologija;
- Laboratorija;
- Porodična medicina;
- Medicina rada;
- Fizijatrija;
- Specijalistički pregledi;
- link „Sva odjeljenja“ koji vodi na sekciju početne stranice.

### Padajući meni usluga

Dinamički može sadržavati sve aktivne usluge. Statička rezervna lista sadrži:

- Magnetna rezonanca;
- CT dijagnostika;
- Ultrazvuk;
- Laboratorijske analize;
- DEXA;
- Fizikalna terapija;
- Medicina rada;
- Sistematski pregledi;
- link „Sve usluge“ koji vodi na sekciju početne stranice.

### Kontakt elementi u navigaciji

Na desktopu su vidljivi:

- klikabilni telefon 053 961 777;
- dugme „Zakažite pregled“ koje vodi na kontakt stranicu.

Navigacija je providna na vrhu početne stranice, a nakon skrolovanja dobija pozadinu, sjenku i jasniji kontrast.

## 5.2. Mobilni meni

Na manjim ekranima koristi se bočni meni koji sadrži iste glavne stranice. Odjeljenja i usluge mogu se proširiti dodirom. Na dnu mobilnog menija nalaze se:

- klikabilni telefon;
- dugme „Zakažite pregled“.

## 5.3. Mobilna donja kontakt traka

Nakon što korisnik skroluje više od približno 100 piksela, na mobilnom uređaju pojavljuje se fiksirana traka:

- „Pozovite“ – otvara telefonski poziv;
- „Zakažite“ – vodi prema kontakt sekciji.

Ova funkcija održava glavnu konverzijsku akciju stalno dostupnom na mobilnom telefonu.

## 5.4. Footer

Footer predstavlja završni informativni i navigacioni blok. Sadrži:

- logotip;
- opis ustanove kao savremenog dijagnostičkog i specijalističkog centra;
- brze linkove;
- listu odjeljenja;
- adresu;
- telefon;
- e-mail;
- radno vrijeme;
- autorsku napomenu sa automatski generisanom tekućom godinom.

---

## 6. Mapa javnih stranica i URL adrese

| Stranica | URL | Namjena |
| --- | --- | --- |
| Početna | `/` | Glavna prezentacija svih važnih sadržaja |
| O nama | `/o-nama` | Istorija, vrijednosti, misija i vizija |
| Kontakt | `/kontakt` | Kontakt podaci, forma, mapa i informacije o dolasku |
| Cjenovnik | `/cjenovnik` | Javni pregled cijena |
| Doktori | `/doktori` | Lista i filtriranje doktora |
| Profil doktora | `/doktori/{slug}` | Detalji o pojedinačnom doktoru |
| Odjeljenje | `/odjeljenja/{slug}` | Detalji pojedinačnog odjeljenja |
| Usluga | `/usluge/{slug}` | Detalji pojedinačne medicinske usluge |
| Novosti | `/novosti` | Lista vijesti i dolazaka specijalista |
| Članak | `/novosti/{slug}` | Pojedinačna novost ili obavještenje |
| Sitemap | `/sitemap.xml` | XML mapa javnog sadržaja za pretraživače |
| Robots | `/robots.txt` | Pravila indeksiranja |
| Admin | `/admin` | Zaštićeni administrativni panel |

`slug` je čitljivi URL identifikator, na primjer `radiologija`, `magnetna-rezonanca` ili `jovica-brkic`.

---

## 7. Početna stranica

Početna stranica je najvažnija prezentaciona i konverzijska stranica. Sekcije su raspoređene sljedećim redoslijedom:

1. navigacija;
2. hero sekcija;
3. dolasci specijalista;
4. prednosti ustanove;
5. odjeljenja;
6. najtraženije usluge;
7. skraćeni sadržaj „O nama“;
8. doktori;
9. poziv na akciju;
10. novosti;
11. footer;
12. mobilna kontakt traka.

## 7.1. Hero sekcija

Glavna poruka:

> Savremena dijagnostika i specijalistički pregledi na jednom mjestu u Doboju

Prateći sadržaj ističe:

- rad od 2006. godine;
- pouzdanu zdravstvenu uslugu;
- modernu opremu;
- stručan tim;
- dugogodišnje iskustvo.

Hero koristi veliku fotografiju ustanove i tamni gradijent radi čitljivosti. Sadrži CTA dugmad za zakazivanje i pregled ponude, kontakt informacije i istaknute aktuelnosti.

Prikazane praktične informacije:

- lokacija Bukovica Mala bb, Doboj;
- telefoni 053 961 777 i 053 223 751;
- radno vrijeme ponedjeljak–petak, 07:00–20:00.

Na desktopu se sa desne strane prikazuju kartice gostujućih doktora i istaknute vijesti. Na mobilnim uređajima prikaz se prilagođava i vijesti postaju mali karusel sa dugmadima za prethodnu i sljedeću vijest.

## 7.2. Dolasci specijalista

Sekcija predstavlja gostujuće specijaliste u karticama. Svaka kartica može sadržavati:

- ime doktora;
- specijalnost;
- datum;
- početno i završno vrijeme;
- odjeljenje;
- dodatnu napomenu;
- telefon za zakazivanje.

Backend prikazuje samo aktivne dolaske čiji datum nije prošao. Rezultati se sortiraju po datumu i vremenu.

U početnom sadržaju evidentirani su:

- Dr Zlatan Marković – ginekolog, 01.04.2026, 15:00–19:00, zakazivanje obavezno;
- Dr Amir Hadžić – kardiolog, 03.04.2026, 09:00–14:00;
- Dr Selma Begović – endokrinolog, 05.04.2026, 10:00–15:00, potrebna uputnica;
- Dr Mirko Pavlović – ortoped, 08.04.2026, 08:00–13:00.

Pošto su termini vremenski osjetljivi, administracija treba redovno unositi nove datume i deaktivirati nevažeće zapise. Kada backend vrati praznu listu, frontend trenutno koristi rezervne statičke podatke, pa je važno i njih uskladiti sa aktuelnim terminima ili ukloniti rezervni prikaz.

## 7.3. Zašto pacijenti biraju ustanovu

Prikazuje se šest ključnih prednosti:

1. **Iskustvo i povjerenje** – više od 15 godina kontinuiranog rada;
2. **Savremena oprema** – napredna oprema za precizne rezultate;
3. **Sve na jednom mjestu** – objedinjeni pregledi, dijagnostika i terapija;
4. **Stručan tim** – doktori i saradnici iz više oblasti;
5. **Elektronska arhiva** – praćenje nalaza i kontinuitet zdravstvene brige;
6. **Posvećenost pacijentu** – povezivanje dijagnostike, pregleda i praćenja.

## 7.4. Odjeljenja na početnoj

Prikazuju se aktivna odjeljenja označena za početnu stranicu. Kartica sadrži:

- fotografiju;
- naziv;
- kratak opis;
- dugme „Saznajte više“;
- link na detaljnu stranicu odjeljenja.

## 7.5. Najtraženije usluge

Sekcija prikazuje aktivne usluge označene za početnu stranicu. U trenutnom sadržaju to su:

- Magnetna rezonanca;
- CT dijagnostika;
- Ultrazvuk;
- Laboratorijske analize;
- Medicina rada;
- Pregled fizijatra;
- DEXA osteodenzitometrija;
- Fizikalna terapija;
- Sistematski pregledi.

Kartice sadrže naziv, kratku oznaku, ikonicu i link na detaljnu stranicu usluge.

## 7.6. Skraćeni sadržaj „O nama“

Sekcija opisuje razvoj ustanove od 2006. godine i ističe:

- kontinuiran rad;
- ulaganje u savremenu opremu;
- više medicinskih usluga na jednom mjestu;
- posvećenost tačnoj i pravovremenoj dijagnozi.

Prikazuju se statistike:

- 15+ godina iskustva;
- 6 odjeljenja;
- 10+ specijalista;
- 1000+ pacijenata godišnje.

Na posebnoj stranici „O nama“ prikazuje se vrijednost 18+ godina iskustva. Ove dvije brojke treba sadržajno uskladiti.

## 7.7. Doktori na početnoj

Prikazuju se doktori koji su aktivni i označeni za početnu stranicu. Kartica sadrži:

- fotografiju;
- ime;
- specijalnost;
- dugme za otvaranje profila.

Na mobilnim uređajima kartice se mogu horizontalno pomjerati. Postoji i dugme „Pogledajte sve doktore“.

## 7.8. Glavni poziv na akciju

Naslov:

> Vaše zdravlje ne treba čekati

Poruka poziva korisnika da brzo zakaže pregled. Predviđene su akcije:

- telefonski poziv;
- slanje upita.

## 7.9. Novosti na početnoj

Prikazuju se do tri najnovije vijesti od onih označenih za početnu stranicu. Kartica sadrži:

- datum;
- kategoriju;
- naslov;
- kratak opis;
- link „Pročitajte više“.

Postoji dugme „Sve novosti“.

---

## 8. Stranica „O nama“

URL: `/o-nama`

Stranica detaljno predstavlja identitet, istoriju i vrijednosti ustanove.

## 8.1. Hero

Naslov:

> Zdravstvena ustanova sa tradicijom i vizijom

Uvod navodi da se medicinska priča razvija od 2006. godine sa ciljem pružanja kvalitetne, dostupne i savremene zdravstvene usluge pacijentima iz Doboja i regije.

## 8.2. Statistike

- 18+ godina iskustva;
- 6 odjeljenja;
- 10+ specijalista;
- 1000+ pacijenata godišnje.

## 8.3. Priča o ustanovi

Sadržaj objašnjava:

- osnivanje Specijalističke ambulante za kompjuterizovanu tomografiju 2006. godine;
- ulogu osnivača dr Jovice Brkića, specijaliste radiodijagnostike;
- cilj da savremena dijagnostika bude dostupnija bez dugog čekanja;
- razvoj ustanove kroz godine;
- obnovu i rast poslije poplava 2014. godine;
- razvoj u Specijalistički centar;
- današnji rad kroz šest odjeljenja i tim od više od deset specijalista.

## 8.4. Vremenska linija

- **2006.** – osnivanje Specijalističke ambulante za kompjuterizovanu tomografiju „Dr Brkić“;
- **2010.** – uvođenje ultrazvučne dijagnostike i laboratorijskih analiza;
- **2014.** – osnivanje Specijalističkog centra nakon oporavka od velikih poplava;
- **2018.** – uvođenje magnetne rezonance i proširenje kapaciteta;
- **2022.** – modernizacija laboratorije i novi specijalistički pregledi;
- **2024.** – nastavak ulaganja u opremu i stručni kadar.

## 8.5. Vrijednosti

### Pacijent na prvom mjestu

Individualan pristup, pažnja, razumijevanje i ugodno okruženje.

### Pouzdanost i tačnost

Tačna i pravovremena dijagnoza uz savremenu opremu i provjerene metode.

### Kontinuirano unapređenje

Ulaganje u edukaciju, opremu i nove usluge.

### Timski rad

Saradnja multidisciplinarnog tima radi sveobuhvatne zdravstvene zaštite.

## 8.6. Misija

Pružiti kvalitetnu, dostupnu i savremenu zdravstvenu uslugu na jednom mjestu kroz profesionalan pristup, modernu opremu i posvećen tim.

## 8.7. Vizija

Postati vodeća privatna zdravstvena ustanova u regionu, prepoznata po kvalitetu, pouzdanosti dijagnostike, brizi za pacijente i praćenju savremenih medicinskih standarda.

## 8.8. Završni razlozi za izbor ustanove

- više usluga na jednom mjestu;
- savremena dijagnostička oprema;
- iskusni specijalisti;
- brzi rezultati;
- individualan pristup;
- kontinuirano ulaganje u kvalitet.

---

## 9. Odjeljenja

Sistem sadrži šest aktivnih odjeljenja. Svako odjeljenje ima vlastitu URL stranicu, SEO podatke, naslov, opis, fotografiju, galeriju, opremu, indikacije za dolazak, usluge, doktore, FAQ i povezana odjeljenja.

## 9.1. Radiologija

URL: `/odjeljenja/radiologija`

### Svrha

Radiologija pruža napredne dijagnostičke metode za detaljan uvid u zdravstveno stanje. Radiološka dijagnostika omogućava prikaz anatomskih struktura i pomaže u procjeni povreda, bolesti i drugih stanja.

### Oprema i metode

- višeslojni CT skener;
- sistem magnetne rezonance;
- digitalni rendgen;
- ultrazvuk za abdomen, štitnu žlijezdu, dojke, krvne sudove i meka tkiva;
- DEXA denzitometrija.

### Kada se obratiti odjeljenju

- kod bolova u kičmi, zglobovima ili mišićima;
- nakon povrede ili traume;
- kada je preporučen CT, MR, rendgen, DEXA ili ultrazvuk;
- radi kontrolnog ili preventivnog pregleda;
- kod simptoma poput glavobolje, vrtoglavice ili bola u trbuhu koji zahtijevaju detaljniju procjenu.

### FAQ

- Privatnim pacijentima uputnica nije potrebna, ali se preporučuje prethodna dokumentacija.
- Trajanje MR pregleda zavisi od regije koja se snima.
- Priprema za CT zavisi od vrste pregleda i primjene kontrasta.

### Povezane usluge

- Magnetna rezonanca;
- CT dijagnostika;
- Ultrazvuk.

## 9.2. Laboratorija

URL: `/odjeljenja/laboratorija`

### Svrha

Laboratorija pruža biohemijske, hematološke, hormonske i druge analize za dijagnostiku, kontrolu i preventivne preglede.

### Oprema

- automatski biohemijski analizator;
- hematološki analizator;
- koagulacioni analizator;
- oprema za hormonske i imunološke analize;
- sistemi za sigurno uzorkovanje i obradu uzoraka.

### Kada se obratiti laboratoriji

- nakon preporuke ljekara;
- za sistematski ili preventivni pregled;
- radi praćenja hroničnog oboljenja;
- za provjeru osnovnih parametara krvi i urina.

### FAQ

- Za većinu biohemijskih analiza preporučuje se dolazak natašte.
- Rok za rezultate zavisi od vrste analize.

### Povezana usluga

- Laboratorijske analize.

## 9.3. Porodična medicina

URL: `/odjeljenja/porodicna-medicina`

### Svrha

Porodična medicina predstavlja prvi kontakt pacijenta sa zdravstvenim sistemom. Obuhvata prevenciju, prvu procjenu tegoba, praćenje hroničnih stanja i usmjeravanje prema dijagnostici ili specijalisti.

### Oprema

- ambulanta za opšte i kontrolne preglede;
- EKG aparat;
- oprema za mjerenje vitalnih parametara;
- oprema za manje ambulantne intervencije.

### Kada se obratiti

- kod novih zdravstvenih tegoba;
- za preventivni ili sistematski pregled;
- radi kontrole terapije;
- radi praćenja hroničnog stanja;
- za preporuku odgovarajućeg specijalističkog pregleda.

### FAQ

Preporučuje se zakazivanje radi kraćeg čekanja i bolje organizacije termina.

### Povezana usluga

- Sistematski pregledi.

## 9.4. Medicina rada

URL: `/odjeljenja/medicina-rada`

### Svrha

Odjeljenje pruža preglede i uvjerenja za zaposlene, vozače, učenike i druge potrebe. Pregledi se mogu organizovati za pojedince i kompanije.

### Oprema

- ambulanta medicine rada;
- audiometar;
- spirometar;
- EKG;
- oprema za osnovnu procjenu vida i opšteg zdravstvenog stanja.

### Kada se obratiti

- prije početka novog posla;
- za prethodni ili periodični pregled zaposlenih;
- za vađenje ili obnovu vozačke dozvole;
- za školu, fakultet ili drugu namjenu.

### FAQ

Potrebno je ponijeti lični dokument i dostupnu medicinsku dokumentaciju. Za pojedine preglede mogu biti potrebni dodatni obrasci.

### Povezana usluga

- Medicina rada.

## 9.5. Fizijatrija

URL: `/odjeljenja/fizijatrija`

### Svrha

Fizijatrija obuhvata prevenciju, dijagnostiku, liječenje i rehabilitaciju bolnih i funkcionalnih problema lokomotornog sistema.

Terapijski plan se prilagođava zdravstvenom stanju, simptomima i potrebama pacijenta sa ciljem:

- smanjenja bola;
- poboljšanja pokretljivosti;
- ubrzanja oporavka;
- unapređenja kvaliteta života.

### Oprema i procedure

- dekompresiona terapija kičme;
- DEXA;
- laseroterapija;
- terapijski ultrazvuk;
- horizontalna terapija;
- elektroterapija;
- shockwave;
- magnetoterapija;
- kineziterapija.

### Kada se obratiti

- kod bolova u kičmi, vratu, ramenima, koljenima ili drugim zglobovima;
- kod ograničene pokretljivosti;
- kod hroničnih bolnih sindroma;
- tokom oporavka od povrede ili operacije;
- kada je preporučena fizikalna terapija;
- kada je potrebno mjerenje gustine kostiju.

### FAQ

- Broj terapija određuje se individualno prema dijagnozi i nalazu fizijatra.
- Za većinu terapijskih procedura preporučuje se prethodni pregled fizijatra.

### Povezane usluge

- Pregled fizijatra;
- Dekompresiona terapija kičme;
- DEXA;
- Fizikalna terapija;
- Laseroterapija;
- Ultrazvučna terapija;
- Horizontalna terapija;
- Shockwave terapija;
- Medicinska i relax masaža;
- Hidžama i cupping terapija.

## 9.6. Specijalistički pregledi

URL: `/odjeljenja/specijalisticki-pregledi`

### Svrha

Odjeljenje organizuje konsultativno-specijalističke preglede iz više medicinskih oblasti prema rasporedu gostujućih specijalista.

### Oprema

- ambulante za specijalističke preglede;
- dijagnostička oprema prema vrsti pregleda;
- prostor za konsultacije i pregled dokumentacije.

### Kada se obratiti

- kada je potreban specijalistički pregled bez odlaska u veći centar;
- nakon preporuke drugog ljekara;
- za mišljenje specijaliste;
- prema objavljenom rasporedu dolazaka.

### FAQ

Termini se objavljuju u novostima i mogu se provjeriti putem recepcije.

---

## 10. Kako funkcioniše detaljna stranica odjeljenja

Svaka stranica odjeljenja koristi isti modularni raspored:

1. breadcrumb navigacija: Početna → Odjeljenja → trenutno odjeljenje;
2. hero sa nazivom, naslovom i kratkim opisom;
3. dugmad za poziv, kontakt i cjenovnik;
4. kontakt kartica sa telefonima i radnim vremenom;
5. detaljan opis odjeljenja;
6. lista opreme;
7. opciona galerija fotografija;
8. usluge povezane sa odjeljenjem;
9. sekcija „Kada se obratiti“;
10. česta pitanja u interaktivnom accordion prikazu;
11. tri druga odjeljenja;
12. završni CTA za zakazivanje.

Neaktivno odjeljenje nije javno dostupno i vraća HTTP 404.

---

## 11. Usluge

Sistem trenutno sadrži 16 aktivnih usluga.

## 11.1. Magnetna rezonanca

URL: `/usluge/magnetna-rezonanca`

- Pripada radiologiji.
- Predstavlja MR dijagnostiku bez jonizujućeg zračenja.
- Namijenjena je detaljnom prikazu tkiva.
- Trajanje zavisi od vrste pregleda.
- Potrebno je ponijeti raniju dokumentaciju i provjeriti posebnu pripremu sa recepcijom.
- Tok: prijem, dijagnostička procedura, nalaz i preporuke.

## 11.2. CT dijagnostika

URL: `/usluge/ct-dijagnostika`

- Pripada radiologiji.
- Kompjuterizovana tomografija omogućava brzo i precizno snimanje.
- Trajanje i priprema zavise od regije i eventualne primjene kontrasta.
- Tok: prijem, snimanje, izdavanje nalaza i preporuka.

## 11.3. Ultrazvuk

URL: `/usluge/ultrazvuk`

- Pripada radiologiji.
- Obuhvata ultrazvučnu dijagnostiku abdomena, štitne žlijezde, dojki, krvnih sudova i mekih tkiva.
- Posebna priprema zavisi od vrste pregleda.

## 11.4. Laboratorijske analize

URL: `/usluge/laboratorijske-analize`

- Pripada laboratoriji.
- Obuhvata biohemijske, hematološke, hormonske i druge analize.
- Za dio analiza potreban je dolazak natašte.
- Cijena je u cjenovniku označena kao „na upit“.

## 11.5. Medicina rada

URL: `/usluge/medicina-rada`

- Pripada odjeljenju medicine rada.
- Obuhvata preglede i uvjerenja za radnike, vozače i kompanije.
- Trajanje zavisi od vrste pregleda.
- Ljekarsko uvjerenje u cjenovniku iznosi 55 KM.

## 11.6. Pregled fizijatra

URL: `/usluge/pregled-fizijatra`

- Pripada fizijatriji.
- Predstavlja prvi korak ka rehabilitaciji.
- Obuhvata razgovor o tegobama, klinički pregled lokomotornog sistema, pregled dokumentacije i izradu plana terapije.
- Potrebno je ponijeti ranije nalaze i snimke.
- Trajanje: 20–30 minuta.
- Cijena: 60 KM.

## 11.7. Dekompresiona terapija kičme

URL: `/usluge/dekompresiona-terapija-kicme`

- Neoperativna procedura kod odabranih pacijenata sa problemima diskova i nervnih struktura.
- Cilj je kontrolisano smanjenje pritiska na intervertebralne diskove.
- Potrebno je ponijeti MR, CT ili RTG nalaze.
- Provodi se nakon procjene fizijatra.
- Tok: procjena indikacija, pozicioniranje, kontrolisana dekompresija i praćenje reakcije.
- Cijena trakcije kičmenog stuba: 50 KM.

## 11.8. DEXA osteodenzitometrija

URL: `/usluge/dexa`

- Pripada fizijatriji, iako je dijagnostička metoda bazirana na X-zracima.
- Mjeri gustinu koštane mase.
- Pomaže u ranom otkrivanju osteoporoze.
- Pregled je brz, bezbolan i neinvazivan.
- Posebna priprema najčešće nije potrebna.
- Trajanje: 15–20 minuta.
- DEXA snimak: 50 KM.
- DEXA sa očitavanjem: 80 KM.

## 11.9. Fizikalna terapija

URL: `/usluge/fizikalna-terapija`

- Individualno prilagođena rehabilitacija.
- Može uključivati magnetoterapiju, DD i IF struje, galvanske struje, terapijski ultrazvuk i kineziterapiju.
- Ciljevi su smanjenje bola, bolja pokretljivost i oporavak.
- Potrebna je preporuka fizijatra.
- Pacijentu se savjetuje udobna odjeća i donošenje nalaza.
- Cijena fizikalnog paketa: 20 KM.

## 11.10. Laseroterapija

URL: `/usluge/laseroterapija`

- Koristi lasere male snage.
- Podstiče mikrocirkulaciju i regeneraciju.
- Može doprinijeti smanjenju bola, upale i otoka.
- Primjenjuje se kod bolnih, posttraumatskih i reumatoloških stanja.
- Cijena: 15 KM.

## 11.11. Ultrazvučna terapija

URL: `/usluge/ultrazvucna-terapija`

- Ne treba je miješati sa dijagnostičkim ultrazvukom.
- Koristi visokofrekventne zvučne talase u terapijske svrhe.
- Djeluje na mišiće, tetive, ligamente i zglobove.
- Ciljevi su poboljšanje cirkulacije, regeneracija i smanjenje bola.
- Provodi se prema nalazu i planu fizijatra.

## 11.12. Horizontalna terapija

URL: `/usluge/horizontalna-terapija`

- Oblik elektroterapije srednjefrekventnim sinusoidalnim strujama.
- Može se primjenjivati kod reumatskih i posttraumatskih stanja, bolova i poremećaja cirkulacije.
- Prije terapije treba prijaviti implantate, endoproteze, proširene vene i hematome.
- Provodi se nakon stručne procjene.

## 11.13. Shockwave terapija

URL: `/usluge/shockwave-terapija`

- Koristi akustične talase za stimulaciju oporavka.
- Sadržaj navodi primjenu kod bolnog ramena, kalcifikata, Ahilove tetive, petnog trna, teniskog lakta i tendinopatija.
- Potrebno je ponijeti nalaze povezane sa bolnim područjem.
- Plan tretmana određuje se nakon procjene indikacija.

## 11.14. Medicinska i relax masaža

URL: `/usluge/medicinska-relax-masaza`

- Medicinska masaža je usmjerena na napete mišiće, cirkulaciju, bol i oporavak.
- Relax masaža je usmjerena na smanjenje stresa i opuštanje.
- Prije tretmana treba navesti bolna mjesta i ranije povrede.
- Cijena: 10–20 KM, zavisno od tretmana.

## 11.15. Hidžama i cupping terapija

URL: `/usluge/hidzama-cupping-terapija`

- Predstavljena je kao dopunska tradicionalna metoda.
- Dostupna je hidžama sa lokalnim puštanjem krvi i suvi cupping.
- Može se kombinovati sa manuelnom masažom.
- Prije tretmana potrebno je navesti zdravstvena stanja i terapiju koju pacijent koristi.
- Tretman se provodi nakon procjene stručnog osoblja.

## 11.16. Sistematski pregledi

URL: `/usluge/sistematski-pregledi`

- Pripada porodičnoj medicini.
- Namijenjena je pojedincima i kompanijama.
- Sadržaj se može prilagođavati vrsti sistematskog pregleda i potrebama naručioca.

---

## 12. Kako funkcioniše detaljna stranica usluge

Svaka usluga ima:

1. naziv i podnaslov;
2. fotografiju ili slider fotografija;
3. CTA za zakazivanje;
4. link na kontakt;
5. link na cjenovnik;
6. sažetak trajanja, kvaliteta opreme i brzine dijagnostike;
7. opis „Šta je usluga?“;
8. prednosti;
9. pripremu za pregled ili terapiju;
10. tok pregleda po koracima;
11. česta pitanja u accordion prikazu;
12. do tri povezane usluge;
13. završni poziv na zakazivanje.

Za svaku uslugu administracija može urediti:

- odjeljenje;
- naziv;
- URL slug;
- kratku oznaku;
- podnaslov;
- sažetak;
- detaljan opis;
- prednosti;
- pripremu;
- tok;
- trajanje;
- cijenu;
- sliku;
- FAQ;
- redoslijed;
- aktivnost;
- prikaz na početnoj;
- SEO i Open Graph podatke.

Neaktivna usluga vraća 404.

---

## 13. Doktori

## 13.1. Stranica svih doktora

URL: `/doktori`

Stranica predstavlja kompletan aktivni medicinski tim. Korisnik može filtrirati doktore prema odjeljenju.

Svaka kartica sadrži:

- fotografiju;
- naziv odjeljenja;
- ime;
- specijalnost;
- kratku biografiju;
- do tri povezane usluge;
- link na detaljni profil;
- dugme za telefonski poziv.

Prikazuje se broj rezultata. Ako odabrano odjeljenje nema doktora, prikazuje se poruka da nema rezultata.

## 13.2. Dr Jovica Brkić

URL: `/doktori/jovica-brkic`

- Specijalista radiologije;
- odjeljenje: Radiologija;
- iskustvo: 35+ godina;
- povezane usluge: Magnetna rezonanca, CT dijagnostika i Ultrazvuk.

## 13.3. Dr Radenka Marković

URL: `/doktori/radenka-markovic`

- Specijalista porodične medicine;
- odjeljenje: Porodična medicina;
- iskustvo: 20+ godina;
- povezana usluga: Sistematski pregledi.

## 13.4. Dr Željko Garić

URL: `/doktori/zeljko-garic`

- Specijalista fizikalne medicine;
- odjeljenje: Fizijatrija;
- iskustvo: 20+ godina;
- povezane usluge: Fizikalna terapija, DEXA, Pregled fizijatra, Laseroterapija i Shockwave terapija.

## 13.5. Struktura profila doktora

Profil sadrži:

- breadcrumb navigaciju;
- fotografiju;
- odjeljenje;
- iskustvo;
- ime i titulu;
- radno vrijeme;
- lokaciju;
- dugme za poziv;
- dugme za kontakt;
- specijalnosti;
- diplomu/obrazovanje;
- biografiju;
- listu usluga;
- druge doktore;
- završni CTA za zakazivanje.

Podaci o obrazovanju, specijalnostima i biografiji imaju rezervne prikaze ako nisu popunjeni u bazi. U početnoj bazi biografija doktora je generička napomena da se sadržaj može dopuniti u admin panelu, dok polje obrazovanja nije popunjeno. Prije produkcijskog objavljivanja preporučuje se unos stvarnih biografija, diploma i profesionalnih podataka.

---

## 14. Novosti i obavještenja

## 14.1. Stranica svih novosti

URL: `/novosti`

Stranica ima:

- uvodni hero;
- kontakt i radno vrijeme;
- dolaske specijalista;
- filter kategorija;
- mrežu članaka;
- poruku ako kategorija nema članaka.

Članci se sortiraju od najnovijeg prema starijim. Backend vraća do 12 članaka po stranici, ali trenutni frontend koristi sadržaj trenutne stranice i ne iscrtava klasične kontrole paginacije.

Filter radi na klijentskoj strani i može filtrirati prema:

- kategoriji novosti;
- nazivu povezanog odjeljenja.

## 14.2. Kategorije

U bazi su definisane:

- Nova usluga;
- Dolasci specijalista;
- Obavještenje;
- Novosti;
- Akcije;
- Medicina rada.

## 14.3. Trenutni članci

### Novo: Ekspertni 4D ultrazvuk

- Kategorija: Nova usluga;
- Odjeljenje: Radiologija;
- Datum: 28.03.2026;
- Istaknuta vijest;
- Poruka: najsavremenija 4D ultrazvučna dijagnostika dostupna je u ustanovi.

### Dolazak specijaliste kardiologa

- Kategorija: Dolasci specijalista;
- Odjeljenje: Specijalistički pregledi;
- Datum: 25.03.2026;
- Poruka: pregled se zakazuje pozivom na recepciju.

### Nova usluga: DEXA denzitometrija

- Kategorija: Obavještenje;
- Odjeljenje: Radiologija;
- Datum: 18.03.2026;
- Poruka: dostupan je pregled za mjerenje gustine kostiju.

### Proširenje laboratorijskog programa

- Kategorija: Novosti;
- Odjeljenje: Laboratorija;
- Datum: 10.03.2026;
- Poruka: laboratorija je proširena analizama iz endokrinologije i imunologije.

### Akcija: Sistematski pregledi po povoljnijim cijenama

- Kategorija: Akcije;
- Odjeljenje: Porodična medicina;
- Datum: 05.03.2026;
- Poruka: promotivne cijene sistematskih pregleda tokom marta i aprila.

### Novo radno vrijeme subotom

- Kategorija: Obavještenje;
- Datum: 01.03.2026;
- Poruka: subotom je radno vrijeme 08:00–14:00.

Svi početni članci završavaju napomenom da je sadržaj informativnog karaktera i da ne zamjenjuje pregled i savjet ljekara.

## 14.4. Pojedinačni članak

URL format: `/novosti/{slug}`

Članak sadrži:

- naslovnu fotografiju;
- kategoriju;
- naslov;
- datum;
- procijenjeno vrijeme čitanja;
- autora „ZU SC Dr Brkić“;
- uvodni istaknuti paragraf;
- ostatak sadržaja;
- fotografiju unutar članka;
- dijeljenje na Facebook;
- dijeljenje preko Vibera;
- CTA za zakazivanje;
- telefone;
- radno vrijeme;
- ostale novosti;
- tri povezana članka.

Objavljuju se samo članci koji:

- imaju status `published`;
- imaju datum objave koji nije u budućnosti.

Draft članak i budući članak nisu javno dostupni.

---

## 15. Kontakt stranica

URL: `/kontakt`

## 15.1. Kontakt kartice

Prikazane su četiri grupe:

- telefoni;
- e-mail;
- adresa;
- radno vrijeme.

Telefoni i e-mail su klikabilni.

## 15.2. Kontakt forma

Polja:

- ime i prezime – obavezno;
- telefon – obavezno;
- e-mail – opciono;
- poruka – obavezno;
- skriveno polje `website` kao zaštita od botova.

Backend validacija:

- ime: obavezno, tekst, najviše 120 znakova;
- telefon: obavezno, tekst, najviše 40 znakova;
- e-mail: validna e-mail adresa, najviše 255 znakova;
- poruka: najmanje 10, najviše 2000 znakova;
- honeypot polje mora ostati prazno.

Frontend dodatno ograničava:

- ime na 100 znakova;
- telefon na 20 znakova;
- poruku na 1000 znakova.

Nakon uspješnog slanja:

1. poruka se čuva u bazi;
2. bilježe se IP adresa i user-agent;
3. e-mail obavještenje se stavlja u red za slanje na adresu definisanu u postavkama;
4. korisniku se prikazuje potvrda „Poruka poslana!“;
5. korisnik može pokrenuti novu poruku.

Forma koristi CSRF zaštitu, backend validaciju, honeypot i ograničenje broja zahtjeva kroz `throttle:contact`.

## 15.3. Mapa i dolazak

Stranica sadrži ugrađenu Google mapu i navodi:

- besplatan parking ispred ustanove;
- udaljenost od oko pet minuta od centra Doboja;
- pristupačnost za osobe sa invaliditetom.

---

## 16. Cjenovnik

URL: `/cjenovnik`

Cjenovnik se održava u datoteci `public/dokumenti/cjenovnik.md`. Laravel ga pretvara u siguran HTML. Na stranici se prikazuje i datum posljednje izmjene datoteke.

Stranica ima:

- uvodni naslov i opis;
- datum ažuriranja;
- dugme za provjeru termina telefonom;
- dugme za slanje upita;
- kompletan sadržaj cjenovnika.

## 16.1. CT

| Usluga | Cijena |
| --- | ---: |
| CT glave | 220 KM |
| CT glave sa kontrastom | 270 KM |
| CT vrata | 220 KM |
| CT vrata sa kontrastom | 270 KM |
| CT grudnog koša | 220 KM |
| CT grudnog koša sa kontrastom | 270 KM |
| CT abdomena | 220 KM |
| CT abdomena sa kontrastom | 270 KM |
| CT male karlice | 220 KM |
| CT male karlice sa kontrastom | 270 KM |
| CT ekstremiteta | 220 KM |
| CT ekstremiteta sa kontrastom | 270 KM |
| CT baze lobanje | 220 KM |
| CT baze lobanje sa kontrastom | 270 KM |
| CT sinusa | 220 KM |
| CT sinusa sa kontrastom | 270 KM |
| CT grudne kičme | 220 KM |
| CT grudne kičme sa kontrastom | 270 KM |
| CT L/S kičme | 220 KM |
| CT L/S kičme sa kontrastom | 270 KM |
| CT urografija | 540 KM |
| CT angiografija glave i vrata | 320 KM |
| CT angiografija donjih ekstremiteta | 320 KM |
| CT angiografija donjih ekstremiteta i abdominalne aorte | 420 KM |
| CT koronarografija | 550 KM |

## 16.2. Ultrazvuk

| Usluga | Cijena |
| --- | ---: |
| UZ abdomena | 60 KM |
| UZ glave kod novorođenčadi | 60 KM |
| UZ vrata | 60 KM |
| UZ dojki | 60 KM |
| UZ mekih tkiva | 60 KM |
| Kolor dopler krvnih sudova vrata | 70 KM |
| Kolor dopler krvnih sudova nogu | 70 KM |
| Kolor dopler krvnih sudova ruku | 70 KM |

## 16.3. RTG i mamografija

| Usluga | Cijena |
| --- | ---: |
| RTG ekstremiteta | 60 KM |
| RTG glave | 60 KM |
| RTG pluća | 60 KM |
| Nativni snimak abdomena | 60 KM |
| Nativni snimak urotrakta | 60 KM |
| RTG sinusa | 60 KM |
| RTG ramena | 60 KM |
| RTG vratne kičme | 60 KM |
| RTG grudne kičme | 60 KM |
| RTG L/S kičme | 60 KM |
| RTG karlice sa kukovima | 60 KM |
| RTG S.I. zglobova | 60 KM |
| Ciljani snimci | 60 KM |
| Mamografija | 60 KM |
| RTG zuba | 10 KM |
| Ortopan | 50 KM |
| Intraven­ska urografija | 120 KM |

## 16.4. Magnetna rezonanca

| Usluga | Cijena |
| --- | ---: |
| MR glave | 330 KM |
| MR glave sa kontrastom | 390 KM |
| MR vrata | 330 KM |
| MR vrata sa kontrastom | 390 KM |
| MR grudnog koša | 330 KM |
| MR grudnog koša sa kontrastom | 390 KM |
| MR abdomena | 330 KM |
| MR abdomena sa kontrastom | 390 KM |
| MR male karlice | 330 KM |
| MR male karlice sa kontrastom | 390 KM |
| MR ekstremiteta | 330 KM |
| MR ekstremiteta sa kontrastom | 390 KM |
| MR sinusa | 330 KM |
| MR sinusa sa kontrastom | 390 KM |
| MR grudne kičme | 330 KM |
| MR grudne kičme sa kontrastom | 390 KM |
| MR L/S kičme | 330 KM |
| MR L/S kičme sa kontrastom | 390 KM |
| MR angiografija | 330 KM |
| MR dojke | 330 KM |
| MR dojke sa kontrastom | 390 KM |
| MR enterografija | 390 KM |
| MRCP | 330 KM |
| MR spektroskopija | 450 KM |
| MR srca | 500 KM |
| MR fistulografija | 390 KM |

## 16.5. Specijalistički pregledi

| Usluga | Cijena |
| --- | ---: |
| Pregled specijaliste | 60 KM |
| Kontrolni pregled specijaliste | 30 KM |
| Pregled kardiologa | 70 KM |
| Pregled interniste/kardiologa | 70 KM |
| Pregled hirurga | 60 KM |
| Pregled fizijatra | 60 KM |
| Pregled onkologa | 80 KM |
| Pregled neurologa | 60 KM |
| Pregled anesteziologa | 60 KM |
| Opšti pregled specijaliste porodične medicine | 50 KM |
| Pregled porodične medicine sa zaključnim mišljenjem | 50 KM |
| Pregled dječijeg kardiologa sa UZ srca i EKG-om | 130 KM |
| Pregled štitne žlijezde sa ultrazvukom | 90 KM |
| Punkcija štitne žlijezde | 60 KM |

## 16.6. Kardiologija

| Usluga | Cijena |
| --- | ---: |
| UZ srca | 80 KM |
| Holter EKG | 100 KM |
| Holter pritiska | 70 KM |
| EHO stres | 140 KM |
| Ergometrija | 80 KM |
| EKG | 10 KM |

## 16.7. Ginekologija

| Usluga | Cijena |
| --- | ---: |
| Ginekološki pregled | 80 KM |
| Ginekološki ultrazvuk | 80 KM |
| Ginekološki pregled i ultrazvuk | 130 KM |
| PAPA i VS | 25 KM |
| Bris cerviksa | 15 KM |
| Incizija ciste | 100 KM |
| Aplikacija spirale, spirala ustanove | 200 KM |
| Mirena, aplikacija | 150 KM |
| Vađenje spirale | 70 KM |

## 16.8. Neurološka dijagnostika

| Usluga | Cijena |
| --- | ---: |
| EMNG | 150 KM |
| EEG pretraga | 150 KM |

## 16.9. Endoskopija

| Usluga | Cijena |
| --- | ---: |
| Kolonoskopija bez anestezije | 190 KM |
| Kolonoskopija sa anestezijom | 290 KM |
| Gastroskopija | 120 KM |
| Gastroskopija sa anestezijom | 230 KM |

## 16.10. Fizikalna medicina i rehabilitacija

| Usluga | Cijena |
| --- | ---: |
| Fizikalni paket | 20 KM |
| Laser terapija | 15 KM |
| Masaža | 10–20 KM |
| Trakcija kičmenog stuba | 50 KM |
| Intraartikularna injekcija | 10 KM |

## 16.11. DEXA

| Usluga | Cijena |
| --- | ---: |
| DEXA snimak | 50 KM |
| DEXA sa očitavanjem | 80 KM |

## 16.12. Ambulantne i sestrinske usluge

| Usluga | Cijena |
| --- | ---: |
| Vađenje konaca | 40 KM |
| Previjanje | 30 KM |
| Skidanje kondiloma | 150 KM |
| Mjerenje krvnog pritiska | 5 KM |
| Uključivanje infuzije i lijek | 15 KM |
| Ispiranje uha | 10 KM |
| Previjanje malih rana | 10 KM |
| Previjanje velikih rana | 20 KM |
| Plasiranje katetera i kateter | 10 KM |
| Davanje injekcije i injekcija | 10 KM |
| Mjerenje šećera iz prsta | 6 KM |
| Inhalacija | 10 KM |
| Skidanje konaca | 10 KM |

Izvorni cjenovnik sadrži dvije stavke za skidanje/vađenje konaca sa različitim cijenama, 40 KM i 10 KM. Potrebno je provjeriti da li su to različite procedure ili duplikat.

## 16.13. Ostale usluge

| Usluga | Cijena |
| --- | ---: |
| Ljekarsko uvjerenje | 55 KM |
| Laboratorijske analize | Na upit |

Cijene su izražene u konvertibilnim markama. Za laboratorijske analize i specifične procedure korisnik se upućuje na kontakt sa ustanovom.

---

## 17. Stranica 404 i nepostojeći sadržaj

Za nepoznatu klijentsku stranicu postoji jednostavan 404 prikaz sa:

- oznakom „404“;
- porukom da stranica nije pronađena;
- linkom za povratak na početnu.

Neaktivna odjeljenja, usluge i doktori nisu javno dostupni. Neobjavljene novosti takođe nisu javno dostupne.

---

## 18. Administrativni panel

URL: `/admin`

Panel je zaštićen prijavom i napravljen u Filamentu. Omogućava upravljanje sadržajem bez direktnog uređivanja koda.

## 18.1. Kontakt poruke

Administrator može:

- pregledati ime, telefon, e-mail i poruku;
- pretraživati poruke;
- sortirati po datumu;
- mijenjati status na `unread`, `read` ili `archived`.

## 18.2. Odjeljenja

Moguće je uređivati:

- naziv i slug;
- naslov detaljne stranice;
- kratak i detaljan opis;
- naslovnu fotografiju;
- galeriju;
- ikonicu;
- redoslijed;
- aktivnost;
- prikaz na početnoj;
- opremu;
- indikacije za dolazak;
- FAQ;
- SEO naslov i opis;
- Open Graph naslov i opis;
- canonical URL.

Kroz odjeljenje se mogu upravljati i povezane usluge.

## 18.3. Usluge

Moguće je uređivati:

- povezano odjeljenje;
- naziv i slug;
- oznaku;
- podnaslov;
- sažetak;
- detaljan opis;
- prednosti;
- pripremu;
- tok;
- trajanje;
- cijenu;
- sliku;
- redoslijed;
- aktivnost;
- prikaz na početnoj;
- SEO i Open Graph podatke.

## 18.4. Doktori

Moguće je uređivati:

- ime i slug;
- titulu;
- specijalnost;
- odjeljenje;
- kratku biografiju;
- detaljnu biografiju;
- povezane usluge;
- fotografiju;
- telefon;
- e-mail;
- redoslijed;
- aktivnost;
- prikaz na početnoj;
- SEO i Open Graph podatke.

## 18.5. Novosti

Moguće je uređivati:

- naslov i slug;
- kategoriju;
- povezano odjeljenje;
- sažetak;
- sadržaj kroz rich-text editor;
- fotografiju;
- status draft/published;
- datum objave;
- istaknutu vijest;
- prikaz na početnoj;
- SEO i Open Graph podatke.

## 18.6. Kategorije novosti

Administrator može definisati naziv, slug, redoslijed i aktivnost kategorije.

## 18.7. Dolasci specijalista

Moguće je urediti:

- vezu sa postojećim doktorom;
- ručno uneseno ime;
- specijalnost;
- odjeljenje;
- datum;
- početno i završno vrijeme;
- napomenu;
- redoslijed;
- aktivnost;
- prikaz na početnoj.

## 18.8. Postavke sajta

Postavke podržavaju tekstualne, duže tekstualne i slikovne vrijednosti. Među početnim postavkama su:

- naziv sajta;
- logotip;
- favicon;
- telefoni;
- e-mail;
- adresa;
- grad;
- radno vrijeme;
- e-mail primalac kontakt forme;
- SEO sufiks;
- podrazumijevani meta opis;
- Google Analytics 4 ID;
- Google Search Console verifikacija.

## 18.9. Redirekcije

Administrator može definisati:

- staru putanju;
- novu putanju;
- HTTP status, podrazumijevano 301;
- aktivnost redirekcije.

Kada se promijeni slug javnog sadržaja, sistem može automatski kreirati redirekciju sa stare na novu adresu. Time se štite postojeći linkovi i SEO vrijednost.

---

## 19. SEO i vidljivost na pretraživačima

Sistem ima ugrađenu SEO infrastrukturu.

## 19.1. Meta podaci

Za stranice se generišu:

- HTML naslov;
- meta opis;
- canonical URL;
- Open Graph naslov;
- Open Graph opis;
- Open Graph tip;
- Open Graph slika;
- Twitter velika kartica.

## 19.2. Strukturirani podaci

Koristi se JSON-LD za:

- MedicalClinic / organizaciju;
- breadcrumbs;
- pojedinačnu medicinsku uslugu;
- doktora kao Physician;
- listu doktora;
- članak.

Osnovni podaci organizacije uključuju naziv, URL, telefon, e-mail i adresu.

## 19.3. Sitemap

`/sitemap.xml` automatski obuhvata:

- početnu;
- kontakt;
- o nama;
- cjenovnik;
- doktore;
- novosti;
- aktivne usluge;
- aktivna odjeljenja;
- aktivne doktore;
- objavljene novosti.

Svaka grupa ima definisan prioritet i učestalost izmjene.

## 19.4. Robots

`robots.txt`:

- dozvoljava indeksiranje javnog weba;
- zabranjuje indeksiranje `/admin`;
- navodi lokaciju sitemap datoteke.

## 19.5. Analitika

Ako administrator unese GA4 measurement ID, Google Analytics se automatski uključuje. IP anonimizacija je aktivirana.

Ako se unese Search Console verifikacioni kod, odgovarajući meta tag se automatski prikazuje.

---

## 20. Tehnička arhitektura

## 20.1. Backend

- PHP 8.2+;
- Laravel 12;
- Eloquent ORM;
- SQLite u lokalnoj verziji projekta;
- Inertia Laravel;
- Filament 3 administracija;
- Laravel mail i queue sistem;
- Spatie Media Library.

## 20.2. Frontend

- React 18;
- TypeScript;
- Inertia React;
- Vite;
- Tailwind CSS;
- shadcn/Radix UI komponente;
- Lucide ikone;
- Plus Jakarta Sans font.

## 20.3. Renderovanje

Inertia povezuje Laravel backend i React frontend bez potrebe za odvojenim javnim REST API-jem. Laravel bira stranicu i priprema podatke, a React je prikazuje.

Projekat ima pripremljen i SSR ulaz. Klijentska aplikacija koristi hidrataciju kada dobije već renderovan HTML, a standardni React render kada HTML nije unaprijed renderovan.

## 20.4. Sadržaj i baza

Glavni modeli:

- Department;
- Service;
- Doctor;
- NewsArticle;
- NewsCategory;
- SpecialistVisit;
- ContactMessage;
- SiteSetting;
- Redirect;
- User.

Odnosi:

- odjeljenje ima više usluga;
- odjeljenje ima više doktora;
- doktor može imati više usluga;
- usluga može imati više doktora;
- novost može pripadati kategoriji i odjeljenju;
- dolazak specijaliste može pripadati doktoru i odjeljenju.

---

## 21. Responsive ponašanje i korisničko iskustvo

Web je prilagođen desktop, tablet i mobilnim ekranima.

Primjeri responsive ponašanja:

- desktop navigacija prelazi u bočni mobilni meni;
- mobilna kontakt traka se prikazuje nakon skrolovanja;
- kartice doktora na početnoj postaju horizontalni slider;
- gridovi odjeljenja, usluga i novosti mijenjaju broj kolona;
- hero novosti na mobilnom koriste karusel;
- CTA dugmad se na manjim ekranima slažu vertikalno ili dijele širinu;
- slike koriste `object-cover` i lazy loading gdje je primjereno;
- footer skriva dio sekundarnih informacija na vrlo malim ekranima.

Interaktivni elementi:

- padajući desktop meniji;
- proširivi mobilni meniji;
- karusel vijesti;
- FAQ accordioni;
- filter doktora;
- filter novosti;
- kontakt forma sa stanjem slanja;
- direktni `tel:` i `mailto:` linkovi;
- Facebook i Viber dijeljenje;
- Google mapa.

---

## 22. Glavni korisnički tokovi

## 22.1. Pacijent traži MR

1. Otvara početnu.
2. U meniju „Usluge“ bira Magnetnu rezonancu.
3. Čita opis, pripremu, tok i FAQ.
4. Otvara cjenovnik ili direktno poziva ustanovu.
5. Zakazuje telefonom ili šalje kontakt upit.

## 22.2. Pacijent traži pregled fizijatra i terapiju

1. Otvara odjeljenje Fizijatrija.
2. Pregleda opremu i listu usluga.
3. Otvara Pregled fizijatra.
4. Vidi trajanje, cijenu, pripremu i tok pregleda.
5. Nakon procjene može pregledati fizioterapijske procedure.
6. Zakazuje termin.

## 22.3. Korisnik traži gostujućeg specijalistu

1. Otvara početnu ili Novosti.
2. Pregleda sekciju „Dolasci specijalista“.
3. Vidi datum, vrijeme i napomenu.
4. Poziva recepciju.

## 22.4. Korisnik želi poslati upit

1. Otvara Kontakt.
2. Unosi ime, telefon, opcioni e-mail i poruku.
3. Sistem validira podatke.
4. Poruka se čuva i šalje administratoru e-mailom.
5. Korisnik dobija potvrdu.

## 22.5. Kompanija traži preglede zaposlenih

1. Otvara Medicinu rada ili Sistematske preglede.
2. Čita opis pregleda za kompanije.
3. Provjerava cjenovnik.
4. Šalje upit sa brojem zaposlenih i potrebama.

---

## 23. Sigurnosne i operativne funkcionalnosti

- Admin je zaštićen autentifikacijom.
- Kontakt forma koristi CSRF zaštitu.
- Forma ima serversku validaciju.
- Skriveno honeypot polje smanjuje automatizovani spam.
- Kontakt endpoint ima throttling.
- Neaktivni entiteti nisu javni.
- Draft i buduće novosti nisu javne.
- Markdown cjenovnika ne dozvoljava nesiguran HTML ni nesigurne linkove.
- Kontakt poruke bilježe tehničke podatke radi administrativnog praćenja.
- Redirekcije ne rade nad admin putanjama.

---

## 24. Sadržajne i funkcionalne napomene u trenutnom projektu

Ovo nisu opisi željenog budućeg sistema, nego zapažanja iz postojeće implementacije.

### 24.1. Različiti telefonski brojevi

Glavni javni telefoni su 053 961 777 i 053 223 751. Ipak, pojedina statička dugmad koriste rezervne brojeve:

- 053 / 123-456;
- 053 241 500.

Prije produkcije sva `tel:` dugmad treba uskladiti sa zvaničnim brojevima.

### 24.2. Dugmad bez završene akcije

Pojedina statička CTA dugmad na početnoj nemaju link ili imaju samo vizuelnu funkciju, na primjer:

- hero dugme „Zakažite pregled“;
- hero dugmad „Pogledajte usluge“ i „Odjeljenja“;
- „Pogledajte sve usluge“;
- „Pošaljite upit“ u CTA sekciji.

Treba ih povezati sa kontaktom ili odgovarajućim sekcijama.

### 24.3. Rezervni termini gostujućih doktora

Kada backend nema budućih termina, frontend prelazi na statičke rezervne termine. To može dovesti do prikaza prošlih termina. Preporučuje se prikaz poruke „Trenutno nema najavljenih termina“ umjesto starih rezervnih podataka.

### 24.4. Duplikati termina u lokalnoj bazi

Lokalna baza sadrži više ponovljenih zapisa za iste gostujuće doktore i datume, nastalih višestrukim seedovanjem. Produkcijsku bazu treba očistiti i dodati jedinstveno pravilo gdje je primjereno.

### 24.5. Doktorske biografije

Trenutne biografije su generički placeholder. Potrebno je unijeti:

- stvarnu stručnu biografiju;
- obrazovanje;
- specijalizacije;
- licence i edukacije;
- radno iskustvo;
- eventualne profesionalne jezike;
- tačne kontakt podatke ako trebaju biti javni.

### 24.6. Različite vrijednosti godina iskustva ustanove

Na početnoj se navodi 15+, a na stranici O nama 18+. S obzirom na osnivanje 2006. godine, preporučuje se automatski izračun ili jedna usklađena vrijednost.

### 24.7. Cjenovnik

U cjenovniku se „vađenje/skidanje konaca“ pojavljuje sa dvije različite cijene. Potrebna je medicinsko-poslovna provjera.

### 24.8. Lista novosti i paginacija

Backend paginira po 12 članaka, ali frontend trenutno nema dugmad za narednu/prethodnu stranicu. Kada broj članaka pređe 12, potrebno je dodati kontrole paginacije.

### 24.9. Mapa

Google Maps embed koristi fiksirane koordinate i treba potvrditi da marker zaista pokazuje tačnu lokaciju ustanove.

### 24.10. Statički i dinamički kontakt podaci

Postavke sajta postoje u bazi, ali više komponenti još uvijek koristi direktno upisane telefone, adresu i radno vrijeme. Za lakše održavanje preporučuje se da sve komponente koriste centralne postavke.

### 24.11. Medicinske formulacije

Sadržaj hidžame/cuppinga i pojedinih terapijskih tvrdnji treba stručno i pravno pregledati prije javnog oglašavanja, posebno tvrdnje o detoksikaciji, indikacijama i očekivanim efektima.

---

## 25. Preporučeni sadržajni proces održavanja

### Sedmično

- provjeriti dolaske specijalista;
- ukloniti ili deaktivirati prošle termine;
- objaviti nove termine;
- pregledati kontakt poruke;
- provjeriti da telefoni i radno vrijeme nisu promijenjeni.

### Mjesečno

- provjeriti cijene;
- pregledati aktuelnost akcija;
- provjeriti nove usluge i doktore;
- pregledati neispravne linkove;
- provjeriti da li su fotografije i SEO opisi potpuni.

### Kod promjene usluge ili doktora

- ažurirati glavni zapis;
- provjeriti prikaz na početnoj;
- provjeriti povezano odjeljenje;
- provjeriti povezane usluge/doktore;
- dopuniti SEO podatke;
- testirati staru URL adresu ako je slug promijenjen.

### Kod promjene cijena

- izmijeniti `public/dokumenti/cjenovnik.md`;
- provjeriti cijenu i u pojedinačnom zapisu usluge;
- pregledati da li ista cijena postoji u marketinškom tekstu;
- otvoriti `/cjenovnik` i potvrditi prikaz.

---

## 26. Sažetak projekta

Web ZU SC Dr Brkić je sadržajno bogat zdravstveni portal i poslovna prezentacija sa:

- 11 tipova javnih ruta;
- 6 odjeljenja;
- 16 aktivnih usluga;
- 3 početna profila doktora;
- sistemom gostujućih specijalista;
- 6 početnih novosti;
- detaljnim cjenovnikom;
- kontakt formom i e-mail obavještenjima;
- Google mapom;
- mobilnim CTA funkcijama;
- SEO metapodacima i strukturiranim podacima;
- sitemap i robots podrškom;
- automatskim redirekcijama;
- zaštićenim administrativnim panelom;
- responsive React interfejsom.

Njegova centralna vrijednost je da objedinjuje predstavljanje ustanove, medicinske usluge, tim, aktuelnosti, cijene i kontakt u jedan jasan korisnički put: **informisanje → izbor usluge ili doktora → kontakt → zakazivanje**.

Dokument opisuje trenutno implementirano stanje projekta. Buduće izmjene sadržaja kroz bazu i admin panel mogu promijeniti konkretne doktore, termine, cijene, novosti i usluge, dok osnovna struktura i funkcionalna logika ostaju iste.

---

# DIO II — POTPUNI SADRŽAJNI KATALOG SVIH JAVNIH STRANICA

## 27. Kako čitati ovaj dio dokumenta

Prethodni dio dokumenta objašnjava namjenu, strukturu i funkcionalnosti weba. Ovaj dio navodi stvarni javni sadržaj stranica bez svođenja na kratak funkcionalni opis.

Prioritet je dat sadržaju koji Laravel trenutno učitava iz baze, jer se upravo on prikazuje na javnim URL adresama. Statički rezervni sadržaji navode se zasebno kada se razlikuju od podataka u bazi.

Kompletan cjenovnik, sa svakom pojedinačnom stavkom i cijenom, već je naveden u poglavlju 16 ovog dokumenta.

---

## 28. Potpuni globalni sadržaj

### 28.1. Glavna navigacija

Tekstualne stavke desktop i mobilne navigacije:

- Početna
- O nama
- Odjeljenja
- Usluge
- Doktori
- Novosti
- Cjenovnik
- Kontakt
- Sva odjeljenja →
- Sve usluge →
- 053 961 777
- Zakažite pregled

Mobilni meni dodatno koristi pristupačnu oznaku „Otvorite meni“.

### 28.2. Odjeljenja u navigaciji

- Radiologija
- Laboratorija
- Porodična medicina
- Medicina rada
- Fizijatrija
- Specijalistički pregledi

### 28.3. Usluge u navigaciji

Pošto se navigacija puni aktivnim uslugama iz baze, kompletna trenutna lista je:

- Magnetna rezonanca
- CT dijagnostika
- Ultrazvuk
- Laboratorijske analize
- Medicina rada
- Pregled fizijatra
- Dekompresiona terapija kičme
- DEXA osteodenzitometrija
- Fizikalna terapija
- Laseroterapija
- Ultrazvučna terapija
- Horizontalna terapija
- Shockwave terapija
- Medicinska i relax masaža
- Hidžama i cupping terapija
- Sistematski pregledi

### 28.4. Mobilna donja traka

- Pozovite
- Zakažite

### 28.5. Footer — puni tekst

Opis:

> Savremeni dijagnostički i specijalistički centar u Doboju. Više medicinskih usluga na jednom mjestu.

Naslov „Brzi linkovi“ i stavke:

- Početna
- O nama
- Odjeljenja
- Usluge
- Doktori
- Novosti
- Cjenovnik

Naslov „Odjeljenja“ i stavke:

- Radiologija
- Laboratorija
- Porodična medicina
- Medicina rada
- Fizijatrija

Naslov „Kontakt“:

- Bukovica Mala bb, 74000 Doboj
- 053 / 123-456
- info@drbrkic.ba
- Pon–Pet: 07:00–20:00
- Sub: 08:00–14:00

Završna napomena:

> © [tekuća godina] ZU SC Dr Brkić. Sva prava zadržana.

Napomena: telefon u footeru je trenutno statički rezervni broj i nije isti kao glavni broj iz postavki.

---

## 29. Početna stranica — potpuni tekstualni sadržaj

URL: `/`

### 29.1. Hero

Oznaka:

> Od 2006. godine s vama

Glavni naslov:

> Savremena dijagnostika i specijalistički pregledi na jednom mjestu u Doboju

Podnaslov:

> Pouzdana zdravstvena usluga uz modernu opremu, stručan tim i dugogodišnje iskustvo.

Dugmad:

- Zakažite pregled
- Pogledajte usluge
- Usluge
- Odjeljenja

Brze informacije:

- Lokacija — Bukovica Mala bb, Doboj
- Telefon — 053 961 777
- Telefon — 053 223 751
- Radno vrijeme — Pon–Pet, 07:00–20:00

Oznaka bloka gostujućih doktora:

> Zakazivanje termina

Tekst poziva:

> Pozovite recepciju za zakazivanje →

### 29.2. Hero vijesti

Ako su dostupni podaci iz baze, hero prikazuje:

1. **Novo: Ekspertni 4D ultrazvuk**  
   Kategorija: Nova usluga  
   Tekst: „Najsavremenija 4D ultrazvučna dijagnostika sada dostupna u našoj ustanovi.“

Ako dinamičke vijesti nisu dostupne, rezervni hero sadrži:

1. **Novo: Ekspertni 4D ultrazvuk**  
   „Najsavremenija 4D ultrazvučna dijagnostika sada dostupna u našoj ustanovi.“
2. **Proširenje laboratorijskog programa**  
   „Nove analize iz oblasti endokrinologije i imunologije.“
3. **Dolazak specijaliste kardiologa**  
   „Zakazivanje pregleda kod kardiologa moguće pozivom na recepciju.“

### 29.3. Dolasci specijalista

Naslov:

> Dolasci specijalista

Podnaslov:

> Zakazivanje termina kod gostujućih specijalista

Tekst na kartici za poziv:

> Zakažite: 053 961 777

Podaci koji se mogu prikazati:

- Dr Zlatan Marković — Ginekolog — 01.04.2026 — 15:00–19:00 — Zakazivanje obavezno
- Dr Amir Hadžić — Kardiolog — 03.04.2026 — 09:00–14:00
- Dr Selma Begović — Endokrinolog — 05.04.2026 — 10:00–15:00 — Potrebna uputnica
- Dr Mirko Pavlović — Ortoped — 08.04.2026 — 08:00–13:00

### 29.4. Naše prednosti

Oznaka:

> Naše prednosti

Naslov:

> Zašto pacijenti biraju ZU SC Dr Brkić

Uvod:

> Kombinacija iskustva, savremene opreme i posvećenog tima čini nas pouzdanim partnerom za vaše zdravlje.

Kartice:

1. **Iskustvo i povjerenje**  
   Više od 15 godina kontinuiranog rada i razvoja u službi zdravlja pacijenata.
2. **Savremena oprema**  
   Napredna dijagnostička oprema za precizne i pouzdane rezultate.
3. **Sve na jednom mjestu**  
   Dijagnostika, pregledi i terapija objedinjeni u jednom centru.
4. **Stručan tim**  
   Iskusni doktori i saradnici iz više oblasti medicine.
5. **Elektronska arhiva**  
   Praćenje nalaza i kontinuitet zdravstvene brige za svakog pacijenta.
6. **Posvećenost pacijentu**  
   Pristup koji spaja dijagnostiku, pregled i praćenje zdravlja.

### 29.5. Odjeljenja

Oznaka:

> Odjeljenja

Naslov:

> Naša odjeljenja

Uvod:

> Kroz jasno organizovana odjeljenja pacijentima omogućavamo brži put do dijagnoze, pregleda i terapijskog plana.

Kartice:

- **Radiologija** — Napredne dijagnostičke metode za detaljan uvid u zdravstveno stanje.
- **Laboratorija** — Širok spektar analiza za brzu i pouzdanu dijagnostiku.
- **Porodična medicina** — Kontinuirana briga o zdravlju za cijelu porodicu.
- **Medicina rada** — Pregledi i uvjerenja za radnike, vozače i upis u škole.
- **Fizijatrija** — Fizikalne terapije i tretmani za oporavak i smanjenje bola.
- **Specijalistički pregledi** — Konsultativni pregledi iz različitih medicinskih oblasti.

Tekst akcije na svakoj kartici:

> Saznajte više

### 29.6. Usluge

Oznaka:

> Usluge

Naslov:

> Najtraženije medicinske usluge

Uvod:

> Pronađite uslugu koja vam je potrebna – brzo, pouzdano i na jednom mjestu.

Aktivne kartice označene za početnu:

- Magnetna rezonanca — MR Doboj
- CT dijagnostika — CT Doboj
- Ultrazvuk — Ultrazvuk
- Laboratorijske analize — Laboratorija Doboj
- Medicina rada — Medicina rada Doboj
- Pregled fizijatra — Fizijatrija
- DEXA osteodenzitometrija — Denzitometrija
- Fizikalna terapija — Rehabilitacija
- Sistematski pregledi — Sistematski

Tekst na kartici:

> Saznajte više

Završno dugme:

> Pogledajte sve usluge

### 29.7. O nama na početnoj

Oznaka:

> O nama

Naslov:

> Zdravstvena ustanova sa tradicijom i vizijom

Prvi pasus:

> Zdravstvena ustanova Dr Brkić razvija svoju medicinsku priču od 2006. godine, sa jasnom misijom da pacijentima u Doboju i regiji omogući kvalitetnu, dostupnu i savremenu zdravstvenu uslugu na jednom mjestu.

Drugi pasus:

> Kroz kontinuirano ulaganje u opremu, stručni kadar i razvoj novih usluga, ustanova je izrasla u prepoznatljiv centar kojem se pacijenti vraćaju s povjerenjem.

Istaknute stavke:

- Kontinuiran rad od 2006. godine
- Ulaganje u najsavremeniju opremu
- Više medicinskih usluga na jednom mjestu
- Posvećenost tačnoj i pravovremenoj dijagnozi

Statistike:

- 15+ — Godina iskustva
- 6 — Odjeljenja
- 10+ — Specijalista
- 1000+ — Pacijenata godišnje

### 29.8. Doktori na početnoj

Oznaka:

> Naš tim

Naslov:

> Naši doktori

Uvod:

> Iskusni stručnjaci posvećeni tačnoj dijagnostici i odgovornom pristupu svakom pacijentu.

Kartice:

- Dr Jovica Brkić — Radiologija
- Dr Radenka Marković — Porodična medicina
- Dr Željko Garić — Fizijatrija

Akcije:

- Pogledajte profil
- Pogledajte sve doktore

### 29.9. Glavni CTA

Naslov:

> Vaše zdravlje ne treba čekati

Tekst:

> Zakažite pregled brzo i jednostavno. Naš tim je tu za vas.

Dugmad:

- Pozovite nas
- Pošaljite upit

### 29.10. Novosti na početnoj

Oznaka:

> Aktuelno

Naslov:

> Novosti i obavještenja

Akcije:

- Pročitajte više
- Sve novosti

---

## 30. Stranica „O nama“ — potpuni tekst

URL: `/o-nama`

### 30.1. Hero

Oznaka:

> O nama

Naslov:

> Zdravstvena ustanova sa tradicijom i vizijom

Tekst:

> Zdravstvena ustanova Dr Brkić razvija svoju medicinsku priču od 2006. godine, sa jasnom misijom da pacijentima u Doboju i regiji omogući kvalitetnu, dostupnu i savremenu zdravstvenu uslugu na jednom mjestu.

### 30.2. Statistike

- 18+ — Godina iskustva
- 6 — Odjeljenja
- 10+ — Specijalista
- 1000+ — Pacijenata godišnje

### 30.3. Naša priča

Oznaka:

> Naša priča

Naslov:

> Od ambulante do specijalističkog centra

Prvi pasus:

> Zdravstvena ustanova Dr Brkić osnovana je 2006. godine kao Specijalistička ambulanta za kompjuterizovanu tomografiju u Doboju. Osnivač, dr Jovica Brkić, specijalista radiodijagnostike, želio je pacijentima u regiji pružiti pristup savremenoj dijagnostici bez dugih čekanja.

Drugi pasus:

> Kroz godine, ustanova je rasla i razvijala se. Uprkos izazovima, uključujući razorne poplave 2014. godine, ustanova je pokazala izuzetnu otpornost i posvećenost – obnovljena je i proširena u Specijalistički centar „Dr. Brkić“.

Treći pasus:

> Danas, sa šest odjeljenja i timom od preko deset specijalista, pružamo širok spektar dijagnostičkih i specijalističkih usluga. Kontinuirano ulažemo u najsavremeniju opremu i stručni kadar, jer vjerujemo da svaki pacijent zaslužuje najbolju moguću njegu.

### 30.4. Ključni momenti

Oznaka:

> Ključni momenti

Naslov:

> Naš put kroz godine

- **2006** — Osnivanje Specijalističke ambulante za kompjuterizovanu tomografiju „Dr. Brkić“ u Doboju
- **2010** — Proširenje dijagnostičkih usluga – uvođenje ultrazvučne dijagnostike i laboratorijskih analiza
- **2014** — Osnivanje Specijalističkog centra „Dr. Brkić“ – oporavak i rast nakon velikih poplava
- **2018** — Uvođenje magnetne rezonance i proširenje kapaciteta ustanove
- **2022** — Modernizacija laboratorije i uvođenje novih specijalističkih pregleda
- **2024** — Nastavak ulaganja u najsavremeniju medicinsku opremu i stručni kadar

### 30.5. Naše vrijednosti

Oznaka:

> Naše vrijednosti

Naslov:

> Principi koji nas vode

1. **Pacijent na prvom mjestu**  
   Svaki pacijent zaslužuje pažnju, razumijevanje i individualan pristup. Naša misija je pružiti kvalitetnu zdravstvenu uslugu u ugodnom okruženju.
2. **Pouzdanost i tačnost**  
   Posvećeni smo tačnoj i pravovremenoj dijagnozi koristeći najsavremeniju medicinsku opremu i provjerene metode.
3. **Kontinuirano unapređenje**  
   Stalno ulažemo u edukaciju našeg tima, novu opremu i razvoj usluga kako bismo bili u koraku sa svjetskim standardima.
4. **Timski rad**  
   Naš multidisciplinarni tim specijalista sarađuje kako bi pružio sveobuhvatnu zdravstvenu zaštitu na jednom mjestu.

### 30.6. Misija i vizija

**Naša misija**

> Pružiti pacijentima u Doboju i regiji kvalitetnu, dostupnu i savremenu zdravstvenu uslugu na jednom mjestu. Kroz profesionalan pristup, najsavremeniju opremu i tim posvećenih stručnjaka, želimo biti prva adresa za dijagnostiku i specijalističke preglede.

**Naša vizija**

> Biti vodeća privatna zdravstvena ustanova u regionu, prepoznata po kvalitetu usluga, pouzdanosti dijagnostike i brizi za pacijente. Težimo kontinuiranom unapređenju i uvođenju novih medicinskih usluga u skladu sa svjetskim standardima.

### 30.7. Zašto izabrati Dr Brkić

Oznaka:

> Zašto mi

Naslov:

> Zašto izabrati Dr Brkić?

- Više medicinskih usluga na jednom mjestu
- Najsavremenija dijagnostička oprema
- Tim iskusnih specijalista
- Brzi rezultati bez dugih čekanja
- Individualan pristup svakom pacijentu
- Kontinuirano ulaganje u kvalitet

---

## 31. Kontakt stranica — potpuni tekst

URL: `/kontakt`

### 31.1. Hero

Naslov:

> Kontaktirajte nas

Tekst:

> Tu smo za vas – pozovite, pišite ili nas posjetite lično. Rado ćemo odgovoriti na sva vaša pitanja.

### 31.2. Kontakt kartice

**Telefon**

- 053 961 777
- 053 223 751
- Pozovite nas direktno

**Email**

- info@drbrkic.ba
- Pišite nam bilo kada

**Adresa**

- Bukovica Mala bb
- 74000 Doboj, BiH

**Radno vrijeme**

- Pon – Pet: 07:00 – 20:00

### 31.3. Forma

Naslov:

> Pošaljite upit

Uvod:

> Popunite formu i javit ćemo vam se u najkraćem roku.

Polja i placeholderi:

- Ime i prezime * — „Vaše ime“
- Telefon * — „+387 ...“
- Email — „vaš@email.com“
- Poruka * — „Opišite vaš upit, željeni termin ili pitanje...“

Dugme u normalnom stanju:

> Pošaljite poruku

Dugme tokom slanja:

> Slanje...

### 31.4. Potvrda slanja

Naslov:

> Poruka poslana!

Tekst:

> Hvala vam na upitu. Javit ćemo vam se u najkraćem mogućem roku.

Dugme:

> Pošaljite novi upit

### 31.5. Lokacija

Naslov:

> Lokacija

Tekst:

> ZU SC Dr Brkić – Bukovica Mala bb, 74000 Doboj

Naslov:

> Kako do nas?

Stavke:

- Besplatan parking ispred ustanove
- 5 minuta od centra Doboja
- Pristupačno za osobe sa invaliditetom

---

## 32. Stranica doktora — potpuni sadržaj

URL: `/doktori`

### 32.1. Hero

Oznaka:

> Stručni tim

Naslov:

> Doktori i specijalisti ZU SC Dr Brkić

Tekst:

> Pregledajte naš medicinski tim po odjeljenjima, specijalnostima i uslugama. Svaki profil vodi na detalje o iskustvu, oblastima rada i povezanim uslugama.

### 32.2. Filteri

Oznaka:

> Odjeljenja

Stavke:

- Svi doktori
- Radiologija
- Porodična medicina
- Fizijatrija

Brojač:

> Prikazano: [broj doktora]

Tekstovi kartica:

- Profil
- direktni telefonski poziv

Prazno stanje:

> Nema rezultata za odabrani filter.

> Promijenite odjeljenje.

---

## 33. Profili doktora — kompletni sadržaji

### 33.1. Dr Jovica Brkić

URL: `/doktori/jovica-brkic`

Podaci iz aktivne baze:

- Ime: Dr Jovica Brkić
- Titula: Specijalista radiologije
- Specijalnost/odjeljenje: Radiologija
- Iskustvo: 35+ godina iskustva
- Kratka biografija: „Dr Jovica Brkić - Specijalista radiologije“
- Biografija u bazi: „Biografija i profesionalno iskustvo preuzeti su iz postojećeg Lovable sadržaja i mogu se dopuniti u admin panelu.“
- Obrazovanje u bazi: nije popunjeno
- Povezane usluge: Magnetna rezonanca, CT dijagnostika, Ultrazvuk

Rezervni detaljni sadržaj ugrađen u frontend:

**Diploma**

> Spec. radiodijagnostike – doktor medicine

> Univerzitet u Tuzli – Medicinski fakultet

**Specijalizacija**

> Specijalizacija iz oblasti radio-dijagnostike u Beogradu od 1989. god. do 1992. god. na VMA.

**Biografija**

- Zaposlen od 1985. god. do 1989. god. u Domu zdravlja Gračanica kao doktor medicine u primarnoj zdravstvenoj zaštiti.
- Od 1989. god. do 2006. god. zaposlen u opštoj bolnici u Doboju kao specijalista radio-dijagnostike.
- 2006. god. osniva privatnu zdravstvenu ustanovu Specijalistička ambulanta za kompjuterizovanu tomografiju „Dr. Brkić Doboj“.
- 2014. god. osniva Specijalistički centar „DR. Brkić“ Doboj.

**Rezervna lista usluga**

- CT dijagnostika
- Magnetna rezonanca (MR)
- Ultrazvučna dijagnostika
- Rendgenska dijagnostika
- DEXA denzitometrija

### 33.2. Dr Radenka Marković

URL: `/doktori/radenka-markovic`

Podaci iz aktivne baze:

- Ime: Dr Radenka Marković
- Titula: Specijalista porodične medicine
- Specijalnost/odjeljenje: Porodična medicina
- Iskustvo: 20+ godina iskustva
- Kratka biografija: „Dr Radenka Marković - Specijalista porodične medicine“
- Biografija u bazi: generička napomena o dopuni u admin panelu
- Obrazovanje u bazi: nije popunjeno
- Povezana usluga: Sistematski pregledi

Rezervni detaljni sadržaj:

**Diploma**

> Spec. porodične medicine – doktor medicine

> Univerzitet u Banjoj Luci – Medicinski fakultet

**Specijalizacija**

> Specijalizacija iz oblasti porodične medicine sa fokusom na primarnu zdravstvenu zaštitu.

**Biografija**

- Dugogodišnje iskustvo u primarnoj zdravstvenoj zaštiti sa fokusom na preventivu i kontinuirano praćenje pacijenata.
- Aktivno učestvuje u stručnim edukacijama i unapređenju kvaliteta zdravstvene usluge.

**Rezervna lista usluga**

- Opšti pregledi
- Preventivni pregledi
- Kontrolni pregledi
- Izdavanje recepata i uputnica
- Sistematski pregledi

### 33.3. Dr Željko Garić

URL: `/doktori/zeljko-garic`

Podaci iz aktivne baze:

- Ime: Dr Željko Garić
- Titula: Specijalista fizikalne medicine
- Specijalnost/odjeljenje: Fizijatrija
- Iskustvo: 20+ godina iskustva
- Kratka biografija: „Dr Željko Garić - Specijalista fizikalne medicine“
- Biografija u bazi: generička napomena o dopuni u admin panelu
- Obrazovanje u bazi: nije popunjeno
- Povezane usluge: Fizikalna terapija, DEXA osteodenzitometrija, Pregled fizijatra, Laseroterapija, Shockwave terapija

Rezervni detaljni sadržaj:

**Diploma**

> Spec. fizikalne medicine i rehabilitacije – doktor medicine

> Univerzitet u Banjoj Luci – Medicinski fakultet

**Specijalizacija**

> Specijalizacija iz fizikalne medicine sa fokusom na rehabilitaciju i tretman bolnih stanja.

**Biografija**

- Specijalista sa dugogodišnjim iskustvom u dijagnostici i liječenju bolesti lokomotornog sistema.
- Primjenjuje savremene metode fizikalne terapije i rehabilitacije za funkcionalni oporavak pacijenata.

**Rezervna lista usluga**

- Fizijatrijski pregledi
- Fizikalna terapija
- DEXA denzitometrija
- Rehabilitacija
- Terapija bolnih stanja

### 33.4. Zajednički tekst profila

Naslovi:

- Specijalnosti
- Diploma
- Biografija
- Usluge
- Ostali doktori

Brze informacije:

- Radno vrijeme
- Lokacija
- Bukovica Mala bb, Doboj

Akcije:

- Zakažite pregled
- Kontaktirajte nas
- Pozovite nas
- Pošaljite upit

Završni naslov:

> Zakažite pregled kod [ime doktora]

Završni tekst:

> Pozovite nas ili pošaljite upit za zakazivanje pregleda. Naš tim će vam se javiti u najkraćem roku.

---

## 34. Odjeljenja — potpuni aktivni sadržaji iz baze

### 34.1. Radiologija

Naslov:

> Radiologija u Doboju - napredna dijagnostika za precizniju procjenu

Kratki opis:

> Napredne dijagnostičke metode za detaljan uvid u zdravstveno stanje.

Detaljan opis:

> Radiološka dijagnostika predstavlja osnovu savremene medicine. Kroz napredne metode snimanja, specijalisti mogu dobiti detaljan uvid u zdravstveno stanje pacijenta.

> Odjeljenje radiologije ZU SC Dr Brkić opremljeno je savremenom dijagnostičkom opremom za CT, MR, ultrazvučnu, rendgensku i DEXA dijagnostiku.

Oprema:

- Kompjuterizovana tomografija (CT) - višeslojni skener za brzo i precizno snimanje
- Magnetna rezonanca (MR) - napredni sistem za detaljnu dijagnostiku mekih tkiva
- Digitalni rendgen - za snimanje koštanog sistema i grudnog koša
- Ultrazvuk - za pregled abdomena, štitne žlijezde, dojki, krvnih sudova i mekih tkiva
- DEXA denzitometrija - za mjerenje gustine kostiju i procjenu osteoporoze

Kada se obratiti:

- Imate bolove u kičmi, zglobovima ili mišićima koji ne prolaze
- Potrebna vam je dijagnostika nakon povrede ili traume
- Ljekar vam je preporučio CT, MR, rendgen, DEXA ili ultrazvuk
- Želite kontrolni pregled ili preventivnu dijagnostiku
- Imate simptome koji zahtijevaju detaljniji uvid, poput glavobolje, vrtoglavice ili bola u trbuhu

FAQ:

**Da li je potrebna uputnica za radiološki pregled?**

> Za privatne pacijente uputnica nije potrebna. Preporučujemo da ponesete prethodnu medicinsku dokumentaciju ako je imate.

**Koliko traje MR pregled?**

> Trajanje zavisi od regije koja se snima. Tačne informacije i pripremu dobijate prilikom zakazivanja.

**Kako se pripremiti za CT pregled?**

> Priprema zavisi od vrste CT pregleda i eventualne primjene kontrasta. Recepcija daje uputstva prilikom zakazivanja.

### 34.2. Laboratorija

Naslov:

> Laboratorija u Doboju - brze i pouzdane analize

Kratki opis:

> Širok spektar analiza za brzu i pouzdanu dijagnostiku.

Detaljan opis:

> Laboratorija ZU SC Dr Brkić pruža širok spektar biohemijskih, hematoloških, hormonskih i drugih analiza za potrebe dijagnostike, kontrole i preventivnih pregleda.

> Proces uzorkovanja i obrade organizovan je tako da pacijent dobije jasne informacije o pripremi, rokovima i preuzimanju rezultata.

Oprema:

- Automatski biohemijski analizator
- Hematološki analizator
- Koagulacioni analizator
- Oprema za hormonske i imunološke analize
- Sistemi za sigurno uzorkovanje i obradu uzoraka

Kada se obratiti:

- Ljekar vam je preporučio laboratorijske analize
- Potreban vam je sistematski ili preventivni pregled
- Pratite hronično oboljenje i potrebne su kontrolne analize
- Želite provjeriti osnovne parametre krvi i urina

FAQ:

**Da li moram biti natašte?**

> Za većinu biohemijskih analiza preporučuje se dolazak natašte. Za konkretne analize kontaktirajte recepciju.

**Kada su gotovi rezultati?**

> Rok zavisi od vrste analize. Za rutinske analize informacije dobijate prilikom predaje uzorka.

### 34.3. Porodična medicina

Naslov:

> Porodična medicina u Doboju - prvi kontakt sa zdravstvenim sistemom

Kratki opis:

> Kontinuirana briga o zdravlju za cijelu porodicu.

Detaljan opis:

> Ambulanta porodične medicine pruža kontinuiranu zdravstvenu zaštitu za pacijente različitih starosnih grupa, uz naglasak na prevenciju, ranu procjenu tegoba i praćenje hroničnih stanja.

> Ljekar porodične medicine usmjerava pacijenta prema odgovarajućim pregledima, laboratoriji ili specijalističkoj dijagnostici kada je to potrebno.

Oprema:

- Ambulanta opremljena za opšte i kontrolne preglede
- EKG aparat
- Oprema za mjerenje vitalnih parametara
- Oprema za manje ambulantne intervencije

Kada se obratiti:

- Imate zdravstvene tegobe i potreban vam je prvi pregled
- Potreban vam je preventivni ili sistematski pregled
- Trebate kontrolu terapije ili praćenje hroničnog stanja
- Potrebna vam je preporuka za specijalistički pregled

FAQ:

**Da li je potrebno zakazivanje?**

> Preporučujemo zakazivanje radi kraćeg čekanja i bolje organizacije termina.

### 34.4. Medicina rada

Naslov:

> Medicina rada u Doboju - pregledi i uvjerenja za radnike i firme

Kratki opis:

> Pregledi i uvjerenja za radnike, vozače i upis u škole.

Detaljan opis:

> Odjeljenje medicine rada pruža preglede i uvjerenja za zaposlene, vozače, učenike i druge potrebe u skladu sa važećim zahtjevima i dokumentacijom.

> Pregledi se organizuju za pojedince i firme, uz mogućnost dogovora za sistematske i periodične preglede zaposlenih.

Oprema:

- Ambulanta za preglede medicine rada
- Audiometar
- Spirometar
- EKG aparat
- Oprema za osnovnu procjenu vida i opšteg zdravstvenog stanja

Kada se obratiti:

- Započinjete novi posao i potreban vam je ljekarski pregled
- Firma zahtijeva prethodni ili periodični pregled zaposlenih
- Vadite ili obnavljate vozačku dozvolu
- Potrebno vam je uvjerenje za školu, fakultet ili drugu namjenu

FAQ:

**Šta ponijeti na pregled medicine rada?**

> Ponesite lični dokument i dostupnu medicinsku dokumentaciju. Za pojedine preglede mogu biti potrebni dodatni obrasci.

### 34.5. Fizijatrija

Naslov:

> Fizijatrija u Doboju - fizikalna terapija i rehabilitacija

Kratki opis:

> Fizikalne terapije i tretmani za oporavak i smanjenje bola.

Detaljan opis:

> Fizijatrija i fizikalna medicina imaju ključnu ulogu u prevenciji, dijagnostici, liječenju i rehabilitaciji bolova u leđima, vratu, ramenima, koljenima i drugim dijelovima lokomotornog sistema.

> U našem centru pacijentima pružamo sveobuhvatan pristup kroz specijalističke preglede fizijatra, savremene dijagnostičke metode i individualno prilagođene programe fizikalne terapije.

> Svaki terapijski plan kreira se prema zdravstvenom stanju, simptomima i potrebama pacijenta, s ciljem smanjenja bola, poboljšanja pokretljivosti i unapređenja kvaliteta života.

Oprema:

- Dekompresiona terapija kičme
- DEXA osteodenzitometrija
- Laseroterapija
- Terapijski ultrazvuk
- Horizontalna terapija i elektroterapija
- Shockwave terapija udarnim valom
- Magnetoterapija i kineziterapija

Kada se obratiti:

- Imate bolove u kičmi, vratu, ramenima, koljenima ili drugim zglobovima
- Imate ograničenu pokretljivost ili hronične bolne sindrome
- Oporavljate se nakon povrede ili operacije
- Potrebna vam je fizikalna terapija prema preporuci ljekara
- Potrebno vam je mjerenje gustine kostiju ili rehabilitacioni plan

FAQ:

**Koliko terapija je potrebno?**

> Broj terapija zavisi od dijagnoze i nalaza fizijatra. Plan se određuje individualno.

**Da li svaka usluga zahtijeva pregled fizijatra?**

> Za većinu terapijskih procedura preporučuje se pregled fizijatra kako bi se odabrao siguran i koristan plan terapije.

### 34.6. Specijalistički pregledi

Naslov:

> Konsultativno-specijalistički pregledi u Doboju

Kratki opis:

> Konsultativni pregledi iz različitih medicinskih oblasti.

Detaljan opis:

> ZU SC Dr Brkić organizuje konsultativno-specijalističke preglede iz različitih oblasti medicine, u skladu sa rasporedom dolazaka specijalista.

> Informacije o terminima objavljuju se kroz novosti i dostupne su putem recepcije.

Oprema:

- Opremljene ambulante za specijalističke preglede
- Dijagnostička oprema prema potrebama specijalističkog pregleda
- Prostor za konsultacije i pregled medicinske dokumentacije

Kada se obratiti:

- Potreban vam je specijalistički pregled bez odlaska u veći centar
- Ljekar vas je uputio na konsultativni pregled
- Želite procjenu specijaliste iz određene medicinske oblasti
- Pratite objavljene termine dolazaka specijalista

FAQ:

**Kako saznati kada dolazi specijalista?**

> Termini dolazaka specijalista objavljuju se u sekciji Novosti, a informacije možete dobiti i pozivom recepcije.

### 34.7. Zajednički tekst detaljne stranice odjeljenja

Naslovi i akcije:

- Početna
- Odjeljenja
- Zakažite pregled
- Kontaktirajte nas
- Cjenovnik
- O odjeljenju
- Oprema
- [Naziv odjeljenja] kroz slike
- Usluge odjeljenja
- Pogledajte cjenovnik usluga
- Kada se obratiti ovom odjeljenju?
- Česta pitanja
- Pogledajte i druga odjeljenja
- Pozovite nas
- Pošaljite upit

Istaknute vrijednosti:

- Pouzdanost — Certificirani procesi
- Brzina — Rezultati isti dan
- Iskustvo — Od 2006. godine

---

## 35. Usluge — potpuni aktivni sadržaji iz baze

### 35.1. Magnetna rezonanca

- Oznaka: MR Doboj
- Podnaslov, sažetak i opis: „MR dijagnostika bez zračenja za detaljan prikaz tkiva.“
- Trajanje: Prema vrsti pregleda
- Cijena na stranici usluge: nije unesena

Prednosti:

- Jasan plan pregleda
- Savremena oprema
- Stručan medicinski tim

Priprema:

- Ponesite prethodnu medicinsku dokumentaciju.
- Za detaljnu pripremu kontaktirajte recepciju.

Tok:

1. Prijem i registracija
2. Pregled ili dijagnostička procedura
3. Izdavanje nalaza i preporuka

FAQ:

**Da li je potrebno zakazivanje?**

> Preporučujemo zakazivanje telefonom radi kraćeg čekanja.

### 35.2. CT dijagnostika

- Oznaka: CT Doboj
- Podnaslov, sažetak i opis: „Kompjuterizovana tomografija za brzo i precizno snimanje.“
- Trajanje: Prema vrsti pregleda
- Cijena na stranici usluge: nije unesena

Prednosti:

- Jasan plan pregleda
- Savremena oprema
- Stručan medicinski tim

Priprema:

- Ponesite prethodnu medicinsku dokumentaciju.
- Za detaljnu pripremu kontaktirajte recepciju.

Tok:

1. Prijem i registracija
2. Pregled ili dijagnostička procedura
3. Izdavanje nalaza i preporuka

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.3. Ultrazvuk

- Oznaka: Ultrazvuk
- Podnaslov, sažetak i opis: „Ultrazvučna dijagnostika abdomena, štitne žlijezde, dojki, krvnih sudova i mekih tkiva.“
- Trajanje: Prema vrsti pregleda
- Cijena na stranici usluge: nije unesena

Prednosti:

- Jasan plan pregleda
- Savremena oprema
- Stručan medicinski tim

Priprema:

- Ponesite prethodnu medicinsku dokumentaciju.
- Za detaljnu pripremu kontaktirajte recepciju.

Tok:

1. Prijem i registracija
2. Pregled ili dijagnostička procedura
3. Izdavanje nalaza i preporuka

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.4. Laboratorijske analize

- Oznaka: Laboratorija Doboj
- Podnaslov, sažetak i opis: „Biohemijske, hematološke, hormonske i druge laboratorijske analize.“
- Trajanje: Prema vrsti pregleda
- Cijena na stranici usluge: nije unesena

Prednosti:

- Jasan plan pregleda
- Savremena oprema
- Stručan medicinski tim

Priprema:

- Ponesite prethodnu medicinsku dokumentaciju.
- Za detaljnu pripremu kontaktirajte recepciju.

Tok:

1. Prijem i registracija
2. Pregled ili dijagnostička procedura
3. Izdavanje nalaza i preporuka

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.5. Medicina rada

- Oznaka: Medicina rada Doboj
- Podnaslov, sažetak i opis: „Ljekarski pregledi i uvjerenja za radnike, vozače i firme.“
- Trajanje: Prema vrsti pregleda
- Cijena na stranici usluge: nije unesena

Prednosti:

- Jasan plan pregleda
- Savremena oprema
- Stručan medicinski tim

Priprema:

- Ponesite prethodnu medicinsku dokumentaciju.
- Za detaljnu pripremu kontaktirajte recepciju.

Tok:

1. Prijem i registracija
2. Pregled ili dijagnostička procedura
3. Izdavanje nalaza i preporuka

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.6. Pregled fizijatra

- Oznaka: Fizijatrija
- Podnaslov: „Prvi korak ka uspješnom liječenju i rehabilitaciji“
- Sažetak: „Specijalistički pregled i individualni plan fizikalne terapije.“
- Opis: „Specijalistički pregled fizijatra obuhvata procjenu lokomotornog sistema, analizu tegoba i medicinske dokumentacije te izradu individualnog plana terapije prilagođenog pacijentu.“
- Trajanje: 20–30 minuta
- Cijena: 60,00 KM

Prednosti:

- Detaljna procjena bolova i pokretljivosti
- Individualni plan terapije
- Analiza prethodne medicinske dokumentacije
- Jasne preporuke za rehabilitaciju

Priprema:

- Ponesite prethodne nalaze i snimke ako ih imate.
- Pripremite informacije o trajanju bola i dosadašnjoj terapiji.

Tok:

1. Razgovor o tegobama
2. Klinički pregled lokomotornog sistema
3. Pregled dokumentacije
4. Plan terapije i preporuke

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.7. Dekompresiona terapija kičme

- Oznaka: DTK
- Podnaslov: „Savremena neoperativna procedura kod diskus hernije“
- Sažetak: „Neoperativna terapija za smanjenje pritiska na diskove i nervne strukture.“
- Opis: „Dekompresiona terapija kičme zasniva se na kontrolisanom djelovanju na kičmeni stub radi smanjenja pritiska na intervertebralne diskove i okolne nervne strukture.“
- Trajanje: Prema planu fizijatra
- Cijena: Trakcija kičmenog stuba 50,00 KM

Prednosti:

- Neoperativni pristup
- Smanjenje pritiska na diskove
- Olakšanje simptoma povezanih s diskus hernijom
- Poboljšanje pokretljivosti kod pravilno odabranih pacijenata

Priprema:

- Ponesite nalaze MR, CT ili RTG snimanja.
- Terapija se provodi nakon procjene fizijatra.

Tok:

1. Procjena indikacija
2. Pozicioniranje za terapiju
3. Kontrolisana dekompresija
4. Praćenje reakcije i preporuke

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.8. DEXA osteodenzitometrija

- Oznaka: Denzitometrija
- Podnaslov: „Mjerenje gustine kostiju pomoću X-zraka“
- Sažetak: „Mjerenje gustine koštane mase za procjenu osteoporoze.“
- Opis: „DEXA osteodenzitometrija je brza, bezbolna i neinvazivna metoda za preciznu procjenu gustine koštane mase i rano otkrivanje smanjene gustine kostiju.“
- Trajanje: 15–20 minuta
- Cijena: DEXA snimak 50,00 KM; DEXA sa očitavanjem 80,00 KM

Prednosti:

- Precizna procjena koštane mase
- Rano otkrivanje osteoporoze
- Brz i bezbolan pregled
- Nalaz koji pomaže u planiranju prevencije i liječenja

Priprema:

- Posebna priprema najčešće nije potrebna.
- Ponesite prethodne DEXA nalaze ako ih imate.

Tok:

1. Kratak prijem i priprema
2. Pozicioniranje za snimanje
3. DEXA mjerenje
4. Očitavanje i preporuke prema nalazu

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.9. Fizikalna terapija

- Oznaka: Rehabilitacija
- Podnaslov: „Individualno prilagođena rehabilitacija i smanjenje bola“
- Sažetak: „Individualno prilagođene fizikalne procedure za smanjenje bola i oporavak pokretljivosti.“
- Opis: „Fizikalna terapija koristi magnetoterapiju, DD i IF struje, galvanske struje, ultrazvučnu terapiju i kineziterapiju radi smanjenja bola, poboljšanja funkcionalnosti i ubrzanja oporavka.“
- Trajanje: Prema terapijskom planu
- Cijena: Fizikalni paket 20,00 KM

Prednosti:

- Individualni terapijski plan
- Smanjenje bola
- Poboljšanje pokretljivosti
- Podrška oporavku nakon povreda i hroničnih stanja

Priprema:

- Terapije se primjenjuju prema preporuci fizijatra.
- Obucite udobnu odjeću i ponesite nalaze.

Tok:

1. Procjena i plan terapije
2. Primjena preporučenih procedura
3. Praćenje reakcije na terapiju
4. Korekcija plana prema napretku

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.10. Laseroterapija

- Oznaka: Fizikalna terapija
- Podnaslov: „Laseri male snage za regeneraciju i smanjenje bola“
- Sažetak: „Terapija laserima male snage koja podstiče regeneraciju, smanjuje bol i upalu.“
- Opis: „Laseroterapija podstiče mikrocirkulaciju, bioenergetski metabolizam ćelija i prirodne procese oporavka, uz smanjenje bola, upale i otoka.“
- Trajanje: Kratka terapijska procedura
- Cijena: 15,00 KM

Prednosti:

- Bezbolna i kratka terapija
- Stimulacija regeneracije tkiva
- Smanjenje upale i otoka
- Primjena kod bolnih, posttraumatskih i reumatoloških stanja

Priprema:

- Terapija se provodi prema preporuci stručnog osoblja.
- Obavijestite terapeuta o osjetljivosti kože i prethodnim tretmanima.

Tok:

1. Priprema regije tretmana
2. Primjena laserske stimulacije
3. Praćenje reakcije tkiva
4. Preporuka narednih tretmana

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.11. Ultrazvučna terapija

- Oznaka: Fizikalna terapija
- Podnaslov: „Terapijski ultrazvuk za dubinske strukture lokomotornog sistema“
- Sažetak: „Terapijski ultrazvuk za djelovanje na dublje strukture mišića, tetiva i zglobova.“
- Opis: „Ultrazvučna terapija koristi visokofrekventne zvučne talase koji djeluju na mišiće, tetive, ligamente i zglobove, poboljšavaju cirkulaciju i ubrzavaju regeneraciju.“
- Trajanje: Prema terapijskom planu
- Cijena na stranici usluge: nije unesena

Prednosti:

- Dubinsko djelovanje na tkiva
- Smanjenje bola
- Poboljšanje mikrocirkulacije
- Relaksacija tretiranih tkiva

Priprema:

- Terapija se određuje prema nalazu i planu fizijatra.
- Područje tretmana treba biti dostupno terapeutu.

Tok:

1. Odabir regije tretmana
2. Primjena terapijskog ultrazvuka
3. Praćenje reakcije
4. Nastavak plana rehabilitacije

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.12. Horizontalna terapija

- Oznaka: H-struja
- Podnaslov: „H-struja kod bolnih, reumatskih i posttraumatskih stanja“
- Sažetak: „Elektroterapija srednjefrekventnim strujama za bolna i reumatska stanja.“
- Opis: „Horizontalna terapija koristi srednjefrekventne sinusoidalne struje i primjenjuje se kod reumatizma, posttraumatskih stanja, osteoporoze, poremećaja cirkulacije i bolova u leđima, vratu, koljenu ili ramenu.“
- Trajanje: Prema terapijskom planu
- Cijena na stranici usluge: nije unesena

Prednosti:

- Savremeni oblik elektroterapije
- Primjena kod različitih bolnih stanja
- Podrška kod poremećaja cirkulacije
- Primjena prema procjeni stručnog osoblja

Priprema:

- Prije terapije prijavite implantate, endoproteze, proširene vene ili hematome.
- Terapija se provodi nakon stručne procjene.

Tok:

1. Procjena indikacija
2. Postavljanje elektroda
3. Primjena H-struje
4. Praćenje terapijskog efekta

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.13. Shockwave terapija

- Oznaka: Udarni val
- Podnaslov: „Terapija udarnim valom za stimulaciju regeneracije“
- Sažetak: „Akustični talasi koji stimulišu regeneraciju kod bolnih stanja lokomotornog sistema.“
- Opis: „Shockwave terapija koristi akustične talase za podsticanje prirodnih procesa oporavka kod bolnog ramena, kalcifikata, Ahilove tetive, petnog trna, teniskog lakta, tendinopatija i drugih bolnih stanja.“
- Trajanje: Prema terapijskom planu
- Cijena na stranici usluge: nije unesena

Prednosti:

- Stimulacija regenerativnih procesa
- Smanjenje bola
- Poboljšanje pokretljivosti
- Primjena kod hroničnih tendinopatija i kalcifikata

Priprema:

- Ponesite nalaze koji se odnose na bolno područje.
- Terapija se primjenjuje nakon procjene indikacija.

Tok:

1. Odabir područja tretmana
2. Primjena akustičnih talasa
3. Praćenje reakcije
4. Plan narednih tretmana

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.14. Medicinska i relax masaža

- Oznaka: Masaža
- Podnaslov: „Medicinska i relax masaža za opuštanje i oporavak“
- Sažetak: „Terapijska i relax masaža za opuštanje mišića, bolju cirkulaciju i oporavak.“
- Opis: „Medicinska masaža pomaže u opuštanju napetih mišića, poboljšanju cirkulacije, smanjenju bolova i ubrzanju oporavka, dok relax masaža doprinosi smanjenju stresa i opštem psihofizičkom balansu.“
- Trajanje: Prema dogovorenom tretmanu
- Cijena: 10,00–20,00 KM

Prednosti:

- Opuštanje napetih mišića
- Poboljšanje cirkulacije
- Smanjenje bolova i stresa
- Bolji osjećaj pokretljivosti i vitalnosti

Priprema:

- Obavijestite terapeuta o bolnim tačkama i ranijim povredama.
- Dođite u udobnoj odjeći.

Tok:

1. Kratka procjena tegoba
2. Odabir vrste masaže
3. Manuelni tretman
4. Preporuke za nastavak njege

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.15. Hidžama i cupping terapija

- Oznaka: Hidžama
- Podnaslov: „Hidžama i suva cupping terapija uz manuelnu masažu“
- Sažetak: „Dopunska metoda prirodne detoksikacije i suva cupping terapija uz manuelnu masažu.“
- Opis: „Hidžama je tradicionalna metoda prirodne detoksikacije putem lokalnog puštanja krvi, dok je suva hidžama odnosno cupping terapija dostupna za osobe koje ne žele tretman sa puštanjem krvi.“
- Trajanje: Prema vrsti tretmana
- Cijena na stranici usluge: nije unesena

Prednosti:

- Dopunski pristup kod osjećaja umora i napetosti
- Primjena kod bolova u leđima, ramenima i zglobovima
- Mogućnost kombinovanja sa manuelnom masažom
- Dostupna i suva cupping terapija

Priprema:

- Prije tretmana navedite zdravstvena stanja i terapiju koju koristite.
- Tretman se provodi nakon procjene stručnog osoblja.

Tok:

1. Razgovor i procjena
2. Priprema područja tretmana
3. Hidžama ili suvi cupping
4. Manuelna masaža prema potrebi

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.16. Sistematski pregledi

- Oznaka: Sistematski
- Podnaslov, sažetak i opis: „Sistematski pregledi za pojedince i firme.“
- Trajanje: Prema vrsti pregleda
- Cijena na stranici usluge: nije unesena

Prednosti:

- Jasan plan pregleda
- Savremena oprema
- Stručan medicinski tim

Priprema:

- Ponesite prethodnu medicinsku dokumentaciju.
- Za detaljnu pripremu kontaktirajte recepciju.

Tok:

1. Prijem i registracija
2. Pregled ili dijagnostička procedura
3. Izdavanje nalaza i preporuka

FAQ: preporučuje se telefonsko zakazivanje radi kraćeg čekanja.

### 35.17. Zajednički tekst svake stranice usluge

Hero i akcije:

- Nazad na početnu
- Usluga
- Zakažite termin
- Kontaktirajte nas
- Cjenovnik

Istaknute informacije:

- Trajanje
- Kvalitet — Najsavremenija oprema
- Rezultati — Brza dijagnostika

Naslovi sadržaja:

- O usluzi
- Šta je [naziv usluge]?
- Zašto mi?
- Prednosti
- Zašto izabrati ovu uslugu
- Priprema za pregled
- Šta trebate znati prije dolaska
- Tok pregleda
- Korak po korak
- FAQ
- Česta pitanja
- Povezano
- Povezane usluge

Završni CTA:

- Zakažite danas
- Spremni za [naziv usluge]?
- Pozovite nas ili dođite lično – naš tim je tu da vam pomogne.
- Kontaktirajte nas

---

## 36. Novosti — potpuni sadržaj

### 36.1. Stranica svih novosti

URL: `/novosti`

Oznaka:

> Aktuelno

Naslov:

> Novosti i obavještenja

Uvod:

> Pratite najnovije informacije iz ZU SC Dr Brkić — nove usluge, dolaske specijalista, akcije i obavještenja.

Informativna kartica:

- Radno vrijeme
- Pon – Pet · 07:00 – 20:00
- Kontakt
- 053 961 777 · 053 223 751

Filteri:

- Sve
- Nova usluga
- Dolasci specijalista
- Obavještenje
- Novosti
- Akcije
- Medicina rada

Prazno stanje:

> Nema novosti u ovoj kategoriji.

Akcija na članku:

> Pročitajte više

### 36.2. Novo: Ekspertni 4D ultrazvuk

- URL: `/novosti/ekspertni-4d-ultrazvuk`
- Datum: 28.03.2026.
- Kategorija: Nova usluga
- Odjeljenje: Radiologija
- Sažetak: „Najsavremenija 4D ultrazvučna dijagnostika sada dostupna u našoj ustanovi.“
- Sadržaj:

> Najsavremenija 4D ultrazvučna dijagnostika sada dostupna u našoj ustanovi.

> Sadržaj je informativnog karaktera i ne zamjenjuje pregled i savjet ljekara.

### 36.3. Dolazak specijaliste kardiologa

- URL: `/novosti/dolazak-specijaliste-kardiologa`
- Datum: 25.03.2026.
- Kategorija: Dolasci specijalista
- Odjeljenje: Specijalistički pregledi
- Sažetak: „Zakazivanje pregleda kod kardiologa moguće je pozivom na recepciju ustanove.“
- Sadržaj:

> Zakazivanje pregleda kod kardiologa moguće je pozivom na recepciju ustanove.

> Sadržaj je informativnog karaktera i ne zamjenjuje pregled i savjet ljekara.

### 36.4. Nova usluga: DEXA denzitometrija

- URL: `/novosti/nova-usluga-dexa-denzitometrija`
- Datum: 18.03.2026.
- Kategorija: Obavještenje
- Odjeljenje: Radiologija
- Sažetak: „Od sada u našoj ustanovi možete obaviti DEXA pregled za mjerenje gustine kostiju.“
- Sadržaj:

> Od sada u našoj ustanovi možete obaviti DEXA pregled za mjerenje gustine kostiju.

> Sadržaj je informativnog karaktera i ne zamjenjuje pregled i savjet ljekara.

### 36.5. Proširenje laboratorijskog programa

- URL: `/novosti/prosirenje-laboratorijskog-programa`
- Datum: 10.03.2026.
- Kategorija: Novosti
- Odjeljenje: Laboratorija
- Sažetak: „Laboratorija je proširena novim analizama iz oblasti endokrinologije i imunologije.“
- Sadržaj:

> Laboratorija je proširena novim analizama iz oblasti endokrinologije i imunologije.

> Sadržaj je informativnog karaktera i ne zamjenjuje pregled i savjet ljekara.

### 36.6. Akcija: Sistematski pregledi po povoljnijim cijenama

- URL: `/novosti/akcija-sistematski-pregledi`
- Datum: 05.03.2026.
- Kategorija: Akcije
- Odjeljenje: Porodična medicina
- Sažetak: „Iskoristite promotivne cijene sistematskih pregleda tokom marta i aprila.“
- Sadržaj:

> Iskoristite promotivne cijene sistematskih pregleda tokom marta i aprila.

> Sadržaj je informativnog karaktera i ne zamjenjuje pregled i savjet ljekara.

### 36.7. Novo radno vrijeme subotom

- URL: `/novosti/novo-radno-vrijeme-subotom`
- Datum: 01.03.2026.
- Kategorija: Obavještenje
- Sažetak: „Od marta ustanova radi i subotom od 08:00 do 14:00.“
- Sadržaj:

> Od marta ustanova radi i subotom od 08:00 do 14:00.

> Sadržaj je informativnog karaktera i ne zamjenjuje pregled i savjet ljekara.

### 36.8. Zajednički tekst članka

- Sve novosti
- [broj] min čitanja
- ZU SC Dr Brkić
- Podijelite članak:
- Facebook
- Viber
- Zakažite pregled
- Pozovite nas za više informacija ili zakazivanje.
- Radno vrijeme
- Pon – Pet: 07:00 – 20:00
- Sub: 08:00 – 14:00
- Ostale novosti
- Pročitajte još
- Pročitajte više

---

## 37. Cjenovnik — potvrda potpune pokrivenosti

Stranica `/cjenovnik` prikazuje dokument `public/dokumenti/cjenovnik.md`.

Poglavlje 16 ove dokumentacije navodi sve stavke iz tog izvora, uključujući:

- svih 25 CT stavki;
- svih 8 ultrazvučnih stavki;
- svih 17 RTG i mamografskih stavki;
- svih 26 MR stavki;
- svih 14 specijalističkih pregleda;
- svih 6 kardioloških usluga;
- svih 9 ginekoloških usluga;
- EMNG i EEG;
- sve 4 endoskopske procedure;
- svih 5 fizikalnih i rehabilitacionih stavki;
- obje DEXA stavke;
- svih 13 ambulantnih i sestrinskih stavki;
- ljekarsko uvjerenje;
- laboratorijske analize na upit.

Javni tekst stranice:

Oznaka:

> Cjenovnik

Naslov:

> Cjenovnik medicinskih usluga

Opis:

> Pregled cijena za dijagnostičke, specijalističke, fizikalne i ambulantne usluge.

Akcije:

- Provjerite termin
- Pošaljite upit
- Nazad na početnu

Prikazuje se i tekst:

> Ažurirano: [datum posljednje izmjene cjenovnika]

---

## 38. Stranice za nepostojeći sadržaj

Opšta 404 stranica:

- 404
- Ups! Stranica nije pronađena
- Povratak na početnu

Nepostojeći doktor:

- Doktor nije pronađen
- Pogledajte sve doktore

Nepostojeće odjeljenje:

- Odjeljenje nije pronađeno
- Pogledajte sva odjeljenja

Nepostojeća usluga:

- Usluga nije pronađena
- Povratak na početnu
