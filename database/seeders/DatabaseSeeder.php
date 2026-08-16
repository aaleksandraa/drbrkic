<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\Doctor;
use App\Models\NewsArticle;
use App\Models\NewsCategory;
use App\Models\Service;
use App\Models\SiteSetting;
use App\Models\SpecialistVisit;
use App\Models\User;
use App\Support\ImagingPreparation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Cache;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Cache::flush();

        $this->seedSettings();
        $departments = $this->seedDepartments();
        $services = $this->seedServices($departments);
        $this->seedDoctors($departments, $services);
        $this->seedNews($departments);
        $this->seedSpecialistVisits($departments);

        User::updateOrCreate(
            ['email' => 'admin@drbrkic.ba'],
            [
                'name' => 'Administrator',
                'password' => env('ADMIN_PASSWORD', 'password'),
            ],
        );

        $this->command?->info(sprintf(
            'Sadržaj u bazi: %d odjeljenja, %d usluga, %d doktora, %d vijesti.',
            Department::count(),
            Service::count(),
            Doctor::count(),
            NewsArticle::count(),
        ));
    }

    private function seedSettings(): void
    {
        $settings = [
            'site_name' => 'ZU SC Dr Brkić',
            'phone_primary' => '053 961 777',
            'phone_secondary' => '053 223 751',
            'email' => 'info@drbrkic.ba',
            'address' => 'Bukovica Mala bb',
            'city' => '74000 Doboj',
            'country' => 'Bosna i Hercegovina',
            'hours_weekdays' => 'Pon – Pet: 07:00 – 20:00',
            'hours_saturday' => 'Sub: 08:00 – 14:00',
            'facebook' => 'https://www.facebook.com/p/Zdravstvena-ustanova-DR-BRKI%C4%86-Doboj-100086745097635/',
            'instagram' => 'https://www.instagram.com/drbrkic/',
            'linkedin' => 'https://www.linkedin.com/company/dr-brkic',
            'contact_recipient' => 'info@drbrkic.ba',
            'seo_suffix' => ' | ZU SC Dr Brkić Doboj',
            'meta_description' => 'ZU SC Dr Brkić Doboj – savremena dijagnostika (MR, CT, RTG, ultrazvuk, DEXA), laboratorija, porodična medicina, medicina rada, fizijatrija i specijalistički pregledi na jednom mjestu. 20 godina sa vama.',
            'lymph_drainage_whatsapp' => '+41 78 620 11 90',
            'ga4_id' => '',
            'gsc_verification' => '',
        ];

        foreach ($settings as $key => $value) {
            SiteSetting::updateOrCreate(['key' => $key], ['value' => $value]);
        }
    }

    /** @return array<string, Department> */
    private function seedDepartments(): array
    {
        $rows = [
            [
                'name' => 'Radiologija',
                'slug' => 'radiologija',
                'page_title' => 'Radiologija u Doboju - napredna dijagnostika za precizniju procjenu',
                'short_description' => 'Napredne dijagnostičke metode za detaljan uvid u zdravstveno stanje.',
                'description' => "Radiološka dijagnostika predstavlja osnovu savremene medicine. Kroz napredne metode snimanja, specijalisti mogu dobiti detaljan uvid u zdravstveno stanje pacijenta.\n\nOdjeljenje radiologije ZU SC Dr Brkić opremljeno je savremenom dijagnostičkom opremom za CT, MR, ultrazvučnu, rendgensku i DEXA dijagnostiku.",
                'equipment' => [
                    'Kompjuterizovana tomografija (CT) - višeslojni skener za brzo i precizno snimanje',
                    'Magnetna rezonanca (MR) - napredni sistem za detaljnu dijagnostiku mekih tkiva',
                    'Digitalni rendgen - za snimanje koštanog sistema i grudnog koša',
                    'Ultrazvuk - za pregled abdomena, štitne žlijezde, dojki, krvnih sudova i mekih tkiva',
                    'DEXA denzitometrija - za mjerenje gustine kostiju i procjenu osteoporoze',
                ],
                'indications' => [
                    'Imate bolove u kičmi, zglobovima ili mišićima koji ne prolaze',
                    'Potrebna vam je dijagnostika nakon povrede ili traume',
                    'Ljekar vam je preporučio CT, MR, rendgen, DEXA ili ultrazvuk',
                    'Želite kontrolni pregled ili preventivnu dijagnostiku',
                    'Imate simptome koji zahtijevaju detaljniji uvid, poput glavobolje, vrtoglavice ili bola u trbuhu',
                ],
                'faq' => [
                    ['question' => 'Da li je potrebna uputnica za radiološki pregled?', 'answer' => 'Za privatne pacijente uputnica nije potrebna. Preporučujemo da ponesete prethodnu medicinsku dokumentaciju ako je imate.'],
                    ['question' => 'Koliko traje MR pregled?', 'answer' => 'Trajanje zavisi od regije koja se snima. Tačne informacije i pripremu dobijate prilikom zakazivanja.'],
                    ['question' => 'Kako se pripremiti za MR, CT ili RTG pregled?', 'answer' => 'Prije pregleda uklonite odjeću sa cirkonima, grudnjak, nakit, pirsing i metalne predmete. Kod MR i CT pregleda obavezno prijavite pejsmejker, implantate, gelere ili strano tijelo i ponesite identifikacionu karticu implantata. Detaljne upute nalaze se u sekciji Priprema za pregled.'],
                    ['question' => 'Da li je potrebna posebna priprema za CT koronarografiju?', 'answer' => 'Ne preskačite redovnu terapiju za krvni pritisak i srce. Ne pijte kafu, čaj, energetska pića ni alkohol prije pregleda i ne jedite 3–4 sata prije snimanja.'],
                    ['question' => 'Kako se pripremiti za pregled abdomena?', 'answer' => 'Za MR abdomena, MRCP, enterografiju i CT abdomena potrebno je očistiti crijeva laksativom. Jedan dan prije pregleda prestanite sa čvrstom hranom i pijte samo bistre napitke. Detaljne upute date su u sekciji Priprema za pregled.'],
                ],
                'image_path' => 'fasada',
                'gallery' => ['fasada', 'mreza', 'ulaz', 'detalj'],
                'sort_order' => 1,
            ],
            [
                'name' => 'Laboratorija',
                'slug' => 'laboratorija',
                'page_title' => 'Laboratorija u Doboju - brze i pouzdane analize',
                'short_description' => 'Širok spektar analiza za brzu i pouzdanu dijagnostiku.',
                'description' => "Laboratorija ZU SC Dr Brkić pruža širok spektar biohemijskih, hematoloških, hormonskih i drugih analiza za potrebe dijagnostike, kontrole i preventivnih pregleda.\n\nProces uzorkovanja i obrade organizovan je tako da pacijent dobije jasne informacije o pripremi, rokovima i preuzimanju rezultata.",
                'equipment' => [
                    'Automatski biohemijski analizator',
                    'Hematološki analizator',
                    'Koagulacioni analizator',
                    'Oprema za hormonske i imunološke analize',
                    'Sistemi za sigurno uzorkovanje i obradu uzoraka',
                ],
                'indications' => [
                    'Ljekar vam je preporučio laboratorijske analize',
                    'Potreban vam je sistematski ili preventivni pregled',
                    'Pratite hronično oboljenje i potrebne su kontrolne analize',
                    'Želite provjeriti osnovne parametre krvi i urina',
                ],
                'faq' => [
                    ['question' => 'Da li moram biti natašte?', 'answer' => 'Za većinu biohemijskih analiza preporučuje se dolazak natašte. Za konkretne analize kontaktirajte recepciju.'],
                    ['question' => 'Kada su gotovi rezultati?', 'answer' => 'Rok zavisi od vrste analize. Za rutinske analize informacije dobijate prilikom predaje uzorka.'],
                ],
                'image_path' => 'ulaz',
                'gallery' => ['ulaz', 'krilo', 'fasada', 'natpis'],
                'sort_order' => 2,
            ],
            [
                'name' => 'Porodična medicina',
                'slug' => 'porodicna-medicina',
                'page_title' => 'Porodična medicina u Doboju - prvi kontakt sa zdravstvenim sistemom',
                'short_description' => 'Kontinuirana briga o zdravlju za cijelu porodicu.',
                'description' => "Ambulanta porodične medicine pruža kontinuiranu zdravstvenu zaštitu za pacijente različitih starosnih grupa, uz naglasak na prevenciju, ranu procjenu tegoba i praćenje hroničnih stanja.\n\nLjekar porodične medicine usmjerava pacijenta prema odgovarajućim pregledima, laboratoriji ili specijalističkoj dijagnostici kada je to potrebno.",
                'equipment' => [
                    'Ambulanta opremljena za opšte i kontrolne preglede',
                    'EKG aparat',
                    'Oprema za mjerenje vitalnih parametara',
                    'Oprema za manje ambulantne intervencije',
                ],
                'indications' => [
                    'Imate zdravstvene tegobe i potreban vam je prvi pregled',
                    'Potreban vam je preventivni ili sistematski pregled',
                    'Trebate kontrolu terapije ili praćenje hroničnog stanja',
                    'Potrebna vam je preporuka za specijalistički pregled',
                ],
                'faq' => [
                    ['question' => 'Da li je potrebno zakazivanje?', 'answer' => 'Preporučujemo zakazivanje radi kraćeg čekanja i bolje organizacije termina.'],
                ],
                'image_path' => 'krilo',
                'gallery' => ['krilo', 'ulaz', 'fasada', 'nebo'],
                'sort_order' => 3,
            ],
            [
                'name' => 'Medicina rada',
                'slug' => 'medicina-rada',
                'page_title' => 'Medicina rada u Doboju - pregledi i uvjerenja za radnike i firme',
                'short_description' => 'Pregledi i uvjerenja za radnike, vozače i upis u škole.',
                'description' => "Odjeljenje medicine rada pruža preglede i uvjerenja za zaposlene, vozače, učenike i druge potrebe u skladu sa važećim zahtjevima i dokumentacijom.\n\nPregledi se organizuju za pojedince i firme, uz mogućnost dogovora za sistematske i periodične preglede zaposlenih.",
                'equipment' => [
                    'Ambulanta za preglede medicine rada',
                    'Audiometar',
                    'Spirometar',
                    'EKG aparat',
                    'Oprema za osnovnu procjenu vida i opšteg zdravstvenog stanja',
                ],
                'indications' => [
                    'Započinjete novi posao i potreban vam je ljekarski pregled',
                    'Firma zahtijeva prethodni ili periodični pregled zaposlenih',
                    'Vadite ili obnavljate vozačku dozvolu',
                    'Potrebno vam je uvjerenje za školu, fakultet ili drugu namjenu',
                ],
                'faq' => [
                    ['question' => 'Šta ponijeti na pregled medicine rada?', 'answer' => 'Ponesite lični dokument i dostupnu medicinsku dokumentaciju. Za pojedine preglede mogu biti potrebni dodatni obrasci.'],
                ],
                'image_path' => 'natpis',
                'gallery' => ['natpis', 'fasada', 'ulaz', 'mreza'],
                'sort_order' => 4,
            ],
            [
                'name' => 'Fizijatrija',
                'slug' => 'fizijatrija',
                'page_title' => 'Fizijatrija u Doboju - fizikalna terapija i rehabilitacija',
                'short_description' => 'Fizikalne terapije i tretmani za oporavak i smanjenje bola.',
                'description' => "Fizijatrija i fizikalna medicina imaju ključnu ulogu u prevenciji, dijagnostici, liječenju i rehabilitaciji bolova u leđima, vratu, ramenima, koljenima i drugim dijelovima lokomotornog sistema.\n\nU našem centru pacijentima pružamo sveobuhvatan pristup kroz specijalističke preglede fizijatra, savremene dijagnostičke metode i individualno prilagođene programe fizikalne terapije.\n\nSvaki terapijski plan kreira se prema zdravstvenom stanju, simptomima i potrebama pacijenta, s ciljem smanjenja bola, poboljšanja pokretljivosti i unapređenja kvaliteta života.",
                'equipment' => [
                    'Dekompresiona terapija kičme',
                    'DEXA osteodenzitometrija',
                    'Laseroterapija',
                    'Terapijski ultrazvuk',
                    'Horizontalna terapija i elektroterapija',
                    'Shockwave terapija udarnim valom',
                    'Magnetoterapija i kineziterapija',
                    'Limfna drenaža — tretmani kod otoka, limfedema i lipoedema',
                ],
                'indications' => [
                    'Imate bolove u kičmi, vratu, ramenima, koljenima ili drugim zglobovima',
                    'Imate ograničenu pokretljivost ili hronične bolne sindrome',
                    'Oporavljate se nakon povrede ili operacije',
                    'Potrebna vam je fizikalna terapija prema preporuci ljekara',
                    'Potrebno vam je mjerenje gustine kostiju ili rehabilitacioni plan',
                ],
                'faq' => [
                    ['question' => 'Koliko terapija je potrebno?', 'answer' => 'Broj terapija zavisi od dijagnoze i nalaza fizijatra. Plan se određuje individualno.'],
                    ['question' => 'Da li svaka usluga zahtijeva pregled fizijatra?', 'answer' => 'Za većinu terapijskih procedura preporučuje se pregled fizijatra kako bi se odabrao siguran i koristan plan terapije.'],
                    ['question' => 'Da li radite limfnu drenažu?', 'answer' => 'Da. Limfna drenaža se provodi u saradnji sa Gordanom Kolb iz Švajcarske, u okviru periodičnih dolazaka. Termine i zakazivanje pronađite na stranici usluge Limfna drenaža.'],
                ],
                'image_path' => 'mreza',
                'gallery' => ['mreza', 'detalj', 'ulaz', 'krilo'],
                'sort_order' => 5,
            ],
            [
                'name' => 'Specijalistički pregledi',
                'slug' => 'specijalisticki-pregledi',
                'page_title' => 'Konsultativno-specijalistički pregledi u Doboju',
                'short_description' => 'Specijalisti iz više medicinskih oblasti primaju prema objavljenom rasporedu.',
                'description' => "ZU SC Dr Brkić organizuje konsultativno-specijalističke preglede iz više medicinskih oblasti. Specijalisti primaju pacijente prema objavljenom rasporedu dolazaka, uz zakazivanje preko recepcije.\n\nNa ovaj način pacijenti iz Doboja i regije mogu obaviti specijalistički pregled bez odlaska u veći centar, uz mogućnost dopunske dijagnostike u istoj ustanovi.",
                'equipment' => [],
                'indications' => [],
                'faq' => [
                    ['question' => 'Kako zakazati specijalistički pregled?', 'answer' => 'Termin zakazujete pozivom na recepciju. Zakazivanje je obavezno jer specijalisti primaju prema rasporedu dolazaka.'],
                    ['question' => 'Kako saznati kada dolazi specijalista?', 'answer' => 'Naredni termini objavljuju se u sekciji Novosti i na početnoj stranici. Aktuelne termine možete dobiti i pozivom recepcije.'],
                    ['question' => 'Da li je potrebna uputnica?', 'answer' => 'Za privatne pacijente uputnica nije obavezna. Preporučujemo da ponesete prethodnu medicinsku dokumentaciju i nalaze koji se odnose na tegobe.'],
                ],
                'image_path' => 'nebo',
                'gallery' => ['nebo', 'fasada', 'natpis', 'ulaz'],
                'sort_order' => 6,
            ],
        ];

        $out = [];
        foreach ($rows as $row) {
            $row['is_active'] = 1;
            $row['show_on_home'] = 1;
            $row['seo_title'] = $row['page_title'];
            $row['seo_description'] = $row['short_description'];
            $out[$row['slug']] = Department::updateOrCreate(['slug' => $row['slug']], $row);
        }

        return $out;
    }

    /** @return array<string, Service> */
    private function seedServices(array $departments): array
    {
        $defaultBenefits = ['Jasan plan pregleda', 'Savremena oprema', 'Stručan medicinski tim'];
        $defaultPreparation = ['Ponesite prethodnu medicinsku dokumentaciju.', 'Za detaljnu pripremu kontaktirajte recepciju.'];
        $defaultProcess = ['Prijem i registracija', 'Pregled ili dijagnostička procedura', 'Izdavanje nalaza i preporuka'];
        $defaultFaq = [['question' => 'Da li je potrebno zakazivanje?', 'answer' => 'Preporučujemo zakazivanje telefonom radi kraćeg čekanja.']];

        $rows = [
            [
                'department' => 'radiologija', 'name' => 'Magnetna rezonanca', 'slug' => 'magnetna-rezonanca',
                'label' => 'MR Doboj',
                'subtitle' => 'MR dijagnostika bez zračenja za detaljan prikaz tkiva.',
                'summary' => 'MR dijagnostika bez zračenja za detaljan prikaz tkiva.',
                'description' => 'MR dijagnostika bez zračenja za detaljan prikaz tkiva.',
                'duration' => 'Prema vrsti pregleda',
                'preparation' => ImagingPreparation::forService('magnetna-rezonanca'),
                'faq' => [
                    ['question' => 'Da li je potrebno zakazivanje?', 'answer' => 'Preporučujemo zakazivanje telefonom radi kraćeg čekanja.'],
                    ['question' => 'Šta skinuti prije MR pregleda?', 'answer' => 'Uklonite odjeću sa cirkonima, grudnjak, nakit, pirsing, metal i zubne proteze sa metalnim žicama. Gips, longeta ili druga imobilizacija često se skidaju, zavisno od potreba snimanja.'],
                    ['question' => 'Šta prijaviti osoblju prije MR pregleda?', 'answer' => 'Obavezno prijavite strano tijelo, gelere, pejsmejker i feromagnetne implantate. Ako imate implantat, ponesite identifikacionu karticu implantata.'],
                    ['question' => 'Kako se pripremiti za MR abdomena, MRCP ili enterografiju?', 'answer' => 'Jedan dan prije pregleda prestanite sa čvrstom hranom i pijte samo bistre napitke. Crijeva se čiste laksativom u dvije doze — uveče prije pregleda i ujutru na dan pregleda — uz dodatnih 1,5–2 litre vode ili čaja.'],
                ],
                'sort_order' => 1, 'show_on_home' => 1,
            ],
            [
                'department' => 'radiologija', 'name' => 'CT dijagnostika', 'slug' => 'ct-dijagnostika',
                'label' => 'CT Doboj',
                'subtitle' => 'Kompjuterizovana tomografija za brzo i precizno snimanje.',
                'summary' => 'Kompjuterizovana tomografija za brzo i precizno snimanje.',
                'description' => 'Kompjuterizovana tomografija za brzo i precizno snimanje.',
                'duration' => 'Prema vrsti pregleda',
                'preparation' => ImagingPreparation::forService('ct-dijagnostika'),
                'faq' => [
                    ['question' => 'Da li je potrebno zakazivanje?', 'answer' => 'Preporučujemo zakazivanje telefonom radi kraćeg čekanja.'],
                    ['question' => 'Šta skinuti prije CT pregleda?', 'answer' => 'Uklonite odjeću sa cirkonima, grudnjak, nakit, pirsing, metal i zubne proteze sa metalnim žicama. Gips, longeta ili druga imobilizacija često se skidaju, zavisno od potreba snimanja.'],
                    ['question' => 'Kako se pripremiti za CT koronarografiju?', 'answer' => 'Ne preskačite redovnu terapiju za krvni pritisak i srce. Ne pijte kafu, čaj, energetska pića ni alkohol prije pregleda i ne jedite 3–4 sata prije snimanja.'],
                    ['question' => 'Kako se pripremiti za CT abdomena?', 'answer' => 'Jedan dan prije pregleda prestanite sa čvrstom hranom i pijte samo bistre napitke. Crijeva se čiste laksativom u dvije doze, uz dodatnih 1,5–2 litre vode ili čaja. Dodatna priprema se po potrebi vrši u ordinaciji.'],
                ],
                'sort_order' => 2, 'show_on_home' => 1,
            ],
            [
                'department' => 'radiologija', 'name' => 'RTG i mamografija', 'slug' => 'rtg-i-mamografija',
                'label' => 'RTG Doboj',
                'subtitle' => 'Digitalni rendgen i mamografija za precizno snimanje kostiju, pluća i dojki.',
                'summary' => 'Digitalni rendgen i mamografija za precizno snimanje kostiju, pluća i dojki.',
                'description' => 'Digitalni rendgen omogućava brzo snimanje koštanog sistema, grudnog koša, kičme i drugih regija, uz mamografiju za pregled dojki.',
                'duration' => 'Prema vrsti pregleda',
                'preparation' => ImagingPreparation::forService('rtg-i-mamografija'),
                'faq' => [
                    ['question' => 'Da li je potrebno zakazivanje?', 'answer' => 'Preporučujemo zakazivanje telefonom radi kraćeg čekanja.'],
                    ['question' => 'Šta skinuti prije RTG snimanja?', 'answer' => 'Uklonite odjeću sa cirkonima, grudnjak, nakit, pirsing, metal i zubne proteze sa metalnim žicama, kako bi se izbjegli artefakti na snimku.'],
                ],
                'sort_order' => 3, 'show_on_home' => 1,
            ],
            [
                'department' => 'radiologija', 'name' => 'Ultrazvuk', 'slug' => 'ultrazvuk',
                'label' => 'Ultrazvuk',
                'subtitle' => 'Ultrazvučna dijagnostika abdomena, štitne žlijezde, dojki, krvnih sudova i mekih tkiva.',
                'summary' => 'Ultrazvučna dijagnostika abdomena, štitne žlijezde, dojki, krvnih sudova i mekih tkiva.',
                'description' => 'Ultrazvučna dijagnostika abdomena, štitne žlijezde, dojki, krvnih sudova i mekih tkiva.',
                'duration' => 'Prema vrsti pregleda',
                'sort_order' => 4, 'show_on_home' => 1,
            ],
            [
                'department' => 'laboratorija', 'name' => 'Laboratorijske analize', 'slug' => 'laboratorijske-analize',
                'label' => 'Laboratorija Doboj',
                'subtitle' => 'Biohemijske, hematološke, hormonske i druge laboratorijske analize.',
                'summary' => 'Biohemijske, hematološke, hormonske i druge laboratorijske analize.',
                'description' => 'Biohemijske, hematološke, hormonske i druge laboratorijske analize.',
                'duration' => 'Prema vrsti pregleda',
                'sort_order' => 4, 'show_on_home' => 1,
            ],
            [
                'department' => 'medicina-rada', 'name' => 'Medicina rada', 'slug' => 'medicina-rada',
                'label' => 'Medicina rada Doboj',
                'subtitle' => 'Ljekarski pregledi i uvjerenja za radnike, vozače i firme.',
                'summary' => 'Ljekarski pregledi i uvjerenja za radnike, vozače i firme.',
                'description' => 'Ljekarski pregledi i uvjerenja za radnike, vozače i firme.',
                'duration' => 'Prema vrsti pregleda',
                'sort_order' => 5, 'show_on_home' => 1,
            ],
            [
                'department' => 'fizijatrija', 'name' => 'Pregled fizijatra', 'slug' => 'pregled-fizijatra',
                'label' => 'Fizijatrija',
                'subtitle' => 'Prvi korak ka uspješnom liječenju i rehabilitaciji',
                'summary' => 'Specijalistički pregled i individualni plan fizikalne terapije.',
                'description' => 'Specijalistički pregled fizijatra obuhvata procjenu lokomotornog sistema, analizu tegoba i medicinske dokumentacije te izradu individualnog plana terapije prilagođenog pacijentu.',
                'benefits' => ['Detaljna procjena bolova i pokretljivosti', 'Individualni plan terapije', 'Analiza prethodne medicinske dokumentacije', 'Jasne preporuke za rehabilitaciju'],
                'preparation' => ['Ponesite prethodne nalaze i snimke ako ih imate.', 'Pripremite informacije o trajanju bola i dosadašnjoj terapiji.'],
                'process' => ['Razgovor o tegobama', 'Klinički pregled lokomotornog sistema', 'Pregled dokumentacije', 'Plan terapije i preporuke'],
                'duration' => '20–30 minuta', 'price' => '60,00 KM',
                'sort_order' => 6, 'show_on_home' => 1,
            ],
            [
                'department' => 'fizijatrija', 'name' => 'Dekompresiona terapija kičme', 'slug' => 'dekompresiona-terapija-kicme',
                'label' => 'DTK',
                'subtitle' => 'Savremena neoperativna procedura kod diskus hernije',
                'summary' => 'Neoperativna terapija za smanjenje pritiska na diskove i nervne strukture.',
                'description' => 'Dekompresiona terapija kičme zasniva se na kontrolisanom djelovanju na kičmeni stub radi smanjenja pritiska na intervertebralne diskove i okolne nervne strukture.',
                'benefits' => ['Neoperativni pristup', 'Smanjenje pritiska na diskove', 'Olakšanje simptoma povezanih s diskus hernijom', 'Poboljšanje pokretljivosti kod pravilno odabranih pacijenata'],
                'preparation' => ['Ponesite nalaze MR, CT ili RTG snimanja.', 'Terapija se provodi nakon procjene fizijatra.'],
                'process' => ['Procjena indikacija', 'Pozicioniranje za terapiju', 'Kontrolisana dekompresija', 'Praćenje reakcije i preporuke'],
                'duration' => 'Prema planu fizijatra', 'price' => 'Trakcija kičmenog stuba 50,00 KM',
                'sort_order' => 7, 'show_on_home' => 0,
            ],
            [
                'department' => 'fizijatrija', 'name' => 'DEXA osteodenzitometrija', 'slug' => 'dexa',
                'label' => 'Denzitometrija',
                'subtitle' => 'Mjerenje gustine kostiju pomoću X-zraka',
                'summary' => 'Mjerenje gustine koštane mase za procjenu osteoporoze.',
                'description' => 'DEXA osteodenzitometrija je brza, bezbolna i neinvazivna metoda za preciznu procjenu gustine koštane mase i rano otkrivanje smanjene gustine kostiju.',
                'benefits' => ['Precizna procjena koštane mase', 'Rano otkrivanje osteoporoze', 'Brz i bezbolan pregled', 'Nalaz koji pomaže u planiranju prevencije i liječenja'],
                'preparation' => ['Posebna priprema najčešće nije potrebna.', 'Ponesite prethodne DEXA nalaze ako ih imate.'],
                'process' => ['Kratak prijem i priprema', 'Pozicioniranje za snimanje', 'DEXA mjerenje', 'Očitavanje i preporuke prema nalazu'],
                'duration' => '15–20 minuta', 'price' => 'DEXA snimak 50,00 KM · DEXA sa očitavanjem 80,00 KM',
                'sort_order' => 8, 'show_on_home' => 1,
            ],
            [
                'department' => 'fizijatrija', 'name' => 'Limfna drenaža', 'slug' => 'limfna-drenaza',
                'label' => 'Lymph Swiss',
                'subtitle' => 'Tretmani kod otoka, limfedema i lipoedema',
                'summary' => 'Specijalizovani tretman za podsticanje limfne cirkulacije i smanjenje otoka, u saradnji sa Gordanom Kolb iz Švajcarske.',
                'description' => "Limfna drenaža je specijalizovani tretman usmjeren na podsticanje limfne cirkulacije i smanjenje otoka. U Zdravstvenoj ustanovi Dr Brkić tretmane provodimo u saradnji sa Gordanom Kolb iz Švajcarske, kroz unaprijed organizovane termine u Doboju.",
                'benefits' => [
                    'Limfedem i lipoedem',
                    'Otok ruku i nogu',
                    'Oporavak prije i nakon određenih operacija',
                    'Podrška nakon onkološkog liječenja, prema preporuci ljekara',
                ],
                'preparation' => [
                    'Ponesite medicinsku dokumentaciju i preporuku ljekara ako je imate.',
                    'Obavijestite terapeutkinju o operacijama, onkološkom liječenju i terapiji koju koristite.',
                ],
                'process' => ['Razgovor o tegobama i dokumentaciji', 'Procjena stanja', 'Tretman limfne drenaže', 'Preporuke za naredne termine'],
                'faq' => [
                    ['question' => 'Kako zakazati tretman?', 'answer' => 'Termin zakazujete pozivom recepcije ZU Dr Brkić ili putem WhatsApp i Viber broja navedenog na ovoj stranici. Zakazivanje je obavezno jer se tretmani održavaju u okviru periodičnih dolazaka.'],
                    ['question' => 'Kada su naredni termini?', 'answer' => 'Aktuelni datumi objavljuju se u bloku Naredni termini na ovoj stranici. Kada jedan dolazak prođe, unosimo sljedeći termin — adresa stranice ostaje ista.'],
                    ['question' => 'Da li je potrebna preporuka ljekara?', 'answer' => 'Preporučujemo da ponesete dostupnu medicinsku dokumentaciju. Kod stanja nakon onkološkog liječenja tretman se razmatra prema preporuci ljekara.'],
                ],
                'duration' => 'Prema dogovorenom tretmanu',
                'seo_title' => 'Limfna drenaža u Doboju - ZU SC Dr Brkić',
                'seo_description' => 'Limfna drenaža u Doboju: tretmani kod otoka, limfedema i lipoedema u saradnji sa Gordanom Kolb iz Švajcarske. Zakazivanje preko recepcije, WhatsApp i Viber.',
                'sort_order' => 9, 'show_on_home' => 1,
            ],
            [
                'department' => 'fizijatrija', 'name' => 'Fizikalna terapija', 'slug' => 'fizikalna-terapija',
                'label' => 'Rehabilitacija',
                'subtitle' => 'Individualno prilagođena rehabilitacija i smanjenje bola',
                'summary' => 'Individualno prilagođene fizikalne procedure za smanjenje bola i oporavak pokretljivosti.',
                'description' => 'Fizikalna terapija koristi magnetoterapiju, DD i IF struje, galvanske struje, ultrazvučnu terapiju i kineziterapiju radi smanjenja bola, poboljšanja funkcionalnosti i ubrzanja oporavka.',
                'benefits' => ['Individualni terapijski plan', 'Smanjenje bola', 'Poboljšanje pokretljivosti', 'Podrška oporavku nakon povreda i hroničnih stanja'],
                'preparation' => ['Terapije se primjenjuju prema preporuci fizijatra.', 'Obucite udobnu odjeću i ponesite nalaze.'],
                'process' => ['Procjena i plan terapije', 'Primjena preporučenih procedura', 'Praćenje reakcije na terapiju', 'Korekcija plana prema napretku'],
                'duration' => 'Prema terapijskom planu', 'price' => 'Fizikalni paket 20,00 KM',
                'sort_order' => 9, 'show_on_home' => 1,
            ],
            [
                'department' => 'fizijatrija', 'name' => 'Laseroterapija', 'slug' => 'laseroterapija',
                'label' => 'Fizikalna terapija',
                'subtitle' => 'Laseri male snage za regeneraciju i smanjenje bola',
                'summary' => 'Terapija laserima male snage koja podstiče regeneraciju, smanjuje bol i upalu.',
                'description' => 'Laseroterapija podstiče mikrocirkulaciju, bioenergetski metabolizam ćelija i prirodne procese oporavka, uz smanjenje bola, upale i otoka.',
                'benefits' => ['Bezbolna i kratka terapija', 'Stimulacija regeneracije tkiva', 'Smanjenje upale i otoka', 'Primjena kod bolnih, posttraumatskih i reumatoloških stanja'],
                'preparation' => ['Terapija se provodi prema preporuci stručnog osoblja.', 'Obavijestite terapeuta o osjetljivosti kože i prethodnim tretmanima.'],
                'process' => ['Priprema regije tretmana', 'Primjena laserske stimulacije', 'Praćenje reakcije tkiva', 'Preporuka narednih tretmana'],
                'duration' => 'Kratka terapijska procedura', 'price' => '15,00 KM',
                'sort_order' => 10, 'show_on_home' => 0,
            ],
            [
                'department' => 'fizijatrija', 'name' => 'Ultrazvučna terapija', 'slug' => 'ultrazvucna-terapija',
                'label' => 'Fizikalna terapija',
                'subtitle' => 'Terapijski ultrazvuk za dubinske strukture lokomotornog sistema',
                'summary' => 'Terapijski ultrazvuk za djelovanje na dublje strukture mišića, tetiva i zglobova.',
                'description' => 'Ultrazvučna terapija koristi visokofrekventne zvučne talase koji djeluju na mišiće, tetive, ligamente i zglobove, poboljšavaju cirkulaciju i ubrzavaju regeneraciju.',
                'benefits' => ['Dubinsko djelovanje na tkiva', 'Smanjenje bola', 'Poboljšanje mikrocirkulacije', 'Relaksacija tretiranih tkiva'],
                'preparation' => ['Terapija se određuje prema nalazu i planu fizijatra.', 'Područje tretmana treba biti dostupno terapeutu.'],
                'process' => ['Odabir regije tretmana', 'Primjena terapijskog ultrazvuka', 'Praćenje reakcije', 'Nastavak plana rehabilitacije'],
                'duration' => 'Prema terapijskom planu',
                'sort_order' => 11, 'show_on_home' => 0,
            ],
            [
                'department' => 'fizijatrija', 'name' => 'Horizontalna terapija', 'slug' => 'horizontalna-terapija',
                'label' => 'H-struja',
                'subtitle' => 'H-struja kod bolnih, reumatskih i posttraumatskih stanja',
                'summary' => 'Elektroterapija srednjefrekventnim strujama za bolna i reumatska stanja.',
                'description' => 'Horizontalna terapija koristi srednjefrekventne sinusoidalne struje i primjenjuje se kod reumatizma, posttraumatskih stanja, osteoporoze, poremećaja cirkulacije i bolova u leđima, vratu, koljenu ili ramenu.',
                'benefits' => ['Savremeni oblik elektroterapije', 'Primjena kod različitih bolnih stanja', 'Podrška kod poremećaja cirkulacije', 'Primjena prema procjeni stručnog osoblja'],
                'preparation' => ['Prije terapije prijavite implantate, endoproteze, proširene vene ili hematome.', 'Terapija se provodi nakon stručne procjene.'],
                'process' => ['Procjena indikacija', 'Postavljanje elektroda', 'Primjena H-struje', 'Praćenje terapijskog efekta'],
                'duration' => 'Prema terapijskom planu',
                'sort_order' => 12, 'show_on_home' => 0,
            ],
            [
                'department' => 'fizijatrija', 'name' => 'Shockwave terapija', 'slug' => 'shockwave-terapija',
                'label' => 'Udarni val',
                'subtitle' => 'Terapija udarnim valom za stimulaciju regeneracije',
                'summary' => 'Akustični talasi koji stimulišu regeneraciju kod bolnih stanja lokomotornog sistema.',
                'description' => 'Shockwave terapija koristi akustične talase za podsticanje prirodnih procesa oporavka kod bolnog ramena, kalcifikata, Ahilove tetive, petnog trna, teniskog lakta, tendinopatija i drugih bolnih stanja.',
                'benefits' => ['Stimulacija regenerativnih procesa', 'Smanjenje bola', 'Poboljšanje pokretljivosti', 'Primjena kod hroničnih tendinopatija i kalcifikata'],
                'preparation' => ['Ponesite nalaze koji se odnose na bolno područje.', 'Terapija se primjenjuje nakon procjene indikacija.'],
                'process' => ['Odabir područja tretmana', 'Primjena akustičnih talasa', 'Praćenje reakcije', 'Plan narednih tretmana'],
                'duration' => 'Prema terapijskom planu',
                'sort_order' => 13, 'show_on_home' => 0,
            ],
            [
                'department' => 'fizijatrija', 'name' => 'Medicinska i relax masaža', 'slug' => 'medicinska-relax-masaza',
                'label' => 'Masaža',
                'subtitle' => 'Medicinska i relax masaža za opuštanje i oporavak',
                'summary' => 'Terapijska i relax masaža za opuštanje mišića, bolju cirkulaciju i oporavak.',
                'description' => 'Medicinska masaža pomaže u opuštanju napetih mišića, poboljšanju cirkulacije, smanjenju bolova i ubrzanju oporavka, dok relax masaža doprinosi smanjenju stresa i opštem psihofizičkom balansu.',
                'benefits' => ['Opuštanje napetih mišića', 'Poboljšanje cirkulacije', 'Smanjenje bolova i stresa', 'Bolji osjećaj pokretljivosti i vitalnosti'],
                'preparation' => ['Obavijestite terapeuta o bolnim tačkama i ranijim povredama.', 'Dođite u udobnoj odjeći.'],
                'process' => ['Kratka procjena tegoba', 'Odabir vrste masaže', 'Manuelni tretman', 'Preporuke za nastavak njege'],
                'duration' => 'Prema dogovorenom tretmanu', 'price' => '10,00–20,00 KM',
                'sort_order' => 14, 'show_on_home' => 0,
            ],
            [
                'department' => 'fizijatrija', 'name' => 'Hidžama i cupping terapija', 'slug' => 'hidzama-cupping-terapija',
                'label' => 'Hidžama',
                'subtitle' => 'Hidžama i suva cupping terapija uz manuelnu masažu',
                'summary' => 'Dopunska metoda prirodne detoksikacije i suva cupping terapija uz manuelnu masažu.',
                'description' => 'Hidžama je tradicionalna metoda prirodne detoksikacije putem lokalnog puštanja krvi, dok je suva hidžama odnosno cupping terapija dostupna za osobe koje ne žele tretman sa puštanjem krvi.',
                'benefits' => ['Dopunski pristup kod osjećaja umora i napetosti', 'Primjena kod bolova u leđima, ramenima i zglobovima', 'Mogućnost kombinovanja sa manuelnom masažom', 'Dostupna i suva cupping terapija'],
                'preparation' => ['Prije tretmana navedite zdravstvena stanja i terapiju koju koristite.', 'Tretman se provodi nakon procjene stručnog osoblja.'],
                'process' => ['Razgovor i procjena', 'Priprema područja tretmana', 'Hidžama ili suvi cupping', 'Manuelna masaža prema potrebi'],
                'duration' => 'Prema vrsti tretmana',
                'sort_order' => 15, 'show_on_home' => 0,
            ],
            [
                'department' => 'porodicna-medicina', 'name' => 'Sistematski pregledi', 'slug' => 'sistematski-pregledi',
                'label' => 'Sistematski',
                'subtitle' => 'Sistematski pregledi za pojedince i firme.',
                'summary' => 'Sistematski pregledi za pojedince i firme.',
                'description' => 'Sistematski pregledi za pojedince i firme.',
                'duration' => 'Prema vrsti pregleda',
                'sort_order' => 16, 'show_on_home' => 1,
            ],
        ];

        $out = [];
        $serviceCrops = ['fasada', 'mreza', 'ulaz', 'detalj', 'krilo', 'natpis', 'nebo'];
        foreach ($rows as $i => $row) {
            $departmentSlug = $row['department'];
            unset($row['department']);

            $row['department_id'] = $departments[$departmentSlug]->id;
            $row['image_path'] = $serviceCrops[$i % count($serviceCrops)];
            $row['is_active'] = 1;
            $row['benefits'] = $row['benefits'] ?? $defaultBenefits;
            $row['preparation'] = $row['preparation'] ?? $defaultPreparation;
            $row['process'] = $row['process'] ?? $defaultProcess;
            $row['faq'] = $row['faq'] ?? $defaultFaq;
            $row['seo_title'] = $row['seo_title'] ?? $row['name'].' Doboj - ZU SC Dr Brkić';
            $row['seo_description'] = $row['seo_description'] ?? $row['summary'];

            $out[$row['slug']] = Service::updateOrCreate(['slug' => $row['slug']], $row);
        }

        return $out;
    }

    private function seedDoctors(array $departments, array $services): void
    {
        $rows = [
            [
                'department' => 'radiologija',
                'name' => 'Dr Jovica Brkić',
                'slug' => 'jovica-brkic',
                'photo_path' => '/images/tim/dr-jovica-brkic.jpg',
                'title' => 'Specijalista radiologije',
                'specialty' => 'Radiologija',
                'experience' => '35+ godina iskustva',
                'short_bio' => 'Dr Jovica Brkić - Specijalista radiologije',
                'education' => "Spec. radiodijagnostike – doktor medicine\nUniverzitet u Tuzli – Medicinski fakultet",
                'specializations' => 'Specijalizacija iz oblasti radio-dijagnostike u Beogradu od 1989. god. do 1992. god. na VMA.',
                'bio' => "Zaposlen od 1985. god. do 1989. god. u Domu zdravlja Gračanica kao doktor medicine u primarnoj zdravstvenoj zaštiti.\n\nOd 1989. god. do 2006. god. zaposlen u opštoj bolnici u Doboju kao specijalista radio-dijagnostike.\n\n2006. god. osniva privatnu zdravstvenu ustanovu Specijalistička ambulanta za kompjuterizovanu tomografiju „Dr. Brkić Doboj“.\n\n2014. god. osniva Specijalistički centar „DR. Brkić“ Doboj.",
                'services' => ['magnetna-rezonanca', 'ct-dijagnostika', 'rtg-i-mamografija', 'ultrazvuk'],
                'sort_order' => 1,
            ],
            [
                'department' => 'porodicna-medicina',
                'name' => 'Dr Radenka Marković',
                'slug' => 'radenka-markovic',
                'photo_path' => '/images/tim/dr-radenka-markovic.jpg',
                'title' => 'Specijalista porodične medicine',
                'specialty' => 'Porodična medicina',
                'experience' => '20+ godina iskustva',
                'short_bio' => 'Dr Radenka Marković - Specijalista porodične medicine',
                'education' => "Spec. porodične medicine – doktor medicine\nUniverzitet u Banjoj Luci – Medicinski fakultet",
                'specializations' => 'Specijalizacija iz oblasti porodične medicine sa fokusom na primarnu zdravstvenu zaštitu.',
                'bio' => "Dugogodišnje iskustvo u primarnoj zdravstvenoj zaštiti sa fokusom na preventivu i kontinuirano praćenje pacijenata.\n\nAktivno učestvuje u stručnim edukacijama i unapređenju kvaliteta zdravstvene usluge.",
                'services' => ['sistematski-pregledi'],
                'sort_order' => 2,
            ],
            [
                'department' => 'fizijatrija',
                'name' => 'Dr Željko Garić',
                'slug' => 'zeljko-garic',
                'photo_path' => '/images/tim/dr-zeljko-garic-fizickalna-medicina.jpg',
                'title' => 'Specijalista fizikalne medicine',
                'specialty' => 'Fizijatrija',
                'experience' => '20+ godina iskustva',
                'short_bio' => 'Dr Željko Garić - Specijalista fizikalne medicine',
                'education' => "Spec. fizikalne medicine i rehabilitacije – doktor medicine\nUniverzitet u Banjoj Luci – Medicinski fakultet",
                'specializations' => 'Specijalizacija iz fizikalne medicine sa fokusom na rehabilitaciju i tretman bolnih stanja.',
                'bio' => "Specijalista sa dugogodišnjim iskustvom u dijagnostici i liječenju bolesti lokomotornog sistema.\n\nPrimjenjuje savremene metode fizikalne terapije i rehabilitacije za funkcionalni oporavak pacijenata.",
                'services' => ['fizikalna-terapija', 'dexa', 'pregled-fizijatra', 'laseroterapija', 'shockwave-terapija'],
                'sort_order' => 3,
            ],
        ];

        foreach ($rows as $row) {
            $serviceSlugs = $row['services'];
            $departmentSlug = $row['department'];
            unset($row['services'], $row['department']);

            $row['department_id'] = $departments[$departmentSlug]->id;
            $row['is_active'] = 1;
            $row['show_on_home'] = 1;
            $row['seo_title'] = $row['name'].' - '.$row['title'].' | ZU SC Dr Brkić Doboj';
            $row['seo_description'] = $row['short_bio'];

            $doctor = Doctor::updateOrCreate(['slug' => $row['slug']], $row);
            $doctor->services()->sync(collect($serviceSlugs)->map(fn ($slug) => $services[$slug]->id));
        }
    }

    private function seedNews(array $departments): void
    {
        $categories = [];
        foreach (['Nova usluga', 'Dolasci specijalista', 'Obavještenje', 'Novosti', 'Akcije', 'Medicina rada'] as $i => $name) {
            $slug = str($name)->slug()->toString();
            $categories[$name] = NewsCategory::updateOrCreate(['slug' => $slug], [
                'name' => $name,
                'sort_order' => $i + 1,
                'is_active' => 1,
            ]);
        }

        $disclaimer = 'Sadržaj je informativnog karaktera i ne zamjenjuje pregled i savjet ljekara.';

        $rows = [
            [
                'title' => 'CT aparat u BiH – Canon Aquilion Lightning 160 slojeva',
                'slug' => 'ct-aparat-u-bih-canon-aquilion-lightning-160-slojeva',
                'category' => 'Nova usluga',
                'department' => 'radiologija',
                'excerpt' => 'Najsavremeniji CT uređaj u BiH — Canon Aquilion Lightning 160 slojni, sa vještačkom inteligencijom AiCE, koronarografijom i smanjenjem zračenja do 85%.',
                'body' => "Predstavljamo vam najsavremeniji CT uređaj u Bosni i Hercegovini – Canon Aquilion Lightning 160 slojni.\n\n- Prvi CT uređaj u svijetu koji posjeduje vještačku inteligenciju (AiCE)\n- Uređaj na kom se radi KORONAROGRAFIJA\n- Smanjen nivo zračenja do 85%\n- Skraćeno trajanje snimanja\n\nU korak sa vremenom, za vas u ZU Dr Brkić u Doboju.\n\n".$disclaimer,
                'image_path' => '/images/blog/ct1-670x446.jpg',
                'published_at' => '2022-03-04 10:39:00',
                'is_featured' => false,
            ],
            [
                'title' => 'JEDINI u BIH sa 2 uređaja sa vještačkom inteligencijom',
                'slug' => 'jedini-u-bih-sa-2-uredaja-sa-vjestackom-inteligencijom',
                'category' => 'Novosti',
                'department' => 'radiologija',
                'excerpt' => 'Jedini u BiH sa dva uređaja sa vještačkom inteligencijom: CT Canon Aquilion Lightning (2022) i MR Canon Vantage ELAN NX 1.5T (2023).',
                'body' => "- CT Canon Aquilion Lightning 2022\n- MR Canon Vantage ELAN NX 1.5T 2023\n\nU korak sa vremenom, ZU Dr Brkić.\n\nSnimak kičme na novom uređaju MAGNETNE REZONANCE sa vještačkom inteligencijom Canon Vantage Elan 1,5T.\n\nUz interpretaciju vrhunskih stručnjaka, povjerenje kad je zdravlje u pitanju stavljate u prave ruke.\n\n![Snimak kičme na Canon Vantage Elan 1,5T](/images/blog/kicma-670x446.jpg)\n\n".$disclaimer,
                'image_path' => '/images/blog/uredjaj-670x446.jpg',
                'published_at' => '2023-03-14 09:40:00',
                'is_featured' => false,
            ],
            [
                'title' => 'Limfna drenaža u Doboju, u saradnji sa Gordanom Kolb',
                'slug' => 'limfna-drenaza-gordana-kolb',
                'category' => 'Nova usluga',
                'department' => 'fizijatrija',
                'excerpt' => 'Tretmani limfne drenaže kod otoka, limfedema i lipoedema sada su dostupni u ZU Dr Brkić, kroz periodične dolaske Gordane Kolb iz Švajcarske.',
                'body' => "ZU SC Dr Brkić u Doboju organizuje tretmane limfne drenaže u saradnji sa Gordanom Kolb iz Švajcarske (Lymph Swiss).\n\nLimfna drenaža je specijalizovani tretman usmjeren na podsticanje limfne cirkulacije i smanjenje otoka. Može biti dio terapijskog pristupa kod limfedema, lipoedema, otoka ruku i nogu, te u oporavku prije i nakon određenih operativnih zahvata — uključujući određena stanja nakon onkološkog liječenja, prema preporuci ljekara.\n\nTretmani se održavaju u prostorijama ustanove, u okviru unaprijed zakazanih termina. Aktuelne datume i zakazivanje pronađite na stranici usluge Limfna drenaža.\n\n".$disclaimer,
                'image_path' => 'mreza',
                'published_at' => '2026-08-15 09:00:00',
                'is_featured' => true,
            ],
            [
                'title' => 'Novo: Ekspertni 4D ultrazvuk',
                'slug' => 'ekspertni-4d-ultrazvuk',
                'category' => 'Nova usluga',
                'department' => 'radiologija',
                'excerpt' => 'Najsavremenija 4D ultrazvučna dijagnostika sada dostupna u našoj ustanovi.',
                'body' => "Najsavremenija 4D ultrazvučna dijagnostika sada dostupna u našoj ustanovi.\n\n".$disclaimer,
                'image_path' => 'mreza',
                'published_at' => '2026-03-28 09:00:00',
                'is_featured' => true,
            ],
            [
                'title' => 'Dolazak ginekologa dr Zlatana Markovića',
                'slug' => 'dolazak-dr-zlatan-markovic-ginekolog',
                'category' => 'Dolasci specijalista',
                'department' => 'specijalisticki-pregledi',
                'excerpt' => 'Prim. dr Zlatan Marković, ginekolog, prima pacijentice 20. avgusta 2026. od 15:00 do 19:00. Zakazivanje je obavezno.',
                'body' => "Prim. dr Zlatan Marković, specijalista ginekologije, prima pacijentice u ZU SC Dr Brkić u Doboju.\n\nNaredni objavljeni termin je četvrtak, 20. avgust 2026, od 15:00 do 19:00. Zakazivanje je obavezno, preko recepcije ustanove.\n\nTokom dolaska dostupni su ginekološki pregledi iz cjenovnika: ginekološki pregled, ginekološki ultrazvuk, kombinovani pregled i ultrazvuk, PAPA i VS, bris cerviksa, te ostale ginekološke usluge navedene u cjenovniku.\n\nTermin zakazujete na 053 961 777 ili 053 223 751.\n\n".$disclaimer,
                'image_path' => 'fasada',
                'published_at' => '2026-08-13 09:00:00',
                'is_featured' => false,
            ],
            [
                'title' => 'Dolazak specijaliste kardiologa',
                'slug' => 'dolazak-specijaliste-kardiologa',
                'category' => 'Dolasci specijalista',
                'department' => 'specijalisticki-pregledi',
                'excerpt' => 'Zakazivanje pregleda kod kardiologa moguće je pozivom na recepciju ustanove.',
                'body' => "Zakazivanje pregleda kod kardiologa moguće je pozivom na recepciju ustanove.\n\n".$disclaimer,
                'image_path' => 'fasada',
                'published_at' => '2026-03-25 09:00:00',
            ],
            [
                'title' => 'Nova usluga: DEXA denzitometrija',
                'slug' => 'nova-usluga-dexa-denzitometrija',
                'category' => 'Obavještenje',
                'department' => 'radiologija',
                'excerpt' => 'Od sada u našoj ustanovi možete obaviti DEXA pregled za mjerenje gustine kostiju.',
                'body' => "Od sada u našoj ustanovi možete obaviti DEXA pregled za mjerenje gustine kostiju.\n\n".$disclaimer,
                'image_path' => 'detalj',
                'published_at' => '2026-03-18 09:00:00',
            ],
            [
                'title' => 'Proširenje laboratorijskog programa',
                'slug' => 'prosirenje-laboratorijskog-programa',
                'category' => 'Novosti',
                'department' => 'laboratorija',
                'excerpt' => 'Laboratorija je proširena novim analizama iz oblasti endokrinologije i imunologije.',
                'body' => "Laboratorija je proširena novim analizama iz oblasti endokrinologije i imunologije.\n\n".$disclaimer,
                'image_path' => 'ulaz',
                'published_at' => '2026-03-10 09:00:00',
            ],
            [
                'title' => 'Akcija: Sistematski pregledi po povoljnijim cijenama',
                'slug' => 'akcija-sistematski-pregledi',
                'category' => 'Akcije',
                'department' => 'porodicna-medicina',
                'excerpt' => 'Iskoristite promotivne cijene sistematskih pregleda tokom marta i aprila.',
                'body' => "Iskoristite promotivne cijene sistematskih pregleda tokom marta i aprila.\n\n".$disclaimer,
                'image_path' => 'krilo',
                'published_at' => '2026-03-05 09:00:00',
            ],
            [
                'title' => 'Novo radno vrijeme subotom',
                'slug' => 'novo-radno-vrijeme-subotom',
                'category' => 'Obavještenje',
                'department' => null,
                'excerpt' => 'Od marta ustanova radi i subotom od 08:00 do 14:00.',
                'body' => "Od marta ustanova radi i subotom od 08:00 do 14:00.\n\n".$disclaimer,
                'image_path' => 'natpis',
                'published_at' => '2026-03-01 09:00:00',
            ],
        ];

        foreach ($rows as $row) {
            $categoryName = $row['category'];
            $departmentSlug = $row['department'];
            unset($row['category'], $row['department']);

            $row['news_category_id'] = $categories[$categoryName]->id;
            $row['department_id'] = $departmentSlug ? $departments[$departmentSlug]->id : null;
            $row['status'] = 'published';
            $row['show_on_home'] = 1;
            $row['seo_title'] = $row['title'].' | ZU SC Dr Brkić Doboj';
            $row['seo_description'] = $row['excerpt'];

            NewsArticle::updateOrCreate(['slug' => $row['slug']], $row);
        }
    }

    private function seedSpecialistVisits(array $departments): void
    {
        $specialist = $departments['specijalisticki-pregledi'];

        $markovicNews = NewsArticle::query()->where('slug', 'dolazak-dr-zlatan-markovic-ginekolog')->first();
        $lymphNews = NewsArticle::query()->where('slug', 'limfna-drenaza-gordana-kolb')->first();
        $fizijatrija = $departments['fizijatrija'];

        $rows = [
            ['doctor_name' => 'Gordana Kolb', 'specialty' => 'Limfna drenaža', 'visit_date' => '2026-08-10', 'start_time' => '08:00', 'end_time' => '18:00', 'note' => 'Zakazivanje obavezno', 'news_article_id' => $lymphNews?->id, 'department_id' => $fizijatrija->id],
            ['doctor_name' => 'Gordana Kolb', 'specialty' => 'Limfna drenaža', 'visit_date' => '2026-08-11', 'start_time' => '08:00', 'end_time' => '18:00', 'note' => 'Zakazivanje obavezno', 'news_article_id' => $lymphNews?->id, 'department_id' => $fizijatrija->id],
            ['doctor_name' => 'Dr Zlatan Marković', 'specialty' => 'Ginekolog', 'visit_date' => '2026-08-20', 'start_time' => '15:00', 'end_time' => '19:00', 'note' => 'Zakazivanje obavezno', 'news_article_id' => $markovicNews?->id],
            ['doctor_name' => 'Dr Amir Hadžić', 'specialty' => 'Kardiolog', 'visit_date' => '2026-04-03', 'start_time' => '09:00', 'end_time' => '14:00', 'note' => null],
            ['doctor_name' => 'Dr Selma Begović', 'specialty' => 'Endokrinolog', 'visit_date' => '2026-04-05', 'start_time' => '10:00', 'end_time' => '15:00', 'note' => 'Potrebna uputnica'],
            ['doctor_name' => 'Dr Mirko Pavlović', 'specialty' => 'Ortoped', 'visit_date' => '2026-04-08', 'start_time' => '08:00', 'end_time' => '13:00', 'note' => null],
        ];

        foreach ($rows as $i => $row) {
            SpecialistVisit::updateOrCreate(
                ['doctor_name' => $row['doctor_name'], 'visit_date' => $row['visit_date'], 'start_time' => $row['start_time']],
                $row + ['department_id' => $specialist->id, 'sort_order' => $i + 1, 'is_active' => 1, 'show_on_home' => 1],
            );
        }
    }
}
