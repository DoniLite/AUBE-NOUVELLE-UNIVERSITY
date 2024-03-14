function ajouter() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.textContent = taskText;
        newTask.onclick = function() {
            this.parentNode.removeChild(this);
        };
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}
