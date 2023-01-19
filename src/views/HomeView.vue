<template>
  <div class="app__home d-flex h-100">
    <DispatchInfo />
    <AppMap />
    <MiniDeliveryCard />
    <MiniDisapatchInfo />
  </div>
</template>

<script setup>
  import DispatchInfo from "@/components/DispatchInfo.vue";
  import AppMap from "@/components/AppMap.vue";
  import MiniDeliveryCard from "../components/MiniDeliveryCard.vue";
  import MiniDisapatchInfo from "../components/MiniDisapatchInfo.vue";
</script>

<style lang="scss">
  .app {
    &__home {
      position: relative;
    }
  }
</style>
