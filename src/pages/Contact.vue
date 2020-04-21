<template>
  <ContactLayout>
    <div v-html="$page.contact.content"></div>
  </ContactLayout>
</template>

<page-query>
query {
	contact: pageType(path: "/content/contact/") {
    content
  } 
}
</page-query>

<script>
import ContactLayout from "~/layouts/ContactLayout.vue";

export default {
  components: {
    ContactLayout
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
