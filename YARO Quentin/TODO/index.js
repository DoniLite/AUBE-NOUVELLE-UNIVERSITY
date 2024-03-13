
let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        li.onclick = () => toggleTask(index);
        taskList.appendChild(li);
    });
}


function toggleTask(index) {
    tasks[index] = tasks[index].startsWith("✅ ") ? tasks[index].slice(2) : "✅ " + tasks[index];
    displayTasks();
}


function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}


displayTasks();