<?php

namespace App\Http\Controllers;

use App\Models\especie;
use Illuminate\Http\Request;
use DB;

class especieController extends Controller
{
    public function index(){
        return especie::all();
    }
    public function EspecieRaza(Request $request){
        $data = DB::table('especie')
        ->join('especieRaza', 'especieRaza.id_especie', '=', 'especie.id_especie')
        ->join('raza', 'raza.id_raza', '=', 'especieraza.id_raza')
        ->select('especie.id_especie','especieraza.id_raza','raza.descripcion')
        ->where('especie.id_especie',$request->id)
        ->get()->toJson();

      return $data;
    }
}
