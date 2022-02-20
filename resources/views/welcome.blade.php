<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <link rel=StyleSheet href="{{asset('css/app.css')}} ">

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    </head>
     <body  style="background: url(../public/images/fondo1_1.jpg); 
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  height: 100vh;" >
        
        <script src="{{asset ('js/app.js')}}"></script>
        <div >
            @if (Route::has('login'))
                <div align="center">
                    @auth
                        
                        <a href="{{ route('home') }}"  class="btn_inicio">INICIO</a>
                    @else
                    <a href="{{ route('login') }}" class="btn_inicio">Iniciar Sesión</a>
                 
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="btn_inicio">Regístrate</a>
                        @endif
                    @endauth
                </div>
            @endif       
        </div>
        <br>
        <br><br><br><br><br>
        <div align="right" style="color: white; margin-right: 70px; font-size: 20px;  -webkit-text-stroke: 1px black;">
            <p>¡Hola! Soy tu amigo Rocky,
            <p><a href="http://localhost/patitaslocas/public/register">Regístrate</a> y obtén beneficios
            <p>de nuestra tienda. ¡Woof!🐕🐾
        </div>
       
        <div >     <center>
                <h1 class="titulo" style="-webkit-text-stroke: 1px black;">Bienvenido a Patitas Felices</h1>
                    </center>
                <p class="subtitulo">CENTRO DE ADOPCIÓN Y RESCATE ANIMAL</p>
        </div>
    </body>
</html>
