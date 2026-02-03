import { OpenDetailsPage, ToggleTaskCompletion } from './data.js';

// Handles construction of the UI elements for the full list of tasks in a project
const BuildTodoList = (todoItems) => {

    const todoList = document.createElement("div");
    todoList.id = "todo-list";

    for (let [id, data] of Object.entries(todoItems)) {
        todoList.appendChild(BuildTodoItem(id, data));
    }

    return todoList;

}

// Constructs a single task item to display in the todo list
const BuildTodoItem = (id, data) => {

    // Create the task display item
    const item = document.createElement("div");
    item.className = "todo-item";
    item.setAttribute("priority", data.priority);

    // Add link to the details for a specific task to each item
    item.addEventListener("click", () => {
        OpenDetailsPage(id);
    });

    // Section for name and due-date, used for controlling layout in css
    const mainInfo = document.createElement("div");
    mainInfo.className = "todo-main-info";
    item.appendChild(mainInfo);

    const name = document.createElement("p");
    name.className = "todo-item-name";
    name.innerText = data.name;
    mainInfo.appendChild(name);

    const dueDate = document.createElement("p");
    dueDate.className = "todo-item-due-date";
    dueDate.innerText = data.dueDate ? data.dueDate : "";
    mainInfo.appendChild(dueDate);

    const taskCompleteCheckbox = document.createElement("input");
    taskCompleteCheckbox.className = "todo-item-complete";
    taskCompleteCheckbox.type = "checkbox";
    if (data.complete) { taskCompleteCheckbox.checked = "true"; }

    // Prevents clicks on the task complete checkbox from registering on the task item itself
    // (avoids opening the details page when checking off tasks)
    taskCompleteCheckbox.addEventListener("click", (event) => {
        event.stopPropagation();
        ToggleTaskCompletion(id, event.target.checked);
    })
    
    item.appendChild(taskCompleteCheckbox);
    
    return item;

}

export default BuildTodoList;