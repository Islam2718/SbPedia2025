<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'passport_no',
        'passport_issue_date',
        'passport_expire_date',
        'age',        
        'qualification_status',
        'qualification_description',
        'work_experience_status',
        'work_experience_description',
        'experience_duration',
        'marital_status',
        'nationality',
        'country',
        'district',
        'cv_file',
        'status',
    ]; 
}
