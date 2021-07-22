 import { ref } from 'vue';
 import axios from 'axios';
 import useGlobalVariable from './globalVariable.js'

 export default function useGlobal() {


     const {
         baseUrl,
         image_url,
         token,
         requestAuthHeader
     } = useGlobalVariable()


     const featured_products = ref([]);
     const error = ref(null)
     const loading = ref(false)







     const loadUser = async() => {
         try {
             if (token.length) {
                 const response = await axios.get(baseUrl.value + "auth/user", requestAuthHeader())
                 localStorage.setItem("user", JSON.stringify(response.data))
             }
         } catch (ex) {
             error.value = ex;
             throw new Error(ex);
         } finally {
             loading.value = false;
         }

     }

     const getFeaturedProducts = async() => {

         try {
             const resp = await axios.get(baseUrl.value + 'featured_products', requestAuthHeader())
             featured_products.value = resp.data.data;
         } catch (ex) {
             error.value = ex;
             console.log(ex);
         } finally {
             loading.value = false
         }
     }


     return {
         featured_products,
         getFeaturedProducts,
     }
 }