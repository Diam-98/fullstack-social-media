<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    use ApiResponseTrait;

    public function register(UserRequest $request){
        $request->validated($request->all());

        $user = User::create($request->all());

        $token = \auth()->login($user);

        return $this->successResponse(
            ['token' => $token, 'user' => $user],
            'Inscription effectue avec succes'
        );

    }
}
