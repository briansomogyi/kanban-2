<script setup>
import HelloWorld from "./components/HelloWorld.vue"
import { RouterLink, RouterView } from "vue-router"

// alert("Salut!")
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Homepage</RouterLink>
      <RouterLink to="/tasks-kanban">Kanban Tasks</RouterLink>
    </nav>
  </header>

  <RouterView />

  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
