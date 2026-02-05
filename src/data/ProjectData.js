/*

Stores the data for projects and todo list items, and provides access methods.
Entries are stored with unique IDs.

*/

import { GetEarlierDate } from "../utils/date";
import { LoadProjectData, SaveProjectData } from "../save-system/SaveSystem";

// The permanent data for the site, containing project names todo lists for each project
// Each project and todo task has a unique ID that refers to it
const projectData = { }

// Creates a new empty project entry with a name, generating a unique ID for it
const CreateNewProject = (name) => {
    const uniqueProjectId = crypto.randomUUID();

    projectData[uniqueProjectId] = {
        name: name,
        todoItems: {}
    }

    SaveProjectData(projectData);

    // Only used by the save system on startup
    return uniqueProjectId;
}

// Creates a new todo list task in a specified project. Requires a name and due date.
// Initialises task as incomplete
const CreateNewTodo = (projectId, name, dueDate, priority, description) => {
    const uniqueTodoId = crypto.randomUUID();

    projectData[projectId].todoItems[uniqueTodoId] = {
        name: name,
        dueDate: dueDate,
        complete: false,
        priority: priority,
        description: description,
    }

    SaveProjectData(projectData);

}

const DeleteProject = (projectId) => {
    delete projectData[projectId];
    SaveProjectData(projectData);
}

const DeleteTask = (projectId, taskId) => {
    delete projectData[projectId].todoItems[taskId];
    SaveProjectData(projectData);
}

// Returns the data needed for the projects page - name, number of todo tasks, 
// and the date of the earliest due incomplete task for each project
const GetProjectData = () => {
    const projectPageData = {}

    for (const [projectId, data] of Object.entries(projectData)) {

        projectPageData[projectId] = {
            name: data.name,
            itemCount: Object.keys(data.todoItems).length,
            earliestDueDate: CalculateEarliestDueDate(data.todoItems)
        }

    }

    return projectPageData;
}

// Determines the todo task with the earliest due date given a project's todo list
const CalculateEarliestDueDate = (todoItems) => {

    let date = null;

    for (const data of Object.values(todoItems)) {
        if (!data.complete) { // Ignore completed tasks
            date = !date ? data.dueDate : GetEarlierDate(date, data.dueDate);
        }
    }

    return date;

}

// Gets information for the todo list page - project name, and todo 
const GetTodoData = (id) => {
    return {
        name: projectData[id].name,
        todoItems: projectData[id].todoItems
    }
}

// Get data on a single task for the details page
const GetTaskData = (projectId, taskId) => {
    return projectData[projectId].todoItems[taskId];
}

// Allows flexible modification of todo task data
const UpdateTaskData = (projectId, id, modifications = {}) => {
    
    // Get the task to be modified
    const taskItem = projectData[projectId].todoItems[id];

    // Ensure only properties that already exist are modified
    for (const [key, value] of Object.entries(modifications)) {
        if (key in taskItem) {  
            taskItem[key] = value;
        }
    }

    SaveProjectData(projectData);

}

// Retrieves data from local storage, and returns it if its not empty.
// Otherwise, constructs a single sample project with a task to create a todo list in it
const InitialiseProjectData = () => {

    const data = LoadProjectData();

    if (data != null && data != {}) {
        Object.assign(projectData, structuredClone(data));
        console.log(projectData);
    }

    else {
        const projectId = DataAccess.CreateNewProject("Todo List");
        DataAccess.CreateNewTodo(projectId, "Create todo list", "", "low", "");
    }

}

// The object to export, allowing access to the data
const DataAccess = {
    CreateNewProject: CreateNewProject,
    CreateNewTodo: CreateNewTodo,
    GetProjectData: GetProjectData,
    GetTodoData: GetTodoData,
    UpdateTaskData: UpdateTaskData,
    GetTaskData: GetTaskData,
    DeleteProject: DeleteProject,
    DeleteTask: DeleteTask
}

export default DataAccess;

export { InitialiseProjectData }