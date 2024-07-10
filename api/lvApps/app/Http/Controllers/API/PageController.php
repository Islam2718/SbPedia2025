<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Response
    {
        //       
        // if(Auth::guard('api')->check()){
            $response = Page::with(['sections'])->get();

            if ($response->isEmpty()) {
                return Response(['message' => 'Not Found', 'status' => 404], 404);
            }

            return Response(['data' => $response, 'status' => 200], 200);  
        // }
        // return Response(['data' => 'Unauthorized!', 'status'=>401], 401);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): Response
    {
        //
        if(Auth::guard('api')->check()){        
            $validatedData = $request->validate([
                'title' => 'required',
                'slug' => 'required|unique:pages', // Check for uniqueness in the "pages" table
            ]);
            
            if($response = Page::create($request->all())){
                return Response(['data' => $response, 'message' => 'Saved Successfully !.'], 201);
            }else{
                return Response(['data' => $validatedData, 'message' => 'Missing Field !.', 'status'=>400], 400);
            }
        }
        return Response(['data' => 'Unauthorized!'], 401);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */

    public function show($identifier): Response
    {
        // Determine whether the identifier is numeric (ID) or not (slug)
        if (is_numeric($identifier)) {
            // Find the page by ID along with its sections and widgets
            $response = Page::with(['sections.widgets'])->find($identifier);
        } else {
            // Find the page by slug along with its sections and widgets
            $response = Page::with(['sections.widgets'])->where('slug', $identifier)->first();
        }

        // Check if the page was not found
        if (!$response) {
            return response(['message' => 'Not found!', 'status' => 404], 404);
        } else {
            // Return the response with the page data
            return response(['data' => $response, 'status' => 200], 200);
        }
    }



    // public function show($id): Response
    // {
    //     //
    //     // if(Auth::guard('api')->check()){        
    //         $response = Page::with('widgets')->find($id);
    //         if(!$response){
    //             return Response(['message' => 'Not found !.', 'status'=>404], 404);
    //         }else{      
    //             return Response(['data' => $response, 'status' => 200], 200);
    //         }
    //     // }
    // }
    public function updateStatus($id): Response
    {
        if(Auth::guard('api')->check()){             
            $response = Page::find($id);
            if (!$response) {
                return Response(['message' => 'Not found.', 'status'=>404], 404);
            }
            if($response->status==0){ $response->status = 1; }else{ $response->status = 0; }
            
            $response->save();
            return Response(['data' => $response, 'message' => 'Updated successfully.'], 200);
        }
        return Response(['data' => 'Unauthorized!'], 401);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    // public function edit(Page $page)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id): Response
    {
        //
        if(Auth::guard('api')->check()){ 
            $validatedData = $request->validate([
                'title' => 'required',
            ]);
            $response = Page::find($id);
            if (!$response) {
                return Response(['message' => 'Not found !.', 'status'=>404], 404);
            }
            $response->update($request->all());
            return Response(['data' => $response, 'message' => 'Updated successfully!.'], 200);
        }
        return Response(['data' => 'Unauthorized!'], 401);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function destroy($id): Response
    {
        //
        if(Auth::guard('api')->check()){
            $response = Page::find($id);
            if (! $response) {
                return Response(['data' => 'Not found !.'], 404);
            }
            $response->delete();
            return Response(['data' => 'Deleted Successfully !.'], 200);
        }
        return Response(['data' => 'Unauthorized!'], 401);
    }
}
