<template>
  <div>
    <v-header/>
    <div class="nav">
      <feed-filters/>
      <content-view/>
    </div>
    <nuxt/>
  </div>
</template>

<script>
import ContentView from "~/components/UI/content-view";
import FeedFilters from "~/components/UI/feed-filters";

export default {
  name: "default",
  components: {FeedFilters, ContentView},
}
</script>

<style scoped>

.nav {
  margin: 29px 170px 0;
  display: flex;
  justify-content: space-between;
}

</style>
