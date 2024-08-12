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
        Schema::create('news_contents', function (Blueprint $table) {
            $table->id();
            $table->string('person_id');
            $table->string('alias')->nullable();
            $table->string('is_top_news')->nullable();
            $table->string('is_featured')->nullable();
            $table->string('is_organization_news')->nullable();
            $table->string('organization_id')->nullable();
            $table->string('is_user_news')->nullable();
            $table->string('featured_image')->nullable();
            $table->string('tags')->nullable();
            $table->string('link_type')->nullable();
            $table->string('custom_link')->nullable();
            $table->string('is_target_blank')->nullable();
            $table->string('order')->nullable();
            $table->string('status')->nullable();
            $table->string('approve_status')->nullable();
            $table->string('publish_date')->nullable();
            $table->string('country_id')->nullable();
            $table->string('country_name')->nullable();
            $table->string('city_name')->nullable();
            $table->string('organization_name')->nullable();
            $table->string('activity_id')->nullable();
            $table->string('live_edited_by')->nullable();
            $table->string('is_file')->nullable();
            $table->string('file_type')->nullable();
            $table->string('file_name')->nullable();
            
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
        Schema::dropIfExists('news_contents');
    }
};
