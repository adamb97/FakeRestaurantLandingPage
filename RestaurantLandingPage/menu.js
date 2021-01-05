const carouselSlide = document.querySelector(".slides");
const carouselImgs = document.querySelectorAll(".slides img");

// buttons

const previousBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// counter

let currentImgCounter = 1;
const size = carouselImgs[0].clientWidth;

carouselSlide.style.transform =
  "translateX(" + -size * currentImgCounter + "px)";

// listeners

nextBtn.addEventListener("click", () => {
  carouselSlide.style.transition = "transform 0.4 ease-in-out";
  currentImgCounter++;
  carouselSlide.style.transform =
    "translateX(" + -size * currentImgCounter + "px)";

  console.log(size);
});
