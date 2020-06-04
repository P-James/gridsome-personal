<template>
  <Layout>
    <div class="mx-2 flex flex-col justify-between" v-html="$page.stackType.content"></div>
    <template v-slot:outsideFlex>
      <hr />
      <div class="flex flex-center flex-wrap">
        <p class="mt-4">
          Check out my
          <a href="https://chinesecharactersearch.com">Chinese character search site</a> built with Laravel. Chinese characters are composed of a 'radical' and a component, but they're not always easily identifiable. Try searching any characters to see its radicals, eg 雇佣我.
          I webscraped all the characters and radicals from a dictionary website and used <a href="https://laravel-livewire.com">Laravel Livewire</a> to query the database. I plan on scraping the components and adding compatibility for traditional Chinese characters.
        </p>
        <video class="mt-2" controls src="@/assets/ChineseCharacterSearch.webm" autoplay></video>
      </div>
    </template>
  </Layout>
</template>

<page-query>
query {
 stackType (id: 1) {
  content
	}
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Laravel"
  }
};
</script>

<style>
p > a {
  @apply text-red-500;
}
p > a:hover {
  @apply text-red-700;
}
</style>