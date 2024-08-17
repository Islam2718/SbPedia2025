<?php
namespace App\Models\SbAcademia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademiaContentLanguage extends Model
{
    use HasFactory;

    protected $fillable = [
        'academia_content_id',
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
