<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'title',
        'description',
        'thumb',
        'banner_img',
        'slug',
        'page_template',
        'tags',
        'meta_key',
        'meta_description',
        'status'
    ];

    public function sections()
    {
        return $this->hasMany(Section::class, 'page_id');
    }     
}
