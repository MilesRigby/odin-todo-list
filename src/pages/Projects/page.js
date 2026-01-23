import BuildProjectsList from "./dynamicContent";
import { GetProjectData } from "./data";

// Builds the main containers for projects page, calling on functions to produce the changeable content
const BuildProjectsPage = () => {

    // page content wrapper
    const pageContent = document.createElement("div");
    pageContent.id = "project-page-content-wrapper";

    const pageHeader = document.createElement("p");
    pageHeader.className = "list-header";
    pageHeader.innerText = "Your Projects";
    pageContent.appendChild(pageHeader);

    pageContent.appendChild(BuildProjectsList(GetProjectData()));

    // return page
    return pageContent;

}

export default BuildProjectsPage;