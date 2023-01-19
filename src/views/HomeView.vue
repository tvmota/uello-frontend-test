<template>
  <div class="app__home d-flex h-100">
    <DispatchInfo />
    <AppMap />
    <MiniDeliveryCard />
    <MiniDisapatchInfo />
    <BtnHelp />
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from "vue";
  import DispatchInfo from "@/components/DispatchInfo.vue";
  import MiniDeliveryCard from "../components/MiniDeliveryCard.vue";
  import MiniDisapatchInfo from "../components/MiniDisapatchInfo.vue";
  import BtnHelp from "../components/BtnHelp.vue";

  const AppMap = defineAsyncComponent(() => import("@/components/AppMap.vue"));
</script>

<style lang="scss">
  .app {
    &__home {
      position: relative;
    }
  }

  @media (min-width: 992px) {
    .app__home {
      .btn-help {
        display: none;
      }

      .dispatch-info {
        .btn-help {
          display: flex;
        }
      }
    }
  }
</style>
