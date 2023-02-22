<template>
  <ul class="rss-feed rss-feed_type_grid">
    <grid-card v-if="!$store.state.viewModule.grid" v-for="card in cards" :card="card" key="card.id"/>
    <image-card v-else v-for="card in cards" :card="card" key="card.id"/>
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
  .rss-feed_type_grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  @media (max-width: 1080px) {
  .rss-feed {
    margin: 29px 90px 0;
  }
}
  @media (max-width: 840px) {
    .rss-feed {
      margin: 29px 20px 0;
    }
  }
</style>
