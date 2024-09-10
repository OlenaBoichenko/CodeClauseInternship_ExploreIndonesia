var swiper = new Swiper(".mySwiper", {
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

let CounterObserver = new IntersectionObserver((entries, observe) => {
    let [entry] = entries;
    if(!entry.isIntersecting) return;

    let speed = 100; 
    counters.forEach((counter, index) => {
        function updateCounter() {
            const targetNumber = +counter.dataset.target;
            const initialNumber = +counter.innerText;
            const incPerCount = targetNumber / speed;
            if(initialNumber < targetNumber) {
                counter.innerText = Math.ceil(initialNumber + incPerCount);
                setTimeout(updateCounter, 20);
            }
        }
        updateCounter();
    })
},{
    root: null,
    threshold: 0.4,
})

CounterObserver.observe(counterContainer);