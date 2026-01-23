/*

Builds the dynamic content (the list of projects) for the main projects page

*/


// Interfaces with sibling file data.js to retrieve data for loading the page 
import { OpenTodoPage } from './data';

// Builds the list of projects using their data for the projects page
const BuildProjectsList = (projectsData) => {

    const projectsList = document.createElement("div");
    projectsList.id = "projects-list";

    // Create a card on the page displaying the information for each project
    for (const [id, data] of Object.entries(projectsData)) {
        projectsList.appendChild(BuildProjectCard(id, data));
    }

    return projectsList;

}

// Builds a card for a single project's data
const BuildProjectCard = (id, data) => {

    const card = document.createElement("div");
    card.className = "project-card";

    // Project card will open its todo list when clicked
    card.addEventListener("click", () => { 
        OpenTodoPage(id);
    });

    const main = document.createElement("div");
    main.className = "project-main-info";
    card.appendChild(main);

    const projectName = document.createElement("p");
    projectName.className = "project-name";
    projectName.innerText = data.name;
    main.appendChild(projectName);

    const itemCount = document.createElement("p");
    itemCount.className = "project-todo-count";
    itemCount.innerText = "Items: " + data.itemCount.toString();
    main.appendChild(itemCount);

    const nextStepDate = document.createElement("p");
    nextStepDate.className = "project-earliest-date";
    nextStepDate.innerText = "Earliest due: " + data.earliestDueDate;
    card.appendChild(nextStepDate);

    return card;

}

export default BuildProjectsList;