<template>
  <Layout>
    <div class="mx-2 flex flex-col justify-between" v-html="$page.stackType.content"></div>
    <template v-slot:outsideFlex>
      <hr />
      <div class="flex flex-center flex-wrap">
        <p class="mt-4">
          Here's a WIP project I'm working on with Tailwind. The search returns stylised cards. The search feature is built with Laravel Livewire and the filter is made with AlpineJs. 
          It searches through company names and their addresses. The database is seeded with 500 fake companies, and I'd like to improve performance. So if you spotted the Laravel debugbar in the bottom left, that's because I'm currently (June 2020) learning about optimising SQL queries with Eloquent.
        </p>
        <video class="mt-2" controls src="@/assets/fishery-search.webm" autoplay></video>
      </div>
    </template>
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
export default {
  metaInfo: {
    title: "Tailwind"
  }
};
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
