import React, {useState} from 'react';
import boatFacade from "../utils/boatFacade.js";

function OwnersOnBoat(props) {
    const [owners, setOwners] = useState([]);
    const [boatID, setBoatID] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        boatFacade.fetchOwnersOnBoat(boatID)
            .then(res => setOwners(res))
    }


    return (
        <div>
            <h2>Owners On Boats</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Boat Id" value={boatID}
                           onChange={e => setBoatID(e.target.value)}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>

            <div className={"basicPadding"}>
                <table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>

                    </tr>
                    </thead>
                    <tbody>
                    {owners.map(
                        owner => {
                            return (

                                <tr>
                                    <td> {owner.name} </td>
                                    <td> {owner.address}</td>
                                    <td> {owner.phone}</td>

                                </tr>
                            )
                        }
                    )}
                    </tbody>

                </table>
            </div>

        </div>
    );
}


export default OwnersOnBoat;