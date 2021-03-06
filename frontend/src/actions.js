import axios from 'axios'
import { CLEAR_ERRORS, categoryConstants, auditConstants, userConstants } from './constants'

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

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}

export const userActions = {
    login: (user) => async (dispatch) => {
        try {
            dispatch({
                type: userConstants.LOGIN_REQUEST
            })

            const { data } = await axios.post('/api/v1/login', user, config.appJSON)

            dispatch({
                type: userConstants.LOGIN_SUCCESS,
                payload: data.user
            })

        } catch (error) {
            dispatch({
                type: userConstants.LOGIN_FAIL,
                payload: error.response.data.message
            })
        }
    },

    logout: () => async (dispatch) => {
        try {
            dispatch({
                type: userConstants.LOGOUT_REQUEST
            })

            await axios.get('/api/v1/logout')

            dispatch({
                type: userConstants.LOGOUT_SUCCESS
            })

        } catch (error) {
            dispatch({
                type: userConstants.LOGOUT_FAIL,
                payload: error.response.data.message
            })
        }
    },

    loadUser: () => async (dispatch) => {
        try {
            dispatch({
                type: userConstants.LOAD_USER_REQUEST
            })

            const { data } = await axios.get('/api/v1/me/profile', config.appJSON)

            dispatch({
                type: userConstants.LOAD_USER_SUCCESS,
                payload: data.user
            })

        } catch (error) {
            dispatch({
                type: userConstants.LOAD_USER_FAIL,
                payload: error.response.data.message
            })
        }
    },

    getUsers: () => async (dispatch) => {
        try {
            dispatch({
                type: userConstants.ALL_USERS_REQUEST
            })

            const { data } = await axios.get('/api/v1/users/all', config.appJSON)

            dispatch({
                type: userConstants.ALL_USERS_SUCCESS,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: userConstants.ALL_USERS_FAIL,
                payload: error.response.data.message
            })
        }
    },

    getUser: (id) => async (dispatch) => {
        try {
            dispatch({
                type: userConstants.USER_DETAILS_REQUEST
            })

            const { data } = await axios.get(`/api/v1/user/${id}`, config.appJSON)

            dispatch({
                type: userConstants.USER_DETAILS_SUCCESS,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: userConstants.USER_DETAILS_FAIL,
                payload: error.response.data.message
            })
        }
    },

    updateUser: (id, user) => async (dispatch) => {
        try {
            dispatch({
                type: userConstants.UPDATE_USER_REQUEST
            })

            const { data } = await axios.put(`/api/v1/user/update/${id}`, user, config.appJSON)

            dispatch({
                type: userConstants.UPDATE_USER_SUCCESS,
                payload: data.success
            })

        } catch (error) {
            dispatch({
                type: userConstants.UPDATE_USER_FAIL,
                payload: error.response.data.message
            })
        }
    },

    deleteUser: (id) => async (dispatch) => {
        try {
            dispatch({
                type: userConstants.DELETE_USER_REQUEST
            })

            const { data } = await axios.delete(`/api/v1/user/delete/${id}`, config.appJSON)

            dispatch({
                type: userConstants.DELETE_USER_SUCCESS,
                payload: data.success
            })

        } catch (error) {
            dispatch({
                type: userConstants.DELETE_USER_FAIL,
                payload: error.response.data.message
            })
        }
    },

    register: (user) => async (dispatch) => {
        try {
            dispatch({
                type: userConstants.REGISTER_USER_REQUEST
            })

            const { data } = await axios.post(`/api/v1/user/new`, user, config.appJSON)

            dispatch({
                type: userConstants.REGISTER_USER_SUCCESS,
                payload: data.user
            })
        } catch (error) {
            dispatch({
                type: userConstants.REGISTER_USER_FAIL,
                payload: error.response.data.message
            })
        }
    },

    updatePassword: (passwords) => async (dispatch) => {
        try {
            dispatch({
                type: userConstants.UPDATE_PASSWORD_REQUEST
            })

            const { data } = await axios.put('/api/v1/update/password', passwords, config.appJSON)

            dispatch({
                type: userConstants.UPDATE_PASSWORD_SUCCESS,
                payload: data.user
            })
        } catch (error) {
            dispatch({
                type: userConstants.UPDATE_PASSWORD_FAIL,
                payload: error.response.data.message
            })
        }
    },

    forgotPassword: (email) => async (dispatch) => {
        try {

            dispatch({ type: userConstants.FORGOT_PASSWORD_REQUEST })

            const { data } = await axios.post('/api/v1/password/forgot', { email }, config.appJSON)

            dispatch({
                type: userConstants.FORGOT_PASSWORD_SUCCESS,
                payload: data.message
            })

        }
        catch (error) {
            dispatch({
                type: userConstants.FORGOT_PASSWORD_FAIL,
                payload: error.response.data.message
            })
        }
    },

    resetPassword: (token, passwords) => async (dispatch) => {
        try {
            dispatch({
                type: userConstants.NEW_PASSWORD_REQUEST
            })

            const { data } = await axios.put(`/api/v1/password/reset/${token}`, passwords, config.appJSON)

            dispatch({
                type: userConstants.NEW_PASSWORD_SUCCESS,
                payload: data.success
            })

        } catch (error) {
            dispatch({
                type: userConstants.NEW_PASSWORD_FAIL,
                payload: error.response.data.message
            })
        }
    }
}

export const auditActions = {
    getAudits: () => async (dispatch) => {
        try {
            dispatch({
                type: auditConstants.ALL_AUDITS_REQUEST
            })

            const { data } = await axios.get('/api/v1/admin/audits', config.appJSON)

            dispatch({
                type: auditConstants.ALL_AUDITS_SUCCESS,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: auditConstants.ALL_AUDITS_FAIL,
                payload: error.response.data.message
            })
        }
    }
}

export const categoryActions = {
    getCategories: () => async (dispatch) => {
        try {
            dispatch({
                type: categoryConstants.GET_CATEGORIES_REQUEST
            })

            const { data } = await axios.get('/api/v1/categories', config.appJSON)

            dispatch({
                type: categoryConstants.GET_CATEGORIES_SUCCESS,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: categoryConstants.GET_CATEGORIES_FAIL,
                payload: error.response.data.message
            })
        }
    },

    createCategory: (category) => async (dispatch) => {
        try {
            dispatch({
                type: categoryConstants.NEW_CATEGORY_REQUEST
            })

            const { data } = await axios.post(`/api/v1/admin/new/category`, category, config.appJSON)

            dispatch({
                type: categoryConstants.NEW_CATEGORY_SUCCESS,
                payload: data.category
            })
        } catch (error) {
            dispatch({
                type: categoryConstants.NEW_CATEGORY_FAIL,
                payload: error.response.data.message
            })
        }
    },

    deleteCategory: (id) => async (dispatch) => {
        try {
            console.log(id)
            dispatch({
                type: categoryConstants.DELETE_CATEGORY_REQUEST
            })

            const { data } = await axios.delete(`/api/v1/admin/category/${id}`, config.appJSON)

            console.log(data)
            dispatch({
                type: categoryConstants.DELETE_CATEGORY_SUCCESS,
                payload: data.success
            })

        } catch (error) {
            dispatch({
                type: categoryConstants.DELETE_CATEGORY_FAIL,
                payload: error.response.data?.message
            })
        }
    }
}

export const productActions = {}
export const serviceActions = {}