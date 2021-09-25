import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import MainPage from "./MainPage";

const AppRouter = () => {
    return (
        <Switch>
            <Route path={'/'} exact component={MainPage} />
            <Redirect to={'/'} />
        </Switch>
    );
};

export default AppRouter;