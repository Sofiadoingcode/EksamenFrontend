import React, {useEffect, useState} from 'react';
import boatFacade from "../utils/boatFacade.js";

function UpdateBoat(props) {
    const [boats, setBoats] = useState([]);
    const [boat, setBoat] = useState({
        id: "",
        name: "",
        brand: "",
        image: "",

    });

    useEffect(() => {
        boatFacade.fetchAllBoats()
            .then((res) => res = res)
            .then(data => {
                setBoats(data);
            }, []);

    });

    const onChange = (evt) => {
        setBoat({...boat, [evt.target.id]: evt.target.value})
    }

    const chooseButton = (evt) => {
        const key = evt.target.value;
        setBoat(boats.find((boat) => boat.id == key));
    }

    const submit = () => {
        boatFacade.fetchUpdateBoat(boat.id, boat).then(() =>
            props.setIsChanged(!props.isChanged));

    }

    return (
    <div>
            <h2 className="h2title">UPDATE BOATS</h2>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" >Boat_ID</span>
            </div>
            <input type="text" id="boatID" value={boat.id} className="form-control input_field" aria-label="Name"
                   aria-describedby="basic-addon1"/>
        </div>

    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" >Name</span>
        </div>
        <input type="text" id="name" value={boat.name} className="form-control input_field" aria-label="Name" onChange={onChange}
               aria-describedby="basic-addon1"/>
    </div>

    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" >Brand</span>
        </div>
        <input type="text" id="brand" value={boat.brand} className="form-control input_field" aria-label="Name" onChange={onChange}
               aria-describedby="basic-addon1"/>
    </div>

    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" >Image</span>
        </div>
        <input type="text" id="image" value={boat.image} className="form-control input_field" aria-label="Name" onChange={onChange}
               aria-describedby="basic-addon1"/>
    </div>
        <br/>
    <select className="form-select select" onChange={chooseButton}>
        {boats.map(
            (boat) => {
                return <option value={boat.id}> {boat.name} </option>
            }
        )}
    </select>
        <br/>
        <br/>
    <button  onClick={submit} type= "button" className="btn btn-primary"> Update! </button>


</div>


    );
}

export default UpdateBoat;