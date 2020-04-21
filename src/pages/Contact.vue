<template>
  <GeneralLayout>
    <div v-html="$page.contact.content"></div>
  </GeneralLayout>
</template>

<page-query>
query {
	contact: pageType(path: "/content/contact/") {
    content
  } 
}
</page-query>

<script>
import GeneralLayout from "~/layouts/GeneralLayout.vue";

export default {
  components: {
    GeneralLayout
  },
  metaInfo: {
    title: "Contact"
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
