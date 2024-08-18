<?php
namespace App\Models\DesignLab;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignLabOrganization extends Model
{
    use HasFactory;

    protected $fillable = [
        'design_lab_id',
        'organization_id'
    ];
}
