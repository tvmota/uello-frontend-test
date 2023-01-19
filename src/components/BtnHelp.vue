<template>
  <button type="button" class="btn btn-help justify-content-between align-items-center">
    <span class="m-auto d-flex align-items-center">
      <HelpIcon :custom-height="20" :custom-width="20" />
      <span class="btn-help--txt text-capitalize">Central de ajuda</span>
    </span>
    <ChevronDownIcon :custom-height="12" :custom-width="20" />
  </button>
</template>

<script setup>
  import { ChevronDownIcon, HelpIcon } from "./icons";
</script>

<style lang="scss">
  .btn-help {
    color: var(--c-white) !important;
    background-color: var(--c-gray) !important;
    font-size: var(--f-xsl) !important;
    display: flex;
    height: 40px;
    margin-bottom: 40px;

    &--txt {
      margin-left: 8px;
    }
  }

  @media (max-width: 992px) {
    .btn-help {
      position: absolute;
      right: 10px;
      bottom: 122px;
      margin-bottom: 6px;

      &--txt {
        margin-left: 0px;
      }

      svg {
        display: none;
      }
    }
  }
</style>
