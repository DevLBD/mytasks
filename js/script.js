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
            sessionStorage.setItem("formFocused", "0");
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
        sessionStorage.setItem("formFocused", "1");
    });
});

// Makes the content uneditable and saves the list when the user press the ENTER key on their keyboard.
$(document).ready(function(){
    $("li").keypress(function(e){
        if (e.key == "Enter" || e.key == 13 && sessionStorage.getItem("contentEditable") == 1) {
            $("li").attr("contenteditable", "false");
            $("#save-button").removeClass("red");
            sessionStorage.setItem("contentEditable", "0");
            sessionStorage.setItem("formFocused", "0");
            saveList();
        }
    });
});

// Calls the "loadList" function when opening the page.
loadList();

// Creates a temporary JSON file to remember if the content is Editable and if the form is focused.
sessionStorage.setItem("contentEditable", "0");
sessionStorage.setItem("formFocused", "1");

// Tells the app if the form is focused.
var form = document.getElementById("todo-entry-box");
form.addEventListener("focus", function(){
    sessionStorage.setItem("formFocused", "1");
});

form.addEventListener("blur", function(){
    sessionStorage.setItem("formFocused", "0");
});
    
// Calls the "saveList" function when the user press the S key on their keyboard. 
$(document).ready(function(){
    $("*").keypress(function(e){
        if (e.key == "s" && sessionStorage.getItem("formFocused") != 1) {
            $("#save-button").removeClass("red");
            saveList();
            if (localStorage.getItem("notificationsAre") != "granted" && localStorage.getItem("alreadyAskedNotifications") != 1 && sessionStorage.getItem("maybeLaterActive") != 1) {
                $(".notificationask").removeClass("notshowing");
            }
        }
    });
});

// Calls the "clearCompletedItems" function when the user press the C key on their keyboard. 
$(document).ready(function(){
    $("*").keypress(function(e){
        if (e.key == "c" && sessionStorage.getItem("formFocused") != 1) {
            $("#save-button").addClass("red");
            clearCompletedItems();
        }
    });
});

// Calls the "emptyItems" function when the user press the A key on their keyboard. 
$(document).ready(function(){
    $("*").keypress(function(e){
        if (e.key == "a" && sessionStorage.getItem("formFocused") != 1) {
            $("#save-button").addClass("red");
            emptyItems();
        }
    });
});

// Tells the app if the user has set English as their language.
$(document).ready(function(){
    $("#langEng").click(function(){
        localStorage.setItem("hasSetItalian", "0");
    });
});

// Tells the app if the user has set Italian as their language.
$(document).ready(function(){
    $("#langIta").click(function(){
        localStorage.setItem("hasSetItalian", "1");
    });
});

// Reloads the page in Italian if the user wants to 250 ms after opening the app.
$(document).ready(function(){
    setTimeout(function(){
        if (localStorage.getItem("hasSetItalian") == 1 && sessionStorage.getItem("pageIsItalian") != 1) {
            window.location.href = "https://devlbd.github.io/mytasks/it"
        }
    }, 250);
});

// Reloads the page in English if the user wants to 250 ms after opening the app.
$(document).ready(function(){
    setTimeout(function(){
        if (localStorage.getItem("hasSetItalian") != 1 && sessionStorage.getItem("pageIsItalian") == 1) {
            window.location.href = "https://devlbd.github.io/mytasks/"
        }
    }, 250);
});

// If the user never enabled/disabled notifications, open notifications box when "Save your list" button is clicked.
$(document).ready(function(){
    $("#save-button").click(function() {
        if (localStorage.getItem("notificationsAre") != "granted" && localStorage.getItem("alreadyAskedNotifications") != 1 && sessionStorage.getItem("maybeLaterActive") != 1) {
            $(".notificationask").removeClass("notshowing");
        }
    });
});

// If the user accepts to enable notifications, Chrome will ask the user the permission.
$(document).ready(function(){
    $("#enableNotifications").click(function(){
        if (!("Notification" in window)) {
            if (sessionStorage.getItem("pageIsItalian") != 1) {
                alert("Sorry, your browser does not support notifications.");    
            } else {
                alert("Spiacente, il tuo browser non supporta le notifiche.");    
            }
            $("notificationask").addClass("notshowing");
            localStorage.setItem("alreadyAskedNotifications", "1");
        } else {
            Notification.requestPermission().then(function(result){
                console.log("Notifications are " + result + ".");
                $(".notificationask").addClass("notshowing");
                localStorage.setItem("notificationsAre", result);
            });
            notify("Good news! Notifications are now granted.");
        }
        localStorage.setItem("alreadyAskedNotifications", "1");
    });
});

// If the user does not accept, hide dialog box.
$(document).ready(function(){
    $("#disableNotifications").click(function(){
        localStorage.setItem("notificationsAre", "notgranted");
        localStorage.setItem("alreadyAskedNotifications", "1");
        $(".notificationask").addClass("notshowing");
    });
});

// If the user decides to choose later, hide dialog box and ask the next time.
$(document).ready(function(){
    $("#maybeLater").click(function(){
        sessionStorage.setItem("maybeLaterActive", "1");
        localStorage.setItem("alreadyAskedNotifications", "0");
        $(".notificationask").addClass("notshowing");
    });
});

// When the user clicks on the bell icon, show the dialog box again.
$(document).ready(function(){
    $(".bell").click(function(){
        $(".notificationask").removeClass("notshowing");
        localStorage.removeItem("alreadyAskedNotifications");
        localStorage.removeItem("notificationsAre");
    });
});

// Function that notifies the person.
function notify(message) {
    if (!("Notification" in window)) {
        if (sessionStorage.getItem("pageIsItalian") != 1) {
            alert("Sorry, your browser does not support notifications.");    
        } else {
            alert("Spiacente, il tuo browser non supporta le notifiche.");    
        }
    }
    else if (Notification.permission === "granted") {
        if (localStorage.getItem("hasSetItalian") != 1) {
            var title = "Reminder from My Tasks.";
            var text = "Looks like you have something to do right now. Tap to check.";
        } else {
            var title = "Promemoria da My Tasks.";
            var text = "Sembra che abbia qualcosa da fare proprio ora. Clicca per controllare.";
            var img = "/resources/twttr.png";
        }
        var notification = new Notification(title, { body: text, icon: img});
    }

    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function(permission) {
            if (permission === "granted") {
                var notificationapproved = new Notification(message);
            }
        });
    }
}



// Made with love in Pescara, Italy.
// Copyright © 2019, Lorenzo Barretta.