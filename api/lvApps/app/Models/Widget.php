<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Widget extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'thumb',
        'event_date',
        'event_title',
        'location',
        'section_id',
        'status'
    ];
    
    public function section()
    {
        return $this->belongsTo(Section::class, 'section_id');
    }
}
