<template>
  <div>
    <div class="layout">
      <header>
        <h1 class="site-title">
          <g-link to="/">{{$static.metadata.siteName}}</g-link>
        </h1>
        <nav class="flex items-center">
          <ul class="navbar">
            <li class="nav-item">
              <g-link to="/">About</g-link>
            </li>
            <li class="nav-item">
              <g-link to="/blog">Blog</g-link>
            </li>
            <li class="nav-item">
              <g-link to="/contact">Contact</g-link>
            </li>
          </ul>
        </nav>
      </header>
      <main class="content">
        <div class="inner-content">
          <div>
            <h2>Things I like:</h2>
            <ul class="like-list">
              <li class="like-item">
                <laravel />
                <g-link to="/Laravel">Laravel</g-link>
              </li>
              <li class="like-item">
                <vue />
                <g-link to="/Vue">Vue</g-link>
              </li>
              <li class="like-item">
                <tailwind />
                <g-link to="/Tailwind">Tailwind</g-link>
              </li>
              <li class="like-item">
                <javascript />
                <g-link to="/Javascript">Javascript</g-link>
              </li>
              <li class="like-item">
                <zhongwen />
                <g-link to="/Languages">Languages</g-link>
              </li>
            </ul>
          </div>
          <slot />
        </div>
        <slot name="outsideFlex"></slot>
      </main>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import laravel from "~/assets/laravel.svg";
import vue from "~/assets/vue.svg";
import javascript from "~/assets/javascript.svg";
import tailwind from "~/assets/tailwind.svg";
import zhongwen from "~/assets/zhongwen.svg";

export default {
  components: {
    laravel,
    vue,
    javascript,
    tailwind,
    zhongwen
  }
};
</script>

<style>
html {
  background: #fff;
  background: linear-gradient(
      180deg,
      rgba(255, 236, 233, 1) 0%,
      rgba(255, 255, 255, 1) 47%
    )
    no-repeat;
}
body {
  @apply font-inter h-screen text-gray-900;
}
.active--exact {
  @apply text-red-600;
}
.layout {
  max-width: 900px;
  @apply mx-auto mt-6 rounded-lg p-6 bg-white shadow-xl mb-12;
}
header {
  @apply flex justify-between mb-4;
}
.site-title {
  background: rgb(221, 100, 100);
  background: linear-gradient(
    180deg,
    rgba(221, 100, 100, 1) 8%,
    rgba(252, 129, 129, 1) 68%
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  @apply font-bold text-2xl font-inter;
}
.saturated {
  color: #664949
}
.navbar {
  @apply flex;
}
.nav-item {
  @apply mx-2;
}
.nav-item:hover {
  @apply text-black;
}
.like-item {
  @apply flex m-2;
}
.like-item > a {
  transition: 0.25s ease;
}
.like-item:hover > a {
  text-shadow: #c0bfbf 1px 0 10px;
}
svg {
  @apply mr-2;
}
.like-list {
  @apply flex flex-wrap justify-center mb-0;
}
.inner-content {
  @apply flex flex-col;
}
@media (min-width: 640px) {
  .layout {
    @apply mt-12;
  }
  .inner-content {
    @apply flex flex-row;
  }
  .like-list {
    @apply flex flex-col justify-start mb-2;
  }
}
div > h1 {
  @apply mb-2;
}
p {
  @apply mb-2;
}
</style>
