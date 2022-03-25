document.getElementById("p2").style.color = "red"
document.getElementById("p2").style.font = "red"
document.getElementById("p1").style.color = "white"
document.getElementById("p1").style.font = "white"
document.getElementById("pbu").style.color = "white"
document.getElementById("pbi").style.color = "white"
document.getElementById("BKI").style.color = "white"
document.getElementById("BKY").style.color = "white"


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myBasket").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.Basketbtn')) {
  var myBasket = document.getElementById("myBasket");
    if (myBasket.classList.contains('show')) {
      myBasket.classList.remove('show');
    }
  }
}

//When Show button is clicked, pop up asking for users locations should appear depending on which browser they use

var x = document.getElementById("geog");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
