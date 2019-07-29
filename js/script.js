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
      alert(name + ", we have received your message. thank you for reaching out to us!");
    }
  });
$(".imgOne").mouseover(function(){
 $("#get1").show();
});
$(".imgOne").mouseleave(function(){
 $("#get1").hide();
});



$(".imgtwo").mouseover(function(){
  $("#give1").show();
  });
  $(".imgtwo").mouseleave(function(){
    $("#give1").hide();
  });



$(".imgthree").mouseover(function(){
  $("#gain1").show();
});
  $(".imgthree").mouseleave(function(){
    $("#gain1").hide();
  });


$(".imgfour").mouseover(function(){
  $("#won1").show();
   });
  $(".imgfour").mouseleave(function(){
    $("#won1").hide();
  });

$(".imgfive").mouseover(function(){
  $("#will1").show();
 });
  $(".imgfive").mouseleave(function(){
    $("#will1").hide();
  });


$(".imgsix").mouseover(function(){
  $("#work1").show();
  });
  $(".imgsix").mouseleave(function(){
    $("#work1").hide();
});


$(".imgseven").mouseover(function(){
 $("#want1").show();
 });
 $(".imgseven").mouseleave(function(){
  $("#want1").hide();
  });

 $(".imgeight").mouseover(function(){
   $("#wish1").show();
  });
   $(".imgeight").mouseleave(function(){
     $("#wish1").hide();
   });
});

