@extends('layouts.app')

@section('content')

    <body  style="background: url(./public/images/fondo1.jpg); 
  background-size: cover;
  
  margin: 0;
  height: 100vh;" >
        
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
        <div content-align="right"> 
        <div id="navuser">

        </div>
        <div id="navcar">

        </div>
    </div>
    

 </div>
 <div class="fot">
   
   @2021 Todos los Derechos Reservados| Javier Muñoz, Alejandro, Rubi Resendiz
    </body>
@endsection
