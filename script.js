document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('seen')}),{threshold:.1});
document.querySelectorAll('.image-block,.feature-copy,.phone-frame,.about').forEach(e=>{e.classList.add('fade');io.observe(e)});
