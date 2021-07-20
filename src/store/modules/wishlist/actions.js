import axios from 'axios'


export default {

    async addProductToWishlist(context, payload) {

        const response = await axios.post('http://127.0.0.1:8000/api/wishlists/' + context.getters.getWishListInUser.id, {
            product_id: payload.product_id,
        }, {
            headers: {
                Authorization: "Bearer " + context.getters.token,
                Accept: "application/json",
            }
        })


        const responseData = await response.data;


        if (response.status !== 200) {
            const error = new Error(responseData.message || "Failed to add item to wishlist");
            throw error;
        }

    }

}