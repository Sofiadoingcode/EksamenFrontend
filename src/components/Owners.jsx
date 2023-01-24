import React, {useEffect, useState} from 'react';
import boatFacade from "../utils/boatFacade.js";
import "../styles/text.css";

function Owners(props) {
    const [owners, setOwners] = useState([])
    useEffect(() => {
        boatFacade.fetchOwners()
            .then((res) => res = res)
            .then(data => {
                setOwners(data);
            })}, []);


    return (
        <div>
            <>
                <div style={{padding: "2rem"}}>

                    <div className="row mt-4 header_box">
                        <div className="index-col-header">

                        </div>
                        <div className="index-col-header">
                            <h1 className="h1title">OWNERS</h1>
                        </div>
                        <div className="index-col-header">

                        </div>
                    </div>

                    {
                        owners.map(
                            owner =>
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{owner.name}</h5>
                                        <p className="card-text">Address: {owner.address} <br/> Phone: {owner.phone}</p>
                                    </div>
                                </div>

                        )
                    }
                </div>
            </>

        </div>
    );
}

export default Owners;