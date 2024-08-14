<?php
namespace App\Models\SbAcademia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademiaCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'parent_id',
        'alias',
        'status',
        'is_default',
        'order'
    ];
    public function academia_category_language()
    {
        return $this->hasMany(AcademiaCategoryLanguage::class, 'academia_category_id');
    }    
}
