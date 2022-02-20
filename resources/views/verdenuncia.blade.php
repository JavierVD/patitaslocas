@extends('layouts.app')

@section('content')
  <body  style="background: url(https://www.mundodeportivo.com/r/GODO/MD/p5/ContraPortada/Imagenes/2018/03/29/Recortada/img_jgost_20180329-212701_imagenes_md_otras_fuentes_gato_triste-k6QB-U442034065343J7H-980x554@MundoDeportivo-Web.jpg); 
  background-size: cover;
    background-repeat: no-repeat;
  margin: 0;
  height: 84vh;" >

        
<div class="container">

    <div class="row justify-content-center">
        <div class="col-md-8">
            
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('') }}
                </div>
            </div>
        </div>
    </div>

    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script> 
        <div id="navuser"></div>
        <div id="verdenuncia"></div>
   
    </div>
    </body>
@endsection





