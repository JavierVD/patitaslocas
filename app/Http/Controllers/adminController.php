<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class adminController extends Controller
{
    public function admin()
    {
        return view('admin');
    }

    public function __construct()
    {
        $this->middleware('onlyadmin',['only'=>'admin']);
        $this->middleware('onlyadmin',['only'=>'gestion']);
        $this->middleware('onlyadmin',['only'=>'verdenuncia']);
    }

    public function gestion()
    {
        return view('gestion');
    }
    public function verdenuncia()
    {
        return view('verdenuncia');
    }


}

 
