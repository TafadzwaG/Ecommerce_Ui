import { ref } from "vue";

export default function useGlobalVariable() {

    const baseUrl = ref('http://127.0.0.1:8000/api/')
    const image_url = ref('http://127.0.0.1:8000/storage/')
    const token = localStorage.getItem('token');



    const requestAuthHeader = () => {
        return {
            headers: {
                Authorization: "Bearer " + token,
                Accept: "application/json",
            }
        }

    }

    const requestHeader = () => {
        return {
            headers: {
                Accept: "application/json"
            },
        };
    }

    return {
        baseUrl,
        image_url,
        token,
        requestAuthHeader
    }
}