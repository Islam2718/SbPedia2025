<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siteinfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'title',
        'description',
        'logo_header',
        'logo_footer',
        'map_html',
        'email',
        'phone',
        'address',
        'web_url',
        'status'
    ];

}
