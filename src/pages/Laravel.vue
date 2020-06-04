<template>
  <Layout>
    <div class="mx-2 flex flex-col justify-between" v-html="$page.stackType.content"></div>
    <template v-slot:outsideFlex>
      <hr />
      <div class="flex flex-center flex-wrap">
        <p class="mt-4">
          Check out my
          <a href="https://chinesecharactersearch.com">Chinese character search site</a> built with Laravel. Chinese characters are composed of a 'radical' and a component, but they're not always easily identifiable. Try searching any character to see its radicals, eg 雇佣我.</p>
          
          <p class="mt-4">I webscraped all the characters and radicals from a dictionary website using Guzzle and Symfony's dom-crawler. Then I used <a href="https://laravel-livewire.com">Laravel Livewire</a> to handle the ajax and render the components. I did use a bit of Vue but it doesn't integrate well with Livewire, so I may swap it out for Alpine if I need more features. I also plan on scraping the components and adding compatibility for traditional Chinese characters.
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