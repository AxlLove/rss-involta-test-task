<template>
  <section>
    <rss-feed/>
  </section>
</template>

<script>

export default {
  layout: 'default',
  name: "index",
  async fetch({store}) {
    if (!store.state.lentaData && !store.state.mosData) {
      await store.dispatch('postModule/fetchLentaPosts')
      await store.dispatch('postModule/fetchMosPosts')
    }
  },
}
</script>

<style scoped>

</style>
