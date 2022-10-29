let $ = document;

let sliderImg = $.querySelector("img");
let nextBtn = $.querySelector(".next");
let prevBtn = $.querySelector(".prev");

// data base
let sliderImgSrcs = ["image/1.jpg", "image/2.png", "image/3.jpg"];
let sliderIndex = 0;

// load EvetnListeners
nextBtn.addEventListener("click", nextSlider);
prevBtn.addEventListener("click", prevSlider);

function nextSlider(){
  sliderIndex = (sliderIndex + 1)%3;
  sliderImg.src = sliderImgSrcs[sliderIndex];
}
function prevSlider(){
  sliderIndex -= 1;
  if(sliderIndex === -1){
    sliderIndex = 2;
  }
  sliderImg.src = sliderImgSrcs[sliderIndex];
}
setInterval(nextSlider, 4000);