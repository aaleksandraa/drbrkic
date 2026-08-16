<?php

namespace App\Http\Controllers;

use App\Support\PriceListDocument;
use App\Support\Seo;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function about(): Response
    {
        return Inertia::render('About', [
            'seo' => Seo::make(
                title: 'O nama – zdravstvena ustanova sa tradicijom i vizijom',
                description: 'Zdravstvena ustanova Dr Brkić razvija svoju medicinsku priču od 2006. godine, sa misijom da pacijentima u Doboju i regiji omogući kvalitetnu, dostupnu i savremenu zdravstvenu uslugu na jednom mjestu.',
                path: '/o-nama',
                jsonLd: [Seo::clinic()],
            ),
        ]);
    }

    public function priceList(): Response
    {
        $payload = PriceListDocument::payload();

        return Inertia::render('PriceList', [
            'groups' => $payload['groups'],
            'updatedAt' => $payload['updatedAt'],
            'seo' => Seo::make(
                title: 'Cjenovnik medicinskih usluga',
                description: 'Pregled cijena za dijagnostičke, specijalističke, fizikalne i ambulantne usluge u ZU SC Dr Brkić Doboj.',
                path: '/cjenovnik',
            ),
        ]);
    }
}
