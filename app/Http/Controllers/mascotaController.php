<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use App\Models\mascota;
use App\Models\Raza;
use App\Models\especie;
use Auth;
use Illuminate\Support\Facades\File; 

class mascotaController extends Controller
{
    public function index(){

        return mascota::all();
        
    }
    public function index2()
    {
        $especie = especie::all();
        $raza = Raza::all();
        $especies = array('lista_especie' => $especie);
        $razas = array('lista_raza'=> $raza);        

        return view('mascota')
            ->with($especies)
            ->with($razas);
        
    }
    public function adminMascota()
    {
        return view('administrarMascotas');
    }

    public function getMascotaEspecie(){
        $mascota=mascota::all()->
            where('id_especie','=','1')->get();
        return $mascota;
    }
    
    public function store(Request $request)
    {
        $response['XDD'] = $request -> file('foto');
        if($request->get('foto'))
        {
        $image = $request->get('foto');
        $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
        \Image::make($request->get('foto'))->save(public_path('images/').$name);
        $mascota= new mascota;
        $mascota-> id_mascota = $request-> id_mascota;    
        $mascota-> nombre= $request->nombre;
        $mascota-> id_especie = $request-> id_especie;   
        $mascota-> id_raza = $request-> id_raza;    
        $mascota-> peso = $request-> peso;   
        $nombre = $request -> id_especie;
        $mascota-> estatura = $request-> estatura;  
        $mascota-> foto= $name;  
        $mascota->save();
        $response['message'] = "sí foto";
        }else{
            $response['message'] = "no foto";
        }
        return $response;
    
    }
    public function update(Request $request, Mascota $id)
    {

        if($request->get('foto'))
        {
            $image = $request->get('foto');
            $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            $request['name'] = $name;
            \Image::make($request->get('foto'))->save(public_path('images/').$name);
            try {
                $id_mascota = $request->input('id_mascota');
                $nombre = $request->input('nombre');
                $id_especie = $request->input('id_especie');
                $id_raza = $request->input('id_raza');
                $peso = $request->input('peso');
                $estatura = $request->input('estatura');
                /*$data=array('first_name'=>$first_name,"last_name"=>$last_name,"city_name"=>$city_name,"email"=>$email);*/
                /*DB::table('student')->update($data);*/
                /* DB::table('student')->whereIn('id', $id)->update($request->all());*/
                DB::update('update mascota set nombre = ?,id_especie=?,id_raza=?,peso=?, estatura=?, foto=? where id_mascota = ?',
                [$nombre,$id_especie,$id_raza,$peso,$estatura,$name,$id_mascota]);
            }catch (Exception $exception) {
                $response['message'] = $exception->getMessage();
                return $response;
            }
        }
    }

    public function update1(Request $request, Mascota $mascota)
    {
        try {
            $mascota = DB::table ("mascota")
            ->where ("id_mascota", $request->id_mascota)
            ->update(["nombre" => $request->nombre])
            ->update(["id_especie" => $request->id_especie])
            ->update(["id_raza" => $request->id_raza])
            ->update(["peso" => $request->peso])
            ->update(["estatura" => $request->estatura]);
        }catch (Exception $exception) {
            return back()->withError($exception->getMessage())->withInput();
            console.log($exception->getMessage());
        }

    }
    public function destroy($id)
    {
        $filename = DB::table('mascota')
        ->select('foto')
        ->where('id_mascota', $id)
        ->first();
        $response['menssage'] = $filename;
        $filename = $filename->foto;
        $filename = "./images/".$filename;
        $result = mascota::where('id_mascota', $id)->delete();
            
        File::delete($filename);
        if($result){
            return [$filename, "Borrado exitosamente"];
        }
    }
}