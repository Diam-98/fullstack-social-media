<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

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

    public function login(Request $request){
        $request->validate([
            'email' => 'string|email|required',
            'password' => 'string|required'
        ]);

        $credentials = $request->only('email', 'password');

        if (! $token = JWTAuth::attempt($credentials)){
            return $this->unauthorizedResponse('Login ou mot de passe incorrect');
        }

        return $this->successResponse(
            ['token' => $token, 'user' => Auth::user()],
            'connexion effectue avec succes'
        );
    }

    public function loggedUser(Request $request)
    {
        return new UserResource($request->user());
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message', 'Vous vous etes deconnecte']);
    }
}
