import mutations from "./mutations"
import getters from './getters'
import actions from './actions'

export default {

    state: () => ({
        searchItems: null,
    }),
    mutations,
    getters,
    actions,
}