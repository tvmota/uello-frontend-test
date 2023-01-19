<template>
  <div class="dispatch-info">
    <BtnHelp />

    <DispatchTimeline />

    <div class="dispatch-info__card">
      <h3 class="fw-semibold text-uppercase dispatch-info__card--title">
        Saiu para entrega
      </h3>
      <p class="dispatch-info__card--txt">
        Seu pedido da <span class="fw-semibold">Dafiti</span> saiu para entrega, e será&nbsp;
        <span class="fw-semibold">entregue</span> no <span class="fw-semibold">endereço:</span>
      </p>
    </div>

    <div class="dispatch-info__address d-flex">
      <GeoIcon class="dispatch-info__address--icon" />
      <div>
        <p class="dispatch-info__address--txt">
          Avenida Doutor Gastão Vidigal, 1132
        </p>
        <p class="dispatch-info__address--txt">
          Vila Leopoldina - São Paulo - SP Apto - 1234
        </p>
      </div>
    </div>

    <div class="dispatch-info__time d-flex">
      <ClockIcon class="dispatch-info__time--icon" custom-height="16" custom-width="16" />
      <h4 class="dispatch-info__time--txt fw-semibold">
        horário estimado: 14:45 - 16:58
      </h4>
    </div>

    <div class="d-flex justify-content-center">
      <hr class="dispatch-info--divider" />
    </div>

    <div class="d-flex dispatch-info__delivery-sts justify-content-between">
      <DispatchDonut />
      <ul class="dispatch-info__delivery-sts__list">
        <li>
          <span class="fw-bold">Sua entrega é a nº:&nbsp;</span>
          <span class="fw-semibold dispatch-info__delivery-sts__list--txt-red">19</span>
        </li>
        <li>
          <span class="fw-bold">Entrega Atual: </span>
          <span class="fw-semibold">18</span>
        </li>
        <li>
          <span class="fw-bold">Quantidade de volumes:</span>
          <span class="fw-semibold">3</span>
        </li>
        <li>
          <span class="fw-bold">Motorista: </span>
          <span class="fw-semibold">Vinicius Marques do Nascimento</span>
        </li>
        <li>
          <span class="fw-bold">Horário Estimado: </span>
          <span class="fw-semibold">15:29 - 16:29</span>
        </li>
      </ul>
    </div>

    <DispatchHistory />
  </div>
</template>

<script setup>
  import BtnHelp from "./BtnHelp.vue";
  import DispatchTimeline from "./DispatchTimeline.vue";
  import DispatchDonut from "./DispatchDonut.vue";
  import DispatchHistory from "./DispatchHistory.vue";
  import { GeoIcon, ClockIcon } from "./icons";
</script>

<style lang="scss">
.dispatch-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 300px;
  width: 300px;
  background-color: var(--c-white);
  padding: 20px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: 5px 1px 9px rgba(0, 0, 0, 0.25);

  &__card {
    background-color: var(--c-teal);
    border-radius: 4px;
    color: var(--c-white);
    padding: 10px 14px;
    margin-bottom: 20px;

    &--title {
      font-size: var(--f-sm)
    }

    &--txt {
      font-size: var(--f-xs);
      margin-bottom: 0;
    }
  }

  &__address {
    font-size: var(--f-xsl);
    margin-bottom: 20px;

    &--icon {
      margin-right: 10px;
    }

    &--txt {
      margin-bottom: 0;
    }
  }

  &__time {
    color: var(--c-teal);
    &--txt {
      font-size: var(--f-xsl) !important;
    }

    &--icon {
      margin-right: 10px;
    }
  }

  &__delivery-sts {
    &__list {
      padding: 0;
      margin: 0 0 40px 16px;
      list-style-type: none;
      font-size: var(--f-xs);
      max-width: 160px;

      &--txt-red {
        color: var(--c-red-01);
      }
    }
  }

  &--divider {
    margin: 20px 0;
    width: 80px;
  }
}
@media (max-width: 992px) {
  .dispatch-info {
    display: none;
  }
}
</style>
