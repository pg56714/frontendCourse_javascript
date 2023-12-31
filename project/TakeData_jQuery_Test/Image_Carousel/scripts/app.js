// 程式碼寫這裡
const carousel = document.querySelector(".carousel");

// 把document換成carousel，就可以只在carousel裡面找元素
const slides = carousel.querySelectorAll(".slide");
const track = carousel.querySelector(".slide-track");
const nextBtn = carousel.querySelector(".next-btn");
const prevBtn = carousel.querySelector(".prev-btn");
const navigator = carousel.querySelector(".navigator");
const indicators = navigator.querySelectorAll(".indicator");
let currentIndex = 0;

function updateNavigatorButtons(index) {
  // classList：css class的集合
  if (index == 0) {
    prevBtn.classList.add("hide");
    nextBtn.classList.remove("hide");
  } else if (index == slides.length - 1) {
    prevBtn.classList.remove("hide");
    nextBtn.classList.add("hide");
  } else {
    nextBtn.classList.remove("hide");
    prevBtn.classList.remove("hide");
  }
}

function updateIndicator(index) {
  indicators.forEach((indicator) => {
    if (Number(indicator.dataset.index) === Number(index)) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function moveSlide(index) {
  const w = track.clientWidth;
  track.style.transform = `translateX(-${index * w}px)`;
  updateNavigatorButtons(index);
  updateIndicator(index);
}

function setupSlides() {
  // clientWidth取得元素的寬度
  const w = track.clientWidth;
  slides.forEach((slide, i) => {
    slide.style.left = `${i * w}px`;
  });

  updateNavigatorButtons(currentIndex);
  updateIndicator(currentIndex);
}

setupSlides();

// event listeners
nextBtn.addEventListener("click", () => {
  currentIndex++;
  moveSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  moveSlide(currentIndex);
});

navigator.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const dot = e.target;
    currentIndex = dot.dataset.index;

    moveSlide(currentIndex);
  }
});
