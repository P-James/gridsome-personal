---
title: Setting up Laravel Sanctum with Laragon for an SPA Frontend Environment
slug: setting-up-laravel-sanctum-with-laragon
excerpt: If you prefer working within the Vue CLI or the create-react-app default environments, or you want to plug another app into your Laravel backend, then Laravel Sanctum is the package for you. Here's how I set it up locally using Laragon as my Laravel environment.
date: 2020-08-06
id: 3
---

When learning frontend frameworks like React or Vue, you get a neat file directory and set of npm scripts that make it a joy to work with. But as a Laravel developers, we often work with blade templates and embed components as necessary. For websites and web apps, there's nothing wrong with this, in fact I think it's wise to leverage this set up to push as much work to the backend as possible. 

For more of what I mean here, I highly recommend watching (this talk at Laracon 2018)[https://www.youtube.com/watch?v=uQO4Xh1gMpY&t=483s] by (Caleb Porzio)[https://twitter.com/calebporzio] from before he released Livewire. In my view this is a very productive way of building applications fast.

However, you can't cover all use cases with this set up. If you want to set up a mobile app or some other SPA and use the same backend, then Laravel Sanctum is package that handles this authentication, and with Laravel 7 having 