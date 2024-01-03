<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Traits\ApiResponseTrait;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    use ApiResponseTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PostResource::collection(Post::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $request->validated($request->all());

        $image = $request->image;

        if($image != null && !$image->getError()){
            $image = $request->image->store('asset', 'public');
        }

        $post = Post::create([
            'description' => $request->description,
            'image' => $image,
            'user_id' => Auth::user()->id
        ]);

        return $this->successResponse($post, 'Post cree avec success');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $request->validated($request->all());

        $image = $request->image;

        if($image != null && !$image->getError()){
            $image = $request->image->store('asset', 'public');
        }

        $post->update([
            'description' => $request->description,
            'image' => $image,
        ]);

        return $this->successResponse($post, 'Post modifie avec success');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return $this->successResponse(null, 'Post supprime avec succes');
    }
}
