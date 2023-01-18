<template>
  <aside class="app__sidebar d-flex justify-content-center">
    <img
      alt="header_logo"
      class="app__sidebar--logo object-fit-cover"
      src="@/assets/images/logo.svg"
    />
  </aside>
</template>

<style lang="scss">
.app {
  &__sidebar {
    background-color: var(--c-red-01);
    height: 100%;
    left: 0;
    padding: 12px;
    position: absolute;
    top: 0;
    transition: width .2s ease;
    opacity: 0;
    width: 0;

    &--logo {
      height: 46px;
      width: 46px;
    }
  }
}

@media (min-width: 992px) {
  .app__sidebar {
    opacity: 1;
    width: 70px;
  }
}
</style>
