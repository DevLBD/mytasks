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
    $("li").dblclick(function() {
      $("#save-button").addClass("red");
    });
  });

// Makes the "Save your list" button black (or white, if Dark Mode is activated) if the user clicks it.
  $(document).ready(function(){
    $("#save-button").click(function() {
      $("#save-button").removeClass("red");
    });
  });

// Made with love in Pescara, Italy.
// Copyright © 2019, Lorenzo Barretta.