<?php

namespace App\Http\Controllers\Api;

use App\Events\MessageReceived;
use App\Models\Message;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Throwable;

class MessageController extends Controller
{
    public function index() {
        $messages = Message::take(10)->orderBy('created_at', 'desc')->get();
        return $messages;
    }

    public function create(Request $request) {
        // バリデーション
        $request->validate([
            'message' => 'bail|required',
        ]);
        // 保存処理
        DB::beginTransaction();
        try {
            $message = Message::create([
                'body' => $request->message
            ]);
            DB::commit();
        } catch(Throwable $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 500);
        }
        // イベントをパブリッシュする。
        event(new MessageReceived($message));
    }
}
