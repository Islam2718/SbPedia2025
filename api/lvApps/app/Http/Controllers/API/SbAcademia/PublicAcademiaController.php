<?php
namespace App\Http\Controllers\API\SbAcademia;

use App\Http\Controllers\Controller;
use App\Models\SbAcademia\AcademiaContent;
use App\Models\SbAcademia\AcademiaContentLanguage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class PublicAcademiaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   
    public function index(Request $request): Response
    {
        // Get page, size, and lang from request parameters with default values
        $page = $request->input('page', 1);
        $size = $request->input('size', null);
        $lang = $request->input('lang', null); // Default lang is 1
    
        // Eager load the related languages, filtered by setting_language_id if lang is provided
        $query = AcademiaContent::with(['academia_content_language' => function ($query) use ($lang) {
            if ($lang) {
                $query->where('setting_language_id', $lang);
            }
        }]);
    
        // Paginate the results
        $response = $query->paginate($size, ['*'], 'page', $page);
    
        // Check if response has data and if languages are not empty
        $filteredData = $response->filter(function ($item) {
            return $item->academia_content_language->isNotEmpty();
        });
    
        if ($filteredData->isEmpty()) {
            return Response(['message' => 'Not Found', 'status' => 404], 404);
        }
    
        // Return paginated data
        return Response([
            'data' => $filteredData->values()->all(),
            'current_page' => $response->currentPage(),
            'last_page' => $response->lastPage(),
            'per_page' => $response->perPage(),
            'total' => $response->total(),
            'status' => 200
        ], 200);
    }

    public function show($id): Response
    {
        // Get the news content
        $response = AcademiaContent::with(['academia_content_language' => function ($query) use ($id) {
            $query->where('academia_content_id', $id);
        }])->first();

        // Check if response has data
        if (!$response) {
            return Response(['message' => 'Not Found', 'status' => 404], 404);
        }

        // Return the news content
        return Response([
            'data' => $response,
            'status' => 200
        ], 200);
    }
}
