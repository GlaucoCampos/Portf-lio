let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// Seleciona todos os links de navegação que possuem âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href')); // Seção alvo
        const headerOffset = document.querySelector('header').offsetHeight; // Altura do menu fixo
        const elementPosition = target.offsetTop; // Posição da seção
        const offsetPosition = elementPosition - headerOffset; // Ajuste da posição

        window.scrollTo({
            top: offsetPosition, // Rola para a posição corrigida
            behavior: 'smooth' // Animação suave
        });
    });
});
