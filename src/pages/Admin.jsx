import React, {useEffect, useState} from 'react';
import facade from "../utils/apiFacade.js";
import Projects from "./Projects.jsx";


function Admin(props) {
    const [adminInfo, setAdminInfo] = useState({})
    useEffect(  () => {
        facade.fetchAdminData().then((res) => setAdminInfo(res))
    },[])
    return (
        <div>
            <Projects/>
        </div>

    );
}

export default Admin;