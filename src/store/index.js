import { createStore } from 'vuex'

export default createStore({
  state: {
    originw: 1600,
    originy: 768,
    ratio: '16/9',
    width: 2000,
    height: 768,
    percent: 100,
    src: 'A03359C5-9C11-489B-B50E-19C8F0AD8950.jpg'
  },
  getters: {
    ratio: state => {
      return state.ratio
    },
    src: state => {
      return state.src
    },
    width: state => {
      return state.width
    },
    height: state => {
      return state.height
    },
    percent: state => {
      return state.percent
    }
  },
  mutations: {
    setRatio (state, ratio) {
      state.ratio = ratio
    },
    setWidth (state, width) {
      state.width = width
    },
    setRatio (state, ratio) {
      state.ratio = ratio
    },
    setSrc (state, src) {
      state.src = src
    },
    zoomoutPercent (state) {
      state.percent += 25;
      state.width = state.originw * state.percent / 100;
      state.height = state.originy * state.percent / 100;
    },
    zoominPercent (state) {
      state.percent -= 25;
      state.width = state.originw * state.percent / 100;
      state.height = state.originy * state.percent / 100;
    },
  },
  actions: {
    setWidth ({ commit }) {
      console.log('ok')
      commit('setWidth', 100)
    },
    getPercent ({ commit }) {
      console.log('get percent')
    }
  },
  modules: {
  }
})
