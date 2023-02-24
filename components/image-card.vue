<template>
    <div class="card">
        <div class="card__content">
            <img class="card__image" :src="card.enclosure.url" :alt="card.title">
            <div>
                <h3 class="card__title">{{ card.title }}</h3>
                <p class="card__description">{{ card.content }}</p>
            </div>
        </div>
      <div class="card__container">
        <a class="card__source-link" :href="getLink" target="_blank">{{ getGetSourceLink }}</a>
        <p class="card__date">{{ getData }}</p>
      </div>
    </div>
  </template>

  <script>
  import {REG_EXP} from '@/assets/js/constants';
  export default {
    name: "image-card",
    data() {
      return {
        // reg: sourceLink;
      }
    },
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
      return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
    },
    getGetSourceLink: function () {
      const res = this.card.link.match(REG_EXP)[1]
      return 'www.' + res
    },
    getLink: function () {
      return 'https://' + this.card.link.match(REG_EXP)[1] + '/'
    }
    //TODO вынести
  }
  }
  </script>

  <style scoped>
  .card {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
  }
  .card__content {
    padding: 30px 31px 0 30px;
    display: flex;
    gap: 30px;
  }
  .card__image {
    width: 200px;
    height: 100px;
    object-fit: cover;
    object-position: center;
  }
  .card__title {
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    color: #0029FF;
  }
  .card__description {
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
    margin-top: 30px;
    padding: 4px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FCFCFC;
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
  @media (max-width: 840px) {
    .card__content {
      flex-direction: column;
      align-items: center;
    }
    .card__image {
      width: 338px;
      height: 166px;
    }
    .card__content {
      padding: 20px 20px;
    }
  }
  </style>
