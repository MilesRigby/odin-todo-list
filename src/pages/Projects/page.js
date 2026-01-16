const BuildProjectsPage = () => {

    // page content wrapper
    const pageContent = document.createElement("div");
    pageContent.className = "projects-page";

    // test content
    const testText = document.createElement("p");
    pageContent.appendChild(testText);
    testText.innerText = "Projects page test";

    // return page
    return pageContent;

}

export default BuildProjectsPage;