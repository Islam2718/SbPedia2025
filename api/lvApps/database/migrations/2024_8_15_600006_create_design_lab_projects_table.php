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
        Schema::create('design_lab_projects', function (Blueprint $table) {
            $table->id();
            $table->integer('phase_number')->nullable();
            $table->bigInteger('parent_id')->nullable();
            $table->bigInteger('activity_id')->nullable();
            $table->bigInteger('design_lab_id')->nullable();
            $table->bigInteger('organization_id')->nullable();
            $table->bigInteger('design_lab_project_category_id')->nullable();
            $table->string('project_type')->nullable();
            $table->string('title')->nullable();
            $table->string('alias')->nullable();
            $table->text('brief')->nullable();
            $table->string('location')->nullable();
            $table->string('nu_code')->nullable();
            $table->string('nu_name')->nullable();
            $table->date('nu_dob')->nullable();
            $table->string('nu_age')->nullable();
            $table->string('nu_present_address')->nullable();
            $table->text('business_objectives')->nullable();
            $table->text('social_problem_addressing')->nullable();
            $table->decimal('employment_male', 10, 0)->nullable();
            $table->decimal('employment_female', 10, 0)->nullable();
            $table->text('social_impact')->nullable();
            $table->text('break_even_point')->nullable();
            $table->decimal('payback_period', 10, 0)->nullable();
            $table->decimal('entrepreneurs_contribution', 10, 0)->nullable();
            $table->decimal('investors_contribution', 10, 0)->nullable();
            $table->text('total_investment_cost')->nullable();
            $table->string('presentation_file')->nullable();
            $table->string('project_status')->nullable();
            $table->string('investment_status')->nullable();
            $table->string('legal_status')->nullable();
            $table->text('remark')->nullable();
            $table->double('total_investment')->nullable();
            $table->double('investment_amount')->nullable();
            $table->text('other_information')->nullable();
            $table->date('mou_signing_on')->nullable();
            $table->string('contact_person')->nullable();
            $table->string('contact_name')->nullable();
            $table->string('contact_email')->nullable();
            $table->string('contact_company')->nullable();
            $table->string('contact_phone')->nullable();
            $table->tinyInteger('is_approved')->nullable();
            $table->bigInteger('created_by')->nullable();
            $table->bigInteger('updated_by')->nullable();
            $table->bigInteger('project_bondhu_person_id')->nullable();
            $table->bigInteger('created_by_person_id')->nullable();
            $table->bigInteger('idea_by_person_id')->nullable();
            $table->bigInteger('designed_by_organization_id')->nullable();
            $table->bigInteger('assigned_to_organization_id')->nullable();
            $table->tinyInteger('same_as_designed_by')->nullable();
            $table->bigInteger('entrepreneur_id')->nullable();
            $table->bigInteger('new_business_proposal_id')->nullable();
            $table->bigInteger('yunus_centre_no')->nullable();
            $table->bigInteger('lab_no')->nullable();
            $table->text('obj_nupms')->nullable();
            $table->tinyInteger('is_nupms')->nullable();
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
        Schema::dropIfExists('design_lab_projects');
    }
};
