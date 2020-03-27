$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    var xp = $("input:radio[name=xp]:checked").val();
    var uiorux = $("input:radio[name=uiorux]:checked").val();
    var os = $("input:radio[name=os]:checked").val();
    var drink = $("input:radio[name=drink]:checked").val();
    var music = $("input:radio[name=music]:checked").val();

    var typeOfLanguage;

    if ( xp === "beginner") {
      answer = "Javascript"
    } else if (xp === "some" && uiorux === "front") {
      answer = "Ruby"
    } else if (xp === "lots") {
      answer = "C#Sharp"
    }

    $("#typeOfLanguage").text(answer)
  });
});