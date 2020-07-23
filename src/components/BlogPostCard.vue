<template>
  <a :href="'/blog/'+slug" class="blog-post-card">
    <div class="leading-tight">
      <h2 class="mb-2 font-semibold leading-tight cursor-pointer">{{title}}</h2>
      <slot></slot>
      <div class="italic flex justify-end mt-4 saturated">
        Posted: {{date}}
        <span v-if="updated" class="ml-1">/ Updated: {{updated}}</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["title", "slug", "date", "updated"],
};
</script>

<style>
.blog-post-card:hover h2 {
  @apply underline;
}
</style>