<?php
namespace App\Models\DesignLab;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignLabProjectOperator extends Model
{
    use HasFactory;

    protected $fillable = [
        'design_lab_project_id',
        'person_id',
        'status',
        'created_by',
        'updated_by'
    ];
}
