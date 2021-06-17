import { createStore } from 'vuex'
import authModule from './modules/auth/index'
import cartModule from './modules/cart/index'


export default createStore({
    state: {

    },
    mutations: {},
    actions: {},
    modules: {
        authModule: authModule,
        cartModule: cartModule,
    }
})