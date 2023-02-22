<template>
  <rss-feed/>
</template>

<script>
import ContentView from "~/components/UI/content-view";

export default {
  layout: 'default',
  name: "index",
  data () {
    return {

    }
  },
  components: {
    ContentView
  },
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
