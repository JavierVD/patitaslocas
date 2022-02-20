<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class donationController extends Controller
{
    public function donacion()
    {
        return view('donations');
    }

    public function donaciontnk()
    {
        return view('donationtnk');
    }
}
