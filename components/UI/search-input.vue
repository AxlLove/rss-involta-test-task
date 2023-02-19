<template>
  <div class="input__container">
    <input :value="value" @input="updateInput" class="input">
    <div class="icon"/>
  </div>
</template>

<script>
export default {
  name: 'search-input',
  props: {
    value: [String, Number]
  },
  methods: {
    updateInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>
  .input__container {
    position: relative;
    width: 321px;
    height: 40px;
  }
  .input {
    width: 100%;
    height: 100%;
    border: none;
    opacity: 0.5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.05);
    background: #FFFFFF;
    border-radius: 3px;

  }
  .icon {
    position: absolute;
    width: 20px;
    height: 20px;
    background: url("../../static/input-icon.svg");
    right: 13px;
    top: 10px;
    bottom: 10px;
  }
  input:focus {
    border: 1px solid black;
    opacity: .3;
  }
</style>
