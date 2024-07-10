<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\UserauthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\SiteinfoController;
use App\Http\Controllers\API\UploadController;

use App\Http\Controllers\API\PageController;
use App\Http\Controllers\API\SectionController;
use App\Http\Controllers\API\WidgetController;
use App\Http\Controllers\API\CertificateLicenseController;
use App\Http\Controllers\API\ClientController;
use App\Http\Controllers\API\CompanyController;
use App\Http\Controllers\API\ContactUsController;
use App\Http\Controllers\API\CountryController;
use App\Http\Controllers\API\InfoGalleryController;
use App\Http\Controllers\API\NewsController;
use App\Http\Controllers\API\OurConcernController;
use App\Http\Controllers\API\PersonController;
use App\Http\Controllers\API\ResumeController;
use App\Http\Controllers\API\SliderController;
use App\Http\Controllers\API\SocialController;
use App\Http\Controllers\API\TrainingCenterController;


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
    Route::get('user-info', [UserauthController::class, 'getUserDetails']);
    Route::post('logout', [UserauthController::class, 'userLogout']);

    Route::resource('user', UserController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('user/{id}/status', 'App\Http\Controllers\API\UserController@updateStatus');

    Route::resource('site-info', SiteinfoController::class)->only(['update', 'show']);
    // Route::resource('uploads', FileUploadController::class)->only(['store']);

    
    Route::resource('page', PageController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('page/{id}/status', 'App\Http\Controllers\API\PageController@updateStatus');

    Route::resource('section', SectionController::class)->only(['index', 'store', 'update', 'show', 'destroy']);

    Route::resource('certification', CertificateLicenseController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('certification/{id}/status', 'App\Http\Controllers\API\CertificateLicenseController@updateStatus');
    
    Route::resource('client', ClientController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('client/{id}/status', 'App\Http\Controllers\API\ClientController@updateStatus');

 
    Route::resource('company', CompanyController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('company/{id}/status', 'App\Http\Controllers\API\CompanyController@updateStatus');

    Route::resource('contact', ContactUsController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('contact/{id}/status', 'App\Http\Controllers\API\ContactUsController@updateStatus');

    Route::resource('country', CountryController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('country/{id}/status', 'App\Http\Controllers\API\CountryController@updateStatus');
    
    Route::resource('info-gallery', InfoGalleryController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('info-gallery/{id}/status', 'App\Http\Controllers\API\InfoGalleryController@updateStatus');

    Route::resource('news', NewsController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('news/{id}/status', 'App\Http\Controllers\API\NewsController@updateStatus');

    Route::resource('our-concern', OurConcernController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('our-concern/{id}/status', 'App\Http\Controllers\API\OurConcernController@updateStatus');

    Route::resource('person', PersonController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('person/{id}/status', 'App\Http\Controllers\API\PersonController@updateStatus');

    Route::resource('resume', ResumeController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('resume/{id}/status', 'App\Http\Controllers\API\ResumeController@updateStatus');

    Route::resource('slider', SliderController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('slider/{id}/status', 'App\Http\Controllers\API\SliderController@updateStatus');

    Route::resource('social', SocialController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('social/{id}/status', 'App\Http\Controllers\API\SocialController@updateStatus');

    Route::resource('training-center', TrainingCenterController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('training-center/{id}/status', 'App\Http\Controllers\API\TrainingCenterController@updateStatus');

    Route::resource('widget', WidgetController::class)->only(['index', 'store', 'update', 'show', 'destroy']);
    Route::get('widget/{id}/status', 'App\Http\Controllers\API\WidgetController@updateStatus');

    // Route::resource('upload', UploadController::class)->only(['index']);
    Route::get('files', 'App\Http\Controllers\API\UploadController@getAllFile');
    Route::post('upload-single', 'App\Http\Controllers\API\UploadController@uploadFile');
    Route::get('remove-file/{filename}', 'App\Http\Controllers\API\UploadController@deleteFile');
// });
