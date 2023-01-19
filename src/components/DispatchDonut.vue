<template>
  <div class="dispatch__donut">
    <div class="dispatch__donut__info text-capitalize fw-bold">
      <span>falta</span>
      <span>1</span>
      <span>Entrega</span>
    </div>
  </div>
</template>

<style lang="scss">
  .dispatch {
    &__donut {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-left-color: var(--c-teal);
      border-right-color: var(--c-teal);
      border-bottom-color: var(--c-teal);
      border-radius: 50%;
      width: 84px;
      height: 84px;
      max-height: 84px;
      transform: rotate(-45deg);

      &__info {
        display: flex;
        flex-direction: column;
        transform: rotate(45deg);
        border-radius: 50%;
        padding: 0 16px;
        text-align: center;
        width: 84px;
        height: auto;
        font-size: var(--f-xs);

        span:nth-child(2) {
          font-size: var(--f-md);
        }
      }
    }
  }

  @media (max-width: 992px) {
    .dispatch {
      &__donut {
        border: 6px solid var(--c-light-02);
        border-left-color: var(--c-cyan);
        border-right-color: var(--c-cyan);
        border-bottom-color: var(--c-cyan);
        &__info {
          color: var(--c-white);
        }
      }
    }
  }
</style>
