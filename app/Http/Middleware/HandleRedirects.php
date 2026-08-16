<?php

namespace App\Http\Middleware;

use App\Models\Redirect;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Symfony\Component\HttpFoundation\Response;

class HandleRedirects
{
    public function handle(Request $request, Closure $next): Response
    {
        $path = '/'.ltrim($request->path(), '/');

        if (! str_starts_with($path, '/admin') && $request->isMethod('GET') && Schema::hasTable('redirects')) {
            $redirect = Redirect::query()
                ->where('is_active', 1)
                ->where('from_path', $path)
                ->first();

            if ($redirect) {
                return redirect($redirect->to_path, $redirect->status_code);
            }
        }

        return $next($request);
    }
}
