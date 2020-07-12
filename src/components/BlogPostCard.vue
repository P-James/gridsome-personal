<template>
  <div class="leading-tight">
    <h2><a 
    :href="slug"
    class="font-semibold leading-tight hover:underline cursor-pointer">{{title}}</a></h2>
    <slot></slot>
    <div class="italic flex justify-end mt-4 saturated">Posted: {{date}}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "slug", "date"]
};
</script>

<style>
</style>