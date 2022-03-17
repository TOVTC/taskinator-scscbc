var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    var listItemEl = document.createElement("li");
    listItemEl.className= "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

//click cannot be used as the event because the event listener is assigned to the entire form, so "submit" is used instead for click and enter
formEl.addEventListener("submit", createTaskHandler);