export default {


    cartCost: (state, getters, _2, rootGetters) => {
        let totalCost = 0
        getters.getCartInUser.items.forEach(item => {
            totalCost = totalCost + (item.quantity * item.product.price)
        })
        return totalCost
    },

    cart_total_qty: (state, getters, _2, rootGetters) => {
        return getters.getCartInUser.items.length
    },

    cartItems: (state, getters, _2, rootGetters) => {
        return getters.getCartInUser.items
    },

    authHeaders(tate, getters, _2, rootGetters) {
        return {
            headers: {
                Authorization: "Bearer " + getters.token,
                Accept: "application/json",
            }
        }
    }

}