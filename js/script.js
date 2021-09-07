"use strict";
let galleyItems = document.querySelectorAll(".row .item");
let imgs = document.querySelectorAll(".row img");
let lightBox = document.querySelector(".lightbox");
let lightBoxImg = document.querySelector(".lightbox img");
let closeIcon = document.querySelector(".close");
let nextIcon = document.querySelector(".next");
let prevIcon = document.querySelector(".prev");
let lightBoxContent = document.querySelector(".lightbox-content");
let currentIndex = null;

galleyItems.forEach((item, i) => {
  item.addEventListener("click", function (e) {
    let imgSrc = imgs[i].getAttribute("src");
    lightBoxImg.setAttribute("src", imgSrc);
    lightBox.classList.replace("d-none", "d-block");
    currentIndex = i;
  });
});

function slide(i) {
  currentIndex += i;
  if (currentIndex >= imgs.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  lightBoxImg.setAttribute("src", imgs[currentIndex].getAttribute("src"));
}

function closeSlide() {
  lightBox.classList.replace("d-block", "d-none");
}

lightBox.addEventListener("click", function (e) {
  this.classList.replace("d-block", "d-none");
});

lightBoxContent.addEventListener("click", function (e) {
  e.stopPropagation();
});

nextIcon.addEventListener("click", () => slide(1));

prevIcon.addEventListener("click", () => slide(-1));

document.addEventListener("keyup", function (e) {
  if (e.code === "ArrowRight") {
    slide(1);
  } else if (e.code === "ArrowLeft") {
    slide(-1);
  } else if (e.code === "Escape") {
    closeSlide();
  }
});
closeIcon.addEventListener("click", closeSlide);

document.addEventListener("keyup", function (e) {
  if (e.ctrlKey && e.code === "KeyO") {
    console.log("fuck");
  }
});
