import React, {useEffect, useState} from 'react';
import projectFacade from "../utils/projectFacade.js";

function SeeStats(props) {
    const [stats, setStats] = useState({});

    useEffect(() => {
        return () => {
            projectFacade.fetchStats(props.project.id).then(res => setStats(res))
        };
    }, []);


    return (
        <>
            <p className="card-text">Full Price: {stats.totalPrice}</p>
            <p className="card-text">Amount of hours: {stats.totalHours}</p>
        </>
    );
}


export default SeeStats;