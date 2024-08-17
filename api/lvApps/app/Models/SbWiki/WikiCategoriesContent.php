<?php
namespace App\Models\SbWiki;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WikiCategoriesContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'wiki_content_id',
        'wiki_category_id'
    ];
}
