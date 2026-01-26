/*

Handles data transfer between the page and other systems.
This is the only file in its folder that should access files outside the folder.

*/

import DataAccess from "../../data/ProjectData";
import PageDataTransferHandler from "../../data/PageDataTransferHandler";

// Helper function to retrieve the projectId for the page
const GetProjectId = () => {return PageDataTransferHandler.todo.Retrieve().projectId}

// Retrieves data from ProjectData.js for display on the projects page
const GetTodoData = () => {
    return DataAccess.GetTodoData(GetProjectId());
}

// Stores the id of a clicked todo task
const StoreTodoId = (id) => {
    PageDataTransferHandler.details.Store(id);
}

// Changes the completion state of a task in the project data
const ToggleTaskCompletion = (id, newState) => {
    DataAccess.UpdateTaskData(GetProjectId(), id, {complete: newState})
}

// Exports to be used by the page's other files - not to be called from outside data.js' parent folder
export { GetTodoData, StoreTodoId, ToggleTaskCompletion }