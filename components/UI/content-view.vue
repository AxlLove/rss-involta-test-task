<template>
  <div class="view-buttons">
    <button @click="increment"
            class="view-buttons__button"
            v-bind:class="{lineActive: $store.state.postModule.grid, 'view-buttons__button_type_line-unactive': !$store.state.viewModule.grid}"/>
    <button @click="dincrement"
            class="view-buttons__button view-buttons__button_type_grid-unactive"
            v-bind:class="{active: !$store.state.postModule.grid, 'view-buttons__button_type_grid-unactive': $store.state.viewModule.grid}"
    />
  </div>
</template>

<script>

export default {
  name: 'content-view',
  data() {
    return {
      test: true
    }
  }, methods: {
    increment() {
      this.$store.commit('postModule/viewGrid')
    },
    dincrement() {
      this.$store.commit('postModule/viewInline')
    }
  }
}
</script>

<style scoped>
  .view-buttons {
    display: flex;
    gap: 10px;
  }
  .view-buttons__button {
    width: 18px;
    height: 18px;
    border: none;
    cursor: pointer;
    background-position: center;
  }
  .view-buttons__button_type_grid-unactive {
    background-image: url("../../static/grid-icon-unactive.svg");
  }
  .active {
    background-image: url("../../static/grid-icon-active.svg");
  }
  .view-buttons__button_type_line-unactive {
    background-image: url("../../static/line-icon-unactive.svg");
  }
  .lineActive {
    background-image: url("../../static/line-icon-active.svg");
  }
  .view-buttons__button:hover {
    opacity: .8;
  }
</style>
