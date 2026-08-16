<!DOCTYPE html>
<html lang="bs" class="scroll-smooth">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#0d3d36" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    @php
        $ga4 = \App\Models\SiteSetting::val('ga4_id');
        $gsc = \App\Models\SiteSetting::val('gsc_verification');
    @endphp
    @if($gsc)
        <meta name="google-site-verification" content="{{ $gsc }}" />
    @endif
    @if($ga4)
        <script async src="https://www.googletagmanager.com/gtag/js?id={{ $ga4 }}"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '{{ $ga4 }}', { 'anonymize_ip': true });
        </script>
    @endif
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
</head>
<body class="antialiased">
    @inertia
</body>
</html>
