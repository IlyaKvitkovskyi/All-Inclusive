$(function () {
  $('.top-header__burger').click(function (event) {
    $('.top-header__burger, .header-menu').toggleClass('active');
    $('html').toggleClass('lock');
  });
});
