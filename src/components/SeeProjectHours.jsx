import React, {useState} from 'react';
import projectFacade from "../utils/projectFacade.js";
import DeletePH from "./DeletePH.jsx";

function SeeProjectHours(props) {

    const [toggle, setToggle] = useState(false);
    const[projectHours, setProjectsHours] = useState([]);

    const button ={
        backgroundColor: '#0b5394',
        color: 'white'
    }

    const fixSizeStyle = {
        width: '33%',
        height: '100%',
        position: 'relative'
    }



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
                                        <div><DeletePH phID={ph.id} setIsChanged={props.setIsChanged} isChanged={props.isChanged}/></div>
                                    </div>
                                </div>
                        )



                    // <>
                    // <table>
                    //     <thead>
                    //         <tr>
                    //             <th>ID</th>
                    //             <th>HOURS SPENT</th>
                    //             <th>USER STORY</th>
                    //             <th>DESCRIPTION</th>
                    //         </tr>
                    //     </thead>
                    //     <tbody>
                    //     {projectHours.map(
                    //         ph => {
                    //             return (
                    //
                    //                 <tr>
                    //                     <td> {ph.id} </td>
                    //                     <td> {ph.hoursSpent}</td>
                    //                     <td> {ph.userStory}</td>
                    //                     <td> {ph.description}</td>
                    //
                    //                 </tr>
                    //             )
                    //         }
                    //     )}
                    //     </tbody>
                    //
                    // </table>
                    // </>
                )}
            </>


        </div>
    );
}

export default SeeProjectHours;