import React from 'react';
import projectFacade from "../utils/projectFacade.js";

function DeletePh(props) {

    const deleteButton ={
        color: 'white',
        backgroundColor: 'red',
        height: '40px'
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        projectFacade.fetchDeletePH(props.phID).then(() =>
            props.setIsChanged(!props.isChanged)
        )

    }

    return (
        <div>
            <button onClick={handleSubmit} style={deleteButton}>X</button>
        </div>
    );
}

export default DeletePh;