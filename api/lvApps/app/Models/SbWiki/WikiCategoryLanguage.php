<?php
namespace App\Models\SbWiki;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WikiCategoryLanguage extends Model
{
    use HasFactory;

    protected $fillable = [
        'wiki_category_id',
        'setting_language_id',
        'name',
        'description',
        'is_default',
        'created_by',
        'updated_by'
    ];
}
