<template>
  <section>
    <rss-feed/>
  </section>
</template>

<script>


export default {
  components: {},
  layout: 'default',
  name: "id",
  async fetch({store}) {
    if (store.getters['postModule/getViewPosts'].length === 0) {
      await store.dispatch('postModule/fetchLentaPosts')
      await store.dispatch('postModule/fetchMosPosts')
    }
  },
}

</script>

<style scoped>

</style>
