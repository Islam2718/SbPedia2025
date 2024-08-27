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
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            
            $table->string('signup_category_id')->nullable();
            $table->string('signup_sub_category_id')->nullable();
            $table->string('parent_signup_category_alias')->nullable();
            $table->string('child_signup_category_alias')->nullable();
            $table->string('setting_country_id')->nullable();
            $table->string('name')->nullable();
            $table->string('alias')->nullable();
            $table->string('foundation_date')->nullable();
            $table->string('logo')->nullable();
            $table->string('is_cover_photo')->nullable();
            $table->string('cover_image')->nullable();
            $table->string('website')->nullable();
            $table->string('online_profile')->nullable();
            $table->string('facebook')->nullable();
            $table->text('twitter')->nullable();
            $table->string('linkedin')->nullable();
            $table->date('google_plus')->nullable();
            $table->tinyInteger('currency')->nullable();
            $table->bigInteger('is_approved')->nullable();
            $table->bigInteger('is_private_finance_and_forecast')->nullable();
            $table->bigInteger('is_private_business_model')->nullable();
            $table->bigInteger('is_private_social_impact')->nullable();
            $table->bigInteger('old_data')->nullable();            
            $table->integer('order')->nullable();
            $table->bigInteger('status')->nullable();
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
        Schema::dropIfExists('organizations');
    }
};
