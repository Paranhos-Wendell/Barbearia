var menuButton = document.getElementById("menu");
var menu = document.getElementById("mobile");
var info = document.getElementById("informacoes");
var infoText = document.getElementById("info")

info.addEventListener("click", function() {
  if (infoText.style.display === "block") {
    infoText.style.display = "none";
  } else {
    infoText.style.display = "block";
  }
});

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});