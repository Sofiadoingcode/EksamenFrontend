import React, {useState} from 'react';
import boatFacade from "../utils/boatFacade.js";

function CreateBoat(props) {
    const [boat, setBoat] = useState({});


    const onChange = (evt) => {
        setBoat({...boat, [evt.target.id]: evt.target.value})
    }

    const submit = () => {
        boatFacade.fetchCreateBoat(boat).then(() =>
            props.setIsChanged(!props.isChanged));;

    }
    return (
        <div>
            <h2 className="h2title"> Create Boat</h2>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Name</span>
                </div>
                <input type="text" id="name" className="form-control input_field" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" >Brand</span>
                </div>
                <input type="text" id="brand" className="form-control input_field" aria-label="Name"
                       onChange={onChange}
                       aria-describedby="basic-addon1"/>
            </div>

            <br/>
            <button onClick={submit} type= "button" className="btn btn-primary"> Submit </button>
        </div>
    );
}


export default CreateBoat;