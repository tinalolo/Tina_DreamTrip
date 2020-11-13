import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default new Vuex.Store({
  state: {
    id: '',
    account: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    birth: '',
    cart: [],
    wishlist: []
  },
  mutations: {
    login (state, data) {
      state.account = data
    },
    logout (state) {
      state.id = ''
      state.account = ''
      state.name = ''
      state.email = ''
      state.phone = ''
      state.address = ''
      state.birth = ''
    },
    patchmemberprofile (state, data) {
      state.id = data
    },
    patchname (state, data) {
      state.name = data
    },
    patchemail (state, data) {
      state.email = data
    },
    patchphone (state, data) {
      state.phone = data
    },
    patchaddress (state, data) {
      state.address = data
    },
    patchbirth (state, data) {
      state.birth = data
    },
    addCart (state, data) {
      state.cart.push(data)
    },
    delCart (state, index) {
      state.cart.splice(index, 1)
    },
    addWishlist (state, data) {
      state.wishlist.push(data)
    },
    delWishlist (state, index) {
      state.wishlist.splice(index, 1)
    }
  },
  getters: {
    id (state) {
      return state.id
    },
    account (state) {
      return state.account
    },
    name (state) {
      return state.name
    },
    email (state) {
      return state.email
    },
    phone (state) {
      return state.phone
    },
    address (state) {
      return state.address
    },
    birth (state) {
      return state.birth
    },
    cart (state) {
      return state.cart
    },
    wishlist (state) {
      return state.wishlist
    }
  },
  plugins: [createPersistedState()]
})
