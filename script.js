document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const menuLinks = document.querySelector(".menu-links");

  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", function () {
      hamburgerIcon.classList.toggle("open");
      menuLinks.classList.toggle("open");
    });
  }
});
