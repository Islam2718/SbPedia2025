<?php
namespace App\Models\DesignLab;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignLabProject extends Model
{
    use HasFactory;

    protected $fillable = [
        'phase_number',
        'parent_id',
        'activity_id',
        'design_lab_id',
        'organization_id',
        'design_lab_project_category_id',
        'project_type',
        'title',
        'alias',
        'brief',
        'location',
        'nu_code',
        'nu_name',
        'nu_dob',
        'nu_age',
        'nu_present_address',
        'business_objectives',
        'social_problem_addressing',
        'employment_male',
        'employment_female',
        'social_impact',
        'break_even_point',
        'payback_period',
        'entrepreneurs_contribution',
        'investors_contribution',
        'total_investment_cost',
        'presentation_file',
        'project_status',
        'investment_status',
        'legal_status',
        'remark',
        'total_investment',
        'investment_amount',
        'other_information',
        'mou_signing_on',
        'contact_person',
        'contact_name',
        'contact_email',
        'contact_company',
        'contact_phone',
        'is_approved',
        'created_by',
        'updated_by',
        'project_bondhu_person_id',
        'created_by_person_id',
        'idea_by_person_id',
        'designed_by_organization_id',
        'assigned_to_organization_id',
        'same_as_designed_by',
        'entrepreneur_id',
        'new_business_proposal_id',
        'yunus_centre_no',
        'lab_no',
        'obj_nupms',
        'is_nupms'
    ];
}
