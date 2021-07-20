import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import useGlobalVariable from './globalVariable.js'

export default function useFetchProducts() {


    const {
        baseUrl,
        requestAuthHeader
    } = useGlobalVariable();


    const loading = ref(false)
    const error = ref(null)
    const products = ref([])

    const getProducts = async() => {
        try {
            const response = await axios.get(baseUrl.value + 'products', requestAuthHeader())
            products.value = response.data.data

        } catch (ex) {
            error.value = ex;
            throw new Error(ex);

        } finally {
            loading.value = false;
        }

    }

    return {
        loading,
        error,
        products,
        getProducts
    }


}