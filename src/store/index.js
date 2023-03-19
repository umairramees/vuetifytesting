import { createStore } from 'vuex'

export default createStore({
  state: {
    originw: 1600,
    originy: 768,
    ratio: '16/9',
    width: 2000,
    height: 768,
    percent: 100,
    src: 'CEEA3A26-BE39-4E33-ADFE-091167F8E12F.jpg',
    zoom: 3
  },
  getters: {
    ratio: state => {
      return state.ratio
    },
    zoom: state => {
      return state.zoom
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
      state.zoom += 1;
      state.percent += 25;
      state.width = state.originw * state.percent / 100;
      state.height = state.originy * state.percent / 100;
    },
    zoominPercent (state) {
      state.zoom -= 1;
      state.percent -= 25;
      state.width = state.originw * state.percent / 100;
      state.height = state.originy * state.percent / 100;
    },
  },
  actions: {
    setWidth ({ commit }) {
      commit('setWidth', 100)
    },
    getPercent ({ commit }) {
      console.log('get percent')
    }
  },
  modules: {
  }
})
