<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;
use App\Models\tienda;

class tiendaController extends Controller
{

    public function returnID(){
        return Auth::user()->id;
    }

    public function store(Request $request){

        $adopcion = new adopcion;
        $adopcion-> id_mascota = $request-> id_mascota;    
        $adopcion-> id_usuario= $request->id_usuario;
        $adopcion-> fecha = date("Y-m-d h:i:s", time());
        $request['message'] = date("Y-m-d h:i:s", time());
        $adopcion->save();
        return $request;
        
    }

    public function adopcion()
    {
        return view('adopmascot');
    }
    public function aprobar(Request $request)
    {
        $folio = $request->folio;
        $estado = $request->estado;
        $id_mascota = $request->id_mascota;
        $request["message"] = $folio;
        $request["popo"] = $estado; 
        $request["pipí"] = $id_mascota;  
        DB::update('update adopcion set aprobado = ? where id_adopcion = ?',
        [$estado, $folio]);
        DB::update('update mascota set fechaDes = ? where id_mascota = ?',
        [date("Y-m-d h:i:s", time()), $id_mascota]);
        return $request;
    }

    public function misadopciones()
    {
        $user = Auth::user();
        $iduser = $user->id;
        $query = DB::select('select id_adopcion, mascota.id_mascota as id_mascota, nombre,
         mascota.id_raza as id_raza, mascota.id_especie as id_especie, peso, 
         estatura, foto, raza.descripcion as descripcionraza, especie.descripcion 
         as descripcionespecie, fecha from mascota inner join raza on raza.id_raza = 
         mascota.id_raza inner join especie on especie.id_especie = 
         mascota.id_especie inner join adopcion on adopcion.id_mascota = mascota.id_mascota where adopcion.id_usuario = ? AND  adopcion.aprobado is null or adopcion.aprobado = "No"',
            [$iduser]);
        return $query;
    }

    public function getMis()
    {
        $user = Auth::user();
        $iduser = $user->id;
        $query = DB::select('select users.name as adoptante, id_adopcion, mascota.id_mascota as id_mascota, nombre,
         mascota.id_raza as id_raza, mascota.id_especie as id_especie, peso, 
         estatura, foto, raza.descripcion as descripcionraza, especie.descripcion 
         as descripcionespecie, fecha from mascota inner join raza on raza.id_raza = 
         mascota.id_raza inner join especie on especie.id_especie = 
         mascota.id_especie inner join adopcion on adopcion.id_mascota = mascota.id_mascota inner join users on users.id = adopcion.id_usuario where adopcion.id_usuario = ? and adopcion.aprobado = "Ok"',
            [$iduser]);
        return $query;

    }

    public function getAll()
    {
        $query = DB::select('select * from products');
        return $query;
    }
    public function destroy($id)
    {

        $result = adopcion::where('id_adopcion', $id)->delete();
        
    }

    public function urlraza(Request $request){
        $user = Auth::user();
        $iduser = $user->id;
        $idraza = $request->id_raza;
        $request["message"]=$user;
        $query = DB::select('select mascota.id_mascota as id_mascota, nombre,
         mascota.id_raza as id_raza, mascota.id_especie as id_especie, peso, 
         estatura, foto, raza.descripcion as descripcionraza, especie.descripcion 
         as descripcionespecie from mascota inner join raza on raza.id_raza = 
         mascota.id_raza inner join especie on especie.id_especie = 
         mascota.id_especie where mascota.id_mascota in (select t1.id_mascota FROM mascota t1 
         WHERE t1.id_mascota NOT IN (SELECT DISTINCT t2.id_mascota FROM 
         adopcion t2 where t2.id_usuario = ?)) AND mascota.fechaDes is NULL AND mascota.id_raza = ?',
            [$iduser, $idraza]);
        
        return $query;
    }

    public function urlespecie(Request $request){
        $user = Auth::user();
        $iduser = $user->id;
        $idraza = $request->id_raza;
        $request["message"]=$user;
        $query = DB::select('select mascota.id_mascota as id_mascota, nombre,
         mascota.id_raza as id_raza, mascota.id_especie as id_especie, peso, 
         estatura, foto, raza.descripcion as descripcionraza, especie.descripcion 
         as descripcionespecie from mascota inner join raza on raza.id_raza = 
         mascota.id_raza inner join especie on especie.id_especie = 
         mascota.id_especie where mascota.id_mascota in (select t1.id_mascota FROM mascota t1 
         WHERE t1.id_mascota NOT IN (SELECT DISTINCT t2.id_mascota FROM 
         adopcion t2 where t2.id_usuario = ?)) AND mascota.fechaDes is NULL AND mascota.id_especie = ?',
            [$iduser, $idraza]);
        
        return $query;
    }

    public function separar(){
        $user = Auth::user();
        $iduser = $user->id;
        $request["message"]=$user;
        $query = DB::select('select mascota.id_mascota as id_mascota, nombre,
         mascota.id_raza as id_raza, mascota.id_especie as id_especie, peso, 
         estatura, foto, raza.descripcion as descripcionraza, especie.descripcion 
         as descripcionespecie from mascota inner join raza on raza.id_raza = 
         mascota.id_raza inner join especie on especie.id_especie = 
         mascota.id_especie where mascota.id_mascota in (select t1.id_mascota FROM mascota t1 
         WHERE t1.id_mascota NOT IN (SELECT DISTINCT t2.id_mascota FROM 
         adopcion t2 where t2.id_usuario = ?)) AND mascota.fechaDes is NULL',
            [$iduser]);
        
        return $query;
    }
}
