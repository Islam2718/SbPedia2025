<?php
namespace App\Models\DesignLab;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignLabProjectFinance extends Model
{
    use HasFactory;

    protected $fillable = [
        'design_lab_project_id',
        'organization_sb_company_id',
        'status',
        'created_by',
        'updated_by'
    ];
}
