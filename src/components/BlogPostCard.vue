<template>
  <a :href="slug" class="blog-post-card">
    <div class="leading-tight">
      <h2 class="mb-2">
        <a :href="slug" class="font-semibold leading-tight cursor-pointer">{{title}}</a>
      </h2>
      <slot></slot>
      <div class="italic flex justify-end mt-4 saturated">Posted: {{date}}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["title", "slug", "date"]
};
</script>

<style>
.blog-post-card:hover a {
  @apply underline;
}
</style>