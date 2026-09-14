let task=JSON.parse(localStorage.getItem("items")) || [];
const taskContainer = document.getElementById("taskContainer");
const allbtn=document.getElementById("allbtn");
const completedbtn=document.getElementById("completedbtn");
const pendingbtn=document.getElementById("pendingbtn");
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
localStorage.setItem("tasks",JSON.stringify(tasks));
//function to display tasks
function displayTasks() {
   
}

displayTasks(tasks);
const taskForm =document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
taskForm.addEventListener("submit" , function(event)  {
    event.preventDefault();
    const titleInput = document.getElementById("taskTitle").value;
    const statusInput = document.getElementById("taskStatus").value;
    
    const newTask ={
        title: document.getElementById("taskTitle").value,
        status: document.getElementById("taskStatus").value
    };
    console.log(newTask);
    tasks.push(newTask);
    displayTasks(tasks);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    tasks.forEach(function(task) {
        const taskDiv = document.createElement("div");
        taskDiv.innerHTML =`
        <p> Title:${task.title}</p>
        <p>Status:${task.status}</p>
        `;
        const deleteButton = document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.addEventListener("click",function() {
            taskDiv.remove();
        });
        localStorage.setItem("tasks",JSON.stringify(tasks));
        const completeButton = document.createElement("button");
        completeButton.textContent=" Complete";
        completeButton.addEventListener("click", function() {
        task.status = "completed";
            completeButton.textContent = "Completed  ✅";
        });
        localStorage.setItem("tasks",JSON.stringify(tasks));
        taskDiv.appendChild(completeButton);
        taskDiv.appendChild(deleteButton);
        taskContainer.appendChild(taskDiv);
    });
    console.log(newTask);
});
let taskstoDisplay =tasks;

 function displayTasks(taskstoDisplay) {
 taskContainer.innerHTML = "";
 tasksToDisplay.forEach(function(task) {
 const taskDiv = document.createElement("div");
 taskDiv.innerHTML=`
 <p>Title: ${task.title}</p>
 <p>Status:${task.status}</p>
 `;
 taskContainer.appendChild(taskDiv);
    });

 }
 displayTasks(tasks);

allbtn.addEventListener("click",function() {
    displayTasks(tasks);
});
completedbtn.addEventListener("click",function()  {
    completedTasks=tasks.filter(function(task) {
        return task.status ==="completed";
    });
    displayTasks(completedTasks);
});
pendingbtn.addEventListener("click",function() {
    pendingTasks=tasks.filter(function() {
        return task.status ==="pending";
    });
    displayTasks(pendingTasks);
});

 
let tasksToDisplay =tasks;

 function displayTasks(tasksToDisplay) {
 taskContainer.innerHTML = "";
 tasksToDisplay.forEach(function(task) {
 const taskDiv = document.createElement("div");
 taskDiv.innerHTML=`
 <p>Title: ${task.title}</p>
 <p>Status:${task.status}</p>
 `;
 taskContainer.appendChild(taskDiv);
    });

 }
 displayTasks(tasks);

allbtn.addEventListener("click",function() {
    displayTasks(tasks);
});
completedbtn.addEventListener("click",function()  {
    completedTasks=tasks.filter(function(task) {
        return task.status ==="completed";
    });
    displayTasks(completedTasks);
});
pendingbtn.addEventListener("click",function() {
    pendingTasks=tasks.filter(function() {
        return task.status ==="pending";
    });
    displayTasks(pendingTasks);
});

 
