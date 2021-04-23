---
title: Seeding Users with Teams in Laravel 8 with Jetstream
slug: seeding-users-with-teams-in-jetstream
excerpt: If you're using Laravel Jetstream with teams, you may have found you're getting the error Trying to get property 'id' of non-object a whole lot during testing. This is because when you create a User from a factory, the team and team_user pivot table are not automatically created or filled.
date: 2020-09-10
id: 3
---

If you're using Laravel Jetstream with teams, you may have found you're getting the "ErrorException: Trying to get property 'id' of non-object" a whole lot during testing.
This is because when you create a User from a factory, the team and team_user pivot table are not automatically created or filled.

To fix this create a TeamFactory, and create the new user within the definition() method:
```php
public function definition()
    {
        return [
            'user_id' => User::factory()->create(),
            'name' => $this->faker->words(2, true),
            'personal_team' => true,
        ];
    }
```

Then, add the HasFactory trait to your Team model:
```php
use HasFactory
```

And when you need to seed a User, seed a Team instead:
```php
Team::factory()->create();
```


TIP:
A common usecase of the TestCase class is to create a signIn() method to use in your PHPUnit tests.
You can still do that by changing your signIn method to the following:

```php
public function signIn($user = null)
    {
        $team = Team::factory()->create();

        $this->actingAs($user ?: $user = User::whereId($team->user_id)->first());

        return $user;
    }
```