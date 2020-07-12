<template>
  <div class="layout">
    <header>
      <h1 class="site-title">
        <g-link to="/">{{$static.metadata.siteName}}</g-link>
      </h1>
      <nav class="flex items-center">
        <ul class="navbar">
          <li class="nav-item">
            <g-link to="/" exact>About</g-link>
          </li>
          <li class="nav-item">
            <g-link to="/blog">Blog</g-link>
          </li>
          <li class="nav-item">
            <g-link to="/contact">Contact</g-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>

<style>
</style>
