<?php
namespace App\Http\Controllers\API\SbWiki;

use App\Http\Controllers\Controller;
use App\Models\SbWiki\WikiCategory;
use App\Models\SbWiki\WikiCategoryLanguage;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class PublicWikiCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index(Request $request): Response
    // {
    //     // Get page and size from request parameters with default values
    //     $page = $request->input('page', 1);
    //     $size = $request->input('size', 20);
    
    //     // Fetch paginated news content
    //     $response = NewsCategory::paginate($size, ['*'], 'page', $page);
    
    //     // Check if response has data
    //     if ($response->isEmpty()) {
    //         return Response(['message' => 'Not Found', 'status' => 404], 404);
    //     }
    
    //     // Return paginated data
    //     return Response([
    //         'data' => $response->items(),
    //         'current_page' => $response->currentPage(),
    //         'last_page' => $response->lastPage(),
    //         'per_page' => $response->perPage(),
    //         'total' => $response->total(),
    //         'status' => 200
    //     ], 200);
    // }

    // public function index(Request $request): Response
    // {
    //     // Get page and size from request parameters with default values
    //     $page = $request->input('page', 1);
    //     $size = $request->input('size', 10);
    
    //     // Fetch paginated news content with join
    //     $response = NewsContent::select('news_contents.*', 'news_content_languages.*')
    //         ->join('news_content_languages', 'news_contents.id', '=', 'news_content_languages.news_content_id')
    //         ->paginate($size, ['*'], 'page', $page);
    
    //     // Check if response has data
    //     if ($response->isEmpty()) {
    //         return Response(['message' => 'Not Found', 'status' => 404], 404);
    //     }
    
    //     // Return paginated data
    //     return Response([
    //         'data' => $response->items(),
    //         'current_page' => $response->currentPage(),
    //         'last_page' => $response->lastPage(),
    //         'per_page' => $response->perPage(),
    //         'total' => $response->total(),
    //         'status' => 200
    //     ], 200);
    // }
    public function index(Request $request): Response
    {
        // Get page and size from request parameters with default values
        $page = $request->input('page', 1);
        $size = $request->input('size', 30);
        $lang = $request->input('lang', 1);

        // Fetch paginated news content with related languages
        $response = WikiCategory::with(
            ['wiki_category_language' => function ($query) use ($lang) {
                if ($lang) {
                    $query->where('setting_language_id', $lang);
                }
            }]
        )->paginate($size, ['*'], 'page', $page);
    
        // Check if response has data
        if ($response->isEmpty()) {
            return Response(['message' => 'Not Found', 'status' => 404], 404);
        }
    
        // Return paginated data
        return Response([
            'data' => $response->items(),
            'current_page' => $response->currentPage(),
            'last_page' => $response->lastPage(),
            'per_page' => $response->perPage(),
            'total' => $response->total(),
            'status' => 200
        ], 200);
    }
    // public function index(Request $request): Response
    // {
    //     // Get page, size, and lang from request parameters with default values
    //     $page = $request->input('page', 1);
    //     $size = $request->input('size', null);
    //     $lang = $request->input('lang', null); // Default lang is 1
    
    //     // Eager load the related languages, filtered by setting_language_id if lang is provided
    //     $query = NewsCategory::with(['news_category_language' => function ($query) use ($lang) {
    //         if ($lang) {
    //             $query->where('setting_language_id', $lang);
    //         }
    //     }]);
    
    //     // Paginate the results
    //     $response = $query->paginate($size, ['*'], 'page', $page);
    
    //     // Check if response has data and if languages are not empty
    //     $filteredData = $response->filter(function ($item) {
    //         return $item->news_content_languages->isNotEmpty();
    //     });
    
    //     if ($filteredData->isEmpty()) {
    //         return Response(['message' => 'Not Found', 'status' => 404], 404);
    //     }
    
    //     // Return paginated data
    //     return Response([
    //         'data' => $filteredData->values()->all(),
    //         'current_page' => $response->currentPage(),
    //         'last_page' => $response->lastPage(),
    //         'per_page' => $response->perPage(),
    //         'total' => $response->total(),
    //         'status' => 200
    //     ], 200);
    // }
}
