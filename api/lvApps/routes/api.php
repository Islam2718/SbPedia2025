<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// use App\Http\Controllers\API\UserauthController;
// use App\Http\Controllers\API\UserController;
// use App\Http\Controllers\API\SiteinfoController;
use App\Http\Controllers\API\UploadController;

// settings 
use App\Http\Controllers\API\Settings\CountryController;
use App\Http\Controllers\API\Settings\LanguageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|   
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [UserauthController::class, 'userLogin']);


// Route::middleware('auth:api')->group(function () {
    // Route::get('user-info', [UserauthController::class, 'getUserDetails']);
    // Route::post('logout', [UserauthController::class, 'userLogout']);

    // Route::resource('user', UserController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    // Route::get('user/{id}/status', 'App\Http\Controllers\API\UserController@updateStatus');

    // Route::resource('site-info', SiteinfoController::class)->only(['update', 'show']);
    // Route::resource('uploads', FileUploadController::class)->only(['store']);

    
    Route::resource('country', CountryController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('country/{id}/status', 'App\Http\Controllers\API\Settings\CountryController@updateStatus');
    Route::resource('language', LanguageController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('language/{id}/status', 'App\Http\Controllers\API\Settings\LanguageController@updateStatus');

    // Route::resource('section', SectionController::class)->only(['index', 'store', 'update', 'show', 'destroy']);

    // Route::resource('news', NewsController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    // Route::get('news/{id}/status', 'App\Http\Controllers\API\NewsController@updateStatus');
    
    // Route::resource('widget', WidgetController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    // Route::get('widget/{id}/status', 'App\Http\Controllers\API\WidgetController@updateStatus');

    // Route::resource('upload', UploadController::class)->only(['index']);
    Route::get('files', 'App\Http\Controllers\API\UploadController@getAllFile');
    Route::post('upload-single', 'App\Http\Controllers\API\UploadController@uploadFile');
    Route::get('remove-file/{filename}', 'App\Http\Controllers\API\UploadController@deleteFile');
// });
