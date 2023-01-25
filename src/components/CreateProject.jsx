import React, {useState} from 'react';
import projectFacade from "../utils/projectFacade.js";

function CreateProject(props) {
    const [project, setProject] = useState({});


    const onChange = (evt) => {
        setProject({...project, [evt.target.id]: evt.target.value})
    }

    const submit = () => {
        projectFacade.fetchCreateProject(project).then(() =>
            props.setIsChanged(!props.isChanged));

    }

    return (
        <div>
            <h2 className="h2title"> Create Project</h2>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Name</span>
                </div>
                <input type="text" id="name" className="form-control input_field" aria-label="Name"
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

            <br/>
            <button onClick={submit} type= "button" className="btn btn-primary"> Submit </button>



        </div>
    );
}


export default CreateProject;