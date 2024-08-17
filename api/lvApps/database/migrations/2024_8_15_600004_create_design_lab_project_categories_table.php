<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('design_lab_project_categories', function (Blueprint $table) {
            $table->id();
            $table->string('alias')->nullable();
            $table->string('nupms_category_code')->nullable();
            $table->string('image')->nullable();
            $table->tinyInteger('status')->nullable();
            $table->integer('order')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('design_lab_project_categories');
    }
};
