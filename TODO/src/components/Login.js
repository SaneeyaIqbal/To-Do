import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state
    }

    render() {
        return (
            <div className="main">
                <div className="form">
                    <input className="input" type="email" placeholder="UserName or Email"/><br />
                    <input className="input" type="password" placeholder="Password" /> <br />
                    <button className="button" type="submit">LogIn</button> <br />
                    <Link to="/signin">New User? Register Here</Link>
                </div>
            </div>

        )
    }
}

export default Login;