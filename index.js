autoSlider();

let left = 0;

function autoSlider() {
  let timer;
  timer = setTimeout(sliderLeft, 3000);
}

function sliderLeft() {
  let polosa = document.getElementById("polosa");
  left = left - 128;
  if (left < -512) {
    left = 0;
  }
  polosa.style.left = left + "px";
  autoSlider();
  
}

// second slider

let offset = 0;
const sliderLine = document.querySelector(".featured__list");

document.querySelector(".slider-button-right").addEventListener("click", () => {
  offset = offset - 128;
  if (offset < -1720) {
    offset = -1720;
  }
//  else if (offset < -256) {
//     offset = -256;
//   }
  sliderLine.style.left = offset + "px";
});

document.querySelector(".slider-button-left").addEventListener("click", () => {
  offset = offset + 128;
  if (offset > 0) {
    offset = 0;
  }
  sliderLine.style.left = offset + "px";
});

// filter

const filterBox = document.querySelectorAll('.box');

document
  .querySelector(".filter-container")
  .addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return false;

    
    let filterClass = event.target.dataset["f"];


    filterBox.forEach((el) => {
      el.classList.remove("hiden");
      if (!el.classList.contains(filterClass)) {
        el.classList.add("hiden");
      }
    });
  });
