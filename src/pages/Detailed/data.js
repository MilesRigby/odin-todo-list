import DataAccess from "../../data/ProjectData";
import PageDataTransferHandler from "../../data/PageDataTransferHandler";

const GetTaskData = () => {
    const Ids = PageDataTransferHandler.details.Retrieve();
    return DataAccess.GetTaskData(Ids.projectId, Ids.todoId);
}

export { GetTaskData };