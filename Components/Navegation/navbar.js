var openSubMenu = document.querySelectorAll(".fa-chevron-down");
const subMenu = document.querySelectorAll(".sub-menu");

openSubMenu[1].addEventListener("click", function () {
  if (subMenu[1].style.display !== "flex") {
    subMenu[1].style.display = "flex";
  } else {
    subMenu[1].style.display = "none";
  }
});

openSubMenu[0].addEventListener("click", function () {
  if (subMenu[0].style.display !== "flex") {
    subMenu[0].style.display = "flex";
  } else {
    subMenu[0].style.display = "none";
  }
});
