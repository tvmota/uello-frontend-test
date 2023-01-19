<template>
  <div class="dispatch__history d-flex flex-column">
    <div class="dispatch__history__title d-flex justify-content-center align-items-center">
      <HistoryIcon :custom-height="14" :custom-width="14" />
      <h4 class="dispatch__history__title--txt text-capitalize fw-semibold">
        histórico
      </h4>
    </div>
    <div>
      <VerticalTimeline />
    </div>
  </div>
</template>

<script setup>
  import { HistoryIcon } from "./icons";
  import VerticalTimeline from "./VerticalTimeline.vue";
</script>

<style lang="scss">
  .dispatch {
    &__history {
      border: 1px solid var(--c-red-01);
      border-radius: 4px 4px 0px 0px;
      padding: 10px;

      &__title {
        color: var(--c-red-01);
        margin-bottom: 14px;

        &--txt {
          margin: 0 0 0 8px;
          font-size: var(--f-sm);
        }
      }
    }
  }
</style>
