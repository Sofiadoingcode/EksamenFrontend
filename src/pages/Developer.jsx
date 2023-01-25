import React, {useEffect, useState} from 'react';
import apiFacade from "../utils/apiFacade.js";
import projectFacade from "../utils/projectFacade.js";
import CreateProject from "../components/CreateProject.jsx";
import AddDevToProject from "../components/AddDevToProject.jsx";
import CreateProjectHours from "../components/CreateProjectHours.jsx";
import SeeProjectHours from "../components/SeeProjectHours.jsx";
import {NavLink} from "react-router-dom";

function Developer(props) {
    const[projects, setProjects] = useState([]);
    const[isFetched, setIsFetched] = useState({});
    const[isChanged, setIsChanged] = useState({});
    const[dev, setDev] = useState({
        id: "",
        name: "",
        phone: "",
        billingPrHour: ""
    });

    const fixSizeStyle = {
        width: '50%'

    }

    useEffect(() => {
        if (apiFacade.loggedIn()){
            projectFacade.fetchGetDevFromUsername(apiFacade.decodeJwt().username)
                .then((res) => res = res)
                .then(data => {setDev(data)})
                .then((res) => setIsFetched(!isFetched));
        }
    }, [isChanged]);



    useEffect(() => {
        if (apiFacade.loggedIn()){
            projectFacade.fetchProjectsOnDev(dev.id)
                .then((res) => res = res)
                .then(data => {setProjects(data)})
        }
    }, [isFetched]);





    return (
        <div>
            <div className="background">
                <>
                    {/*<div style={{padding: "2rem"}}>*/}
                        <div className="row mt-4 header_box">
                            <div className="index-col-header">

                            </div>
                            <div className="index-col-header">
                                <h1 className="h1title">YOUR PROJECTS</h1>
                            </div>
                            <div className="index-col-header">

                            </div>
                        </div>


                        {
                            projects.map(
                                project =>
                                    <div className="card" style={fixSizeStyle}>
                                        {/*<img src={boat.image} className="card-img-top" alt="..."/>*/}
                                        <div className="card-body">
                                            <h5 className="card-title">{project.name} (ID: {project.id})</h5>
                                            <p className="card-text">{project.description}</p>
                                            <div><SeeProjectHours project={project} setIsChanged={setIsChanged} isChanged={isChanged}/></div>
                                            {/*<nav>*/}
                                            {/*    <ul className="postTypes" style={{listStyle:"none"}}>*/}
                                            {/*            <NavLink*/}
                                            {/*                to="seeprojecthours"*/}
                                            {/*                className={({isActive}) =>*/}
                                            {/*                    isActive ? "postype-active" : "posttype-inactive"*/}
                                            {/*                }*/}
                                            {/*             onClick={}>*/}
                                            {/*                Project Hours*/}
                                            {/*            </NavLink>*/}
                                            {/*    </ul>*/}
                                            {/*</nav>*/}

                                        </div>
                                    </div>
                            )
                        }

                    {/*</div>*/}
                    <div className="sideBySide" style={{padding: "2rem"}}>
                        <div><CreateProjectHours setIsChanged={setIsChanged} isChanged={isChanged} dev={dev}/></div>

                    </div>

                </>

            </div>

        </div>
    );
}


export default Developer;