<template >
  <ul v-if="getContent.length > 1" class="rss-feed rss-feed_type_grid" >
    <li :class="{li: $store.state.viewModule.grid}" v-for="card in getContent">
      <grid-card v-if="!$store.state.viewModule.grid" :key="card.id"  :card="card" />
      <image-card v-else  :key="card.id" :card="card" />
    </li>
  </ul>
  <h2 v-else class="rss-feed__nt">Ничего не найдено</h2>
</template>

<script>
import {mockMos, mockFeed} from "assets/js/mock";
export default {
  name: "rss-list",
  data() {
    return {
      cards: mockFeed(),
      result: this.params
    }
  },
  computed: {
    getContent() {
      return this.$store.getters["postModule/getViewPosts"]
    },
  },
  watch: {
    '$route.query': {
      deep: true,
      handler(newQuery) {
        this.$store.commit('postModule/setFilteredPosts', newQuery)
      }
    }
  },
  mounted() {
    this.$store.commit('postModule/setFilteredPosts', this.$route.query)
  }
}
</script>

<style scoped>
  .rss-feed {
    margin: 28px 170px 0;
    list-style-type: none;
  }
  .rss-feed_type_grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .li {
    width: 100%;
  }
  .rss-feed__nt {
    width: fit-content;
    margin: 120px auto;

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
