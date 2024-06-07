const galleryImages = [
    { src: 'images/glc.jpeg', caption: 'GLC Stationwagon' },
    { src: 'images/gle coupe.jpg', caption: 'GLE Coupe' },
    { src: 'images/ml.jpeg', caption: 'ML' },
    { src: 'images/s580.jpg', caption: 'S580e' },
    { src: 'images/slk.jpeg', caption: 'SLK' }
];
// images are loaded above 
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    galleryImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.caption;
        imgElement.onclick = () => openLightbox(image);
        gallery.appendChild(imgElement);
    });
});
// function to open the light box below:
function openLightbox(image) {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-img').src = image.src;
    document.getElementById('caption').innerText = image.caption;
}
// function to close the light box below 
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
// function to sort the images from the ascending and descending order 
function sortImages(order) {
    const sortedImages = galleryImages.sort((a, b) => {
        if (order === 'asc') return a.caption.localeCompare(b.caption);
        if (order === 'desc') return b.caption.localeCompare(a.caption);
    });
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    sortedImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.caption;
        imgElement.onclick = () => openLightbox(image);
        gallery.appendChild(imgElement);
    });
}
