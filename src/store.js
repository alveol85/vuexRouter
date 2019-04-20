import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const getters = {
  count(state) {
    return state.count;
  },
  navBar(state) {
    return state.navBar;
  }
};

const navBar = {
    imageOne: "oneBlack.png",
    imageTwo: "two.png",
    imageThree: "three.png",
    imageFour: "four.png",
    imageFive: "five.png",
    imageSix: "six.png",
    activeLineOne: false,
    activeLineTwo: false,
    activeLineThree: false,
    activeLineFour: false,
    activeLineFive: false
}

export default new Vuex.Store({
  state: {
    count: 5,
    navBar
  },
  mutations: {
  },
  actions: {

  },
  getters
})
