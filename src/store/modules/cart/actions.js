import axios from 'axios'
import Vue from 'vue'


export default {

    async addItemToCart(context, payload) {
        const response = await axios.post('http://127.0.0.1:8000/api/carts/' +
            context.getters.getCartInUser.id, {
                product_id: payload.product_id,
                quantity: payload.quantity,
            },
            context.getters.authHeaders
        )

        const responseData = await response.data;

        console.log(responseData)

        // if (response.status !== 200) {
        //     const error = new Error(responseData.message || "Failed to add item to cart");
        //     throw error;
        // }

        // localStorage.setItem("cart")
        // // localStorage.setItem("cart", responseData.item);
        // context.commit("setCart", {

        // })



    },


    async removeItemFromCart(context, payload) {
        const response = await axios.delete('http://127.0.0.1:8000/api/cart_items/' + payload,
            context.getters.authHeaders
        )
        const responseData = await response.data;
        console.log(responseData)
    }



}