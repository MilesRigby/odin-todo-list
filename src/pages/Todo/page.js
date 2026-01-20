import PageDataTransferHandler from "../../data/PageDataTransferHandler";

const BuildTodoPage = () => {

    // page content wrapper
    const pageContent = document.createElement("div");
    pageContent.className = "todo-page";

    // test content
    const pageLoadData = PageDataTransferHandler.todo.Retrieve();
    const testText = document.createElement("p");
    pageContent.appendChild(testText);
    testText.innerText = pageLoadData.projectId;

    // return page
    return pageContent;

}

export default BuildTodoPage;