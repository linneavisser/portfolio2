import "./style.css";


// BURGER MENU
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});


// collapsible 
const mediaQuerySmall = window.matchMedia("(max-width: 928px)");
const mediaQueryFull = window.matchMedia("(min-width:1024px)");
var coll = document.getElementsByClassName("collapsible");
var i;


if (mediaQuerySmall.matches) { 
  for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
}
if (mediaQueryFull.matches) { 
  for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseover", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
}