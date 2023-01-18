<template>
  <div class="d-flex h-100">
    <!--button class="btn btn-primary" type="button">
      Primary button
    </button>
    <i class="bi bi-alarm-fill text-warning" style="font-size: 30px" /--->
    <DispatchInfo />
    <AppMap />
  </div>
</template>

<script setup>
  import DispatchInfo from "@/components/DispatchInfo.vue";
  import AppMap from "@/components/AppMap.vue";
</script>
