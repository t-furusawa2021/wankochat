<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $table = 'message';

    protected $dates = [
        'created_at',
        'updated_at'
    ];

    protected $fillable = [
        'body',
        'created_at',
        'updated_at'
    ];
}
