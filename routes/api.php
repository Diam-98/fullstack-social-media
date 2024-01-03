<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LikePostController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserConnectionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->get('/user', [AuthController::class, 'loggedUser']);
Route::middleware('auth:api')->post('/logout', [AuthController::class, 'logout']);

Route::middleware('auth:api')->apiResource('/post', PostController::class);

Route::middleware('auth:api')->post('/post/like/{postId}', [LikePostController::class, 'updateLike']);
Route::middleware('auth:api')->get('/post-likes', [LikePostController::class, 'likedPosts']);

Route::middleware('auth:api')->post('/connect/add/{id}', [UserConnectionController::class, 'addConnection']);
Route::middleware('auth:api')->post('/connect/accept/{demande}', [UserConnectionController::class, 'acceptConnection']);
Route::middleware('auth:api')->post('/connect/decline/{demande}', [UserConnectionController::class, 'declineConnection']);
Route::middleware('auth:api')->get('/network', [UserConnectionController::class, 'connections']);
Route::middleware('auth:api')->get('/network/pending', [UserConnectionController::class, 'pendingDemands']);

Route::middleware('auth:api')->put('/user/profile', [UserController::class, 'profile']);

