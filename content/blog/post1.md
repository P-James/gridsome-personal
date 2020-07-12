---
title: Add role checking middleware with multiple parameters in Laravel
slug: add-role-checking-middleware-with-multiple-parameters-in-laravel
excerpt: When you have users with multiple roles, for example Admin, Subscriber, Author etc. You may want to limit access to certain pages to a role or many roles, so you need to pass them as parameters to your middleware. This article explains how to acheive that in Laravel.
date: 2020-07-10
id: 1
---

This article will work backwards, starting with our goal.  
We want to get the following code working:
```php
// Teacher Dashboard
Route::get('/dashboard', 'TeacherDashboardController@index')->middleware('role:admin,teacher');
```

We're applying a middleware called 'role' and passing it multiple roles that are allowed to access the route.  
`->middleware('role:admin,teacher');` will pass two parameters: admin, teacher to the routeMiddleware with the key 'role':


```php
protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
        'role' => \App\Http\Middleware\CheckRole::class,
    ];
```

That last line is what we need to add.
Run `php artisan make:middleware CheckRole` to create that file.

Now we need a check in the `handle()` method to pass and proceed, or fail and redirect:

```php
class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  array $roles
     * @return mixed
     */
    public function handle($request, Closure $next, ...$roles)
    {
        if (!$request->user()->hasAnyRole($roles)) {
            return redirect('/');
        }
        return $next($request);
    }
}
```

The handle method receives extra parameters from our `role:admin,teacher` syntax, they must be comma delimited.  
Because we are receiving one or many roles let's get them into an array using `...$roles` syntax. 
This will pass `['admin', 'teacher']`.

_This is actually called the ... operator in PHP, how do you even say that? The ellipsis operator? As it's common in other languages we can refer to it as the rest operator (from Javascript) or splat operator (from Ruby)_

Now we just need our `hasAnyRole()` method to work on our User model.
```php
// app\User

public function hasAnyRole(array $roles)
    {
        foreach ($roles as $role) {
            if ($this->roles->pluck('name')->contains($role)) {
                return true;
            }
        }
        return false;
    }
```

`pluck($columnName)` is a Collection method that will return an array of values from a single column on the model.

So, `$this->roles` needs to return a Collection of Role models.

We need a Role model, a roles table and belongsToMany relationships set up.

Run `php artisan make:model -m Role`

The -m will give you your migration file that will create your 'roles' table when you run `php artisan:migrate`.
Inside the file just give your it a name column.

Below that, we set up the 'role_user' pivot table at the same time, defining a unique primary key, and our two foreign keys.
If this part is new to you, check out many-to-many relationships in the Laravel docs.

```php
Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
		
Schema::create('role_user', function (Blueprint $table) {
            $table->primary(['role_id', 'user_id']);
            
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('role_id');

            $table->timestamps();

            $table->foreign('user_id')
            ->references('id')
            ->on('users')
            ->onDelete('cascade');

            $table->foreign('role_id')
            ->references('id')
            ->on('roles')
            ->onDelete('cascade');
```

On our Role and User model set up the mutual many-to-many relationships:
```php
// app\Role.php
public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
```
```php
// app\User.php
public function roles()
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }
```
We need to add `->withTimestamps()` because we're using timestamps in the pivot table.

All that's left is to assign roles to a User and we're done:
```php
// app\User.php
public function assignRole($role)
    {
        if (is_string($role)) {
            $role = Role::whereName($role);
        }
        return $this->syncWithoutDetaching($role);
    }
```





