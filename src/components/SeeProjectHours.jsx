import React, {useState} from 'react';
import projectFacade from "../utils/projectFacade.js";

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
                                    {/*<img src={boat.image} className="card-img-top" alt="..."/>*/}
                                    <div className="card-body">
                                        <h5 className="card-title">Project Hour with ID {ph.id}</h5>
                                        <p className="card-text">Description: {ph.description}</p>
                                        <p className="card-text">Hours Spent: {ph.hoursSpent}</p>
                                        <p className="card-text">User Story: {ph.userStory}</p>
                                        {/*<td><DeleteBoat boatID={boat.id} setIsChanged={setBoatsChanged}*/}
                                        {/*                isChanged={boatsChanged}/></td>*/}
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