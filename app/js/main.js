document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('accordion-item--active')) {
      parent.classList.remove('accordion-item--active');
    } else {
      document
        .querySelectorAll('.accordion-item')
        .forEach((child) => child.classList.remove('accordion-item--active'));
      parent.classList.add('accordion-item--active');
    }
  }),
);

let swiper1 = new Swiper('.slider-intro-container', {
  loop: true,

  pagination: {
    el: '.intro .dots',
    clickable: true,
  },

  navigation: {
    nextEl: '.intro .swiper-button-next',
    prevEl: '.intro .swiper-button-prev',
  },
});

let swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 75,
});
