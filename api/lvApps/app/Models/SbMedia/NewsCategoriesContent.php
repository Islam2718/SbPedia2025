<?php
namespace App\Models\SbMedia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsCategoriesContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'news_content_id',
        'news_category_id'
    ];
}
