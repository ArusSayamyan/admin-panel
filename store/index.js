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