<?php
namespace App\Models\DesignLab;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignLabProjectContact extends Model
{
    use HasFactory;

    protected $fillable = [
        'organization_id',
        'contact_name',
        'contact_email',
        'contact_phone',
        'contact_company',
        'contact_designation',
        'contact_detail',
        'status',
        'created_by',
        'updated_by'
    ];
}
