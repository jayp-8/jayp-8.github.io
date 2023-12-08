const previewArea = document.getElementById('preview-area');
const images = document.querySelectorAll('.slideshow-image');

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        goToSlide(index);
    });
});

function goToSlide(index) {
    const slideshowImages = document.querySelectorAll('.slideshow-image');
    slideshowImages.forEach((image) => {
        image.style.display = 'none';
    });
    slideshowImages[index].style.display = 'block';
}
 