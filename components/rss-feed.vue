<template>
  <ul class="rss-feed">
    <grid-card v-for="card in cards" :card="card" key="card.id"/>
  </ul>
</template>

<script>
import {mockMos, mockFeed} from "assets/js/mock";
export default {
  name: "rss-list",
  data() {
    return {
      card: mockMos,
      cards: mockFeed()
    }
  }
}
</script>

<style scoped>
  .rss-feed {
    margin: 28px 170px 0;
  }
</style>
