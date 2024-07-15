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
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            // category_id 
            $table->string('category_id')->nullable();            
            $table->string('language')->nullable();

            $table->string('title')->nullable();
            $table->string('sub_title')->nullable();
            $table->string('name')->nullable();
            $table->string('content')->nullable();
            $table->string('featured_image')->nullable();

            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();

            // $table->text('description')->nullable();
            $table->boolean('is_default')->default(true);
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
        Schema::dropIfExists('news');
    }
};
