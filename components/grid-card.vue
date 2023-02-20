<template>
  <div class="card">
    <h3 class="card__title">{{ card.title }}</h3>
    <p class="card__description">{{ card.description }}</p>
    <a class="card__link" :href="card.link" target="_blank">Подробнее</a>
    <div class="card__container">
      <a class="card__source-link" :href="card.type" target="_blank">{{ card.type }}</a>
      <p class="card__date">{{ card.pubDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "grid-card",
  props: {card: Object},
}
</script>

<style scoped>
.card {
  width: 520px;
  padding: 30px 31px 16px 30px;
}
.card__title {
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  color: #0029FF;
}
.card__description {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #000000;
}
.card__container {
  display: flex;
  justify-content: space-between;
}
.card__source-link {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #DCDCDC;
}
.card__date {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #DCDCDC;
}
</style>
