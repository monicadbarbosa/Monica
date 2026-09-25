# Portfólio — GitHub Pages

Este projeto é uma versão em HTML/CSS/JavaScript inspirada na referência enviada.

## Estrutura

- `index.html` — estrutura da página
- `style.css` — layout, cores, tipografia e responsividade
- `script.js` — menu mobile, animações e lightbox
- `assets/` — pasta para colocares as tuas imagens reais

## Como colocar no GitHub

1. Cria um novo repositório no GitHub.
2. Faz upload de `index.html`, `style.css`, `script.js` e da pasta `assets`.
3. Vai a **Settings → Pages**.
4. Em **Build and deployment**, escolhe **Deploy from a branch**.
5. Seleciona `main` e `/ (root)`.
6. Guarda.
7. O GitHub vai gerar o endereço do teu site.

## Como substituir os projetos

No `index.html`, cada `.project-image` é atualmente uma composição CSS de demonstração.

Para usar imagens reais, podes substituir o conteúdo por:

```html
<div class="project-image">
  <img src="assets/meu-projeto.jpg" alt="Descrição do projeto">
</div>
```

E adicionar:

```css
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

O objetivo foi deixar a estrutura pronta para depois trocarmos as imagens pelos teus projetos reais.
