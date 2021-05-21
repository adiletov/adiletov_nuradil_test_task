import {createBrowserHistory} from "history";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "./localStorage";

export const history = createBrowserHistory()

const middleware = [
    thunk
]

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware))
const persistedState = loadState();
const store = createStore(rootReducer, persistedState, enhancer)

store.subscribe(() => {
    saveState({
        auth: store.getState().auth,
    });
});
export default store