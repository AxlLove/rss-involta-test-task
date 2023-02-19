<template>
  <main class="main">
    <div class="main__filters">
      <div class="main__filter-links">
        <a class="main__filter-link">Все</a>
        <a class="main__filter-link">Lenta.ru</a>
        <a class="main__filter-link">Mos.ru</a>
      </div>
      <content-view/>
    </div>
  </main>
</template>

<script>
import ContentView from "~/components/UI/content-view";

export default {
  name: "page-content",
  components: {ContentView},
}
</script>

<style scoped>
.main {
  margin: 29px 170px 0;
}
.main__filters{
  display: flex;
  justify-content: space-between;
}
.main__filter-links {
  display: flex;
  gap: 16px;
}

.main__filter-link {
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 41, 255, 1);
  cursor: pointer;
}
.main__filter-link:hover {
  opacity: .8;
}

.main__filter-link_active {
  color: rgba(0, 0, 0, 1)
}
</style>
