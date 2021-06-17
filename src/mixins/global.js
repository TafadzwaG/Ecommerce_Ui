import axios from 'axios';

export default {
    data: () => {
        return {

            base_url: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/api/' : 'http://127.0.0.1:8000/api/',
            image_url: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/storage/' : 'http://127.0.0.1:8000/storage/',

        }
    },
    computed: {},

    methods: {
        getFeaturedProducts() {
            this.loading = true;
            axios.get(this.base_url + 'featured_products')
                .then(response => {
                    if (response.status === 200) {
                        console.log(response.data.data);
                        this.featured_products = response.data.data;
                        this.loading = false;
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.loading = false;
                })
        },

        getCategories() {
            this.loading = true;
            axios.get(this.base_url + 'categories')
                .then(response => {
                    if (response.status === 200) {
                        console.log(response.data.data);
                        this.categories = response.data.data;
                        this.loading = false;
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.loading = false;
                })
        },

        getProductCategories() {
            this.loading = true;
            axios.get(this.base_url + 'product_categories')
                .then(response => {
                    if (response.status == 200) {
                        console.log(response.data.data);
                        this.product_categories = response.data.data;
                        this.loading = false;
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.loading = false;
                })
        },
    },
}