<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__title">Список новостей</h1>
      <button @click="addQuery" class="header__reset-button"/>
    </div>
    <search-input v-model="searchQuery"/>
  </header>
</template>

<script>
import MyInput from "~/components/UI/search-input";
import SearchInput from "~/components/UI/search-input";
export default {
  name: 'v-header',
  components: {SearchInput, MyInput},
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    addQuery(value) {

    },
  },
  watch:  {
    searchQuery(newQuery) {
      console.log(this.$route.query)
      this.$router.push({query: {...this.$route.query, filter: newQuery}});
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    margin: 0 170px;
    padding: 36px 0;
    border-bottom: 1px solid #E5E5E5;
  }
  .header__container {
    display: flex;
    gap: 30px;
    align-items: center;
  }
  .header__title {
    font-size: 36px;
    line-height: 41px;
  }
  .header__reset-button {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.05);
    border: none;
    background-color: #FFFFFF;
    background-image: url("../static/reset-button-icon.svg");
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .header__reset-button:hover {
    opacity: 0.8;
  }

  @media (max-width: 1080px) {
  .header {
    margin: 0px 90px 0;
  }
  .header__title {
    font-size: 32px;
    line-height: 41px;
  }
  .header__container {
    display: flex;
    gap: 20px;
    align-items: center;
  }
}
@media (max-width: 840px) {
  .header {
    margin: 36px 20px 0;
  }
  .header__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
  .header {
    flex-direction: column;
    align-items: center;
    gap: 23px;
  }
  .header__container {
    justify-content: space-between;
    width: 100%;
  }
}
</style>
