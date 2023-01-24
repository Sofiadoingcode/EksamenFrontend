import React from 'react';
import boatFacade from "../utils/boatFacade.js";

function DeleteBoat(props) {

    const deleteButton ={
        color: 'white',
        backgroundColor: 'red',
        height: '40px'
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        boatFacade.fetchDeleteBoat(props.boatID).then(() =>
            props.setIsChanged(!props.isChanged)
        )

    }


    return (
        <div>

            <button onClick={handleSubmit} style={deleteButton}>X</button>

        </div>
    );
}

export default DeleteBoat;