import { GetEarlierDate } from "../utils/date";

const data = {

    projectInfo: {

        39847539845:    {
                name: "Project #1",
                itemCount: 4,
                earliestDueDate: "17-02-2025"
        },

        29384758663:    {
                name: "Project #2",
                itemCount: 7,
                earliestDueDate: "21-02-2025"
        },

        30948530945:    {
                name: "Project #3",
                itemCount: 2,
                earliestDueDate: "01-03-2025"
        },

    },

    projectTodos: {

        39847539845: {
            name: "Project #1",
            todoItems: {
                39847549878: {
                    name: "Task #1",
                    dueDate: "17-08-2025",
                    complete: false,
                },
                89847549878: {
                    name: "Task #2",
                    dueDate: "21-06-2027",
                    complete: true,
                },
                79847549878: {
                    name: "Task #4",
                    dueDate: "20-08-2028",
                    complete: false,
                },
                69847549878: {
                    name: "Task #3",
                    dueDate: "15-09-2026",
                    complete: false,
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
                },
                49847549878: {
                    name: "Task #3",
                    dueDate: "30-04-2025",
                    complete: false,
                },
                39847549878: {
                    name: "Task #1",
                    dueDate: "19-05-2025",
                    complete: false,
                },
                29847549878: {
                    name: "Task #4",
                    dueDate: "21-03-2025",
                    complete: true,
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
                },
                38847549878: {
                    name: "Task #4",
                    dueDate: "19-02-2025",
                    complete: true,
                },
                37847549878: {
                    name: "Task #2",
                    dueDate: "21-02-2025",
                    complete: true,
                },
                36847549878: {
                    name: "Task #3",
                    dueDate: "20-02-2025",
                    complete: true,
                }
            }
        },

    }

}

// UNTESTED
const CreateNewProject = (name) => {
    const uniqueProjectId = crypto.randomUUID();

    data.projectInfo[uniqueProjectId] = {
        name: name,
        itemCount: 0,
        earliestDueDate: null
    }

    data.projectTodos[uniqueProjectId] = {
        name: name,
        todoItems: {}
    }
}

// UNTESTED
const CreateNewTodo = (projectId, name, dueDate) => {
    const uniqueTodoId = crypto.randomUUID();

    const projectInfo = data.projectInfo[projectId];
    projectInfo.itemCount++;

    if (projectInfo.earliestDueDate == null) {
        projectInfo.earliestDueDate = newDate;
    } else {
        projectInfo.earliestDueDate = GetEarlierDate(projectInfo.earliestDueDate, dueDate)
    }

    data.projectTodos[projectId].todoItems[uniqueTodoId] = {
        name: name,
        dueDate: dueDate,
        complete: false
    }

}

const GetProjectData = () => {
    return data.projectInfo;
}

const GetTodoData = (id) => {
    return data.projectTodos[id];
}

const DataAccess = {
    CreateNewProject: CreateNewProject,
    CreateNewTodo: CreateNewTodo,
    GetProjectData: GetProjectData,
    GetTodoData: GetTodoData
}

export default DataAccess;