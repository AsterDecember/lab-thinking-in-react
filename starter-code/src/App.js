import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import {Link,NavLink} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <nav style={{display:"flex"}}>
                    <NavLink
                        exact
                        activeStyle={{color:"red"}}
                        to="/">Home</NavLink>
                    <NavLink
                        exact
                        activeClassName="activo"
                        to="/login">Login</NavLink>
                </nav>
                <Routes />
            </div>
        );
    }
}

export default App;
