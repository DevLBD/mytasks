// Makes the "Save your list" button red if the user adds a task.
$(document).ready(function(){
    $("#add-button").click(function() {
      $("#save-button").addClass("red");
    });
  });
  
// Makes the "Save your list" button red if the user removes a completed task.  
  $(document).ready(function(){
    $("#clear-completed-button").click(function() {
      $("#save-button").addClass("red");
    });
  });
  
// Makes the "Save your list" button red if the user removes all tasks.  
  $(document).ready(function(){
    $("#empty-button").click(function() {
      $("#save-button").addClass("red");
    });
  });
  
// Makes the "Save your list" button red if the user marks a task as completed. 
  $(document).ready(function(){
    if (sessionStorage.getItem("contentEditable") != 1) {
      $("li").click(function() {
        $("#save-button").addClass("red");
      });
    }
  });

// Makes the "Save your list" button black (or white, if Dark Mode is activated) if the user clicks it.
  $(document).ready(function(){
    $("#save-button").click(function() {
      $("#save-button").removeClass("red");
    });
  });

// Checks if the list is editable and, if it is, it remembers the user to save their changes.
  $(document).ready(function(){
    if (sessionStorage.getItem("contentEditable") != 0) {
      $("#save-button").addClass("red");
    }
  })

// Made with love in Pescara, Italy.
// Copyright © 2019, Lorenzo Barretta.