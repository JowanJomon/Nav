const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");

    //animate
    navLinks.forEach((link, index) => {
      if (link.getElementsByClassName.animatiom) {
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });

    //burger anim
  });
};
navSlide();
