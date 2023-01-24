import React, {useState} from 'react';
import boatFacade from "../utils/boatFacade.js";

function ConnectBoatAndHarbour(props) {
    const[boatID, setBoatID] = useState("");
    const[harbourID, setHarbourID] = useState("");

    const submit = () => {
        boatFacade.fetchConnectBoatWithHarbour(boatID, harbourID);
    }



    return (
        <div>
            <h2 className="h2title">Connect Boat And Harbour</h2>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Boat_ID</span>
                </div>
                <input type="text" id="boatID" value={boatID} className="form-control input_field" aria-label="Name"
                       onChange={e => setBoatID(e.target.value)}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Harbour_ID</span>
                </div>
                <input type="text" id="harbourID" value={harbourID} className="form-control input_field" aria-label="Name"
                       onChange={e => setHarbourID(e.target.value)}
                       aria-describedby="basic-addon1"/>
            </div>

            <br/>
            <button onClick={submit} type= "button" className="btn btn-primary"> Submit </button>

        </div>
    );
}

export default ConnectBoatAndHarbour;