<?php
namespace App\Models\SbWiki;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WikiCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'parent_id',
        'alias',
        'status',
        'is_default',
        'order'
    ];
    public function wiki_category_language()
    {
        return $this->hasMany(WikiCategoryLanguage::class, 'wiki_category_id');
    }    
}
