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
   
}

displayTasks();
const taskForm =document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
taskForm.addEventListener("submit" , function(event)  {
    event.preventDefault();
    const title = document.getElementById("taskTitle").value;
    const status = document.getElementById("taskStatus").value;
    const newTask ={
        title: title,
        status: status
    };
    tasks.push(newTask);
    tasks.forEach(function(task) {
        const taskDiv = document.createElement("div");
        taskDiv.innerHTML =`
        <p> Title:${task.title}</p>
        <p>Status:${task.status}</p>
        `;
        taskContainer.appendChild(taskDiv);
    });
    console.log(newTask);
});