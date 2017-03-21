$(document).ready(function(){

    $("button#cat").click(function() {
      $("span#catspan").css("background-color", "green");
      $("h4#cat").prepend("<p>Meow</p>");
      $("h4#dog").prepend("<p>Bark</p>");
      $("span#catspan").click(function() {
          $(this).remove();
      });
    });

    $("button#dog").click(function() {
      $("span#dogspan").css("background-color", "green");
      $("h4#dog").prepend("<p>Bark</p>");
      $("span#dogspan").click(function() {
        $(this).remove();
    });
  });

  $("h2.javabox").click(function() {
    $("h2.operbox").prepend("<img id='puppy' src='img/bark.png'>");


  });

});
