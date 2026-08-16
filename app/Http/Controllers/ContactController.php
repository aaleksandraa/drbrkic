<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use App\Models\SiteSetting;
use App\Support\Seo;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Contact', [
            'seo' => Seo::make(
                title: 'Kontakt – zakažite pregled',
                description: 'Kontaktirajte ZU SC Dr Brkić Doboj – telefoni, e-mail, adresa, radno vrijeme i mapa lokacije.',
                path: '/kontakt',
                jsonLd: [Seo::clinic()],
            ),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'phone' => ['required', 'string', 'max:40'],
            'email' => ['nullable', 'email', 'max:255'],
            'message' => ['required', 'string', 'min:10', 'max:2000'],
            'website' => ['prohibited'],
        ], [
            'name.required' => 'Unesite ime i prezime.',
            'phone.required' => 'Unesite broj telefona.',
            'email.email' => 'Unesite ispravnu e-mail adresu.',
            'message.required' => 'Unesite poruku.',
            'message.min' => 'Poruka mora imati najmanje 10 znakova.',
        ]);

        $message = ContactMessage::create([
            'name' => $validated['name'],
            'phone' => $validated['phone'],
            'email' => $validated['email'] ?? null,
            'message' => $validated['message'],
            'status' => 'unread',
            'ip' => $request->ip(),
            'user_agent' => substr((string) $request->userAgent(), 0, 512),
        ]);

        $recipient = SiteSetting::val('contact_recipient');

        if ($recipient) {
            try {
                Mail::raw(
                    "Nova kontakt poruka\n\nIme: {$message->name}\nTelefon: {$message->phone}\nE-mail: ".($message->email ?: '—')."\n\nPoruka:\n{$message->message}",
                    fn ($mail) => $mail->to($recipient)->subject('Nova kontakt poruka – web stranica'),
                );
            } catch (\Throwable $e) {
                Log::warning('Contact mail failed: '.$e->getMessage());
            }
        }

        return back()->with('success', true);
    }
}
