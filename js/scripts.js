$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    var xp = $("input:radio[name=xp]:checked").val();
    console.log(xp)
    var uiorux = $("input:radio[name=uiorux]:checked").val();
    var os = $("input:radio[name=os]:checked").val();
    var drink = $("input:radio[name=drink]:checked").val();
    var music = $("input:radio[name=music]:checked").val();

    if ( xp === "beginner") {
    $("#respone1").show();
    $("#respone2").hide();
    $("#respone3").hide();
    }
    else if (xp === "some" && uiorux === "front") {
    $("#respone1").hide();
    $("#respone2").show();
    $("#respone3").hide();
    }
    else if (xp === "lots" && uiorux === "front") {
    $("#respone1").hide();
    $("#respone2").show();
    $("#respone3").hide();
    }
    else if (xp === "some" && uiorux === "back") {
    $("#respone1").hide();
    $("#respone2").hide();
    $("#respone3").show();
    }
    else if (xp === "lots" && uiorux === "back") {
    $("#respone1").hide();
    $("#respone2").hide();
    $("#respone3").show();
    }
  });
});