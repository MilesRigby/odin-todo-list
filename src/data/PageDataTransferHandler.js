const TransferableData = {
    todoListPage: {projectId: null},
    detailsPage: {todoId: null},
}

const TodoPageStore = (id) => { TransferableData.todoListPage.projectId = id; }
const TodoPageRetrieve = () => { return TransferableData.todoListPage; }

const PageDataTransferHandler = {

    todo: {
        Store : TodoPageStore,
        Retrieve: TodoPageRetrieve,
    }

}

export default PageDataTransferHandler;