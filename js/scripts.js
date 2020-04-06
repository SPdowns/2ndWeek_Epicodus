$(document).ready(function() {
    let selection;

  $(".btn2").click(function() {
      $("#links").fadeToggle();
  });
  $("form#language").submit(function(event) {
      event.preventDefault();
      var xp = $("input:radio[name=xp]:checked").val();
      var uiOrUx = $("input:radio[name=uiOrUx]:checked").val();
      var os = $("input:radio[name=os]:checked").val();
      var drink = $("input:radio[name=drink]:checked").val();
      var music = $("input:radio[name=music]:checked").val();

      if (drink === "weird") {
        //   $("#respone1").hide();
        //   $("#respone2").hide();
        //   $("#respone3").hide();
            hideResult(selection)
          $("#respone4").removeClass("hidden");
        //   $("#respone5").hide();
        //   $("#respone6").hide();
          selection = "#response4"

      } else if (xp === "beginner") {
            hideResult(selection)
          $("#respone1").removeClass("hidden");
          selection = "#response1"
        //   $("#respone2").hide();
        //   $("#respone3").hide();
        //   $("#respone4").hide();
        //   $("#respone5").hide();
        //   $("#respone6").hide();
      } else if (xp === "lots" && uiOrUx === "back" && os === "linux" && music === "classical" && drink === "coffee") {
          $("#respone1").hide();
          $("#respone2").hide();
          $("#respone3").hide();
          $("#respone4").hide();
          $("#respone5").show();
          $("#respone6").hide();
      } else if (xp === "lots" && uiOrUx === "back" && music === "jazz") {
          $("#respone1").hide();
          $("#respone2").hide();
          $("#respone3").hide();
          $("#respone4").hide();
          $("#respone5").hide();
          $("#respone6").show();
      } else if (xp === "some" && uiOrUx === "front" && os === "windows") {
          $("#respone1").hide();
          $("#respone2").hide();
          $("#respone3").show();
          $("#respone4").hide();
          $("#respone5").hide();
          $("#respone6").hide();
      } else if (xp === "some" && uiOrUx === "back" && os === "windows") {
          $("#respone1").hide();
          $("#respone2").hide();
          $("#respone3").show();
          $("#respone4").hide();
          $("#respone5").hide();
          $("#respone6").hide();
      } else if (xp === "lots" && uiOrUx === "front" && os === "windows") {
          $("#respone1").hide();
          $("#respone2").hide();
          $("#respone3").show();
          $("#respone4").hide();
          $("#respone5").hide();
          $("#respone6").hide();
      } else if (xp === "some" && uiOrUx === "front") {
          $("#respone1").hide();
          $("#respone2").show();
          $("#respone3").hide();
          $("#respone4").hide();
          $("#respone5").hide();
          $("#respone6").hide();
      } else if (xp === "some" && uiOrUx === "back") {
          $("#respone1").hide();
          $("#respone2").hide();
          $("#respone3").show();
          $("#respone4").hide();
          $("#respone5").hide();
          $("#respone6").hide();
      } else if (xp === "lots" && uiOrUx === "back") {
          $("#respone1").hide();
          $("#respone2").hide();
          $("#respone3").show();
          $("#respone4").hide();
          $("#respone5").hide();
          $("#respone6").hide();
      } else if (xp === "lots" && uiOrUx === "front") {
          $("#respone1").hide();
          $("#respone2").show();
          $("#respone3").hide();
          $("#respone4").hide();
          $("#respone5").hide();
          $("#respone6").hide();
      }
  });
});

let hideResult = function(sel){
    if (sel === undefined){
        return
    }
    console.log(sel)
    $(`"${sel}"`).addClass("hidden")
}