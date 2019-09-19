// Creates a variable with the hour set on the user's device.
var data = new Date();
var hours = data.getHours();

// Checks if it's evening/night, if Dark Mode was toggled before, if a preference is set, and if it returns "true", toggles Dark Mode.
if (hours > 19 && hours < 5 && localStorage.getItem("darkToggled") == null || localStorage.getItem("darkToggled") == 0  && localStorage.getItem("preferenceSet") == null) {
  var itsEvening = 1; 
}

// Toggles Dark Mode and creates a JSON file to remember if Dark Mode was toggled before.
$(document).ready(function(){
    $(".darkbt").click(function() {
      $("html").toggleClass("open");
      $(".darkbt").toggleClass("open");
      $(".btmy").toggleClass("open");
      $(".todo-wrapper").toggleClass("open");
      $(".bt").toggleClass("open");
      $("h5").toggleClass("open");
      $("li").toggleClass("open");
      $("p").toggleClass("open");
      $(".form").toggleClass("open");
      if (localStorage.getItem("darkToggled") == 1) {
        localStorage.setItem("darkToggled", "0");
      } else {
        localStorage.setItem("darkToggled", "1");
      }
      localStorage.setItem("preferenceSet", "1");
    });
  });

// Checks if Dark Mode was toggled before and, if it is, it activates it.
if (localStorage.getItem("darkToggled") == 1)  {
    $(document).ready(function(){
      $("html").toggleClass("open");
      $(".darkbt").toggleClass("open");
      $(".btmy").toggleClass("open");
      $(".todo-wrapper").toggleClass("open");
      $(".bt").toggleClass("open");
      $("h5").toggleClass("open");
      $("li").toggleClass("open");
      $("p").toggleClass("open");
      $(".form").toggleClass("open");
    });
}

// Activates Dark Mode when is evening.
if (itsEvening == 1)  {
  $(document).ready(function(){
      $("html").toggleClass("open");
      $(".darkbt").toggleClass("open");
      $(".btmy").toggleClass("open");
      $(".todo-wrapper").toggleClass("open");
      $(".bt").toggleClass("open");
      $("h5").toggleClass("open");
      $("li").toggleClass("open");
      $("p").toggleClass("open");
      $(".form").toggleClass("open");
      localStorage.setItem("darkToggled", "1");
  });
}

// Adds white text when Dark Mode is enabled.
$(document).ready(function(){
  $(".bt").click(function() {
    if (localStorage.getItem("darkToggled") == 1) {
      $("li").addClass("open");
    }
  });
});

// Reset Mode preference.
$(document).ready(function(){
  $(".darkbt").dblclick(function() {
    localStorage.removeItem("preferenceSet")
  });
});