import React, {useState} from 'react';
import projectFacade from "../utils/projectFacade.js";

function AddDevToProject(props) {
    const[devID, setDevID] = useState("");
    const[projectID, setProjectID] = useState("");

    const submit = () => {
        projectFacade.fetchAddDevToProject(devID, projectID).then(
            props.setIsChanged(!props.isChanged));

    }

    return (
        <div>
            <h2 className="h2title">Add Dev To Project</h2>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Dev_ID</span>
                </div>
                <input type="text" id="devID" value={devID} className="form-control input_field" aria-label="Name"
                       onChange={e => setDevID(e.target.value)}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Project_ID</span>
                </div>
                <input type="text" id="projectID" value={projectID} className="form-control input_field" aria-label="Name"
                       onChange={e => setProjectID(e.target.value)}
                       aria-describedby="basic-addon1"/>
            </div>

            <br/>
            <button onClick={submit} type= "button" className="btn btn-primary"> Submit </button>

        </div>
    );
}

export default AddDevToProject;