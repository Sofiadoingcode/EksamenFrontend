import settings from "../settings.js";
import apiFacade from "./apiFacade.js";

const URL = settings;

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

function projectFacade() {

    const fetchAllProjects = () => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/projects", options).then(handleHttpErrors);
    }
    //
    // const fetchAllBoats = () => {
    //     const options = apiFacade.makeOptions("GET", false);
    //     return fetch(URL + "/api/boats", options).then(handleHttpErrors);
    // }
    //
    // const fetchBoatsInHarbour = (id) => {
    //     const options = apiFacade.makeOptions("GET", false);
    //     return fetch(URL + "/api/boats/harbour/" + id, options).then(handleHttpErrors);
    // }
    //
    // const fetchBoatByID = (id) => {
    //     const options = apiFacade.makeOptions("GET", false);
    //     return fetch(URL + "/api/boats/" + id, options).then(handleHttpErrors);
    // }
    //
    const fetchProjectsOnDev = (id) => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/projects/dev/" + id, options).then(handleHttpErrors);
    }

    const fetchCreateProject = (project) => {
        const options = apiFacade.makeOptions("POST", false, project);
        return fetch(URL + "/api/projects/", options).then(handleHttpErrors);
    }
    //
    const fetchAddDevToProject = (devID, projectID) => {
        const options = apiFacade.makeOptions("PUT", false);
        return fetch(URL + "/api/projects/connectdev/" + devID + "/" + projectID, options).then(handleHttpErrors);
    }
    //
    // const fetchUpdateBoat = (boatID, updatedBoat) => {
    //     const options = apiFacade.makeOptions("PUT", false, updatedBoat);
    //     return fetch(URL + "/api/boats/update/" + boatID, options).then(handleHttpErrors);
    // }
    //
    // const fetchDeleteBoat = (boatID) => {
    //     const options = apiFacade.makeOptions("DELETE", false);
    //     return fetch(URL + "/api/boats/" + boatID, options).then(handleHttpErrors);
    // }




    return {

        fetchAllProjects,
        // fetchBoatsInHarbour,
        fetchProjectsOnDev,
        fetchCreateProject,
        fetchAddDevToProject,
        // fetchUpdateBoat,
        //     fetchBoatByID,
        //     fetchAllBoats,
        //     fetchDeleteBoat

    }

}

const facade = projectFacade();
export default facade;