<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\UserRequest;
use App\Http\Resources\PostResource;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    use ApiResponseTrait;

    public function profile(UpdateUserRequest $request){

        $request->validated($request->all());

        $user = Auth::user();

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/profile');
            $image->move($destinationPath, $name);
            $user->image = $name;
        }

        $user->firstName = $request->firstName;
        $user->lastName = $request->lastName;
        $user->bio = $request->bio;
        $user->email = $request->email;

        $user->save();

        return $this->successResponse(null, "Profile modifie avec succes");
    }

    public function posts(){
        $posts = Auth::user()->myPosts;

        return PostResource::collection($posts);
    }
}
