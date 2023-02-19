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
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.05);
    background: #FFFFFF;
    border-radius: 3px;
    padding: 0 0 0 15px;

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
  .input:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
</style>
