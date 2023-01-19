<template>
  <section>
    <section class="app__container">
      <AppHeader />
      <main class="app__main">
        <RouterView />
      </main>
    </section>
    <AppSidebar />
  </section>
</template>

<script setup>
  import { RouterView } from "vue-router";
  import AppSidebar from "@/components/AppSidebar.vue";
  import AppHeader from "@/components/AppHeader.vue";
</script>

<style lang="scss">
.app {
  &__container {
    background-color: var(--c-light-01);
    display: grid;
    height: 100vh;
    grid-auto-columns: 1fr;
    grid-template-rows: 62px 1fr;
    gap: 0px 0px;
    position: relative;
  }

  &__main {
    grid-area: 2 / 1 / 3 / 2;
    position: relative;
    padding: 0 0 40px 0;
  }
}

@media (min-width: 992px) {
  .app {
    &__container {
      margin-left: 70px;
    }

    &__main {
      padding: 0 20px 30px 20px;
    }
  }
}
</style>
