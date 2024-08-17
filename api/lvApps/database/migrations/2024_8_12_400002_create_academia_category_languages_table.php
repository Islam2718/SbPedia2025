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
        Schema::create('academia_category_languages', function (Blueprint $table) {
            $table->id();
            $table->integer('academia_category_id')->nullable();
            $table->integer('setting_language_id')->nullable();
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->integer('is_default')->default(0);
            $table->biginteger('created_by')->nullable();
            $table->biginteger('updated_by')->nullable();
            
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
        Schema::dropIfExists('academia_category_languages');
    }
};