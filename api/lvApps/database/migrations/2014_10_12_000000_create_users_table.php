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
        Schema::create('users', function (Blueprint $table) {
            $table->id();

            $table->string('user_type')->nullable();
            $table->string('person_id')->unique();
            $table->string('username')->unique();
            $table->string('password')->unique();
            $table->string('email')->unique();
            $table->string('secret_question')->unique();
            $table->string('write_question')->unique();
            $table->string('secret_question_answer')->unique();
            $table->string('activation_key')->unique();
            $table->string('left_after_complete')->unique();
            $table->string('last_login')->unique();
            $table->string('last_login_ip')->unique();
            $table->string('last_login_browser')->unique();
            $table->string('created_ip')->unique();
            $table->string('status')->unique();
            $table->string('is_organization')->unique();
            $table->string('old_data')->unique();
            $table->string('user_group_id')->unique();
            $table->string('is_old_database')->unique();
            $table->string('user_sub_group_id')->unique();

            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
