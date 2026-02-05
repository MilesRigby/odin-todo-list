import DataAccess from "../../data/ProjectData";
import PageDataTransferHandler from "../../data/PageDataTransferHandler";

const GetIds = () => { return PageDataTransferHandler.details.Retrieve(); }

const GetTaskData = () => {
    const Ids = GetIds();
    return DataAccess.GetTaskData(Ids.projectId, Ids.todoId);
}

// Changes the completion state of a task in the project data
const ToggleTaskCompletion = (newState) => {
    const Ids = GetIds();
    DataAccess.UpdateTaskData(Ids.projectId, Ids.todoId, {complete: newState})
}

export { GetTaskData, ToggleTaskCompletion };