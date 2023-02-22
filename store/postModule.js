import Parser from "rss-parser";


export const state = () => ({
  lentaData: [],
  dataLoading: false,
  mosData: [],
  viewData: []
})

export const getters = {

}

export const mutations = {
  setLenta(state, posts) {
    state.lentaData = posts;
  },
  setMos(state, posts) {
    state.mosData = posts;
  }

}
const parser = new Parser()
export const actions = {
 async fetchLentaPosts({commit}) {
   let res =  await parser.parseURL('https://lenta.ru/rss/news')
   commit('setLenta', res.items)
 },
  async fetchMosPosts({commit}) {
    let res =  await parser.parseURL('https://www.mos.ru/rss')
    console.log(res)
    commit('setMos', res.items)
  }
}
