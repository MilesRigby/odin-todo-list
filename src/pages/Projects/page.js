/*

Constructs all content for the main projects page
This is the only file in its folder that should be accessed from outside it.

*/

import BuildProjectsList from "./dynamicContent";
import { GetProjectData, AddProject } from "./data";

// Builds the main containers for projects page, calling on functions to produce the changeable content
const BuildProjectsPage = () => {

    // page content wrapper
    const pageContent = document.createElement("div");
    pageContent.id = "project-page-content-wrapper";

    const pageHeader = document.createElement("p");
    pageHeader.className = "list-header";
    pageHeader.innerText = "Your Projects";
    pageContent.appendChild(pageHeader);

    // Builds the list of project cards from the stored data
    pageContent.appendChild(BuildProjectsList(GetProjectData()));

    const addProjectButton = document.createElement("button");
    addProjectButton.id = "add-todo-item";
    addProjectButton.addEventListener("click", () => { AddProject() });
    pageContent.appendChild(addProjectButton);

    const buttonText = document.createElement("p");
    buttonText.innerText = "+";
    addProjectButton.appendChild(buttonText);

    // return page
    return pageContent;

}

export default BuildProjectsPage;