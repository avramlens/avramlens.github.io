document.querySelectorAll('.img-container').forEach(item => {
    item.style.backgroundImage = `url(${item.getAttribute('data-src')})`;
    item.addEventListener('click', () => {
        const lightboxImage = document.getElementById('lightbox-image');
        lightboxImage.src = item.getAttribute('data-src');
        document.getElementById('lightbox-overlay').classList.add('lightbox-visible');
    });
});

document.getElementById('lightbox-overlay').addEventListener('click', () => {
    document.getElementById('lightbox-overlay').classList.remove('lightbox-visible');
});
