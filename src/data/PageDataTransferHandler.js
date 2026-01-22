const TransferableData = {
    todoListPage: {projectId: null},
    detailsPage: {todoId: null},
}

const TodoPageStore = (id) => { TransferableData.todoListPage.projectId = id; }
const TodoPageRetrieve = () => { return TransferableData.todoListPage; }

const DetailsPageStore = (id) => { TransferableData.detailsPage.projectId = id; }
const DetailsPageRetrieve = () => { return TransferableData.detailsPage; }

const PageDataTransferHandler = {

    todo: {
        Store : TodoPageStore,
        Retrieve: TodoPageRetrieve,
    },

    details: {
        Store : DetailsPageStore,
        Retrieve: DetailsPageRetrieve,
    }

}

export default PageDataTransferHandler;