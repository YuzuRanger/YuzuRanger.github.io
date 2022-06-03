/* loading animations */
var loadTimer;

function loadFunction() {
  loadTimer = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";

  setTimeout(showBack, 800);
}

function showBack() {
  document.getElementById("hero-back").style.display = "block";
  setTimeout(showAll, 800);
}

function showAll() {
  document.getElementById("hidden").style.display = "block";
}
