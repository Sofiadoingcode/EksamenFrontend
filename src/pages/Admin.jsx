import React, {useEffect, useState} from 'react';
import facade from "../utils/apiFacade.js";
import CreateBoat from "../components/CreateBoat.jsx";
import ConnectBoatAndHarbour from "../components/ConnectBoatAndHarbour.jsx";
import UpdateBoat from "../components/UpdateBoat.jsx";
import AllBoats from "./AllBoats.jsx";

function Admin(props) {
    const [adminInfo, setAdminInfo] = useState({})
    useEffect(  () => {
        facade.fetchAdminData().then((res) => setAdminInfo(res))
    },[])
    return (
        <div>

        </div>

    );
}

export default Admin;