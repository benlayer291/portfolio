<template>
  <section class="BaseSection">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'BaseSection'
}
</script>

<style lang="postcss">
@import 'assets/css/settings/vars';

.BaseSection {
  padding-top: var(--bsu);
  padding-bottom: var(--bsu-lg);
}
</style>
