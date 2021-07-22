import getters from './getters';
import mutations from './mutations'
import actions from './actions'


export default {

    state: () => ({
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {},
    }),

    getters,
    mutations,
    actions,

}