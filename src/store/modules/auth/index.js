import getters from './getters';
import mutations from './mutations'
import actions from './actions'


export default {
    state: () => ({
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user')) || {},
    }),

    getters,
    mutations,
    actions,

}