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

export const servicesApi = {
    getAllData: async (category) => {
        try{
            const {data} = await axios.get(`/api/v1/services${category ? `?category=${category}` : ``}`, config.appJSON)
            return data
        }
        catch(error){
            return error
        }
    },
    getSingleData: async (id) => {
        try{
            const {data} = await axios.get(`/api/v1/service/${id}`, config.appJSON)
            return data
        }
        catch(error){
            return error
        }
    },
    createData: async (service) => {
        try{
            const {data} = await axios.post('/api/v1/new/service', service, config.multiformdata)
            return data
        }
        catch(error){
            return error
        }
    },
    updateData: async (id, service) => {
        try{
            const {data} = await axios.put(`/api/v1/service/${id}`, service, config.multiformdata)
            return data
        }
        catch(error){
            return error
        }
    },
    deleteData: async (id) => {
        try{
        const {data} = await axios.delete(`/api/v1/service/${id}`, config.appJSON)
            return data
        }
        catch(error){
            return error
        }
    },
}
