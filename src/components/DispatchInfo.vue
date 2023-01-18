<template>
  <div class="dispatch-info__card d-flex flex-column">
    <BtnHelp />
    <DispatchTimeline />
  </div>
</template>

<script setup>
  import BtnHelp from "./BtnHelp.vue";
  import DispatchTimeline from "./DispatchTimeline.vue";
</script>

<style lang="scss">
.dispatch-info {
  &__card {
    height: 100%;
    min-width: 300px;
    background-color: #fff;
    padding: 20px;
  }
}
</style>
