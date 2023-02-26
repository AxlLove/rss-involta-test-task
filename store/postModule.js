import Parser from "rss-parser";



export const state = () => ({
  lentaData: [],
  mosData: [],
  viewData: [],
  limit: 0,
  grid: true,
  maxPage: 0
})

export const getters = {
  getViewPosts (store) {
    return store.viewData
  },
  getCurrentPagePosts: (store) => (page = 1) => {
    if (page === 1) {
      return store.viewData.slice(page, page + store.limit)
    }
    const currentPage = page * store.limit
    return store.viewData.slice(currentPage, currentPage + store.limit)
  },
  getLimit (store) {
    return !store.grid? 4 : 3
  },
  getMaxPage(store, getters) {
    return Math.ceil(store.viewData.length / getters.getLimit)
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
  },
  viewGrid(state) {
    state.grid = true;
  },
  viewInline(state) {
    state.grid = false;
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
