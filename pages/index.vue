<template>
  <main class="wrapper">
    <BaseSection>
      <h3 class="t-para">Architect —ing</h3>
      <h3 class="t-para">Developer —ing</h3>
      <h3 class="t-para">Lead —ing</h3>
      <p class="t-align-right">
        at
        <a href="https://studiorotate.com/" target="_blank" rel="noopener">
          Rotate°
        </a>
      </p>
    </BaseSection>
    <BaseSection>
      <p>Former Chemistry Teacher</p>
      <p>Previously at TuiMedia and General Assembly</p>
    </BaseSection>
  </main>
</template>

<script>
import BaseSection from '@/components/BaseSection'

export default {
  name: 'Home',

  components: {
    BaseSection
  }
}
</script>
