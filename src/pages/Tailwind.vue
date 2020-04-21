<template>
  <Layout>
    <div class="mx-2 flex flex-col justify-between" v-html="$page.stackType.content"></div>
  </Layout>
</template>

<page-query>
query {
 stackType (id: 3) {
  content
	}
}
</page-query>

<script>
export default {};
</script>

<style>
p:nth-child(2) {
  @apply items-center;
}
p > a {
  @apply text-red-500;
}
p > a:hover {
  @apply text-red-700;
}
