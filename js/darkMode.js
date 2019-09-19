var data = new Date();
var hours = data.getHours();

if (hours > 19 && localStorage.getItem("darkToggled") == null || localStorage.getItem("darkToggled") == 0  && localStorage.getItem("preferenceSet") == null) {
  var itsEvening = 1; 
} else {
  localStorage.setItem("darkToggled", "0")
}

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

$(document).ready(function(){
  $(".bt").click(function() {
    if (localStorage.getItem("darkToggled") == 1) {
      $("li").addClass("open");
    }
  });
});