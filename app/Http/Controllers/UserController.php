<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\UserRequest;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    use ApiResponseTrait;

    public function profile(UpdateUserRequest $request){
        $request->validated($request->all());

        $image = $request->image;

        if($image != null && !$image->getError()){
            $image = $request->image->store('asset', 'public');
        }

        $user = Auth::user();

        $user->update([
            'firstName' => $request->firstName,
            'lastName' => $request->lastName,
            'image' => $image,
            'bio' => $request->bio,
            'email' => $request->email,
        ]);

        return $this->successResponse(null, "Profile modifie avec succes");
    }
}
