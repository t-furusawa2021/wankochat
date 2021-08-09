<?php

namespace App\Http\Controllers\Api;

use App\Events\MessageReceived;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index() {
        return \App\Models\Message::take(10)->orderBy('created_at', 'desc')->get();
    }

    public function create(Request $request) {
        $message = \App\Models\Message::create([
            'body' => $request->message
        ]);
        event(new MessageReceived($message));
    }
}
