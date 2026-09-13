const taskContainer = document.getElementById("taskContainer");
// Creating an array of tasks
let tasks = [
    {
        title:"Go for shopping",
        status:"pending"
    },
    {
        title:"Do the laundry",
        status:"completed"
    }
];
//function to display tasks
function displayTasks() {
    tasks.forEach(function(task) {
        const taskDiv = document.createElement("div");
        taskDiv.innerHTML =`
        <p> Title:${task.title}</p>
        <p>Status:${task.status}</p>
        `;
        taskContainer.appendChild(taskDiv);
    });
}

displayTasks();