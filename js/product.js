const banner = document.querySelector('.banner');
banner.addEventListener('mouseover', () => {
    banner.classList.add('cursor-pointer');
});
banner.addEventListener('mouseout', () => {
    banner.classList.remove('cursor-pointer');
});