const links = document.querySelectorAll('nav a');
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 4,

  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    }); 