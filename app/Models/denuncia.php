<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class denuncia extends Model
{
    use HasFactory;
    public $table = "denuncia";
    protected $fillable = [
        'folio',  
        'nombrecom',  
        'email',  
        'Dden',  
      
      ];
      public $timestamps = false;
}
