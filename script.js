document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("menu-open");
});

// JavaScript for toggling menu on mobile
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".navbar-nav").classList.toggle("show");
  document.querySelector(".menu-toggle").style.display = "none";
  document.querySelector(".close-menu").style.display = "block";
});

document.querySelector(".close-menu").addEventListener("click", function () {
  document.querySelector(".navbar-nav").classList.remove("show");
  document.querySelector(".menu-toggle").style.display = "block";
  document.querySelector(".close-menu").style.display = "none";
});
