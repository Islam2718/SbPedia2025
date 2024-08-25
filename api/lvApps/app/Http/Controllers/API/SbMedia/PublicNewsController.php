<?php
namespace App\Http\Controllers\API\SbMedia;

use App\Http\Controllers\Controller;
use App\Models\SbMedia\NewsContent;
use App\Models\SbMedia\NewsContentLanguage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class PublicNewsController extends Controller
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
        $lang = 1; if ($request->has('lang')) { $lang = $request->input('lang'); }
        $searchKey = $request->input('search-key', null);
        
        // Eager load the related languages, filtered by setting_language_id if lang is provided
        $query = NewsContent::with(['news_content_languages' => function($query) use ($lang) {
            $query->where('setting_language_id', $lang);
        }])->orderBy('id', 'desc');

        // Filter by searchKey if provided
        if ($searchKey) {
            $query->whereHas('news_content_languages', function ($query) use ($searchKey) {
                $query->where('title', 'like', '%' . $searchKey . '%');
            });
        }

        // Execute the query to retrieve the results
        $response = $query->paginate($size, ['*'], 'page', $page);
    
        // Check if response has data and if languages are not empty
        $filteredData = $response->filter(function ($item) {
            return $item->news_content_languages->isNotEmpty();
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

    /**
     * get by id.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show($id){
        $response = NewsContent::with('news_content_languages')->find($id);
        if (!$response) {
            return Response(['message' => 'Not Found', 'status' => 404], 404);
        }

        return Response(['data' => $response, 'status' => 200], 200);
    }
}
