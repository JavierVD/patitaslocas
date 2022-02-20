<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class especie extends Model
{
    use HasFactory;
    public $table = "especie";
    protected $primaryKey = 'id_especie';
    protected $fillable = [
        'id_especie',  
        'descripcion',
      ];
      public function mascota()
      {
        return $this->hasMany('App\Models\mascota', 'id_especie' );
      }
}
