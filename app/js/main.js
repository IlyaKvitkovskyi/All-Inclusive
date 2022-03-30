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

let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 75,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
