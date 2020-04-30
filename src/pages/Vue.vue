<template>
  <Layout>
    <div class="mx-2 mb-4 flex flex-col justify-between" v-html="$page.stackType.content"></div>
    <template v-slot:outsideFlex>
      <hr />
      <div class="flex flex-center flex-wrap">
        <p
          class="mt-4"
        >Here's an example of a stylised upload form I built using Vue for Educhina users. Uploads are stored securely, the Admin Panel will be shown via SSR only when the authorised user is an Admin, this is where Admins can access user uploads.</p>
        <video class="mt-2" controls src="@/assets/upload-form-demo.webm"></video>
      </div>
    </template>
  </Layout>
</template>

<page-query>
query {
 stackType (id: 2) {
  content
	}
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Vue"
  }
};
</script>

<style>
hr {
  border: 0;
}
hr::after {
  display: block;
  content: "";
  width: 100%;
  height: 2px;
  background-color: #f56565;
  opacity: 0.75;
}
p > a {
  @apply text-red-500;
}
p > a:hover {
  @apply text-red-700;
}
</style>