<template>
  <div class="view-buttons">
    <button class="view-buttons__button view-buttons__button_type_line-unactive"/>
    <button class="view-buttons__button view-buttons__button_type_grid-unactive"/>
  </div>
</template>

<script>
export default {
  name: 'content-view',
  data() {
    return {
      test: true
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
  .view-buttons__button_type_line-unactive {
    background-image: url("../../static/line-icon-unactive.svg");
  }
  .view-buttons__button:hover {
    opacity: .8;
  }
</style>
