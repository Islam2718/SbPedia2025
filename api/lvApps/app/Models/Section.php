<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;
    protected $fillable = [
        'page_id',
        'title',
        'sub_title',
        'content',
        'thumb',
        'banner',
        'background',
        'status',
    ];    

    public function widgets()
    {
        return $this->hasMany(Widget::class, 'section_id');
    }
}
