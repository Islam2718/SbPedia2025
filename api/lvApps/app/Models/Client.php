<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'thumb',
        'duration',
        'location',
        'no_of_workers',
        'status'
    ]; 
}
