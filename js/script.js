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
});
