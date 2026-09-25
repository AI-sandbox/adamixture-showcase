/**
 * ADAMIXTURE Showcase - Minimalist Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const imgDarlingtonia = document.getElementById('img-darlingtonia');

  // Lightbox handlers
  if (imgDarlingtonia && lightbox && lightboxImg) {
    imgDarlingtonia.addEventListener('click', () => {
      lightboxImg.src = imgDarlingtonia.src;
      lightboxCaption.textContent = 'Estimated individual ancestry proportions for Darlingtonia californica (ADAMIXTURE K=3, K=4 supported by 5-fold CV)';
      lightbox.classList.add('active');
    });

    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
      }
    });
  }
});
