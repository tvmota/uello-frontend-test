<template>
  <div class="dispatch-info__card d-flex flex-column">
    <button type="button" class="btn dispatch-info__btn-help d-flex justify-content-between ">
      <span class="m-auto d-flex align-items-center">
        <i class="bi bi-question-circle" style="font-size: 20px;" />
        <span class="dispatch-info__btn-help--txt text-capitalize">Central de ajuda</span>
      </span>
      <i class="bi bi-chevron-down" style="font-size: 20px;" />
    </button>
  </div>
</template>

<style lang="scss">
.dispatch-info {
  &__card {
    height: 100%;
    min-width: 300px;
    background-color: #fff;
    padding: 20px;
  }

  &__btn-help {
    color: var(--c-white) !important;
    background-color: var(--c-gray) !important;
    font-size: var(--f-xs) !important;

    &--txt {
      margin-left: 8px;
    }
  }
}
</style>
