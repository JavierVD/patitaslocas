<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mascota extends Model
{
  use HasFactory;
  public $table = "mascota";
  protected $primaryKey = 'id_mascota';
  protected $fillable = [
      'id_mascota',  
      'nombre',  
      'id_especie',  
      'id_raza',  
      'peso',  
      'estatura', 
      'foto', 
      'fechaDes',  
      'failed_at',
    ];
    public function raza()
    {
        return $this->belongsTo('App\Models\Raza', 'id_raza' );
    }

  public function especie()
  {
      return $this->belongsTo('App\Models\especie', 'id_especie' );
  }
   
  public $timestamps = false;  
}
