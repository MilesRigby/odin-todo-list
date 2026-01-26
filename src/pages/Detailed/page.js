/*
<div id="details-content-wrapper">

    <p class="det-name">Task #2</p>
    <p class="det-priority">Priority: Med</p>
    <p class="det-description">
        Description: Morbi feugiat malesuada mauris eu luctus. Quisque vehicula sapien nec erat scelerisque fermentum. Suspendisse a neque scelerisque, condimentum urna ac, mattis odio. In vel lectus finibus, lobortis augue non, feugiat tortor. Suspendisse ornare quis ex non vehicula. Quisque quis dolor sed ante elementum fermentum. Mauris eu tellus est.
    </p>
    <p class="det-due-date">Date Due: 27-02-2026</p>
    <div class="det-complete">
        <p>Completed: </p> 
        <input type="checkbox">
    </div>

</div>
*/


// Constructs the content of the details page, displaying info about a single todo list task.
// Currently fixed-content, needs to be updated to load data from projectData via data.js.
const BuildDetailedTodoPage = () => {

    const page = document.createElement("div");
    page.id = "details-content-wrapper";

    const taskName = document.createElement("p");
    taskName.className = "det-name";
    taskName.innerText = "Task #2";
    page.appendChild(taskName);

    const taskPriority = document.createElement("p");
    taskPriority.className = "det-priority";
    taskPriority.innerText = "Priority: Med";
    page.appendChild(taskPriority);

    const taskDesc = document.createElement("p");
    taskDesc.className = "det-description";
    taskDesc.innerText = "Description: Morbi feugiat malesuada mauris eu luctus. Quisque vehicula sapien nec erat scelerisque fermentum. Suspendisse a neque scelerisque, condimentum urna ac, mattis odio. In vel lectus finibus, lobortis augue non, feugiat tortor. Suspendisse ornare quis ex non vehicula. Quisque quis dolor sed ante elementum fermentum. Mauris eu tellus est.";
    page.appendChild(taskDesc);

    const dueDate = document.createElement("p");
    dueDate.className = "det-due-date";
    dueDate.innerText = "Date Due: 27-02-2026";
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
    taskComplete.appendChild(checkComplete);

    return page;

}

export default BuildDetailedTodoPage;