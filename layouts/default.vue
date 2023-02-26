<template>
  <div class="main">
    <v-header/>
    <div class="nav">
      <feed-filters/>
      <content-view/>
    </div>
    <nuxt/>
    <Paginate/>
  </div>
</template>

<script>
import ContentView from "~/components/UI/content-view";
import FeedFilters from "~/components/UI/feed-filters";
import Paginate from "~/components/UI/paginate";

export default {
  name: "default",
  components: {FeedFilters, ContentView, Paginate},

}
</script>

<style scoped>
.main {
  max-width: 1400px;
  min-width: 425px;
  margin: auto;
}
.nav {
  margin: 29px 170px 0;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1080px) {
  .nav {
    margin: 29px 90px 0;
  }
}
@media (max-width: 840px) {
  .nav {
    margin: 20px 20px 0;
  }
}
</style>
