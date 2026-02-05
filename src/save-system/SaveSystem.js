import DataAccess from "../data/ProjectData";

// Saves all projects' data, passed in from source in ProjectData.js
const SaveProjectData = (data) => {

    localStorage.setItem("ProjectData", JSON.stringify(data));

}

// Retrieves data from local storage, and returns it if its not empty.
// Otherwise, constructs a single sample project with a task to create a todo list in it
const LoadProjectData = () => {

    return JSON.parse(localStorage.getItem("ProjectData"));

}

export { SaveProjectData, LoadProjectData }