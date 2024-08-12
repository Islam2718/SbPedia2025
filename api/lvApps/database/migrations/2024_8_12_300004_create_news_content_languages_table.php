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
        Schema::create('news_content_languages', function (Blueprint $table) {
            $table->id();
            $table->biginteger('news_content_id')->nullable();
            $table->biginteger('setting_language_id')->nullable();
            $table->string('title')->nullable();
            $table->string('sub_title')->nullable();
            $table->string('name')->nullable();
            $table->text('content')->nullable();
            $table->string('featured_image')->nullable();
            $table->integer('is_default')->default(0);
            $table->biginteger('created_by')->nullable();
            $table->biginteger('updated_by')->nullable();
            $table->string('status')->default('pending');
            $table->string('activity_id')->nullable();
            
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
        Schema::dropIfExists('news_content_languages');
    }
};
