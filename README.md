# odin-todo-list
A to-do list web application in webpack which uses local storage to retain data, developed as part of The Odin Project

Features:
 - create projects by name. Each project is a list of todo list tasks.
 - create tasks on individual projects with five parameters:
   - name: text that states what the task is
   - priority: how urgent the user considers the task.
   - complete (always initialised to false): whether the user has marked the task as complete.
   - Due date (optional): DD-MM-YYYY format. Allows the user to set a deadline for a task.
   - description (optional): The user can use this to provide a more detailed description of a task if they need more than a short title.

Pages:
 - Projects: Opened on website start or by cliking the Projects navigation button at the top of the page, displays information on all of the user's projects, showing the project name, the number of tasks in it, and if applicable the due date of the soonest incomplete task in the project. Projects can be added or deleted with deletion prompting the user to confirm.

 - Todo: Opened by clicking a project on the projects page, displays a project's todo list of tasks. For each task the name, completion state and due date (if applicable) is shown, with the priority indicated by a slight green (low), blue (medium), or red (high) hue. Tasks can be added or deleted with deletion prompting the user to confirm. Allows checking or unchecking a task's completion state.

 - Detailed: Opened by clicking on a task on a project's todo list page, displays all of a task's information - name, priority, due date if applicable, whether the task is complete, and the full description if applicable. Allows checking or unchecking a task's completion state.


Storage:
 - Uses JSON strings stored in local data to persist user data between site visits.
 - Creates an initial project with a single task if there are no user projects already stored.