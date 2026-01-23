/*

Handles data transfer between the page and other systems.
This is the only file in its folder that should access files outside the folder.

*/

import DataAccess from "../../data/ProjectData";
import PageDataTransferHandler from "../../data/PageDataTransferHandler";

// Retrieves data from ProjectData.js for display on the projects page
const GetTodoData = () => {
    return DataAccess.GetTodoData(PageDataTransferHandler.todo.Retrieve().projectId);
}

// Stores the id of a clicked todo task
const StoreTodoId = (id) => {
    PageDataTransferHandler.details.Store(id);
}

// Exports to be used by the page's other files - not to be called from outside data.js' parent folder
export { GetTodoData, StoreTodoId };