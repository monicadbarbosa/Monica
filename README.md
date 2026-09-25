# Portfólio — estrutura para PC

Esta versão foi construída para reproduzir a **estrutura visual da referência em desktop**, deixando os espaços de imagem preparados para substituíres pelos teus próprios projetos.

## Onde colocar as imagens

Coloca os ficheiros dentro de:

`images/`

Depois, em cada bloco:

```html
<div class="image-box poster-box">
```

podes trocar o placeholder por:

```html
<img src="images/nome-da-imagem.jpg" alt="Descrição">
```

E acrescentar no CSS:

```css
.image-box img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}
```

## Estrutura

1. Header
2. Hero oval com fundo às riscas
3. Barra de texto
4. 3 posters
5. 3 imagens horizontais
6. 3 posters
7. 3 projetos largos
8. Projetos digitais
9. Secção grande com telemóvel
10. Sobre mim
11. Footer

## GitHub Pages

Subir `index.html`, `style.css`, `images/` e este README para o repositório.

Depois:

**Settings → Pages → Deploy from a branch → main → / (root)**
