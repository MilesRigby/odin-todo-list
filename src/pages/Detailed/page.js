const BuildDetailedTodoPage = () => {

    // page content wrapper
    const pageContent = document.createElement("div");
    pageContent.className = "todo-details-page";

    // test content
    const testText = document.createElement("p");
    pageContent.appendChild(testText);
    testText.innerText = "Details page test";

    // return page
    return pageContent;

}

export default BuildDetailedTodoPage;