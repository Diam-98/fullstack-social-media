<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\LikePost;
use App\Traits\ApiResponseTrait;
use Illuminate\Support\Facades\Auth;

class LikePostController extends Controller
{
    use ApiResponseTrait;
    /**
     * Display a listing of the resource.
     */
    public function likedPosts()
    {
        
        $currentUser = Auth::user();

        $likedPosts = $currentUser->likes()->with('posts')->get();

        return PostResource::collection($likedPosts);
    }

    /**
     * Update the specified resource in storage.
     */
    public function updateLike(int $postId)
    {
        $postLike = LikePost::where('user_id', Auth::user()->id)->where('post_id', $postId)->first();

        if($postLike){
            $postLike->delete();
            return $this->successResponse(null, "Vous n'aimer plus ce post");
        }

        LikePost::create([
            'user_id' => Auth::user()->id,
            'post_id' => $postId
        ]);

        return $this->successResponse(null, "Vous aimer ce post");

    }

}
