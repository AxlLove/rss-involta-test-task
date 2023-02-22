<template>
    <div class="main__filter-links">
      <nuxt-link :to="{query: ''}" exact active-class="main__filter-link_active"  class="main__filter-link">Все</nuxt-link>
      <nuxt-link :to="{query: {source: 'lenta'}}" exact active-class="main__filter-link_active" class="main__filter-link">Lenta.ru</nuxt-link>
      <nuxt-link :to="{query: {source: 'mos'}}" exact active-class="main__filter-link_active"  class="main__filter-link">Mos.ru</nuxt-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main__filter-links {
  display: flex;
  gap: 16px;
}

.main__filter-link {
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 41, 255, 1);
  cursor: pointer;
  text-decoration: none;
}
.main__filter-link:hover {
  opacity: .8;
}

.main__filter-link_active {
  color: rgba(0, 0, 0, 1)
}

</style>
