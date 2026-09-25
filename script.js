/* =========================================================
   CARROSSEL — PROJETOS HORIZONTAIS
========================================================= */

const carouselTrack = document.querySelector('.carousel-track');
const carouselPrev = document.querySelector('.carousel-btn.prev');
const carouselNext = document.querySelector('.carousel-btn.next');

if (carouselTrack && carouselPrev && carouselNext) {

  carouselNext.addEventListener('click', () => {
    carouselTrack.scrollBy({
      left: 445,
      behavior: 'smooth'
    });
  });

  carouselPrev.addEventListener('click', () => {
    carouselTrack.scrollBy({
      left: -445,
      behavior: 'smooth'
    });
  });

}


/* =========================================================
   CARROSSEL — PROJETOS DIGITAIS
========================================================= */

const digitalTrack = document.querySelector('.digital-track');
const digitalPrev = document.querySelector('.digital-prev');
const digitalNext = document.querySelector('.digital-next');

if (digitalTrack && digitalPrev && digitalNext) {

  digitalNext.addEventListener('click', () => {
    digitalTrack.scrollBy({
      left: 455,
      behavior: 'smooth'
    });
  });

  digitalPrev.addEventListener('click', () => {
    digitalTrack.scrollBy({
      left: -455,
      behavior: 'smooth'
    });
  });

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
