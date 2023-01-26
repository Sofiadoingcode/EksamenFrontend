import React, {useEffect, useState} from 'react';
import projectFacade from "../utils/projectFacade.js";
import "../styles/style.css";
import "../styles/text.css";
import CreateProject from "../components/CreateProject.jsx";
import AddDevToProject from "../components/AddDevToProject.jsx";
import SeeProjectHours from "../components/SeeProjectHours.jsx";
import SeeProjectHoursFullProject from "../components/SeeProjectHoursFullProject.jsx";
import SeeStats from "../components/SeeStats.jsx";

function Projects(props) {
    const [projects, setProjects] = useState([])
    const [projectsChanged, setProjectsChanged] = useState([]);
    const[isFetched, setIsFetched] = useState({});


    useEffect(() => {
        projectFacade.fetchAllProjects()
            .then((res) => res = res)
            .then(data => {
                setProjects(data);
            }).then((res) => setIsFetched(!isFetched));

    }, [projectsChanged]);

    useEffect(() => {
        return () => {

        };
    }, [isFetched]);



    return (
        <div>
            <div className="background">
                <>
                    <div style={{padding: "2rem"}}>
                        <div className="row mt-4 header_box">
                            <div className="index-col-header">

                            </div>
                            <div className="index-col-header">
                                <h1 className="h1title">PROJECTS</h1>
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
                                            <SeeStats project={project}/>
                                            <div><SeeProjectHoursFullProject project={project} /></div>
                                        </div>
                                    </div>
                            )
                        }

                    </div>
                    <div className="sideBySide" style={{padding: "2rem"}}>
                        <div><CreateProject setIsChanged={setProjectsChanged} isChanged={projectsChanged}/></div>
                        <div><AddDevToProject setIsChanged={setProjectsChanged} isChanged={projectsChanged}/></div>

                    </div>

                </>

            </div>
        </div>
    );
}


export default Projects;