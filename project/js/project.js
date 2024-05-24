const images = document.querySelectorAll('.homeimg-container');

images.forEach(imageContainer => {
    const image = imageContainer.querySelector('.homeimg');
    const imgText = imageContainer.querySelector('.img-text');

    imageContainer.addEventListener('mouseenter', () => {
        image.classList.add('hovered');
        imgText.classList.add('visible');
    });

    imageContainer.addEventListener('mouseleave', () => {
        image.classList.remove('hovered');
        imgText.classList.remove('visible');
    });
});


