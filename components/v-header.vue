<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__title">Список новостей</h1>
      <button @click="test" class="header__reset-button"/>
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
      a: 225,
      searchQuery: ''
    }
  },
  methods: {
    test() {
      console.log(this.a)
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
</style>
