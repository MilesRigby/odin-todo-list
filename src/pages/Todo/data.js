import DataAccess from "../../data/ProjectData";
import PageDataTransferHandler from "../../data/PageDataTransferHandler";

const GetTodoData = () => {
    return DataAccess.GetTodoData(PageDataTransferHandler.todo.Retrieve().projectId);
}

const StoreTodoId = (id) => {
    PageDataTransferHandler.details.Store(id);
}

export { GetTodoData, StoreTodoId };