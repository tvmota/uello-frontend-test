<template>
  <header class="app__header">
    <div class="app__header__content">
      <h2 class="app__header__content--text fs-5 text-uppercase fw-semibold">
        Fulano de tal da silva
      </h2>
      <img
        alt="header_logo"
        class="app__header__content--logo object-fit-cover"
        src="@/assets/images/logo.svg"
      />
    </div>
  </header>
</template>

<style lang="scss">
  .app {
    &__header {
      grid-area: 1 / 1 / 2 / 2;
      padding: 0 20px;

      &__content {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;

        &--logo {
          height: 0;
          width: 0;
        }

        &--text {
          color: var(--c-red-01);
          border-left: 3px solid var(--c-red-01);
          padding-left: 8px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .app {
      &__header {
        background-color: var(--c-red-01);
        padding: 0 12px;

        &__content {
          justify-content: flex-start;

          &--logo {
            height: auto;
            width: 46px;
          }

          &--text {
            display: none;
          }
        }
      }
    }
  }
</style>
