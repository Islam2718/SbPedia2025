<?php
namespace App\Models\SbAcademia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademiaCategoryLanguage extends Model
{
    use HasFactory;

    protected $fillable = [
        'academia_category_id',
        'setting_language_id',
        'name',
        'description',
        'is_default',
        'created_by',
        'updated_by'
    ];
}
