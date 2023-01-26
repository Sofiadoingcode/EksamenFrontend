import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css";
import Credentials from "./Credentials.jsx";
import apiFacade from "../utils/apiFacade.js";


function Header({setErrorMsg, loggedIn, setLoggedIn, setUsername, username, roles, setRoles}) {


    return (
        <nav className="topnav">
            <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>

            { loggedIn && apiFacade.decodeJwt().roles.includes("admin") && <div>
                <NavLink to="/admin"><i className="fa fa-fw"></i> Projects - Admin</NavLink>
            </div>}

            { loggedIn && apiFacade.decodeJwt().roles.includes("user") && <div>
                <NavLink to="/user"><i className="fa fa-fw"></i> Projects</NavLink>
            </div>}

            {!loggedIn ? (<Login setRoles={setRoles} setUsername={setUsername} setLoggedIn={setLoggedIn} setErrorMsg={setErrorMsg}  />) :
                (<>
                    <div>
                    <Credentials username={username} roles={roles}/>
                    <LoggedIn setLoggedIn={setLoggedIn}/>
                    </div>
                </>)}
        </nav>
    );
}

export default Header;
