<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\mascotaController;
use App\Http\Controllers\RazaController;
use App\Http\Controllers\especieController;
use App\Http\Controllers\adopcionController;
use App\Http\Controllers\denunciaController;
use App\Http\Controllers\tiendaController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('/store', mascotaController::class);
Route::post('/updateMascota',[mascotaController::class,'update']);
Route::post('/aprobar',[adopcionController::class,'aprobar']);
Route::get('/getMascota',function(){ return App\Models\mascota::with('raza','especie')->get(); });
Route::post('/getRazas',[RazaController::class, 'index']);
Route::get('/getRaza',[RazaController::class, 'all']);

Route::get('/getAll',[adopcionController::class, 'getAll']);
Route::get('/getProductos',[tiendaController::class, 'getAll']);
Route::get('/getDenuncia',[denunciaController::class, 'index']);
Route::post('/storeAdopcion', [adopcionController::class,'store']);
Route::post('/storedenuncia', [denunciaController::class,'store']);
Route::get('/getlastdenuncia', [denunciaController::class,'returnlast']);
Route::get('/getEspecies',[especieController::class, 'index']);
Route::delete('/deleteMascota/{id}',[mascotaController::class, 'destroy']);
Route::delete('/deleteSolicitud/{id}',[adopcionController::class, 'destroy']);
Route::group([
    'middleware'=> 'api',
    'prefix' => 'mascotas'
],  function($router){
        
        Route::get('setMascota',[mascotaController::class, 'update']);
    }
);

