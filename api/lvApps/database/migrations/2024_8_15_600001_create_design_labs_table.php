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
        Schema::create('design_labs', function (Blueprint $table) {
            $table->id();
            $table->string('person_id')->nullable();
            $table->string('activity_id')->nullable();
            $table->string('organization_id')->nullable();
            $table->string('event_schedule_id')->nullable();
            $table->string('yc_dl_number')->nullable();
            $table->string('organization_dl_number')->nullable();
            $table->string('type')->nullable();
            $table->string('design_lab_code')->nullable();
            $table->string('title')->nullable();
            $table->string('sub_title')->nullable();
            $table->string('alias')->nullable();
            $table->string('description')->nullable();
            $table->string('serial_no')->nullable();
            $table->string('venue')->nullable();
            $table->string('general_participant_fee')->nullable();
            $table->string('student_participant_fee')->nullable();
            $table->string('is_live_stream')->nullable();
            $table->string('live_stream_code')->nullable();
            $table->string('registration_last_date')->nullable();
            $table->string('order')->nullable();
            $table->string('status')->nullable();
            $table->string('is_approved')->nullable();
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
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
        Schema::dropIfExists('design_labs');
    }
};
