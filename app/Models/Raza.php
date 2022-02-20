<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Raza extends Model  // faltan los elementos /routes
{
    use HasFactory;
    protected $table = "raza";
    protected $primaryKey = 'id_raza';
    protected $fillable = [
        'id_raza',
        'descripcion',
        'id_especie'
    ];
    public function mascota()
    {
      return $this->hasMany('App\Models\mascota', 'id_raza' );
    }
}
