import DataAccess from "../ProjectData";
import PageLoader from "../../pages/PageLoader";
import { ValidateDateFormat } from "../../utils/date";


// Constructs the modal containing a form allowing the user to add a new task to a specific project
const OpenAddTaskModal = (projectId) => {

    // Background prevents clicking on other page elements while modal is open
    const background = document.createElement("div");
    background.id = "modal-background";

    const modal = document.createElement("div");
    modal.id = "add-task-modal";
    background.appendChild(modal);

    // The form is used to create a new task on a submit event
    const form = document.createElement("form");
    form.id = "new-task-form";
    form.addEventListener("submit", (event) => { 
        event.preventDefault();
        CreateTask(event, projectId); 
    });
    modal.appendChild(form);

    const header = document.createElement("p");
    header.id = "form-header";
    header.innerText = "New Task";
    form.appendChild(header);

    const fields = document.createElement("div");
    fields.id = "form-fields";
    form.appendChild(fields);

    const nameLabel = document.createElement("label");
    nameLabel.for = "task-name";
    nameLabel.innerText = "Name";
    fields.appendChild(nameLabel);

    const nameField = document.createElement("input");
    nameField.id = "task-name";
    nameField.type = "text";
    nameField.name = "name";
    nameField.required = true;
    fields.appendChild(nameField);

    const priorityLabel = document.createElement("label");
    priorityLabel.for = "task-priority";
    priorityLabel.innerText = "Priority";
    fields.appendChild(priorityLabel);

    const priorityField = document.createElement("input");
    priorityField.id = "task-priority";
    priorityField.name = "priority";
    priorityField.setAttribute("list", "priority-options");
    priorityField.pattern = "low|medium|high";
    priorityField.required = true;
    fields.appendChild(priorityField);

    const priorityOptions = document.createElement("datalist");
    priorityOptions.id = "priority-options";
    fields.appendChild(priorityOptions);

    const optionLow = document.createElement("option");
    optionLow.value = "low";
    priorityOptions.appendChild(optionLow);

    const optionMed = document.createElement("option");
    optionMed.value = "medium";
    priorityOptions.appendChild(optionMed);

    const optionHigh = document.createElement("option");
    optionHigh.value = "high";
    priorityOptions.appendChild(optionHigh);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.for = "task-due-date";
    dueDateLabel.innerText = "Date due";
    fields.appendChild(dueDateLabel);

    const dueDateField = document.createElement("input");
    dueDateField.id = "task-due-date";
    dueDateField.name = "due-date";
    dueDateField.placeholder = "DD-MM-YYYY";
    fields.appendChild(dueDateField);

    const descLabel = document.createElement("label");
    descLabel.for = "task-description";
    descLabel.innerText = "Description";
    fields.appendChild(descLabel);

    const descField = document.createElement("textarea");
    descField.id = "task-due-date";
    descField.name = "description";
    fields.appendChild(descField);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = "Add";
    form.appendChild(submitButton);

    const errorMsg = document.createElement("p");
    errorMsg.id = "form-error-msg";
    form.appendChild(errorMsg);

    // User can close the form without adding a new task
    const closeButton = document.createElement("button");
    closeButton.id = "close-task-modal";
    closeButton.addEventListener("click", () => { CloseModal(); })
    modal.appendChild(closeButton);

    const closeButtonCross = document.createElement("p");
    closeButtonCross.innerText = "X";
    closeButton.appendChild(closeButtonCross);

    document.getElementsByTagName("body")[0].appendChild(background);

}

// Helper function that handles creation of new tasks, then reloads the todo list page to show the new task
const CreateTask = (event, projectId) => { 

    const formData = new FormData(event.target);

    // Validates due date format if present
    if (formData.get("due-date") == "" || ValidateDateFormat(formData.get("due-date"))) {
        DataAccess.CreateNewTodo(projectId, formData.get("name"), formData.get("due-date"), formData.get("priority"), formData.get("description")); 
        CloseModal();
        PageLoader("todo");
    } else {
        document.getElementById("form-error-msg").innerText = "Due date must be empty or a valid date in DD-MM-YYYY format";
    }

}

// Closes the modal by accessing its highest element in the DOM tree by ID.
const CloseModal = () => { document.getElementById("modal-background").remove(); }

export default OpenAddTaskModal;