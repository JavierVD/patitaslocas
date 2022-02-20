<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\adopcionController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/home2', [App\Http\Controllers\mascotaController::class, 'index'])->name('home2');
Route::get('/faq', [App\Http\Controllers\faqController::class, 'faq'])->name('faq');

Route::get('/faq2', [App\Http\Controllers\faqController::class, 'faq2'])->name('faq2');

Route::get('/donacion', [App\Http\Controllers\donationController::class, 'donacion'])->name('donacion');
Route::get('/donacion/tnk', [App\Http\Controllers\donationController::class, 'donaciontnk'])->name('donaciontnk');

Route::get('/administrarMascotas', [App\Http\Controllers\adminController::class, 'admin'])->name('admin');
Route::get('/gestion', [App\Http\Controllers\adminController::class, 'gestion'])->name('gestion');
Route::get('/verdenuncia', [App\Http\Controllers\adminController::class, 'verdenuncia'])->name('verdenuncia');

Route::get('/API/mascotan', [App\Http\Controllers\mascotaController::class, 'index']);

Route::get('/mascota', [App\Http\Controllers\mascotaController::class,'mascota']);
Route::get('/misadopciones', [App\Http\Controllers\adopcionController::class,'misadopciones']);
Route::get('/adopcion', [App\Http\Controllers\adopcionController::class, 'adopcion'])->name('adopcion');
Route::get('/get',[App\Http\Controllers\adopcionController::class, 'separar']);
Route::get('/getMis',[App\Http\Controllers\adopcionController::class, 'getMis']);
Route::get('/denuncia', [App\Http\Controllers\denunciaController::class, 'denuncia'])->name('denuncia');
Route::get('/getID',[App\Http\Controllers\adopcionController::class, 'returnID']);
Route::get('/user', [App\Http\Controllers\HomeController::class, 'getUser'])->name('get-user');
//Route::get('/prueba', [App\Http\Controllers\pruebaController::class, 'prueba'])->name('prueba');
//Route::get('/administrarMascotas', [App\Http\Controllers\adminController::class, 'admin'])->name('admin');
//Route::get('/admin', [App\Http\Controllers\adminController::class, 'admin'])->name('admin');
Route::get("/solicitudes", function(){
  return view("solicitudes");
});
Route::get("/certificados", function(){
  return view("certificados");
});
/*Route::get("/gestion", function(){
  return view("gestion");
});*/

Route::get("/payment", function(){
  return view("payment");
});

/*Route::get("/verdenuncia", function(){
  return view("verdenuncia");
});*/

Route::post('/urlraza',[adopcionController::class, 'urlraza']);
Route::post('/urlespecie',[adopcionController::class, 'urlespecie']);
Route::get('/checkout', [App\Http\Controllers\CheckoutController::class, 'checkout']);
Route::post('/checkout', [App\Http\Controllers\CheckoutController::class, 'afterpayment'])->name('checkout.credit-card');

 //Route::get("/denuncia", function(){
   // return view("denuncia");
 //});


 //Route::get("/showmascota", function(){
   // return view("adopmascot");
 //});

//Route::get('/adminMascotas', [App\Http\Controllers\mascotaController::class, 'adopcion'])->name('adopcion');

//Route::get('/test', function () {
    //return view('test');
//});



