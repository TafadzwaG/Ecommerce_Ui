import getters from './getters';
import mutations from './mutations'
import actions from './actions'


export default {

    state: () => ({
        cart: localStorage.getItem('user.cart') ? JSON.parse(localStorage.getItem('user.cart')) : {},
    }),

    getters,
    mutations,
    actions,

}