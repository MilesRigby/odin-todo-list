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

// Handle logic associated with loading pages via website navigation
const PageLoader = (pageName) => {
    RegisterUserHistory(pageName);
    LoadPage(pageName);
}

// search pages for pageName and call its corresponding function
const LoadPage = (pageName) => { 

    // Load page content
    const pageContent = pages[pageName](); 

    // Clear previous page and add new page content to the document
    pageContentArea.innerHTML = '';
    pageContentArea.appendChild(pageContent);

}

// Function to record when the user loads a page, using hisotry.pushState to allow browser
// navigation in this single page application
const RegisterUserHistory = (page) => {
    history.pushState({ page }, '', window.location.pathname);
}

// Allows use of the browser history navigation buttons
window.addEventListener('popstate', (event) => {
    const pageName = event.state.page;
    LoadPage(pageName);
});

// Must be used to change pages
export default PageLoader;