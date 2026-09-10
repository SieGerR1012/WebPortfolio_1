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


////////////////////////////////////////////////////////////////////////////
// Подсветка активной секции в navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Обработчик события прокрутки страницы
window.onscroll = () => {
    // Перебор секций для определения, какая секция активна
    sections.forEach(sec => {
        let top = window.scrollY;                    // Текущая позиция прокрутки сверху
        let offset = sec.offsetTop - 150;            // Верх секции со смещением
        let height = sec.offsetHeight;               // Высота секции
        let id = sec.getAttribute('id');             // ID секции

        // Если секция находится в поле зрения
        if (top >= offset && top < offset + height) {
            // Проходим по всем ссылкам меню:
            navLinks.forEach(links => {
                links.classList.remove('active');
                // Подсвечиваем ссылку, соответствующую текущей секции
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Сброс бургер-меню при прокрутке. Убирается крестик с иконки и закрывается выпадающее меню
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};