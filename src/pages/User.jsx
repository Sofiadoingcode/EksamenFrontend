import React, {useEffect, useState} from 'react';
import facade from "../utils/apiFacade.js";
import Developer from "./Developer.jsx";

function User(props) {
    const [userInfo, setUserInfo] = useState({})
    useEffect(  () => {
        facade.fetchData().then((res) => setUserInfo(res))
    },[])
    return (
        <div>
            <Developer chosenProject={props.chosenProject} setChosenProject={props.setChosenProject}/>

        </div>

    );
}

export default User;