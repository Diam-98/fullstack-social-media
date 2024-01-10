<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\UserConnection;
use App\Traits\ApiResponseTrait;
use Illuminate\Support\Facades\Auth;

class UserConnectionController extends Controller
{

    use ApiResponseTrait;

    public function getAllUsers(){
        $users = Auth::user()->others();

        return UserResource::collection($users);
    }

    public function addConnection(int $id){

        UserConnection::create([
            'sender_id' => Auth::user()->id,
            'receiver_id' => $id,
            'status' => 'pending'
        ]);

        return $this->successResponse(null, 'Demande envoye');
    }

    public function acceptConnection(int $demande){
        $likePost = UserConnection::find($demande);

        if(!$likePost){
            return $this->errorResponse("Cette demande n'existe pas");
        }

        $likePost->status = 'accetpted';
        $likePost->update();

        return $this->successResponse(null, 'Demande accepte');
    }

    public function declineConnection(int $demande){
        $likePost = UserConnection::find($demande);

        if(!$likePost){
            return $this->errorResponse("Cette demande n'existe pas");
        }

        $likePost->delete();

        return $this->successResponse(null, 'Demande rejete');
    }

    public function connections(){
        $connections = Auth::user()->connections();
        
        return UserResource::collection($connections);
    }

}
