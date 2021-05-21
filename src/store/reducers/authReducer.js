import * as types from '../actionTypes/auth'

const initialState = {
    auth: null,
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TOKEN_SUCCESS:
            return {...state, auth: action.data, loading: false, error: null}
        case types.GET_TOKEN_REQUEST:
            return {...state, loading: true}
        case types.GET_TOKEN_FAILURE:
            return {...state, loading: false, error: action.error, auth: null}
        default:
            return state
    }
}
export default reducer