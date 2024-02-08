//import the elements from html file
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//function to add task
function addTask(){
    const taskText = taskInput.value;
    if(taskText.trim() !== ""){
        ///create  a list so that the task shown in the form of list 
        const newTask = document.createElement("li");
        //create a span tag when task is shown on the task box
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        //create a edit button so that the user can edit any task
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            editTask(newTask,taskSpan)
        }
        // create the funciton for delete button for every particular task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteTask(newTask);
        }
        // when any task of the user is completed then there is a button when user press that button means that particular task is done

        const completeButton = document.createElement('button');
        completeButton.textContent= "✔";
        completeButton.onclick = function() {
            taskCompletion(taskSpan);
        }
        //these below are for that work after every task is added
        newTask.appendChild(taskSpan);
        newTask.appendChild(editButton);
        newTask.appendChild(deleteButton);
        newTask.appendChild(completeButton);
        taskList.appendChild(newTask);
        //after added a task the input value becomes empty
        taskInput.value = "";
    }
}
function deleteTask(task){
    task.remove();
}
function editTask(task,taskSpan){
    const updatedTaskText =prompt("Edit the task", taskSpan.textContent);
    if(updatedTaskText!==null&&updatedTaskText.trim()!==""){
        taskSpan.textContent = updatedTaskText;
    }
}

//function to confirm delete all the task
function confirmDeleteAll() {
    const confirmation = confirm("Are you sure to delete all tasks")
    if(confirmation){
        deleteAllTask()
    }
}
//function to delete all the saved task
function deleteAllTask() {
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}
//function for create for the button that shown the task is completed
function taskCompletion(taskSpan){
    const currentDecoration = taskSpan.style.textDecoration || "none";
    const newDecoration = currentDecoration === "none" ? "line-through" : "none";
    taskSpan.style.textDecoration = newDecoration;
}
