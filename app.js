/**
 * ADAMIXTURE Showcase - Minimalist Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const imgDarlingtonia = document.getElementById('img-darlingtonia');

  const copyBibtexMain = document.getElementById('copy-main-bibtex');
  const copyBibtexHasegawa = document.getElementById('copy-bibtex-hasegawa');

  const bibtexAdamixture = `@article{saurinaricos2026adamixture,
  title     = {ADAMIXTURE: adaptive first-order optimization for biobank-scale genetic clustering},
  author    = {Saurina-i-Ric{\'o}s, Joan and Mas Montserrat, Daniel and Ioannidis, Alexander G.},
  journal   = {Bioinformatics},
  volume    = {42},
  number    = {Supplement\_1},
  pages     = {btag236},
  year      = {2026},
  publisher = {Oxford University Press},
  doi       = {10.1093/bioinformatics/btag236}
}`;

  const bibtexHasegawa = `@article{hasegawa2026connectivity,
  title     = {Connectivity and dispersal mode shape the landscape genetics of a carnivorous pitcher plant-arthropod metacommunity},
  author    = {Hasegawa, Nonno and Conover, Asa E. and Miryeganeh, Matin and Armitage, David W.},
  journal   = {bioRxiv},
  year      = {2026},
  doi       = {10.64898/2026.08.09.743144}
}`;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  function copyText(text, successMessage) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    });
  }

  if (copyBibtexMain) {
    copyBibtexMain.addEventListener('click', () => {
      copyText(bibtexAdamixture, 'ADAMIXTURE BibTeX copied!');
    });
  }

  if (copyBibtexHasegawa) {
    copyBibtexHasegawa.addEventListener('click', () => {
      copyText(bibtexHasegawa, 'Hasegawa et al. BibTeX copied!');
    });
  }

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
