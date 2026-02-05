/*

Handles data transfer between the page and other systems.
This is the only file in its folder that should access files outside the folder.

*/

import DataAccess from "../../data/ProjectData";
import PageDataTransferHandler from "../../data/PageDataTransferHandler";
import PageLoader from "../PageLoader";
import OpenAddProjectModal from "../../data/user-input/projectModal";
import OpenConfirmationModal from "../../data/user-input/confirmationPrompt";

// Retrieves data from ProjectData.js for display on the projects page
const GetProjectData = () => {

    return DataAccess.GetProjectData();

}

// Stores the id of a clicked project, and opens that project's todo list
const OpenTodoPage = (id) => {
    PageDataTransferHandler.todo.Store(id);
    PageLoader("todo");
}

// Initialises the process of adding a new project
const AddProject = () => { OpenAddProjectModal(); }

// Defines how the page handles deletion of projects
// Prompts user for confirmation, and if approves deletes the project by id, then reloads the project page
const DeleteProject = (id) => {
    OpenConfirmationModal("delete this project", () => {
        DataAccess.DeleteProject(id);
        PageLoader("projects");
    });
}

// Exports to be used by the page's other files - not to be called from outside data.js' parent folder
export { GetProjectData, OpenTodoPage, AddProject, DeleteProject };