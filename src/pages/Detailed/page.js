import { GetTaskData } from "./data";

// Constructs the content of the details page, displaying info about a single todo list task.
// Currently fixed-content, needs to be updated to load data from projectData via data.js.
const BuildDetailedTodoPage = () => {

    const data = GetTaskData();

    const page = document.createElement("div");
    page.id = "details-content-wrapper";

    const taskName = document.createElement("p");
    taskName.className = "det-name";
    taskName.innerText = data.name;
    page.appendChild(taskName);

    const taskPriority = document.createElement("p");
    taskPriority.className = "det-priority";
    taskPriority.innerText = "Priority: " + data.priority;
    page.appendChild(taskPriority);

    const taskDesc = document.createElement("p");
    taskDesc.className = "det-description";
    taskDesc.innerText = data.description ? "Description: " + data.description : "";
    page.appendChild(taskDesc);

    const dueDate = document.createElement("p");
    dueDate.className = "det-due-date";
    dueDate.innerText = "Date Due: " + (data.dueDate ? data.dueDate : "No deadline");
    page.appendChild(dueDate);

    // Container for text and checkbox input elements
    const taskComplete = document.createElement("div");
    taskComplete.className = "det-complete";
    page.appendChild(taskComplete);

    const textComplete = document.createElement("p");
    textComplete.innerText = "Complete: ";
    taskComplete.appendChild(textComplete);

    const checkComplete = document.createElement("input");
    checkComplete.type = "checkbox";
    if (data.complete) { checkComplete.checked = "true"; }
    taskComplete.appendChild(checkComplete);

    return page;

}

export default BuildDetailedTodoPage;