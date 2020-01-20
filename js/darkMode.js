// Clears old variables and Creates a variable with the hour set on the user's device.
var hours = 0;
var itsEvening = 0;
var data = new Date();
var hours = data.getHours();
var metaThemeColor = document.querySelector("meta[name=theme-color]");

// Checks if it's evening/night, if a preference is set, and if it returns "true", toggles Dark Mode.
if (localStorage.getItem("preferenceSet") != 1 && hours >= 19 || hours <= 06) {
  $(document).ready(function(){
    $("html").addClass("open");
    $(".darkbt").addClass("open");
    $(".btmy").addClass("open");
    $(".todo-wrapper").addClass("open");
    $(".bt").addClass("open");
    $("h5").addClass("open");
    $("li").addClass("open");
    $("p").addClass("open");
    $(".form").addClass("open");
    $(".intro").toggleClass("open");
    $(".languages").toggleClass("open");
  });
  var itsEvening = 1;
  changeThemeColorBlue();
} else {
  null
}

// If a preference isn't set, creates a JSON file to tell the app if Dark Mode is activated.
if (localStorage.getItem("preferenceSet") != 1) {
  if (itsEvening == 1) {
    localStorage.setItem("darkToggled", "1");
  } else {
    localStorage.setItem("darkToggled", "0");
  }
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
      $(".intro").toggleClass("open");
      $(".languages").toggleClass("open");
      if (localStorage.getItem("darkToggled") == 1) {
        localStorage.setItem("darkToggled", "0");
        changeThemeColorRed();
      } else {
        if (itsEvening == 1) {
          localStorage.setItem("darkToggled", "0");
          changeThemeColorRed();
        } else {
          localStorage.setItem("darkToggled", "1");
          changeThemeColorBlue();
        }
      }
      localStorage.setItem("preferenceSet", "1");
    });
  });

// Checks if Dark Mode was toggled before and, if it is, it activates it.
if (localStorage.getItem("darkToggled") == 1 && localStorage.getItem("preferenceSet") == 1)  {
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
      $(".intro").toggleClass("open");
      $(".languages").toggleClass("open");
      changeThemeColorBlue();
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
    localStorage.removeItem("preferenceSet");
    localStorage.removeItem("darkToggled");
  });
});

// Changes the theme color tag when Dark Mode is activated. (Only on Mobile).
function changeThemeColorBlue() {
  metaThemeColor.setAttribute("content", "rgb(0, 35, 110)");
}

// Changes the theme color tag when Dark Mode is deactivated. (Only on Mobile).
function changeThemeColorRed() {
  metaThemeColor.setAttribute("content", "red");
}

// Made with love in Pescara, Italy.
// Copyright © 2019, Lorenzo Barretta.