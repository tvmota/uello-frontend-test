<template>
  <div class="v-timeline d-flex">
    <ul class="v-timeline__container d-flex flex-column">
      <li class="v-timeline__container__item d-flex flex-column">
        <div class="v-timeline__container__item--title">
          Solicitação recebida
        </div>
        <div class="v-timeline__container__item--subtitle">
          14/08 - 22h41
        </div>
      </li>
      <li class="v-timeline__container__item d-flex flex-column">
        <div class="v-timeline__container__item--title">
          Pedido em separação
        </div>
        <div class="v-timeline__container__item--subtitle">
          145/08 - 16h23
        </div>
      </li>
      <li class="v-timeline__container__item d-flex flex-column">
        <div class="v-timeline__container__item--title">
          Motorista está a caminho
        </div>
        <div class="v-timeline__container__item--subtitle">
          145/08 - 16h23
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .v-timeline {
    &__container {
      list-style-type: none;
      margin: 0;
      padding: 0;

      &__item {
        position: relative;

        &:before {
          content: "";
          position: absolute;
          top: 0;
          border: 1px solid var(--c-red-01);
          border-radius: 50%;
          width: 12px;
          height: 12px;
        }

        &:after {
          content: "";
          position: absolute;
          top: 12px;
          border-left: 1px solid var(--c-red-01);
          height: calc(100% - 2px);
          left: 6px;
        }

        &:not(:last-child) {
          margin-bottom: 10px;
        }

        &:last-child {
            &:after {
              display: none;
            }
          }

        &--title {
          font-size: var(--f-xs);
          margin-left: 20px;
        }
        &--subtitle {
          font-size: var(--f-xss);
          margin-left: 20px;
        }
      }
    }
  }
</style>
