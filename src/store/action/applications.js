import * as types from '../actionTypes/applicationTypes'
import axiosApi from "../../axiosApi";

const getAppsSuccess = data => ({type: types.GET_APPS_SUCCESS, data})
const getAppsRequest = () => ({type: types.GET_APPS_REQUEST})
const getAppsFailure = error => ({type: types.GET_APPS_FAILURE, error})

const getAppSuccess = data => ({type: types.GET_APP_SUCCESS, data})
const getAppRequest = () => ({type: types.GET_APP_REQUEST})
const getAppFailure = error => ({type: types.GET_APP_FAILURE, error})

const getStatusSuccess = data => ({type: types.GET_STATUS_SUCCESS, data})
const getUserSuccess = data => ({type: types.GET_USERS_SUCCESS, data})


const createAppSuccess = () => ({type: types.CREATE_APP_SUCCESS})
const createAppRequest = () => ({type: types.CREATE_APP_REQUEST})
const createAppFailure = error => ({type: types.CREATE_APP_FAILURE, error})

export const getApps = () => {
    return async (dispatch) => {
        try {
            dispatch(getAppsRequest())
            const res = await axiosApi.get('/odata/tasks')
            dispatch(getAppsSuccess(res.data))
        } catch (e) {
            dispatch(getAppsFailure(e))
        }
    }
}

export const getApp = (id) => {
    return async (dispatch) => {

        try {
            dispatch(getAppRequest())
            const res = await axiosApi.get(`/Tasks/${id}` )
            dispatch(getAppSuccess(res.data))
        } catch (e) {
            dispatch(getAppFailure(e))
        }
    }
}

export const createApp = (data) => {
    return async (dispatch) => {
        try {
            dispatch(createAppRequest())
            const res = await axiosApi.post('/Tasks', data)
            dispatch(getApps())
            dispatch(createAppSuccess())
            return res.data
        } catch (e) {
            dispatch(createAppFailure(e))
        }
    }
}

export const getStatuses = () => {
    return async (dispatch) => {
        try {
            const res = await axiosApi.get('/Statuses')
            dispatch(getStatusSuccess(res.data))
        } catch (e) {
            console.error(e)
        }
    }
}

export const getUsers = () => {
    return async (dispatch) => {
     try{
         const res = await axiosApi.get('/Users')
         dispatch(getUserSuccess(res.data))
     }catch (e) {
         console.error(e)
     }
    }
}

