/*

Stores the data for projects and todo list items, and provides access methods.
Entries are stored with unique IDs.

*/

import { GetEarlierDate } from "../utils/date";

// The permanent data for the site, containing project names todo lists for each project
// Each project and todo task has a unique ID that refers to it
const projectData = {

    39847539845: {
        name: "Project #1",
        todoItems: {
            39847549878: {
                name: "Task #1",
                dueDate: "17-08-2025",
                complete: false,
                priority: "low",
            },
            89847549878: {
                name: "Task #2",
                dueDate: "21-06-2027",
                complete: true,
                priority: "medium",
            },
            79847549878: {
                name: "Task #4",
                dueDate: "20-08-2028",
                complete: false,
                priority: "high",
            },
            69847549878: {
                name: "Task #3",
                dueDate: "15-09-2026",
                complete: false,
                priority: "low",
            }
        }
    },

    29384758663: {
        name: "Project #2",
        todoItems: {
            59847549878: {
                name: "Task #2",
                dueDate: "10-02-2025",
                complete: true,
                priority: "high",
            },
            49847549878: {
                name: "Task #3",
                dueDate: "30-04-2025",
                complete: false,
                priority: "low",
            },
            39847549878: {
                name: "Task #1",
                dueDate: "19-05-2025",
                complete: false,
                priority: "medium",
            },
            29847549878: {
                name: "Task #4",
                dueDate: "21-03-2025",
                complete: true,
                priority: "high",
            }
        }
    },

    30948530945: {
        name: "Project #3",
        todoItems: {
            19847549878: {
                name: "Task #1",
                dueDate: "15-02-2025",
                complete: false,
                priority: "medium",
            },
            38847549878: {
                name: "Task #4",
                dueDate: "19-02-2025",
                complete: true,
                priority: "high",
            },
            37847549878: {
                name: "Task #2",
                dueDate: "21-02-2025",
                complete: true,
                priority: "medium",
            },
            36847549878: {
                name: "Task #3",
                dueDate: "20-02-2025",
                complete: true,
                priority: "low",
            }
        }
    },

}

// UNTESTED
// Creates a new empty project entry with a name, generating a unique ID for it
const CreateNewProject = (name) => {
    const uniqueProjectId = crypto.randomUUID();

    projectData[uniqueProjectId] = {
        name: name,
        todoItems: {}
    }
}

// UNTESTED
// Creates a new todo list task in a specified project. Requires a name and due date.
// Initialises task as incomplete
const CreateNewTodo = (projectId, name, dueDate, priority) => {
    const uniqueTodoId = crypto.randomUUID();

    projectData[projectId].todoItems[uniqueTodoId] = {
        name: name,
        dueDate: dueDate,
        complete: false,
        priority: priority,
    }

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

// The object to export, allowing access to the data
const DataAccess = {
    CreateNewProject: CreateNewProject,
    CreateNewTodo: CreateNewTodo,
    GetProjectData: GetProjectData,
    GetTodoData: GetTodoData
}

export default DataAccess;