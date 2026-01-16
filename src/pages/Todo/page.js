const BuildTodoPage = () => {

    // page content wrapper
    const pageContent = document.createElement("div");
    pageContent.className = "todo-page";

    // test content
    const testText = document.createElement("p");
    pageContent.appendChild(testText);
    testText.innerText = "Todo list page test";

    // return page
    return pageContent;

}

export default BuildTodoPage;