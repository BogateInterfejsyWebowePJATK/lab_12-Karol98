import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login";
import Registration from "./Registration";

export default function App() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/signup" component={Registration} />
                </Switch>
        </Router>
    )
}