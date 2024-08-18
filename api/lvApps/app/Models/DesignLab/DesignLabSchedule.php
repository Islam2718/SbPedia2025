<?php
namespace App\Models\DesignLab;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignLabSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'design_lab_id',
        'time_from',
        'time_to',
        'activity',
        'remark',
        'is_emphasis',
        'order',
        'created_by',
        'updated_by', 
    ];
}
