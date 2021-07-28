import axios from 'axios'
export default {

    async searchProducts(context, payload) {

        try {
            const response = await axios.get('http://127.0.0.1:8000/api/search_products', {
                    params: payload,
                },
                context.getters.authHeaders
            )

            const responseData = response.data.data;

            localStorage.setItem("searchItems", JSON.stringify(responseData))
            context.commit('setSearchItems', {
                searchItems: localStorage.getItem("searchItems")
            })
        } catch (error) {
            throw new Error(error)

        } finally {}

    }

}