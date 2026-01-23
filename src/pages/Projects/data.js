import DataAccess from "../../data/ProjectData";
import PageDataTransferHandler from "../../data/PageDataTransferHandler";
import PageLoader from "../PageLoader";

// To retrieve data from ProjectData.js for display on the projects page
// currently returns dummy data
const GetProjectData = () => {

    return DataAccess.GetProjectData();

}

const OpenTodoPage = (id) => {
    PageDataTransferHandler.todo.Store(id);
    PageLoader("todo");
}

export { GetProjectData, OpenTodoPage };