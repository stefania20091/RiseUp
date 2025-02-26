const links = document.querySelectorAll('nav a');
const ourServicesLink = document.querySelector('.our-services-link');
const servicesList = document.querySelector('.services-list');
const mainContent = document.querySelector('main');
const ourServicesButton = document.querySelector(".book-now")

servicesList.style.display = 'none';

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

const ourServicesLinks = () => {
  Array.from(mainContent.children).forEach(child => {
    if (child !== servicesList) {
      child.style.display = 'none';
    }
  });
  servicesList.style.display = 'block';
};
ourServicesButton.addEventListener('click', () => {
  ourServicesLinks();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
ourServicesLink.addEventListener('click', ourServicesLinks);
