@extends('layouts.app')

@section('content')

     <body  style="background: url(../public/images/fondo1.jpg) center top; background-size: cover;" >
        
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
    <div id="donation">
    </div>
    </body>
@endsection
