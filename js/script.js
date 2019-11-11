// Adds tasks on list.
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
    $(document).ready(function(){
        $(".intro").addClass("hidden");
    });
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
        toDoItem.addEventListener("click", toggleToDoItemState);
    }

// Marks the task as completed if double clicked and makes the "Save your list" button red.
function toggleToDoItemState() {
    if (sessionStorage.getItem("contentEditable") != 1) {
        if (this.classList.contains("completed")) {
            this.classList.remove("completed");
        } else {
            this.classList.add("completed");
        }
        $(document).ready(function(){
            $("#save-button").addClass("red");
        });
    }
}

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
        $(document).ready(function(){
            $("li").attr("contenteditable", "false");
            sessionStorage.setItem("contentEditable", "0");
        });

        var savedListAfterSave = localStorage.getItem("toDos");
        if (savedListAfterSave == "[]") {
            $(document).ready(function(){
                $(".intro").removeClass("hidden");
            });
        }
    }

// Loads the list when opening the page.
function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) { 
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);

        }
    } else {
        $(document).ready(function(){
            $(".intro").removeClass("hidden");
        });
    }
}

// Removes the "hidden" class on the "intro" div if the user's list is empty.
var savedList = localStorage.getItem("toDos");
if (savedList == "[]") {
    $(document).ready(function(){
        $(".intro").removeClass("hidden");
    });
}

// Makes the content editable when the user double clicks a task.
$(document).ready(function(){
    $("li").dblclick(function(){
        $("li").attr("contenteditable", "true");
        sessionStorage.setItem("contentEditable", "1");
    });
});

// Makes the content uneditable and saves the list when the user presses the ENTER key on their keyboard.
$(document).ready(function(){
    $("li").keypress(function(e){
        if (e.key == "Enter" || e.key == 13 && sessionStorage.getItem("contentEditable") == 1) {
            $("li").attr("contenteditable", "false");
            $("#save-button").removeClass("red");
            sessionStorage.setItem("contentEditable", "0");
            saveList();
        }
    });
});

// Calls the "loadList" function when opening the page.
loadList();

// Creates a temporary JSON file to remember if the content is Editable.
sessionStorage.setItem("contentEditable", "0");


// Tells the app if the form is focused.
var form = document.getElementById("todo-entry-box");
form.addEventListener("focus", function(){
    sessionStorage.setItem("formFocused", "1");
});

form.addEventListener("blur", function(){
    sessionStorage.setItem("formFocused", "0");
});
    
// Calls the "saveList" function when the user presses the S key on their keyboard. 
$(document).ready(function(){
    $("*").keypress(function(e){
        if (e.key == "s" && sessionStorage.getItem("formFocused") != 1) {
            $("#save-button").removeClass("red");
            saveList();
        }
    });
});

// Calls the "clearCompletedItems" function when the user presses the C key on their keyboard. 
$(document).ready(function(){
    $("*").keypress(function(e){
        if (e.key == "c" && sessionStorage.getItem("formFocused") != 1) {
            $("#save-button").addClass("red");
            clearCompletedItems();
        }
    });
});

// Calls the "emptyItems" function when the user presses the A key on their keyboard. 
$(document).ready(function(){
    $("*").keypress(function(e){
        if (e.key == "a" && sessionStorage.getItem("formFocused") != 1) {
            $("#save-button").addClass("red");
            emptyItems();
        }
    });
});

// Made with love in Pescara, Italy.
// Copyright © 2019, Lorenzo Barretta.