<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'firstName' => $this->firstName,
            'lastName' => $this->lastName,
            'email' => $this->email,
            'bio' => $this->bio,
            'image' => $this->image ? URL::to($this->image) : null,
            // ---
            'posts' => PostResource::collection($this->posts),
            // ---
            'favorits' => PostResource::collection($this->likes)->count(),
            // ---
            'connections' => PostResource::collection($this->connections())->count(),
            // --
            // 'network' => $this->network
        ];
    }
}
