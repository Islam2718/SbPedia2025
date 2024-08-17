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
        Schema::create('design_lab_project_updates', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('design_lab_project_id')->nullable();
            $table->string('title')->nullable();
            $table->string('alias')->nullable();
            $table->text('description')->nullable();
            $table->string('file')->nullable();
            $table->date('updated_date')->nullable();
            $table->tinyInteger('status')->nullable();
            $table->integer('order')->nullable();
            $table->bigInteger('created_by')->nullable();
            $table->bigInteger('updated_by')->nullable();
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
        Schema::dropIfExists('design_lab_project_updates');
    }
};
