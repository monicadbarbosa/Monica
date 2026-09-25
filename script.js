/* =========================================================
   CARROSSEL — PROJETOS HORIZONTAIS
========================================================= */

const carouselTrack = document.querySelector('.carousel-track');
const carouselPrev = document.querySelector('.carousel-btn.prev');
const carouselNext = document.querySelector('.carousel-btn.next');

if (carouselTrack && carouselPrev && carouselNext) {

  const scrollAmount = 445;

  carouselNext.addEventListener('click', () => {
    carouselTrack.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  carouselPrev.addEventListener('click', () => {
    carouselTrack.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  // AUTOPLAY
  setInterval(() => {

    const maxScroll =
      carouselTrack.scrollWidth - carouselTrack.clientWidth;

    if (carouselTrack.scrollLeft >= maxScroll - 5) {

      carouselTrack.scrollTo({
        left: 0,
        behavior: 'smooth'
      });

    } else {

      carouselTrack.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

    }

  }, 3000);

}


/* =========================================================
   CARROSSEL — PROJETOS DIGITAIS
========================================================= */

const digitalTrack = document.querySelector('.digital-track');
const digitalPrev = document.querySelector('.digital-prev');
const digitalNext = document.querySelector('.digital-next');

if (digitalTrack && digitalPrev && digitalNext) {

  const scrollAmount = 455;

  digitalNext.addEventListener('click', () => {
    digitalTrack.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  digitalPrev.addEventListener('click', () => {
    digitalTrack.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  // AUTOPLAY
  setInterval(() => {

    const maxScroll =
      digitalTrack.scrollWidth - digitalTrack.clientWidth;

    if (digitalTrack.scrollLeft >= maxScroll - 5) {

      digitalTrack.scrollTo({
        left: 0,
        behavior: 'smooth'
      });

    } else {

      digitalTrack.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

    }

  }, 3000);

}


/* =========================================================
   NAVEGAÇÃO SUAVE DO MENU
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function (event) {

    const targetId = this.getAttribute('href');

    if (targetId === '#') {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

  });

});


/* =========================================================
   NAVEGAÇÃO SUAVE DO MENU
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function (event) {

    const targetId = this.getAttribute('href');

    if (targetId === '#') {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

  });

});
