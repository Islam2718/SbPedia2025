<?php
namespace App\Models\DesignLab;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignLab extends Model
{
    use HasFactory;

    protected $fillable = [
        'person_id',
        'activity_id',
        'organization_id',
        'event_schedule_id',
        'yc_dl_number',
        'organization_dl_number',
        'type',
        'design_lab_code',
        'title',
        'sub_title',
        'alias',
        'description',
        'serial_no',
        'venue',
        'general_participant_fee',
        'student_participant_fee',
        'is_live_stream',
        'live_stream_code',
        'registration_last_date',
        'order',
        'status',
        'is_approved',
        'created_by',
        'updated_by'
    ];
}
