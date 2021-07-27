import { createStore } from 'vuex'
import authModule from './modules/auth/index'
import cartModule from './modules/cart/index'
import wishlistModule from './modules/wishlist/index'
import searchModule from './modules/search/index'
import axios from 'axios'


export default createStore({
    state: {
        searchItems: [],
    },
    mutations: {

    },
    actions: {

        showContext(context) {
            console.log(context)
        },



    },
    getters: {

    },
    modules: {
        authModule,
        cartModule,
        wishlistModule,
        searchModule
    }
})