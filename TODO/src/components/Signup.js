import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state
    }

    render() {
        return (
            <div className="main">
                <div className="form">
                    <input className="input" type="email" placeholder="Enter Your Email"/><br />
                    <input className="input" type="password" placeholder="Enter Your Password"/><br />
                    <input className="input" type="password" placeholder="Enter Your Password Again"/><br />
                    <button className="button" type="submit">SignUp</button><br />
                    <Link to="/login">Already have an account?</Link>
                </div>
            </div>

        )
    }
}

export default Signup;