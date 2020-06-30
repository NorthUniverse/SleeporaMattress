const banner = document.querySelector('.banner');
banner.addEventListener('mouseover', () => {
    banner.classList.add('cursor-pointer')
});
banner.addEventListener('mouseout', () => {
    banner.classList.remove('cursor-pointer')
});

const aboutImageDiv = document.querySelector('.body-about-background-image');
const aboutTextDiv = document.querySelector('.body-about-text');
aboutTextDiv.addEventListener('mouseover', () => {
    aboutImageDiv.classList.add('about-image-lighten');
});
aboutTextDiv.addEventListener('mouseout', () => {
    aboutImageDiv.classList.remove('about-image-lighten');
});