<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class adopcion extends Model
{
    use HasFactory;
    public $table = "adopcion";
    protected $fillable = [
        'id_adopcion',
        'fecha',
        'id_usuario',
        'id_mascota',
    ];
    public $timestamps = false;
}
