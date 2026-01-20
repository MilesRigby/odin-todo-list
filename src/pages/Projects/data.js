// To retrieve data from ProjectData.js for display on the projects page
// currently returns dummy data
const GetProjectData = () => {

    return [

        {
            name: "Project #1",
            itemCount: 4,
            earliestDueDate: "17-02-2025"
        },

        {
            name: "Project #2",
            itemCount: 7,
            earliestDueDate: "21-02-2025"
        },

        {
            name: "Project #3",
            itemCount: 2,
            earliestDueDate: "01-03-2025"
        },

    ]

}

export default GetProjectData;