<?php

namespace App\Models\SbMedia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsCategoryLanguage extends Model
{
    use HasFactory;

    protected $fillable = [
        'news_category_id',
        'setting_language_id',
        'name',
        'description',
        'is_default',
        'created_by',
        'updated_by'
    ];
}
