<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class faqController extends Controller
{
    public function faq()
    {
        return view('faq');
    }

    public function faq2()
    {
        return view('faq2');
    }
}
