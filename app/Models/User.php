<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstName',
        'lastName',
        'bio',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function myPosts(){
        return $this->hasMany(Post::class, 'user_id', 'id');
    }

    public function likes(){
        return $this->hasMany(LikePost::class, 'user_id', 'id');
    }
    
    public function connections()
    {
        return User::where('id', '!=', $this->id)
                    ->where(function ($query) {
                        $query->whereIn('id', function ($subquery) {
                            $subquery->select('sender_id')
                                     ->from('user_connections')
                                     ->where('receiver_id', $this->id)
                                     ->where('status', 'accepted');
                        })
                        ->orWhereIn('id', function ($subquery) {
                            $subquery->select('receiver_id')
                                     ->from('user_connections')
                                     ->where('sender_id', $this->id)
                                     ->where('status', 'accepted');
                        });
                    })
                    ->get();
    }

    public function others(){
        return User::where('id', '!=', $this->id)
                    ->where(function ($query) {
                        $query->whereNotIn('id', function ($subquery) {
                            $subquery->select('sender_id')
                                     ->from('user_connections')
                                     ->where('receiver_id', $this->id);
                        })
                        ->whereNotIn('id', function ($subquery) {
                            $subquery->select('receiver_id')
                                     ->from('user_connections')
                                     ->where('sender_id', $this->id);
                        });
                    })
                    ->get();
    }

    public function favoritPosts(){
        return $this->belongsToMany(Post::class, 'like_posts', 'user_id', 'post_id');
    }



}
