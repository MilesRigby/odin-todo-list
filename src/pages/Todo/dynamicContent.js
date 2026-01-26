import { StoreTodoId } from './data.js';

const BuildTodoList = (todoItems) => {

    const todoList = document.createElement("div");
    todoList.id = "todo-list";

    for (let [id, data] of Object.entries(todoItems)) {
        todoList.appendChild(BuildTodoItem(id, data));
    }

    return todoList;

}

const BuildTodoItem = (id, data) => {

    const item = document.createElement("div");
    item.className = "todo-item";
    item.setAttribute("priority", data.priority);

    item.addEventListener("click", () => {
        StoreTodoId(id);
        //PageLoader("detailed");
    });

    const mainInfo = document.createElement("div");
    mainInfo.className = "todo-main-info";
    item.appendChild(mainInfo);

    const name = document.createElement("p");
    name.className = "todo-item-name";
    name.innerText = data.name;
    mainInfo.appendChild(name);

    const dueDate = document.createElement("p");
    dueDate.className = "todo-item-due-date";
    dueDate.innerText = data.dueDate;
    mainInfo.appendChild(dueDate);

    const taskCompleteCheckbox = document.createElement("input");
    taskCompleteCheckbox.className = "todo-item-complete";
    taskCompleteCheckbox.type = "checkbox";
    if (data.complete) { taskCompleteCheckbox.checked = "true"; }

    taskCompleteCheckbox.addEventListener("click", (event) => {
        event.stopPropagation();
    })
    
    item.appendChild(taskCompleteCheckbox);
    
    return item;

}

export default BuildTodoList;