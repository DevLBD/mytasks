// Adds tasks on list.
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

// Clears completed items.
var clearButton = document.getElementById("clear-completed-button");
clearButton.addEventListener("click", clearCompletedItems);
function clearCompletedItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

// Clears all items.
var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyItems);
function emptyItems() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

// Saves tasks on list.
var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);
function saveItems() {
    alert("Save Items button clicked!");
}
  
// Creates tasks on screen.
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");
function newToDoItem(itemText, completed) {
        var toDoItem = document.createElement("li");
        var toDoText = document.createTextNode(itemText);
        toDoItem.appendChild(toDoText);
        if (completed) {
            toDoItem.classList.add("completed");
        }

        toDoList.appendChild(toDoItem);
        toDoItem.addEventListener("dblclick", toggleToDoItemState);
    }

// Marks the task as completed if double clicked and makes the "Save your list" button red.
function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
    $(document).ready(function(){
        $("#save-button").addClass("red");
    });
}

var toDoInfo = {
    "task": "Thing I need to do",
    completed: false
};

// Creates a JSON file with a list of saved tasks when "Save your list" button is clicked.
function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
            var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText, "completed": toDo.classList.contains("completed") };

            toDos.push(toDoInfo);

        }

        localStorage.setItem("toDos", JSON.stringify(toDos));
    }

// Loads the list when opening the page.
function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) { 
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);

        }
    }
}

// Calls the "loadList" function when opening the page.
loadList();

// Made with love in Pescara, Italy.
// Copyright © 2019, Lorenzo Barretta.