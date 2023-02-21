<template>
    <div class="main__filter-links">
      <a class="main__filter-link">Все</a>
      <a class="main__filter-link">Lenta.ru</a>
      <a class="main__filter-link">Mos.ru</a>
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
}
.main__filter-link:hover {
  opacity: .8;
}

.main__filter-link_active {
  color: rgba(0, 0, 0, 1)
}

</style>
