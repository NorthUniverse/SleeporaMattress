const banner = document.querySelector('.banner');
banner.addEventListener('mouseover', () => {
    banner.classList.add('cursor-pointer');
});
banner.addEventListener('mouseout', () => {
    banner.classList.remove('cursor-pointer');
});

const imageTextLinks = document.querySelectorAll('.gallery-image-text-wrapper');
imageTextLinks.forEach(imageTextLink => {
    imageTextLink.addEventListener('mouseover', () => {
        imageTextLink.classList.add('gallery-image-text-focussed');
        const eachItem = imageTextLink.parentElement;
        const itemWrapper = imageTextLink.parentElement.childNodes[1];
        itemWrapper.classList.add('gallery-image-darken');
        eachItem.classList.add('gallery-each-item-focus');
    });
    imageTextLink.addEventListener('mouseout', () => {
        imageTextLink.classList.remove('gallery-image-text-focussed');
        const eachItem = imageTextLink.parentElement;
        const itemWrapper = imageTextLink.parentElement.childNodes[1];
        itemWrapper.classList.remove('gallery-image-darken');
        eachItem.classList.remove('gallery-each-item-focus');
    });
});