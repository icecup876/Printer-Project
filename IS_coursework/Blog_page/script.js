document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let slideIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      index = slider.children.length - 1;
    } else if (index >= slider.children.length) {
      index = 0;
    }

    const transformValue = -100 * index + "%";
    slider.style.transform = `translateX(${transformValue})`;
    slideIndex = index;
  }

  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  function prevSlide() {
    showSlide(slideIndex - 1);
  }

  setInterval(nextSlide, 3000);

  slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
  slider.addEventListener("mouseleave", () => setInterval(nextSlide, 3000));
});
