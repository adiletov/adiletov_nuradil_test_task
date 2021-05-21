import React, {useEffect} from "react";
import MainLayout from "./hoc/MainLayout";
import {Switch, Route} from "react-router-dom";
import {routers} from "./routers";
import {getToken} from "./store/action/authToken";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const {loading, error} = useSelector(state => state.auth.loading)
    useEffect(() => {
        dispatch(getToken())
    }, [])
    if (loading){
        return <div>...loading</div>
    }
    return (
        <div className="app">
            <MainLayout>
                <React.Suspense fallback={false}>
                    <Switch>
                        {routers.map(el => {
                            return <Route exact key={el.path} path={el.path} component={el.component}/>
                        })}
                    </Switch>
                </React.Suspense>
            </MainLayout>
        </div>
    );
}

export default App;
