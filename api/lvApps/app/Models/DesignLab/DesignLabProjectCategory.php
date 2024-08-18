<?php
namespace App\Models\DesignLab;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignLabProjectCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'alias',
        'nupms_category_code',
        'image',
        'status',
        'order'
    ];
}
