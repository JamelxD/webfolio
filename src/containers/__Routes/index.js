import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
import PorfolioGridCro from "../PorfolioGridCro";
import ContactPage from "../ContactPage";

// Normal Route
import PrivateRoute from "../_PrivateRoute";
import PublicRoute from "../_PublicRoute";

export default function Routes() {
    return (
        <Switch>
            <PublicRoute
                exact
                path="/"
                component={HomePage}
            />
            <PrivateRoute
                path="/home"
                component={HomePage}
            />
            <PrivateRoute
                path="/portfolio"
                component={PorfolioGridCro}
            />
            <PrivateRoute
                path="/contact"
                component={ContactPage}
            />
            {/* <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} /> */}
            <Route exact component={HomePage} />
        </Switch>
    );
}
