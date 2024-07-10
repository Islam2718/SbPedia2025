<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Storage;
use League\Flysystem\Filesystem;
use League\Flysystem\Ftp\FtpAdapter;

class UploadController extends Controller
{
    //
    public function getAllFile(Request $request): Response
    {
        //
        // if(Auth::guard('api')->check()){
            $files = Storage::disk('ftp')->files('/');
            $fileNames = [];
            foreach($files as $file){
                $fileInfo = pathinfo($file);
                $fileNames[]= $fileInfo['basename'];
            }
            $fileNames = array_diff($files, array('.ftpquota', 'error_log', 'index.php'));
            return Response(['file_names' => $fileNames, 'status'=>200], 200);
        // }
        // return Response(['data' => 'Unauthorized!', 'status'=>401], 401);            
    }

    public function uploadFile(Request $request): Response
    {
        //
        // if(Auth::guard('api')->check()){
            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $fileName = 'pos_' . time() . '.' . $file->getClientOriginalExtension();
                Storage::disk('ftp')->put($fileName, file_get_contents($file));
                $ftpHost = env('FTP_HOST');
                $ftpUsername = env('FTP_USERNAME');
                $ftpPath = '/' . $fileName; // Assuming the file is uploaded to the root directory
                $ftpUrl = "ftp://$ftpUsername@$ftpHost$ftpPath";

                return Response(['url' => $fileName, 'status'=>200], 200);
            }
            return Response(['data' => 'No File Provided!', 'status'=>400], 400);
        // }
        // return Response(['data' => 'Unauthorized!', 'status'=>401], 401);
    }
    
    public function deleteFile($filename = null): Response
    {
        //
        if(Auth::guard('api')->check()){        
            if ($filename) {
                if (Storage::disk('ftp')->exists($filename)) {
                    Storage::disk('ftp')->delete($filename);
                    return Response(['message' => 'File deleted successfully', 'status' => 200], 200);
                }
                return Response(['message' => 'File not found', 'status' => 404], 404);
            }
            return Response(['message' => 'No file name provided', 'status' => 400], 400);
        }
        return Response(['data' => 'Unauthorized!', 'status'=>401], 401);            
    }
}
