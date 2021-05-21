import * as types from '../actionTypes/auth'
import axiosApi from "../../axiosApi";

export const getTokenSuccess = data => ({type: types.GET_TOKEN_SUCCESS, data})
export const getTokenRequest = () => ({type: types.GET_TOKEN_REQUEST})
export const getTokenFailure = error => ({type: types.GET_TOKEN_FAILURE, error})

export const getToken = () => {
    return async (dispatch) => {
        try{
            dispatch(getTokenRequest())
            const res = await axiosApi('/api/Tenants')
            dispatch(getTokenSuccess(res.data))
        }catch (e) {
            dispatch(getTokenFailure(e))
        }
    }
}