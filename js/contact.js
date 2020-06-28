const banner = document.querySelector('.banner');
banner.addEventListener('mouseover', () => {
    banner.classList.add('cursor-pointer');
});
banner.addEventListener('mouseout', () => {
    banner.classList.remove('cursor-pointer');
});

const imageDiv = document.querySelector('.body-contact-background-image');
const contactTextDiv = document.querySelector('.body-contact-text');
contactTextDiv.addEventListener('mouseover', () => {
    imageDiv.classList.add('contact-image-lighten');
});
contactTextDiv.addEventListener('mouseout', () => {
    imageDiv.classList.remove('contact-image-lighten');
});