const menuLinks = document.querySelector('.link-wrapper');
window.onload = function() {
    menuLinks.classList.add('hide-element');
};

const banner = document.querySelector('.banner');
banner.addEventListener('mouseover', () => {
    banner.classList.add('cursor-pointer')
})
banner.addEventListener('mouseout', () => {
    banner.classList.remove('cursor-pointer')
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuLinks.classList.remove('hide-element');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuLinks.classList.add('hide-element');
        menuOpen = false;
    }
});