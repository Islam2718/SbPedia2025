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
        Schema::create('academia_contents', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('person_id');
            $table->string('alias')->nullable();
            $table->string('featured_image')->nullable();
            $table->string('tags')->nullable();
            $table->string('link_type')->nullable();
            $table->string('custom_link')->nullable();
            $table->string('is_target_blank')->nullable();
            $table->string('order')->nullable();
            $table->string('status')->nullable();
            $table->string('activity_id')->nullable();
            $table->string('live_edited_by')->nullable();
            $table->string('is_file')->nullable();
            $table->string('file_type')->nullable();
            $table->string('file_name')->nullable();
            $table->string('country_id')->nullable();
            $table->string('is_top_news')->nullable();
            $table->string('is_featured')->nullable();
            $table->string('is_organization')->nullable();
            $table->string('publish_date')->nullable();
            
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
        Schema::dropIfExists('academia_contents');
    }
};
