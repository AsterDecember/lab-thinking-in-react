import React from 'react'
import {Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

const Routes = () => (
    //switch just use the components of the router that you are using
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
    </Switch>)

export default Routes