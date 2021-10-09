import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../css/Banner.css'

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div><br />

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div><br />

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div><br />
                <div className="botones">
                    <button type="submit" class="btn btn-outline-primary btn-md">Sign In</button>{"   "}
                    <button type="submit" class="btn btn-outline-primary btn-md"><img src={require(`./gmail.png`).default} /></button>
                </div>
                <p className="forgot-password text-right">
                    Unregistered <Link to={"/sign-up"}>Sign Up?</Link>
                </p>
            </form>
        );
    }
}