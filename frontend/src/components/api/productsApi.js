import axios from 'axios';

const config = {
    appJSON: {
        headers: {
            'Content-Type': 'application/json'
        }
    },
    multiformdata: {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
}

export const productsApi = {
    getAllData: async (category) => {
        try {
            const { data } = await axios.get(`/api/v1/products${category ? `?category=${category}` : ``}`, config.appJSON)
        
            return data
        }
        catch (error) {
            return error
        }
    },
    getSingleData: async (id) => {
        try {
            const { data } = await axios.get(`/api/v1/product/${id}`, config.appJSON)
            return data
        }
        catch (error) {
            return error
        }
    },
    createData: async (product) => {
        try {
            const { data } = await axios.post('/api/v1/new/product', product, config.multiformdata)
            return data
        }
        catch (error) {
            return error
        }
    },
    updateData: async (id, product) => {
        try {
            const { data } = await axios.put(`/api/v1/product/${id}`, product, config.multiformdata)
            return data
        }
        catch (error) {
            return error
        }
    },
    deleteData: async (id) => {
        try {
            const { data } = await axios.delete(`/api/v1/product/${id}`, config.appJSON)
            return data
        }
        catch (error) {
            return error
        }
    },
}

