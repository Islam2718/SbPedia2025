<?php

namespace App\Models\SbMedia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'parent_id',
        'alias',
        'status',
        'is_default',
        'order'
    ];
    public function news_category_language()
    {
        return $this->hasMany(NewsCategoryLanguage::class, 'news_category_id');
    }    
}
