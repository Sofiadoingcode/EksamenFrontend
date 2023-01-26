import React, {useEffect, useState} from 'react';
import projectFacade from "../utils/projectFacade.js";

function PhStats(props) {
    const [stats, setStats] = useState({});

    useEffect(() => {
        return () => {
            projectFacade.fetchPHStats(props.ph.id).then(res => setStats(res))
        };
    }, []);


    return (
        <div>
            <p className="card-text">Full Price: {stats.totalPH}</p>
        </div>
    );
}

export default PhStats;