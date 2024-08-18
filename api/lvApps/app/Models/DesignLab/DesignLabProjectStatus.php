<?php
namespace App\Models\DesignLab;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignLabProjectStatus extends Model
{
    use HasFactory;

    protected $fillable = [
        'design_lab_project_id',
        'title',
        'alias',
        'product',
        'production_capacity',
        'comments',
        'employment_male',
        'employment_female',
        'investment_till_now',
        'updated_date',
        'status',
        'order',
        'created_by',
        'updated_by'
    ];
}
