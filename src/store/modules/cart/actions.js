import axios from 'axios'
import Vue from 'vue'


export default {

    async addItemToCart(context, payload) {

        try {

            const response = await axios.post('http://127.0.0.1:8000/api/carts/' +
                context.getters.getCartInUser.id, {
                    product_id: payload.product_id,
                    quantity: payload.quantity,
                },
                context.getters.authHeaders
            )
            const responseData = response.data.data;
            console.log(responseData)

            localStorage.setItem('cart', JSON.stringify(responseData))

            context.commit("setCart", {
                cart: responseData
            })

        } catch (err) {

            throw new Error(err);

        } finally {
            context.dispatch("reloadUser");
        }

    },


    async removeItemFromCart(context, payload) {

        try {
            const response = await axios.delete('http://127.0.0.1:8000/api/cart_items/' + payload,
                context.getters.authHeaders
            )
            const responseData = response.data;
            console.log(responseData)
        } catch (err) {
            console.log(err);
            throw new Error(err)
        } finally {
            context.dispatch("reloadUser");
        }

    }



}