<template>
  <Layout>
    <div v-html="$page.about.content"></div>
  </Layout>
</template>

<page-query>
query {
	about: pageType(path: "/content/about/") {
    content
  } 
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
img {
  @apply inline;
}
</style>
