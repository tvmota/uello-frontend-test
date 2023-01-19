<template>
  <div class="mini-dispatch-info">
    <div class="mini-dispatch-info__header">
      <p>Seu pedido da <span class="fw-bold">Dafiti</span> saiu para entrega, e será&nbsp;</p>
      <p><span class="fw-bold">entregue</span> no <span class="fw-semibold">endereço:</span></p>
    </div>
    <div class="mini-dispatch-info__body d-flex">
      <GeoIcon class="mini-dispatch-info__body__address--icon" />
      <div>
        <p class="mini-dispatch-info__body__address--title">
          Avenida Doutor Gastão Vidigal, 1132
        </p>
        <p class="mini-dispatch-info__body__address--subtitle">
          Vila Leopoldina - São Paulo - SP Apto - 1234
        </p>
      </div>
    </div>
    <div class="mini-dispatch-info__btn d-flex justify-content-center">
      <span>&nbsp;</span>
    </div>
  </div>
</template>

<script setup>
  import { GeoIcon } from "./icons";
</script>

<style lang="scss">
  .mini-dispatch-info {
    background-color: var(--c-white);
    position: absolute;
    height: 122px;
    width: calc(100% - 20px);
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    z-index: 3;
    overflow: hidden;

    &__header {
      background-color: var(--c-red-01);
      border-radius: 4px 4px 0px 0px;
      color: var(--c-white);
      height: 48px;
      padding: 10px;
      font-size: var(--f-xs);

      p {
        margin-bottom: 0;
      }
    }

    &__body {
      padding: 10px 14px 0 14px;
      margin-bottom: 8px;

      &__address {
        margin-bottom: 20px;

        &--icon {
          margin-right: 10px;
        }

        &--title {
          font-size: var(--f-xsl);
          margin-bottom: 0;
        }

        &--subtitle {
          font-size: var(--f-xs);
          margin-bottom: 0;
          max-width: 146px;
        }
      }
    }

    &__btn {
      width: 100%;

      span {
        background-color: var(--c-teal);
        border-radius: 4px;
        width: 240px;
        height: 30px;
      }
    }
  }

  @media (min-width: 992px) {
    .mini-dispatch-info {
      display: none;
    }
  }
</style>
