import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = props => {
    const { store, actions } = useContext(Context);
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: "",
        userType: ""
    })

    const proUser = () => {
        setLoginInput({ ...loginInput, userType: "professional" })
    }
    const clientUser = () => {
        setLoginInput({ ...loginInput, userType: "client" })
    }

    const params = useParams();

    return (
        <div className="container-fluid">
            <div className="loginCard">
                <div className="userToggle d-flex justify-content-between">
                    <button type="button" className="btn btn-primary">Client</button>
                    <button type="button" className="btn btn-primary">Professional</button>
                </div>

                <form>
                    <div className="mb-3">
                        <label for="Username" className="form-label">Username</label>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="Email address" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>


        </div>
    );
};

Login.propTypes = {
    match: PropTypes.object
};