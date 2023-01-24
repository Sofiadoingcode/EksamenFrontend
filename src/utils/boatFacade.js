import apiFacade from "./apiFacade.js";
import settings from "../settings.js";

const URL = settings;

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

function boatFacade() {

    const fetchOwners = () => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/owners", options).then(handleHttpErrors);
    }

    const fetchAllBoats = () => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/boats", options).then(handleHttpErrors);
    }

    const fetchBoatsInHarbour = (id) => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/boats/harbour/" + id, options).then(handleHttpErrors);
    }

    const fetchBoatByID = (id) => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/boats/" + id, options).then(handleHttpErrors);
    }

    const fetchOwnersOnBoat = (id) => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/owners/boat/" + id, options).then(handleHttpErrors);
    }

    const fetchCreateBoat = (boat) => {
        const options = apiFacade.makeOptions("POST", false, boat);
        return fetch(URL + "/api/boats/", options).then(handleHttpErrors);
    }

    const fetchConnectBoatWithHarbour = (boatID, harbourID) => {
        const options = apiFacade.makeOptions("PUT", false);
        return fetch(URL + "/api/boats/connectharbour/" + boatID + "/" + harbourID, options).then(handleHttpErrors);
    }

    const fetchUpdateBoat = (boatID, updatedBoat) => {
        const options = apiFacade.makeOptions("PUT", false, updatedBoat);
        return fetch(URL + "/api/boats/update/" + boatID, options).then(handleHttpErrors);
    }

    const fetchDeleteBoat = (boatID) => {
        const options = apiFacade.makeOptions("DELETE", false);
        return fetch(URL + "/api/boats/" + boatID, options).then(handleHttpErrors);
    }




    return {

    fetchOwners,
    fetchBoatsInHarbour,
    fetchOwnersOnBoat,
    fetchCreateBoat,
    fetchConnectBoatWithHarbour,
    fetchUpdateBoat,
        fetchBoatByID,
        fetchAllBoats,
        fetchDeleteBoat

    }

}

const facade = boatFacade();
export default facade;

