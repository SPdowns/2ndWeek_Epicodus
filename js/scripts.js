$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    var xp = $("input:radio[name=xp]:checked").val();
console.log(xp)

    var uiorux = $("input:radio[name=uiorux]:checked").val();
    var os = $("input:radio[name=os]:checked").val();
    var drink = $("input:radio[name=drink]:checked").val();
    var music = $("input:radio[name=music]:checked").val();


    var typeOfLanguage;
});