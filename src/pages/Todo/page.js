import BuildTodoList from "./dynamicContent";
import GetTodoData from "./data";

// Call on functions to produce the main content for a todo list, including title and "add" button
const BuildTodoPage = () => {

    const todoData = GetTodoData();

    const pageContent = document.createElement("div");
    pageContent.id = "todo-page-content-wrapper";

    const todoHeader = document.createElement("p");
    todoHeader.className = "list-header";
    todoHeader.innerText = todoData.name;
    pageContent.appendChild(todoHeader);

    pageContent.appendChild(BuildTodoList(todoData.todoItems));

    const addTodoItemButton = document.createElement("button");
    addTodoItemButton.id = "add-todo-item";
    pageContent.appendChild(addTodoItemButton);

    const buttonText = document.createElement("p");
    buttonText.innerText = "+";
    addTodoItemButton.appendChild(buttonText);

    // return page
    return pageContent;

}

export default BuildTodoPage;