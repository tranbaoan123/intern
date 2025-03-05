const swiperInitialize = (sidesPerView) => {
  let swiper = new Swiper(".lecturers", {
    loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    slidesPerView: sidesPerView,
    spaceBetween: 40,
  });
};
// Change Swiper slide base on devices

const myFunction = (x) => {
  if (x.matches) {
    // If media query matches
    swiperInitialize(3);
  } else {
  }
};

// Create a MediaQueryList object
let media = window.matchMedia("(max-width: 900px)");

// Call listener function at run time
myFunction(media);

// Attach listener function on state changes
media.addEventListener("change", function () {
  myFunction(media);
});
swiperInitialize(4);
