/*

        <div id="add-project-modal">
            <form id="new-project-form">
                <p id="form-header">New Project</p>
                <div id="form-fields">
                    <label for="project-name">Name</label>
                    <input type="text" required>
                </div>
                <button type="submit">Add</button>
            </form>
            <button id="close-project-modal"><p>X</p></button>
        </div>

*/

import DataAccess from "../ProjectData";
import PageLoader from "../../pages/PageLoader";


// Constructs the modal containing a form allowing the use to add a new project to their list by name
const OpenAddProjectModal = () => {

    // Background prevents clicking on other page elements while modal is open
    const background = document.createElement("div");
    background.id = "modal-background";

    const modal = document.createElement("div");
    modal.id = "add-project-modal";
    background.appendChild(modal);

    // The form is used to create a new project on a submit event
    const form = document.createElement("form");
    form.id = "new-project-form";
    form.addEventListener("submit", (event) => { 
        event.preventDefault();
        CreateProject(event); 
    });
    modal.appendChild(form);

    const header = document.createElement("p");
    header.id = "form-header";
    header.innerText = "New Project";
    form.appendChild(header);

    const fields = document.createElement("div");
    fields.id = "form-fields";
    form.appendChild(fields);

    const nameLabel = document.createElement("label");
    nameLabel.for = "project-name";
    nameLabel.innerText = "Name";
    fields.appendChild(nameLabel);

    const nameField = document.createElement("input");
    nameField.id = "project-name";
    nameField.type = "text";
    nameField.name = "name";
    nameField.required = true;
    fields.appendChild(nameField);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = "Add";
    form.appendChild(submitButton);

    // User can close the form without adding a new project
    const closeButton = document.createElement("button");
    closeButton.id = "close-project-modal";
    closeButton.addEventListener("click", () => { CloseModal(); })
    modal.appendChild(closeButton);

    const closeButtonCross = document.createElement("p");
    closeButtonCross.innerText = "X";
    closeButton.appendChild(closeButtonCross);

    document.getElementsByTagName("body")[0].appendChild(background);

}

// Helper function that handles creation of new projects, then reloads the projects page to show the new project
const CreateProject = (event) => { 

    const formData = new FormData(event.target);
    DataAccess.CreateNewProject(formData.get("name")); 
    CloseModal();
    PageLoader("projects");

}

// Closes the modal by accessing its highest element in the DOM tree by ID.
const CloseModal = () => { document.getElementById("modal-background").remove(); }

export default OpenAddProjectModal;