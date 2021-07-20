import getters from './getters';
import mutations from './mutations'
import actions from './actions'


export default {

    state: () => ({
        user: localStorage.getItem('user') ?
            JSON.parse(localStorage.getItem('user')) : {},
        token: localStorage.getItem('token') || '',
        cart: localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : {},
    }),

    getters,
    mutations,
    actions,

}