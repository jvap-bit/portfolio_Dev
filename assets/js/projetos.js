// ============================================================
// 1. DEBOUNCE (Otimiza a performance do scroll)
// ============================================================
const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// ============================================================
// 2. ANIME SCROLL (Faz os cards subirem suavemente)
// ============================================================
const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.scrollY + window.innerHeight * 0.85;
  target.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      // Opcional: remove a classe se quiser que a animação repita ao subir
      // element.classList.remove(animationClass);
    }
  });
}

// Executa logo ao abrir a página para mostrar os primeiros itens
animeScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 150)
  );
}

// ============================================================
// 3. BACKGROUND DO HEADER (Muda o topo ao rolar)
// ============================================================
const headerNav = document.querySelector(".header-container");

function addBackground() {
  if (document.documentElement.scrollTop > 50) {
    headerNav.style.background = "rgba(5, 5, 5, 0.95)";
    headerNav.style.boxShadow = "0 2px 20px rgba(55, 255, 0, 0.1)";
  } else {
    headerNav.style.background = "rgba(5, 5, 5, 0.8)";
    headerNav.style.boxShadow = "none";
  }
}

document.addEventListener("scroll", addBackground);

// ============================================================
// 4. MENU RESPONSIVO (Se usar o botão de hamburguer)
// ============================================================
const btnMenu = document.querySelector(".btn-menu");
const menuNav = document.querySelector(".navegacao");

if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    menuNav.classList.toggle("active");
  });
}