<template>
  <BlogLayout>
    <h1 v-html="$page.blogPost.title" class="font-semibold"></h1>
    <span class="italic flex justify-end saturated">Posted {{$page.blogPost.date}}</span>
    <article class="p-8 tracking-tighter" v-html="$page.blogPost.content"></article>
  </BlogLayout>
</template>

<page-query>
query ($id: ID!) {
  blogPost(id: $id) {
    title
    date (format: "DD MMM YYYY")
    content
  }
}
</page-query>

<script>
import BlogLayout from "~/layouts/BlogLayout.vue";
// import GithubMarkdown from "github-markdown-css";

export default {
  components: {
    BlogLayout
  }
};
</script>

<style>
p {
  @apply mb-4;
}
</style>