import React, {useState} from 'react';
import projectFacade from "../utils/projectFacade.js";
import DeletePH from "./DeletePH.jsx";
import UpdatePH from "./UpdatePH.jsx";
import PHStats from "./PHStats";

function SeeProjectHoursFullProject(props) {
    const [toggle, setToggle] = useState(false);
    const[projectHours, setProjectsHours] = useState([]);
    const [popUp, setPopUp] = useState(false);


    const button ={
        backgroundColor: '#0b5394',
        color: 'white'
    }

    const fixSizeStyle = {
        width: '100%',
        height: '100%',
    }


    const togglePopUp = () => {
        setPopUp(!popUp);
    };

    const handleOnClick = (evt) => {
        evt.preventDefault();
        projectFacade.fetchProjectHoursOnProject(props.project.id)
            .then(res => setProjectsHours(res))
            .then(() => toggleToggle())


    }

    const toggleToggle = () => {
        setToggle(!toggle)
    }


    return (
        <div>
            <>
                <button
                    onClick={handleOnClick}
                    style={button}>
                    Project Hours
                </button>
                <br/>
                {toggle && (
                    projectHours.map(
                        ph =>
                            <div className="card" style={fixSizeStyle}>
                                <div className="card-body">
                                    <h5 className="card-title">User Story: {ph.userStory}</h5>
                                    <p className="card-text">Description: {ph.description}</p>
                                    <p className="card-text">Hours Spent: {ph.hoursSpent}</p>
                                    <PHStats ph={ph}/>

                                </div>
                            </div>

                    )


                )}
            </>


        </div>
    );
}


export default SeeProjectHoursFullProject;