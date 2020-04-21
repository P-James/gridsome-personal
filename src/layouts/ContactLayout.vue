<template>
  <div class="layout">
    <header>
      <h1 class="site-title">
        <g-link to="/">{{$static.metadata.siteName}}</g-link>
      </h1>
      <nav>
        <ul class="navbar">
          <li class="nav-item">
            <g-link to="/">About</g-link>
          </li>
          <li class="nav-item">
            <g-link to="/Contact">Contact</g-link>
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

<style>
</style>
