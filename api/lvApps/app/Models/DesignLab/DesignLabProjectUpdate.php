<?php
namespace App\Models\SbAcademia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignLabProjectUpdate extends Model
{
    use HasFactory;

    protected $fillable = [
        'design_lab_project_id',
        'title',
        'alias',
        'description',
        'file',
        'updated_date',
        'status',
        'order',
        'created_by',
        'updated_by'
    ];
}
