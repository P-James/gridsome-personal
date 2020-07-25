---
title: Using Scopes To Get A Subset Of Users
slug: using-scopes-to-get-a-subset-of-users
excerpt: A brief look at using local scopes to get Users with a given Role.
date: 2020-07-25
id: 2
---

Today I spent a long time (too long) thinking about whether to extend the User model so I could use eloquent relationships between two types of users.

For example, these two relationships would need the same name, and therefore live on separate models:
```php
// Teacher has many classes. app\Teacher to extend User?
    public function classes()
    {
        return $this->hasMany(Group::class, 'teacher_id');
    }

// Student belongs to many classes. app\Student class to extend User?
    public function classes()
    {
        return $this->belongsToMany(Group::class);
    }
```

This didn't feel right. 
Besides being an intimidating change in infrastructure, I also already have and some neat auth checks linked to Roles and Users.

I have seen local scopes used before so I thought this could be a good opportunity to use them. The below code will allow me to call Users with a given Role from the database with a whereHas check:

```php
    /**
     * Scope a query to only include users with a given role.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  mixed  $type
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeWithRole($query, $role)
    {
        return $query->whereHas('roles', function (Builder $query) use ($role) {
            return $query->where('name', $role);
        })->get();
    }
```

Now I can call `User::withRole('teacher')->classes` but it still doesn't solve my duplicate method name for `User::withRole('student')->classes`. 

Maybe I give them unique names and be done with it?
Will update after more thought.
