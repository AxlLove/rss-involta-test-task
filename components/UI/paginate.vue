<template>
  <div class="container">
    <my-paginate
      :page-count = 'getTotalPages'
      :prev-text="null"
      :next-text="null"
      :container-class="'pagination'"
      :click-handler="handleClick"
      :active-class = "'pagination__active-color'"
      :page-link-class = "'pagination__link'"
    />
  </div>
</template>

<script>

export default {
  name: 'paginate',
  methods: {
    handleClick(page) {
      if(page === 1) {
        this.$router.push({path: '/', query: {...this.$route.query}})
      }
      this.$router.push({path: `${page}`, query: {...this.$route.query}})
    }
  },
  computed: {
    getTotalPages() {
      return this.$store.getters["postModule/getMaxPage"]
    },

  },
}

</script>

<style>
  .container {
    display: flex;
    justify-content: center;
  }
  .pagination {
    list-style-type: none;
    display: flex;
    gap: 10px;
    margin: 50px 0 48px;
  }
  .pagination__active-color {
    color: #0029FF;
  }
  .pagination__link {
    font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  }
</style>
