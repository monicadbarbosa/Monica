/* =========================================================
   CARROSSÉIS AUTOMÁTICOS
========================================================= */

function autoCarousel(track, speed = 0.5) {

  if (!track) return;

  // Guarda as imagens originais
  const items = Array.from(track.children);

  // Duplica os itens para criar o loop
  items.forEach(item => {
    track.appendChild(item.cloneNode(true));
  });

  let position = 0;

  function animate() {

    position -= speed;

    // Quando chega ao fim da primeira sequência,
    // volta ao início sem se notar o corte
    const firstItem = track.children[0];
    const firstItemWidth = firstItem.offsetWidth;

    if (position <= -(firstItemWidth * items.length)) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animate);
  }

  animate();
}


/* =========================================================
   PROJETOS HORIZONTAIS
========================================================= */

autoCarousel(
  document.querySelector('.carousel-track'),
  0.5
);


/* =========================================================
   PROJETOS DIGITAIS
========================================================= */

autoCarousel(
  document.querySelector('.digital-track'),
  0.5
);


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
