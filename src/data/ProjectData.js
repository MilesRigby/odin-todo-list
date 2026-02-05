/*

Stores the data for projects and todo list items, and provides access methods.
Entries are stored with unique IDs.

*/

import PageLoader from "../pages/PageLoader";
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
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim metus sed velit venenatis congue. Curabitur lacinia ultricies tellus eu tempor. Nunc quis egestas mi. Donec justo nisl, egestas quis turpis nec, pellentesque elementum magna. Phasellus bibendum lacinia sem, quis interdum magna egestas tincidunt. Fusce rhoncus dui mi, vitae vestibulum ipsum vestibulum eget. Nulla eget lacinia diam, in lacinia sapien. Vivamus sollicitudin orci dui, in euismod erat gravida ac. Curabitur dignissim, nibh vitae viverra feugiat, ante velit aliquet ipsum, vitae pretium eros ante a lectus. Nullam nec enim cursus, tincidunt dolor eu, accumsan tortor. Maecenas tempor sit amet odio vitae imperdiet. Vivamus mollis, purus non tincidunt tempus, nisl velit accumsan orci, nec mattis augue velit quis orci.",
            },
            89847549878: {
                name: "Task #2",
                dueDate: "21-06-2027",
                complete: true,
                priority: "medium",
                description: "Nulla congue vestibulum massa, et fermentum massa pharetra sit amet. Duis non ligula quis elit feugiat tempus ut vel nisi. In elementum massa eget pretium feugiat. Mauris blandit magna vitae feugiat hendrerit. Pellentesque justo neque, dapibus vitae justo at, egestas suscipit elit. Nam ante odio, vestibulum vitae felis et, vulputate egestas purus. Nam dictum mauris orci, ac accumsan sem efficitur nec.",
            },
            79847549878: {
                name: "Task #4",
                dueDate: "20-08-2028",
                complete: false,
                priority: "high",
                description: "Morbi ut lorem tincidunt magna vestibulum porttitor. Morbi et congue odio. Nulla molestie justo mollis elit laoreet, sit amet accumsan orci convallis. Praesent vel nibh euismod, fringilla nisi at, ullamcorper quam. Pellentesque et vestibulum mi, vitae ornare ex. Nunc tempus massa eu nisl viverra, ut pharetra nunc malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            },
            69847549878: {
                name: "Task #3",
                dueDate: "15-09-2026",
                complete: false,
                priority: "low",
                description: "Ut luctus elit non turpis semper, non consequat nulla convallis. Donec mollis euismod velit vel rutrum. Nam sodales neque mi, faucibus egestas orci venenatis et. Aliquam est augue, bibendum vitae scelerisque eget, hendrerit et velit. Sed facilisis, mi non consectetur pellentesque, eros arcu fermentum massa, vel interdum felis lectus id metus. Quisque accumsan faucibus orci, hendrerit posuere nibh hendrerit quis. Phasellus lacinia, neque nec bibendum semper, orci sem eleifend nunc, et viverra nunc orci eget ligula. Ut pellentesque elementum lacus, non consequat ipsum posuere eget. Sed eu arcu ac mauris sagittis rhoncus ac sed diam. Vestibulum quis eros eget felis rutrum interdum eu sollicitudin sapien. Mauris gravida mi non diam maximus, ut pulvinar elit pellentesque. Integer vel ullamcorper neque. Curabitur eleifend sodales vestibulum.",
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
                description: "Mauris interdum, enim quis feugiat placerat, ante nisl sollicitudin nisl, vel vehicula est quam ac leo. Aenean eu mi id arcu commodo aliquet tincidunt vel sapien. Duis vehicula nisl eros, sit amet cursus sapien lobortis in. Phasellus luctus ultrices efficitur. Donec venenatis lorem dui. Donec a mauris diam. Morbi gravida, lorem in lobortis rhoncus, diam lacus consequat tortor, et porta ante leo eget ligula. Sed finibus dictum risus. Nulla posuere, ligula in ullamcorper aliquam, ex orci varius sem, vel dignissim urna metus quis arcu.",
            },
            49847549878: {
                name: "Task #3",
                dueDate: "30-04-2025",
                complete: false,
                priority: "low",
                description: "Nullam sagittis venenatis eros, nec porta odio efficitur quis. Sed et enim libero. Mauris at odio et lorem venenatis eleifend. Duis blandit tempus nisl. Maecenas molestie sem velit, at sodales justo aliquet at. Vestibulum egestas tincidunt scelerisque. Suspendisse lobortis nunc at pellentesque consectetur. Nullam vehicula odio libero.",
            },
            39847549878: {
                name: "Task #1",
                dueDate: "19-05-2025",
                complete: false,
                priority: "medium",
                description: "Quisque mollis libero in placerat vehicula. Suspendisse porta efficitur est eu accumsan. Curabitur aliquet mauris eget nibh pulvinar condimentum. Nam egestas dui mauris, in iaculis magna ullamcorper ac. Sed posuere, nulla ut feugiat commodo, massa turpis aliquam urna, vitae pharetra turpis mauris sed felis. Nulla sodales at ante sed pretium. Nulla facilisi. Praesent in convallis dui, sed eleifend neque.",
            },
            29847549878: {
                name: "Task #4",
                dueDate: "21-03-2025",
                complete: true,
                priority: "high",
                description: "Phasellus in turpis placerat tellus interdum condimentum. Praesent hendrerit vehicula nulla ut convallis. Maecenas porttitor mi vel augue pharetra varius. Pellentesque sollicitudin felis sed sollicitudin egestas. Suspendisse potenti. Morbi venenatis quam sed erat varius faucibus. Aenean convallis orci ac imperdiet fermentum. Praesent bibendum nulla ut arcu scelerisque, non aliquet enim sollicitudin. Donec varius auctor hendrerit.",
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
                description: "Maecenas sed eros vestibulum, porttitor odio sed, vestibulum felis. Donec tempus, quam ac suscipit auctor, tortor quam tincidunt lorem, sed mollis elit nisl ac quam. Maecenas varius egestas sollicitudin. Aliquam fringilla semper sem. Praesent vulputate, enim nec facilisis congue, orci eros efficitur tellus, at condimentum nibh arcu in dolor. Integer sollicitudin est in nibh mollis, ut semper libero porta. Vivamus at laoreet mi.",
            },
            38847549878: {
                name: "Task #4",
                dueDate: "19-02-2025",
                complete: true,
                priority: "high",
                description: "Nunc elementum neque lacus. Proin quis erat malesuada, facilisis neque eu, sollicitudin mi. Sed eleifend, nibh eget vestibulum feugiat, justo neque aliquam quam, ac rhoncus nulla ipsum non enim. Vestibulum gravida ut dui quis porttitor. Quisque ut tincidunt sapien. Morbi porttitor sodales lacinia. Cras sit amet tellus purus.",
            },
            37847549878: {
                name: "Task #2",
                dueDate: "21-02-2025",
                complete: true,
                priority: "medium",
                description: "Nulla efficitur metus sit amet ipsum gravida, vitae consequat diam bibendum. Phasellus finibus rutrum tortor, nec pulvinar nisi consectetur non. Mauris posuere pharetra elit sit amet commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eu nulla nulla. Phasellus dolor diam, dictum quis porttitor eu, tincidunt vel elit. Nulla ut lacus sagittis, sollicitudin mauris nec, iaculis mauris. Pellentesque feugiat nulla et neque faucibus cursus. Vivamus commodo dolor nunc, eu gravida nulla ullamcorper a. Sed facilisis sem in augue lacinia, sit amet hendrerit nibh ultricies. Aliquam quis mauris a risus auctor maximus iaculis quis turpis. Cras in efficitur ante.",
            },
            36847549878: {
                name: "Task #3",
                dueDate: "20-02-2025",
                complete: true,
                priority: "low",
                description: "Morbi feugiat ligula sed elit ullamcorper, quis finibus ipsum cursus. Vivamus iaculis orci erat, nec iaculis justo placerat non. Mauris in nisl tortor. Pellentesque non porttitor justo. Nulla cursus ut mauris at porttitor. In dignissim bibendum consectetur. Pellentesque hendrerit odio eget nibh pretium luctus.",
            }
        }
    },

}

// Creates a new empty project entry with a name, generating a unique ID for it
const CreateNewProject = (name) => {
    const uniqueProjectId = crypto.randomUUID();

    projectData[uniqueProjectId] = {
        name: name,
        todoItems: {}
    }
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

}

const DeleteProject = (projectId) => {
    delete projectData[projectId];
}

const DeleteTask = (projectId, taskId) => {
    delete projectData[projectId].todoItems[taskId];
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