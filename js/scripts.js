$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    var xp = $("input:radio[name=xp]:checked").val();
    console.log(xp)
    var uiorux = $("input:radio[name=uiorux]:checked").val();
    var os = $("input:radio[name=os]:checked").val();
    var drink = $("input:radio[name=drink]:checked").val();
    var music = $("input:radio[name=music]:checked").val();

    if ( drink === "weird") {
    $("#respone1").hide();
    $("#respone2").hide();
    $("#respone3").hide();
    $("#respone4").show();
    $("#respone5").hide();
    }
    else if ( xp === "beginner") {
    $("#respone1").show();
    $("#respone2").hide();
    $("#respone3").hide();
    $("#respone4").hide();
    $("#respone5").hide();
    }
    else if (xp === "lots" && uiorux === "back" && os === "linux" && music === "classical" && drink === "coffee") {
    $("#respone1").hide();
    $("#respone2").hide();
    $("#respone3").hide();
    $("#respone4").hide();
    $("#respone5").show();
    }
    else if (xp === "some" && uiorux === "front" && os === "windows") {
    $("#respone1").hide();
    $("#respone2").hide();
    $("#respone3").show();
    $("#respone4").hide();
    $("#respone5").hide();
    }
    else if (xp === "some" && uiorux === "back" && os === "windows") {
    $("#respone1").hide();
    $("#respone2").hide();
    $("#respone3").show();
    $("#respone4").hide();
    $("#respone5").hide();
    }
    else if (xp === "lots" && uiorux === "front" && os === "windows") {
    $("#respone1").hide();
    $("#respone2").hide();
    $("#respone3").show();
    $("#respone4").hide();
    $("#respone5").hide();
    }
    else if (xp === "some" && uiorux === "front") {
    $("#respone1").hide();
    $("#respone2").show();
    $("#respone3").hide();
    $("#respone4").hide();
    $("#respone5").hide();
    }
    else if (xp === "lots" && uiorux === "front") {
    $("#respone1").hide();
    $("#respone2").show();
    $("#respone3").hide();
    $("#respone4").hide();
    $("#respone5").hide();
    }
    else if (xp === "some" && uiorux === "back") {
    $("#respone1").hide();
    $("#respone2").hide();
    $("#respone3").show();
    $("#respone4").hide();
    $("#respone5").hide();
    }
    else if (xp === "lots" && uiorux === "back") {
    $("#respone1").hide();
    $("#respone2").hide();
    $("#respone3").show();
    $("#respone4").hide();
    $("#respone5").hide();
    }
    else if (xp === "lots" && uiorux === "front") {
    $("#respone1").hide();
    $("#respone2").show();
    $("#respone3").hide();
    $("#respone4").hide();
    $("#respone5").hide();
    }
  });
});