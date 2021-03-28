import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route Setting
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import PorfolioGridCro from "../PorfolioGridCro";
import ServiceDetails from "../ServiceDetails";
import ProjectDetails from "../ProjectDetails";
import ErroPage from "../404";
import ContactPage from "../ContactPage";
import BlogPage from "../BlogPage";
import BlogDetailsFull from "../BlogFull";
import BlogDetailsPage from "../BlogDetailsPage";
import BlogDetailsFullwidth from "../BlogDetailsFullwidth";

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
                path="/about"
                component={AboutPage}
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
