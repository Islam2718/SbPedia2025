<?php
namespace App\Http\Controllers\API\DesignLab;

use App\Http\Controllers\Controller;
use App\Models\DesignLab\DesignLab;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PublicDesignLabController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        // Get page and size from request parameters with default values
        $page = $request->input('page', 1);
        $size = $request->input('size', 30);
        $type = $request->input('type', '');
        $searchKey = $request->input('search', '');

        // Start a query builder instance
        $query = DesignLab::query();

        // Apply filtering if 'type' is provided
        if ($type) {
            $query->where('type', $type);
        }

        // Apply searching if 'searchKey' is provided
        if ($searchKey) {
            $query->where('title', 'like', '%'.$searchKey.'%');
        }

        // Apply ordering
        $query->orderBy('id', 'desc');

        // Fetch paginated results
        $response = $query->paginate($size, ['*'], 'page', $page);

        // Check if response has data
        if ($response->isEmpty()) {
            return response()->json(['message' => 'Not Found', 'status' => 404], 404);
        }

        // Return paginated data
        return response()->json([
            'data' => $response->items(),
            'current_page' => $response->currentPage(),
            'last_page' => $response->lastPage(),
            'per_page' => $response->perPage(),
            'total' => $response->total(),
            'status' => 200
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id): JsonResponse
    {
        $response = DesignLab::find($id);
        if ($response) {
            return response()->json([
                'data' => $response,
                'status' => 200
            ], 200);
        } else {
            return response()->json(['message' => 'Not Found', 'status' => 404], 404);
        }
    }
}
