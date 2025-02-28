const links = document.querySelectorAll('nav a');
const ourServicesLink = document.querySelector('.our-services-link');
const servicesList = document.querySelector('.services-list');
const mainContent = document.querySelector('main');
const ourServicesButton = document.querySelector(".book-now")
const teammates = document.querySelectorAll('.teammate');
const storyPage = document.querySelector(".story")
const storyPageLink = document.querySelector(".story-page-link")
const aboutBut = document.querySelector(".about")
const logo = document.querySelector(".logo")
const imgBet = document.querySelector('.img_bet');

servicesList.style.display = 'none';
storyPage.style.display = 'none';

let animEnabl = false;
const swiper = new Swiper('.swiper', {

  slidesPerView: 4,

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

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
const storyPageLinks = () => {
  Array.from(mainContent.children).forEach(child => {
    if (child !== storyPage) {
      child.style.display = 'none';
    }
  });
  storyPage.style.display = 'block';
};

storyPageLink.addEventListener('click', () => {
  storyPageLinks();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.style.backgroundColor = '#FFFFFF';
  setTimeout(() => {
    animEnabl = true;
  }, 1000);
});
aboutBut.addEventListener('click', () => {
  storyPageLinks();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.style.backgroundColor = '#FFFFFF';
  setTimeout(() => {
    animEnabl = true;
  }, 1000);
});

logo.addEventListener('click', () => {
  Array.from(mainContent.children).forEach(child => {
    if (child === storyPage || child === servicesList) {
      child.style.display = 'none';
    }
  });
  Array.from(mainContent.children).forEach(child => {
    if (child !== storyPage && child !== servicesList) {
      child.style.display = 'block';
    }
  });
  document.body.style.backgroundColor = '#B9C4C9';
  links.forEach(l => l.classList.remove('active'));
})

ourServicesButton.addEventListener('click', () => {
  ourServicesLinks();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.style.backgroundColor = '#3B4962';
});
ourServicesLink.addEventListener('click', () => {
  ourServicesLinks();
  document.body.style.backgroundColor = '#3B4962';
});

/*перехід по посиланню*/
document.querySelector('nav a[href="#contact"]').addEventListener('click', function(event) {
  event.preventDefault();
  const footer = document.querySelector('footer');
  footer.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 5000  });
  links.forEach(l => l.classList.remove('active'));
});

/*анімація*/
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    imgBet.classList.add('scroll-anim');
  } else {
    imgBet.classList.remove('scroll-anim');
  }
}, {
  rootMargin: '100px',
});
observer.observe(imgBet);

/*анімація*/

teammates.forEach((teammate, index) => {
  if (index % 2 === 0) {
    teammate.style.transform = 'translateX(50%)';
  } else {
    teammate.style.transform = 'translateX(-50%)';
  }
});

window.addEventListener('scroll', () => {
  if (animEnabl) {
    teammates.forEach((teammate) => {
      const rect = teammate.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (teammate.style.transform === 'translateX(50%)') {
          teammate.style.transform = 'translateX(-60px)';
        } else if (teammate.style.transform === 'translateX(-50%)') {
          teammate.style.transform = 'translateX(60px)';
        }
      }
    });
  }
});