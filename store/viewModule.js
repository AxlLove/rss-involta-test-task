export const state = () => ({
  grid: false,
})

export const getters = {

}

export const mutations = {
  viewGrid(state) {
    state.grid = true;
  },
  viewInline(state) {
    state.grid = false;
  }
}

export const actions = {

}
