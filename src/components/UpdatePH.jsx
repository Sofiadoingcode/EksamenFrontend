import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import projectFacade from "../utils/projectFacade.js";

function UpdatePh(props) {
    const [ph, setPH] = useState({});



    const onChange = (evt) => {
        setPH({...ph, [evt.target.id]: evt.target.value})
    }

    return (
        <div className="popUp">
            <div onClick={props.togglePopUp} className="overlay"></div>
            <div className={"popUp-content"}>

                <div className={"createExerciseGrid"}>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >User Story</span>
                        </div>
                        <input type="text" id="userStory" value={ph.userStory} className="form-control input_field" aria-label="Name" onChange={onChange}
                               aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >Hours Spent</span>
                        </div>
                        <input type="text" id="hoursSpent" value={ph.hoursSpent} className="form-control input_field" aria-label="Name" onChange={onChange}
                               aria-describedby="basic-addon1"/>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >Description</span>
                        </div>
                        <input type="text" id="description" value={ph.description} className="form-control input_field" aria-label="Name" onChange={onChange}
                               aria-describedby="basic-addon1"/>
                    </div>
                    <br/>

                </div>
                <button onClick={() => {
                    projectFacade.fetchUpdatePH(props.phID, props.project.id, props.dev.id, ph).then(res => res = res).then(props.togglePopUp);

                }}>Update</button>

                <NavLink className="close-popUp" onClick={props.togglePopUp}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         className="bi bi-x-square" viewBox="0 0 16 16">
                        <path
                            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </NavLink>
            </div>
        </div>
    );
}

export default UpdatePh;