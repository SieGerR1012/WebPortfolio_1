// Работа кнопки Бургер-меню
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// При клике на иконку бургер-меню:
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');      // Переключаем иконку (меняем на крестик "bx-x" и обратно)
    navbar.classList.toggle('active');      // Показываем / скрываем выпадающее меню
};


////////////////////////////////////////////////////////////////////////////
// Настройка глобальных параметров анимации ScrollReveal
ScrollReveal({
    distance: '80px',         // Дистанция сдвига элементов
    duration: 2000,           // Продолжительность анимации
    delay: 200                // Задержка перед началом анимации
});

// Появление элементов сверху
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// Появление элементов снизу
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// Появление элементов слева
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
// Появление элементов справа
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


////////////////////////////////////////////////////////////////////////////
// Анимированная смена текста в элементе с классом
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 100,   
    backSpeed: 100,   
    backDelay: 1000,  // Пауза перед удалением текста
    loop: true        // Бесконечный цикл анимации
});
