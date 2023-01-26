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

    const fetchStats = (projectid) => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/ph/stats/" + projectid, options).then(handleHttpErrors);
    }

    const fetchPHStats = (phid) => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/ph/stats/ph/" + phid, options).then(handleHttpErrors);
    }

    const fetchProjectsOnDev = (id) => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/projects/dev/" + id, options).then(handleHttpErrors);
    }

    const fetchProjectHoursOnProject = (id) => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/ph/project/" + id, options).then(handleHttpErrors);
    }

    const fetchProjectHoursOnProjectAndDev = (projectID, devID) => {
        const options = apiFacade.makeOptions("GET", false);
        return fetch(URL + "/api/ph/project/dev/" + projectID + "/" + devID, options).then(handleHttpErrors);
    }

    const fetchCreateProject = (project) => {
        const options = apiFacade.makeOptions("POST", false, project);
        return fetch(URL + "/api/projects/", options).then(handleHttpErrors);
    }

    const fetchCreateProjectHours = (projectHours, devID, projectID) => {
        const options = apiFacade.makeOptions("POST", false, projectHours);
        return fetch(URL + "/api/ph/" + devID + "/" + projectID, options).then(handleHttpErrors);
    }

    const fetchAddDevToProject = (devID, projectID) => {
        const options = apiFacade.makeOptions("PUT", false);
        return fetch(URL + "/api/projects/connectdev/" + devID + "/" + projectID, options).then(handleHttpErrors);
    }

    const fetchGetDevFromUsername = (username) => {
        const options = apiFacade.makeOptions("GET", true);
        return fetch(URL + "/api/developers/user/" + username, options).then(handleHttpErrors);
    }

    const fetchUpdatePH = (id, projectID, devID, updatedPH) => {
        const options = apiFacade.makeOptions("PUT", false, updatedPH);
        return fetch(URL + "/api/ph/update/" + id + "/" + projectID + "/" + devID, options).then(handleHttpErrors);
    }

    const fetchDeletePH = (id) => {
        const options = apiFacade.makeOptions("DELETE", false);
        return fetch(URL + "/api/ph/" + id, options).then(handleHttpErrors);
    }




    return {

        fetchAllProjects,
        fetchProjectsOnDev,
        fetchCreateProject,
        fetchAddDevToProject,
        fetchGetDevFromUsername,
        fetchCreateProjectHours,
        fetchProjectHoursOnProject,
        fetchProjectHoursOnProjectAndDev,
        fetchDeletePH,
        fetchUpdatePH,
        fetchStats,
        fetchPHStats


    }

}

const facade = projectFacade();
export default facade;