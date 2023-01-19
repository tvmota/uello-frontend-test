<template>
  <div class="mini-dispatch-card">
    <div class="mini-dispatch-card__donut">
      <DispatchDonut />
    </div>
    <div class="mini-dispatch-card__info">
      <DispatchTimeline />
      <ul class="mini-dispatch-card__info__list">
        <li>
          <span class="fw-bold">Status do pedido:&nbsp;</span>
          <span class="fw-semibold">Saiu para entrega</span>
        </li>
        <li>
          <span class="fw-bold">Horário Estimado: </span>
          <span class="fw-semibold">15:29 - 16:29</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
 import DispatchDonut from "./DispatchDonut.vue";
 import DispatchTimeline from "./DispatchTimeline.vue";
</script>

<style lang="scss" scoped>
  .mini-dispatch-card {
    background-color: var(--c-teal);
    border-radius: 4px;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 84px 1fr;
    grid-template-rows: 1fr;
    gap: 0px 30px;
    grid-template-areas: "left right";
    justify-content: space-between;
    position: absolute;
    padding: 4px 26px;
    min-width: 340px;
    max-height: 94px;
    top: 15px;
    left: 0;
    right: 0;
    margin: auto;
    width: calc(100% - 20px);
    z-index: 3;

    &__donut {
      grid-area: left;
    }

    &__info {
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 100%;
      grid-area: right;

      &__list {
        color: var(--c-white);
        padding: 0;
        margin: 0;
        list-style-type: none;
        font-size: var(--f-xs);
      }
    }
  }

  @media (min-width: 992px) {
    .mini-dispatch-card {
      display: none;
    }
  }
</style>
