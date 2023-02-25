import Parser from "rss-parser";


export const state = () => ({
  lentaData: [],
  mosData: [],
  viewData: [],
  limit: 3

})

export const getters = {
  getViewPosts (store) {
    return store.viewData
  },
  getCurrentPagePosts: (store) => (page) => {
    console.log(page)
    console.log('=>', store.viewData.slice(page, page+3))
    return store.viewData.slice(page, page + store.limit)
  }
}

export const mutations = {
  setLenta(state, posts) {
    state.lentaData = posts;
  },
  setMos(state, posts) {
    state.mosData = posts;
  },
  setFilteredPosts(state, filters) {
    let arr = []
    if (filters.source === 'all' || !filters.source) {
      arr = [...state.lentaData, ...state.mosData];
    }
    if(filters.source === 'mos') {
      arr = state.mosData;
    }
    if(filters.source === 'lenta') {
      arr = state.lentaData;
    }
    if (filters.filter && arr) {
      arr = arr.filter((item)=> item?.content?.toLowerCase().includes(filters.filter.toLowerCase()) || item?.title?.toLowerCase().includes(filters?.filter?.toLowerCase()))
    }
    state.viewData = arr;
  }
 //TODO Попробовать переписать на геттеры
}
const parser = new Parser()
export const actions = {
 async fetchLentaPosts({commit}) {
   let res =  await parser.parseURL('https://lenta.ru/rss/news')

   commit('setLenta', res.items)
 },
  async fetchMosPosts({commit}) {
    let res =  await parser.parseURL('https://www.mos.ru/rss') 
    commit('setMos', res.items)
  }
}
