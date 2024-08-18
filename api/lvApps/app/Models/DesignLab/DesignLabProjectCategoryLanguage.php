<?php
namespace App\Models\DesignLab;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignLabProjectCategoryLanguage extends Model
{
    use HasFactory;

    protected $fillable = [
        'design_lab_project_category_id',
        'setting_language_id',
        'name',
        'description',
        'is_default',
        'created_by',
        'updated_by'
    ];
}
