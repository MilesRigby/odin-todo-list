/*

Handles switching between the pages of the site.
Any code that wants to change the page needs to import the PageLoader function

*/

// import pages
import BuildProjectsPage from "./Projects/page.js";
import BuildTodoPage from "./Todo/page.js";
import BuildDetailedTodoPage from "./Detailed/page.js";

// get content div from html page
const pageContentArea = document.querySelector("#content");

// page names point to function to build and load the page content
const pages = {

    "projects": BuildProjectsPage,
    "todo": BuildTodoPage,
    "detailed": BuildDetailedTodoPage,

}

// search pages for pageName and call its corresponding function
const PageLoader = (pageName) => { 

    // Load page content
    const pageContent = pages[pageName](); 

    // Clear previous page and add new page content to the document
    pageContentArea.innerHTML = '';
    pageContentArea.appendChild(pageContent);

}

// Must be used to change pages
export default PageLoader;