// Работа кнопки Бургер-меню
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// При клике на иконку бургер-меню:
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');      // Переключаем иконку (меняем на крестик "bx-x" и обратно)
    navbar.classList.toggle('active');      // Показываем / скрываем выпадающее меню
};
