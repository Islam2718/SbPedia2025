<?php
namespace App\Models\SbAcademia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademiaCategoriesContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'academia_content_id',
        'academia_category_id'
    ];
}
