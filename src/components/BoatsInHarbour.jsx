import React, {useState} from 'react';
import boatFacade from "../utils/boatFacade.js";

function BoatsInHarbour(props) {
    const [boats, setBoats] = useState([]);
    const [harbourID, setHarbourID] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        boatFacade.fetchBoatsInHarbour(harbourID)
            .then(res => setBoats(res))
    }

    return (
        <div>
            <h2>Boats In Harbour</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder="Harbour Id" value={harbourID}
                           onChange={e => setHarbourID(e.target.value)}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>

            <div className={"basicPadding"}>
                <table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>


                    </tr>
                    </thead>
                    <tbody>
                    {boats.map(
                        boat => {
                            return (

                                    <tr>
                                        <td> {boat.name} </td>
                                        <td> {boat.brand}</td>

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

export default BoatsInHarbour;