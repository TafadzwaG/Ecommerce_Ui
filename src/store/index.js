import { createStore } from 'vuex'
import authModule from './modules/auth/index'
import cartModule from './modules/cart/index'
import wishlistModule from './modules/wishlist/index'


export default createStore({
    state: {},
    mutations: {},
    actions: {

        showContext(context) {
            console.log(context)
        },

    },
    getters: {},
    modules: {
        authModule: authModule,
        cartModule: cartModule,
        wishlistModule: wishlistModule,
    }
})