<template>
  <div class="container">
    <my-paginate
      :page-count = '10'
      :prev-text="null"
      :next-text="null"
      :container-class="'pagination'"
      :click-handler="handleClick"
    />
  </div>
</template>

<script>

export default {
  name: 'paginate',
  methods: {
    handleClick(page) {
      this.$router.push({path: `${page}`})
    }
  }
}

</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
  }
  .pagination {
    list-style-type: none;
    display: flex;
    gap: 10px;
  }
</style>
