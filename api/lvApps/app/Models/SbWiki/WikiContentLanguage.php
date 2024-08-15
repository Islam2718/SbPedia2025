<?php
namespace App\Models\SbWiki;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WikiContentLanguage extends Model
{
    use HasFactory;

    protected $fillable = [
        'wiki_content_id',
        'setting_language_id',
        'title',
        'sub_title',
        'name',
        'content',
        'featured_image',
        'is_default',
        'created_by',
        'updated_by',
        'status'
    ];  
}
