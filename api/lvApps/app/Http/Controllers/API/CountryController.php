<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request): Response
    {
        //
        // if(Auth::guard('api')->check()){
            // Get all clients (query builder instance)
            $query = Country::query();
    
            // Paginate the results using the query builder
            $response = $query->paginate($request->input('size'), ['*'], 'page', $request->input('size'));
    
            // Check if there are results or if the page is beyond the available data
            if ($response->isEmpty()) {
                return Response(['message' => 'Not Found', 'status' => 404], 404);
            }
    
            // Return the paginated data
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
            ]);
            if($response = Country::create($request->all())){
                return Response(['data' => $response, 'message' => 'Saved Successfully !.'], 201);
            }else{
                return Response(['data' => $request->all(), 'message' => 'Missing Field !.', 'status'=>400], 400);
            }
        }
        return Response(['data' => 'Unauthorized!'], 401);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function show($id): Response
    {
        //
        // if(Auth::guard('api')->check()){        
            $response = Country::find($id);
            if(!$response){
                return Response(['message' => 'Not found !.', 'status'=>404], 404);
            }else{      
                return Response(['data' => $response, 'status' => 200], 200);
            }
        // }
    }
    public function updateStatus($id): Response
    {
        if(Auth::guard('api')->check()){             
            $response = Country::find($id);
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
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    // public function edit(Country $country)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id): Response
    {
        //
        if(Auth::guard('api')->check()){ 
            $validatedData = $request->validate([
                'title' => 'required',
            ]);
            $response = Country::find($id);
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
     * @param  \App\Models\Country  $country
     * @return \Illuminate\Http\Response
     */
    public function destroy($id): Response
    {
        //
        if(Auth::guard('api')->check()){
            $response = Country::find($id);
            if (! $response) {
                return Response(['data' => 'Not found !.'], 404);
            }
            $response->delete();
            return Response(['data' => 'Deleted Successfully !.'], 200);
        }
        return Response(['data' => 'Unauthorized!'], 401);
    }
}
