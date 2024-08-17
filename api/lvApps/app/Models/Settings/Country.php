<?php

namespace App\Models\Settings;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'country_name',
        'country_short_code',
        'iso_code_3',
        'address_format',
        'postcode_required',
        'region_id',
        'status'
    ];
}
