let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

let counterContainer = document.querySelector("#counter-container");
let counters = document.querySelectorAll(".counter-value");

let CounterObserver = new IntersectionObserver(
  (entries, observe) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 100;
    counters.forEach((counter, index) => {
      function updateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(updateCounter, 20);
        }
      }
      updateCounter();
    });
  },
  {
    root: null,
    threshold: 0.4,
  }
);

CounterObserver.observe(counterContainer);

const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("open");
});

nav.addEventListener("click", function () {
  if (window.matchMedia("(max-width: 900px)").matches) {
    if (menu.classList.toggle("open")) {
      menu.classList.remove("open");
      menu.classList.add("close");
      burger.classList.remove("active");
    } else if (burger.classList.toggle("active")) {
      burger.classList.remove("active");
    }
  }
});
