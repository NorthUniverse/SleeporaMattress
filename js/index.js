const menuLinks = document.querySelector('.link-wrapper');
window.onload = function() {
    menuLinks.classList.add('display-none');
};

const banner = document.querySelector('.banner');
banner.addEventListener('mouseover', () => {
    banner.classList.add('cursor-pointer')
});
banner.addEventListener('mouseout', () => {
    banner.classList.remove('cursor-pointer')
});

const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelectorAll('.menu-item');
const contentWrapper = document.querySelector('.content-wrapper');
const footer = document.querySelector('.footer');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuLinks.classList.remove('display-none');
        contentWrapper.classList.add('display-none');
        menuItems.forEach(menuItem => {
            menuItem.classList.add('mobile-menu-styles');
            menuItem.childNodes[1].classList.add('each-menu-item');
            footer.classList.add('padding-top');
        });
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuLinks.classList.add('display-none');
        contentWrapper.classList.remove('display-none');
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('mobile-menu-styles');
            menuItem.childNodes[1].classList.remove('each-menu-item');
            footer.classList.remove('padding-top');
        });
        menuOpen = false;
    }
});