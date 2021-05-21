import * as types from '../actionTypes/applicationTypes'

const initialState = {
    apps: [],
    loading: false,
    error: null,
    loadingApp: false,
    errorApp: null,
    statuses: [],
    users: [],
    user: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_APPS_SUCCESS:
            return {...state, error: null, loading: false, apps: action.data}
        case types.GET_APPS_REQUEST:
            return {...state, loading: true}
        case types.GET_APPS_FAILURE:
            return {...state, loading: false, error: action.error}
        case types.CREATE_APP_SUCCESS:
            return {...state, loading: false, error: null}
        case types.CREATE_APP_FAILURE:
            return {...state, loading: false, error: action.error}
        case types.CREATE_APP_REQUEST:
            return {...state, loading: true}
        case types.GET_STATUS_SUCCESS:
            return {...state, statuses: action.data}
        case types.GET_USERS_SUCCESS:
            return {...state, users: action.data}
        case types.GET_APP_SUCCESS:
            return {...state, loadingApp: false, errorApp: null, user: action.data}
        case types.GET_APP_REQUEST:
            return {...state, loadingApp: true}
        case types.GET_APP_FAILURE:
            return {...state, loadingApp: false, errorApp: action.data}
        default:
            return state
    }
}

export default reducer