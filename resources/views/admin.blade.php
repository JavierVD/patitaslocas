@extends('layouts.app')

@section('content')

      <body  style="background: url(../public/images/fondo6.jpg); 
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
    <div id="navuser"></div>
 <div id="adminPets"></div>
    </div>
    </body>
@endsection