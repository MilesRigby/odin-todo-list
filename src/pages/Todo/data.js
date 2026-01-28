/*

Handles data transfer between the page and other systems.
This is the only file in its folder that should access files outside the folder.

*/

import DataAccess from "../../data/ProjectData";
import PageDataTransferHandler from "../../data/PageDataTransferHandler";
import PageLoader from "../PageLoader";
import OpenAddTaskModal from "../../data/user-input/taskModal";

// Helper function to retrieve the projectId for the page
const GetProjectId = () => {return PageDataTransferHandler.todo.Retrieve().projectId}

// Retrieves data from ProjectData.js for display on the projects page
const GetTodoData = () => {
    return DataAccess.GetTodoData(GetProjectId());
}

// Changes the completion state of a task in the project data
const ToggleTaskCompletion = (id, newState) => {
    DataAccess.UpdateTaskData(GetProjectId(), id, {complete: newState})
}

// Stores the project and task id, then loads the details page for that task
const OpenDetailsPage = (id) => {
    PageDataTransferHandler.details.Store(GetProjectId(), id);
    PageLoader("detailed");
}

const CreateNewTask = () => {
    OpenAddTaskModal(GetProjectId());
}

// Exports to be used by the page's other files - not to be called from outside data.js' parent folder
export { GetTodoData, ToggleTaskCompletion, OpenDetailsPage, CreateNewTask }