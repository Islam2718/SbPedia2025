<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Auth;

class UserauthController extends Controller
{
    /**
     * userLogin function.
     *
     * @return \Illuminate\Http\Response
     */
    public function userLogin(Request $request): Response
    {
        //
        $input = $request->all();
        Auth::attempt($input);
        $user = Auth::user();
        if($user){
            $token = $user->createToken('example')->accessToken;
            
            return Response(['status'=> 200, 'token'=> $token], 200);
        }else{
            return Response(['status'=> 401, 'message'=> 'Invalid !.'], 401);
        }
    }

    /**
     * getUserDetails function.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUserDetails(): Response
    {
        //
        if(Auth::guard('api')->check()){
            $user = Auth::guard('api')->user();
            return Response(['data'=> $user], 200);
        }
        return Response(['data' => 'Unauthorized!'], 401);
    }

    /**
     * userLogout function.
     *
     * @return \Illuminate\Http\Response
     */
    public function userLogout(): Response
    {
        //
        if(Auth::guard('api')->check()){
            $accessToken = Auth::guard('api')->user()->token();
                \DB::table('oauth_refresh_tokens')
                    ->where('access_token_id', $accessToken->id)
                    ->update(['revoked' => true]);
            $accessToken->revoke();
            return Response(['data' => 'Unauthorized!', 'message' => 'User logout successfully !.'], 200);
        }
        return Response(['data' => 'Unauthorized!'], 401);
    }
}
