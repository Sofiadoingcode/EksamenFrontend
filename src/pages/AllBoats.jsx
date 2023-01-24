import React, {useEffect, useState} from 'react';
import boatFacade from "../utils/boatFacade.js";
import "../styles/style.css";
import "../styles/text.css";
import DeleteBoat from "../components/DeleteBoat.jsx";
import UpdateBoat from "../components/UpdateBoat.jsx";
import CreateBoat from "../components/CreateBoat.jsx";
import ConnectBoatAndHarbour from "../components/ConnectBoatAndHarbour.jsx";

function AllBoats(props) {
    const [boats, setBoats] = useState([])
    const [boatsChanged, setBoatsChanged] = useState([]);
    useEffect(() => {
        boatFacade.fetchAllBoats()
            .then((res) => res = res)
            .then(data => {
                setBoats(data);
            })}, [boatsChanged]);

    return (
        <div className="background">
            <>
                <div style={{padding: "2rem"}}>
                    <div class="row mt-4 header_box">
                        <div class="index-col-header">

                        </div>
                        <div class="index-col-header">
                            <h1 className="h1title">BOATS</h1>
                        </div>
                        <div class="index-col-header">

                        </div>
                    </div>



                    {
                        boats.map(
                            boat =>
                                <div className="card">
                                    <img src={boat.image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{boat.name}</h5>
                                        <p className="card-text">Brand: {boat.brand} Harbour: {}</p>
                                        <td><DeleteBoat boatID={boat.id} setIsChanged={setBoatsChanged} isChanged={boatsChanged}/></td>
                                    </div>
                                </div>

                        )
                    }


                </div>
                <div class="sideBySide" style={{padding: "2rem"}}>
                    <div> <CreateBoat setIsChanged={setBoatsChanged} isChanged={boatsChanged}/></div>
                    <div><UpdateBoat setIsChanged={setBoatsChanged} isChanged={boatsChanged}/></div>
                    <div><ConnectBoatAndHarbour/></div>

                </div>



            </>

        </div>
    );
}

export default AllBoats;