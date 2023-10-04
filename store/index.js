import { defineStore } from 'pinia'

//CREATE STORE FOR FAVORITE PRODUCTS
export const useProductsStore = defineStore('prods', () => {
    const selectedProds = reactive([])

    const getProducts = computed(() => selectedProds)
    function addNewProduct(payload) {
            const existingObj = selectedProds.find((item) => item.id === payload.id);
            if (existingObj) {
                existingObj.count++;
            } else {
                payload.count = 1;
                selectedProds.push(payload);
            }
    }




    return { selectedProds, addNewProduct, getProducts }
})

export const newProducts = defineStore('newProducts', () => {
    const newProducts = ref([])

    const getNewProducts = computed(() => newProducts.value)


    function fetchItems() {
        return fetch('https://fakestoreapi.com/products')
            .then(response => response.json()).then(data => getAllProducts(data))
            .catch(error => {
                console.error('Error fetching items:', error);
                return [];
            });
    }


    function addProduct(payload) {
        newProducts.value.push(payload)
    }
    function getAllProducts(payload) {
        newProducts.value = payload
    }


    return { newProducts,getAllProducts, fetchItems, addProduct, getNewProducts }
})