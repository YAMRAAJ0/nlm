function toggleMenu() {
    const nav = document.querySelector('header nav');
    const menuButton = document.querySelector('.menu-button');
    menuButton.classList.toggle('open');
    if (menuButton.classList.contains('open')) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
}
