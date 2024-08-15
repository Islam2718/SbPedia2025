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
        Schema::create('design_lab_schedules', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('design_lab_id')->nullable();
            $table->string('time_from')->nullable();
            $table->string('time_to')->nullable();
            $table->text('activity')->nullable();
            $table->string('remark')->nullable();
            $table->tinyInteger('is_emphasis')->nullable();
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
        Schema::dropIfExists('design_lab_schedules');
    }
};
