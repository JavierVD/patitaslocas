<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMascota extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mascota', function (Blueprint $table) {
            $table->integer('id_mascota',8);
            $table->string('nombre',30);
            $table->string('id_especie',8);
            $table->string('id_raza',8);
            $table->string('peso',8);
            $table->string('estatura',8);
            $table->date('fechaDes')->nullable();
            $table->timestamp('failed_at')->useCurrent();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mascota');
    }
}
