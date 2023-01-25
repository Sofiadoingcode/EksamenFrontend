import React, {useState} from 'react';
import projectFacade from "../utils/projectFacade.js";

function CreateProjectHours(props) {
    const [projectHour, setProjectHour] = useState({});
    const [projectID, setProjectID] = useState("");

    const onChange = (evt) => {
        setProjectHour({...projectHour, [evt.target.id]: evt.target.value})
    }

    const submit = () => {
        projectFacade.fetchCreateProjectHours(projectHour, props.dev.id, projectID).then(() =>
            props.setIsChanged(!props.isChanged));

    }

    return (
        <div>
            <h2 className="h2title"> Create Project Hours</h2>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Hours Spent</span>
                </div>
                <input type="number" id="hoursspent" className="form-control input_field" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >User Story</span>
                </div>
                <input type="number" id="userstory" className="form-control input_field" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Description</span>
                </div>
                <input type="text" id="description" className="form-control input_field" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Project ID</span>
                </div>
                <input type="text" id="projectid" className="form-control input_field" aria-label="Name"
                       onChange={e => setProjectID(e.target.value)}
                       aria-describedby="basic-addon1"/>
            </div>


            <br/>
            <button onClick={submit} type= "button" className="btn btn-primary"> Submit </button>

        </div>
    );
}


export default CreateProjectHours;