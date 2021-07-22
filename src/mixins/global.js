import axios from 'axios';

import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
    data: () => {
        return {

            base_url: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/api/' : 'http://127.0.0.1:8000/api/',
            image_url: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/storage/' : 'http://127.0.0.1:8000/storage/',

            token: localStorage.getItem('token'),


        }
    },
    computed: {},

    methods: {

        ...mapMutations([" setUser"]),


        // Important Methods
        timeFromDate(string) {
            let dat = new Date(string)
            var currentDate = new Date();

            if (currentDate.getDate() === dat.getDate()) {
                return "Today at " + dat.toLocaleTimeString()
            } else if ((currentDate.getDate() - 1) === dat.getDate()) {
                return "Yesterday at " + dat.toLocaleTimeString()
            } else {
                return dat.getDate().toString() + "-" + (dat.getMonth() + 1).toString() + " " + dat.toLocaleTimeString()
            }
        },

        formatDate(date) {
            var d = new Date(date)
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            return d.getDate() + " " + months[d.getMonth()] + ' ' + d.getFullYear()
        },



        goBack() {
            this.$router.back();
        },

        requestHeader() {
            return {
                headers: {
                    Accept: "application/json"
                },
            };
        },
        requestAuthHeader() {
            return {
                headers: {
                    Authorization: "Bearer " + this.token,
                    Accept: "application/json",
                },
            };
        },



        loadUser() {
            if (this.token.length) {
                axios
                    .get(this.base_url + "auth/user", this.requestAuthHeader())
                    .then(response => {
                        console.log(response.data);
                        this.$store.state.user = response.data
                        this.user = response.data;
                        localStorage.setItem("user", JSON.stringify(response.data));
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {

                this.$router.push("/login")

            }
        },

        logout() {
            if (this.$route.path === "/login") {
                localStorage.clear();
                location.reload();
            } else {
                this.$router.push("/login").then(() => {
                    localStorage.clear();
                });
            }
        },



        //API Calls
        getFeaturedProducts() {
            this.loading = true;
            axios.get(this.base_url + 'featured_products', this.requestAuthHeader())
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
            axios.get(this.base_url + 'categories', this.requestAuthHeader())
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




        getProducts() {
            this.loading = true;
            axios.get(this.base_url + 'products', this.requestAuthHeader())
                .then(response => {

                    if (response.status == 200) {
                        console.log(response.data.data);
                        this.products = response.data.data;
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