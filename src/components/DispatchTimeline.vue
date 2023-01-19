<template>
  <div class="dispatch__timeline">
    <div class="dispatch__timeline__container">
      <div class="dispatch__timeline__container__item dispatch__timeline__container__item--active" data-title="Solicitação">
        <InboxIcon
          class="dispatch__timeline__container__item--icon dispatch__timeline__container__item--icon-active"
          :custom-height="15"
          :custom-width="15"
        />
      </div>
      <div class="dispatch__timeline__container__item dispatch__timeline__container__item--active" data-title="Pedido em separação">
        <TimerIcon
          class="dispatch__timeline__container__item--icon dispatch__timeline__container__item--icon-active"
          :custom-height="15"
          :custom-width="15"
        />
      </div>
      <div class="dispatch__timeline__container__item dispatch__timeline__container__item--active" data-title="Motorista em trânsito">
        <CarIcon
          class="dispatch__timeline__container__item--icon dispatch__timeline__container__item--icon-active"
          :custom-height="15"
          :custom-width="15"
        />
      </div>
      <div class="dispatch__timeline__container__item" data-title="Pedido entregue">
        <CheckIcon
          class="dispatch__timeline__container__item--icon"
          :custom-height="15"
          :custom-width="15"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    InboxIcon,
    TimerIcon,
    CarIcon,
    CheckIcon,
  } from "./icons";
</script>

<style lang="scss" scoped>
  .dispatch {
    &__timeline {
      width: 100%;
      height: auto;
      min-height: 56px;
      padding: 0 20px;
      margin-bottom: 40px;

      &__container {
        text-align: center;
        position: relative;
        height: 100%;
        display: flex;
        justify-content: space-between;

        &__item {
          width: 8px;
          height: 8px;
          background: var(--c-white);
          position: relative;
          border-radius: 100%;
          top: calc(50% - 3px);

          &--icon {
            color: var(--c-light-02);
            position: absolute;
            bottom: 12px;
            left: -4px;

            &-active {
              color: var(--c-red-01);
            }
          }

          &--active {
            border: 1px solid var(--c-red-01);
            color: var(--c-red-01);
          }

          &:before {
            content: attr(data-title);
            color: var(--c-gray);
            position: absolute;
            display: inline;
            top: 0;
            left: 50%;
            transform: translate(-50%, 16px);
            font-size: var(--f-xss);
            line-height: 11px;
            min-width: 44px;
            word-break: break-word;
          }

          &:after {
            content: "";
            position: absolute;
            top: 50%;
            border-top: 1px solid var(--c-red-01);
            width: 68px;
            transform: translate(4px, 49%);
          }

          &:last-child {
            border: 1px solid var(--c-light-02);
            &:after {
              display: none;
            }
          }

          &:nth-child(3){
            &:after {
              border-top: 1px solid var(--c-light-02);
            }
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    .dispatch {
      &__timeline {
        padding: 0;
        width: 120px;
        min-height: 32px;
        margin-top: 10px;
        margin-bottom: 2px;

        &__container {
          &__item {
            &--icon {
              color: var(--c-white);
            }
            &:before {
              display: none;
            }

            &:after {
              width: 28px;
            }
          }
        }
      }
    }
  }
</style>
