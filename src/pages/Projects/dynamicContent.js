import { OpenTodoPage } from './data';

// Builds the list of projects using their data for the projects page
const BuildProjectsList = (projectsData) => {

    const projectsList = document.createElement("div");
    projectsList.id = "projects-list";

    for (const [id, data] of Object.entries(projectsData)) {
        projectsList.appendChild(BuildProjectCard(id, data));
    }

    return projectsList;

}

// Builds a card for a single project's data
const BuildProjectCard = (id, data) => {

    const card = document.createElement("div");
    card.className = "project-card";

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
    main.appendChild(projectName);

    const nextStepDate = document.createElement("p");
    nextStepDate.className = "project-earliest-date";
    nextStepDate.innerText = "Earliest due: " + data.earliestDueDate;
    card.appendChild(nextStepDate);

    return card;

}

export default BuildProjectsList;