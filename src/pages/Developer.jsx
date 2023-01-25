import React, {useEffect, useState} from 'react';
import apiFacade from "../utils/apiFacade.js";
import projectFacade from "../utils/projectFacade.js";
import CreateProject from "../components/CreateProject.jsx";
import AddDevToProject from "../components/AddDevToProject.jsx";

function Developer(props) {
    const[projects, setProjects] = useState([]);

    useEffect(() => {
        if (apiFacade.loggedIn()){
            projectFacade.fetchProjectsOnDev(apiFacade.decodeJwt().developer.id)
                .then((res) => res = res)
                .then(data => {
                    setProjects(data);
                })
        }
    }, []);


    return (
        <div>
            <div className="background">
                <>
                    <div style={{padding: "2rem"}}>
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
                                    <div className="card">
                                        {/*<img src={boat.image} className="card-img-top" alt="..."/>*/}
                                        <div className="card-body">
                                            <h5 className="card-title">{project.name}</h5>
                                            <p className="card-text">{project.description}</p>
                                            {/*<td><DeleteBoat boatID={boat.id} setIsChanged={setBoatsChanged}*/}
                                            {/*                isChanged={boatsChanged}/></td>*/}
                                        </div>
                                    </div>
                            )
                        }

                    </div>
                    

                </>

            </div>

        </div>
    );
}


export default Developer;