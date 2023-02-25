<template>
  <div class="card">
    <h3 class="card__title">{{ card.title }}</h3>
    <p class="card__description">{{ card.content }}</p>
    <a class="card__link" :href="card.link" target="_blank">Подробнее</a>
    <div class="card__container">
      <a class="card__source-link" :href="getLink" target="_blank">{{ getGetSourceLink }}</a>
      <p class="card__date">{{ getData }}</p>
    </div>
  </div>
</template>

<script>
  import {REG_EXP} from '@/assets/js/constants';
export default {
  name: "grid-card",
  props: {
    card: {
      type: Object,
      required: true
    },
  },
computed: {
  getData: function() {
    const ms = Date.parse(this.card.pubDate)
    let date = new Date(ms)
    return `${date.getDate()}.${date.getMonth()+ 1 }.${date.getFullYear()}`
  },
  getGetSourceLink: function () {
      const res = this.card.link.match(REG_EXP)[1]
      return 'www.' + res
    },
    getLink: function () {
      return 'https://' + this.card.link.match(REG_EXP)[1] + '/'
    }
}
}
</script>

<style scoped>
.card {
  width: 520px;
  padding: 30px 31px 0 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
}
.card__title {
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  color: #0029FF;
}
.card__description {
  height: 60px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 25px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #000000;
}
.card__link {
  display: block;
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.card__container {
  margin-top: 19px;
  padding-bottom: 16px;
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
@media (max-width: 1280px) {
.card {
  width: 382px;
}
}
@media (max-width: 840px) {
  .card {
    width: 382px;
    padding: 30px 22px 0;
  }
}
</style>
