<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVoluntario extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('voluntario', function (Blueprint $table) {
            $table->string('id_voluntario',8)->primary();
            $table->string('nombre',50);
            $table->string('apellidoPat',40);
            $table->string('apellidoMat',40)->nullable();
            $table->date('fechaNac');
            $table->string('email',100);
            $table->string('password',100);
            $table->date('fechaInicio');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('voluntario');
    }
}
