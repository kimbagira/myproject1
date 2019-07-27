$(document).ready(function() {
  $("#put").click(function() {
    $("#put1").toggle();
    $("#put").toggle();
  });
  $("#put1").click(function() {
    $("#put").toggle();
    $("#put1").toggle();
  });

  $("#push").click(function() {
    $("#push1").toggle();
    $("#push").toggle();
  });
  $("#push1").click(function() {
    $("#push").toggle();
    $("#push1").toggle();
  });

  $("#pull").click(function() {
    $("#pull1").toggle();
    $("#pull").toggle();
  });
  $("#pull1").click(function() {
    $("#pull").toggle();
    $("#pull1").toggle();
  });

  $("#mybtn").click(function() {
    var name = $("#name1").val();
    var email = $("#name2").val();
    var message = $("#name3").val();
    if (name == "" || email == "" || message == "") {
      alert("you first fill the requirements, please!");
    } else {
      alert(
        name +
          ", we have received your message. thank you for reaching out to us!"
      );
    }
  });
});
