<template>
  <BlogLayout>
    <blog-post-card
      v-for="(post, i) in $page.posts.edges"
      :key="i"
      :title="post.node.title"
      :date="post.node.date"
      :updated="post.node.updated"
      :slug="post.node.slug"
    >{{post.node.excerpt}}</blog-post-card>
  </BlogLayout>
</template>

<page-query>
query {
  posts: allBlogPost{
    edges {
      node {
        title
        slug
        excerpt
        date (format: "DD MMM YYYY")
        updated (format: "DD MMM YYYY")
      }
    }
  }
}
</page-query>
<script>
import BlogLayout from "~/layouts/BlogLayout.vue";
import BlogPostCard from "~/components/BlogPostCard.vue";

export default {
  components: {
    BlogLayout,
    BlogPostCard
  },
  metaInfo: {
    title: "Blog"
  }
};
</script>

<style>
p > a {
  @apply text-red-400;
}
p > a:hover {
  @apply text-red-600;
}
</style>
