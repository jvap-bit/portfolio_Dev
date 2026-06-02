// Animação ao Scroll
const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.scrollY + (window.innerHeight * 0.85);
    target.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        }
    });
}

// Botão Ver Mais das Skills
function toggleSkills(button) {
    const card = button.parentElement;
    card.classList.toggle('active');
    button.innerText = card.classList.contains('active') ? 'Ver menos' : 'Ver mais';
}

// Inicia as funções
animeScroll();
window.addEventListener('scroll', animeScroll);