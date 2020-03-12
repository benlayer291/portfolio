<template>
  <footer class="Footer  wrapper">
    <ul class="Footer__list">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="Footer__listItem  t-para"
      >
        <a :href="link.href" v-bind="link.attrs">
          {{ link.copy }}
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

  data() {
    return {
      links: [
        {
          href: 'mailto:hello@benlayer.com?Subject=Portfolio contact',
          copy: 'Email',
          attrs: {}
        },
        {
          href: 'https://github.com/benlayer291',
          copy: 'Github',
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        },
        {
          href: 'https://www.linkedin.com/in/benlayer291/',
          copy: 'LinkedIn',
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
.Footer {
  padding-top: var(--bsu);
  padding-bottom: var(--bsu-lg);
}

.Footer__listItem {
  display: inline-block;
  margin-right: 10px;
}
</style>
