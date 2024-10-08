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
        Schema::create('academia_categories', function (Blueprint $table) {
            $table->id();
            $table->string('parent_id')->nullable();
            $table->string('alias')->nullable();
            $table->boolean('status')->default(true);
            $table->integer('order')->default(0);            
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
        Schema::dropIfExists('academia_categories');
    }
};
