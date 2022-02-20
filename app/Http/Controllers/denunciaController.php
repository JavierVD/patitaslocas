<?php

namespace App\Http\Controllers;
use App\Models\denuncia;
use Illuminate\Http\Request;
use DB;  
use Auth;

class denunciaController extends Controller
{
    public function denuncia()
    {
        return view('denuncia');
    }

    public function index(){
        return denuncia::all();
    }

    public function returnlast(){
        $query = denuncia::max('folio');
        return $query;
    }
    public function returnName(){
        $name = Auth::user()->name;
        return $name;
    }
    public function store(Request $request)
    {
        $donacion= new denuncia;
        $donacion-> folio = $request-> folio;    
        $donacion-> nombrecom= $request->nombrecom;
        $donacion-> email = $request-> email;   
        $donacion-> Dden = $request-> Dden;    
        $donacion-> id_usuario = 6;
        $donacion->save();

        $response = $request ->nombre;
        return $response;
    }


  
}

