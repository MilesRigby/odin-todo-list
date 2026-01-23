/*

This system enables storing of relevant data when the user clicks certain navigation links.
Currently used to store the IDs of projects and todo list items when the user navigates to them from another page.
The page they navigate from stores the data, which is retrieved by the next page when it loads.
This means pages do not need to directly send data to each other.

*/

// Stores data for transfer between pages
const TransferableData = {

    // The todo page needs to know what project to load the todo list of, by ID
    todoListPage: {
        projectId: null
    },

    // The details page for a todo list item needs to know what project the item is in, and the item's ID
    detailsPage: {
        projectId: null,
        todoId: null
    },
}

// Functions to store and retrieve data for the todo list page.
const TodoPageStore = (id) => { TransferableData.todoListPage.projectId = id; }
const TodoPageRetrieve = () => { return TransferableData.todoListPage; }

// Functions to store and retrieve data for the details page.
const DetailsPageStore = (projectId, todoId) => { 
    TransferableData.detailsPage.projectId = projectId; 
    TransferableData.detailsPage.todoId = todoId; 
}
const DetailsPageRetrieve = () => { return TransferableData.detailsPage; }

// A single object which allows access to the communication methods using a consistent syntax:
// navigation: pageName.Store(args); page load: pageName.Retrieve();
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