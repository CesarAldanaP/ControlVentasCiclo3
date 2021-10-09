import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Componentes/Login/Login.component'
import SignUp from './Componentes/Sign-up/Signup.component'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function LoginG() {
    return (
        <div>
            <Router>
                <div className="Login">
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Switch>
                                <Route exact path='/' component={Login}/>
                                <Route path="/sign-in" component={Login}/>
                                <Route path="/sign-up" component={SignUp}/>
                            </Switch>
                        </div>
                    </div>
                </div></Router>
        </div>
    )
}

export default LoginG;