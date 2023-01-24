import React, {useEffect, useState} from 'react';
import facade from "../utils/apiFacade.js";
import Owners from "../components/Owners.jsx";
import BoatsInHarbour from "../components/BoatsInHarbour.jsx";
import OwnersOnBoat from "../components/OwnersOnBoat.jsx";

function User(props) {
    const [userInfo, setUserInfo] = useState({})
    useEffect(  () => {
        facade.fetchData().then((res) => setUserInfo(res))
    },[])
    return (
        <div>


        </div>

    );
}

export default User;