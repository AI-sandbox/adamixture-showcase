/**
 * ADAMIXTURE Showcase - Interactive Client Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const filterPills = document.querySelectorAll('.filter-pill');
  const caseCards = document.querySelectorAll('.case-card:not(.submit-card)');
  const submitCard = document.getElementById('submit-cta-card');
  const noResults = document.getElementById('no-results');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');

  // Counts
  const countAll = document.getElementById('count-all');
  const countEcology = document.getElementById('count-ecology');
  const countHuman = document.getElementById('count-human');
  const countPipeline = document.getElementById('count-pipeline');

  // Modals & Lightbox
  const lightbox = document.getElementById('figure-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

  const submitModal = document.getElementById('submit-modal');
  const submitModalCloseBtn = document.getElementById('submit-modal-close-btn');
  const headerSubmitBtn = document.getElementById('header-submit-btn');
  const heroSubmitBtn = document.getElementById('hero-submit-btn');
  const submitCardBtn = document.getElementById('submit-card-btn');
  const modalCopyTemplateBtn = document.getElementById('modal-copy-template-btn');

  // Toast
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  // Citation Buttons
  const copyCitationBtn = document.getElementById('copy-citation-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const citeCardBtns = document.querySelectorAll('.cite-card-btn');
  const navCiteBtn = document.getElementById('nav-cite-btn');

  let activeCategory = 'all';
  let searchQuery = '';

  // Citations Dictionary
  const citations = {
    adamixture: `@article{saurinaricos2026adamixture,
  title     = {ADAMIXTURE: adaptive first-order optimization for biobank-scale genetic clustering},
  author    = {Saurina-i-Ric{\'o}s, Joan and Mas Montserrat, Daniel and Ioannidis, Alexander G.},
  journal   = {Bioinformatics},
  volume    = {42},
  number    = {Supplement\_1},
  pages     = {btag236},
  year      = {2026},
  publisher = {Oxford University Press},
  doi       = {10.1093/bioinformatics/btag236}
}`,
    hasegawa: `@article{hasegawa2026connectivity,
  title     = {Connectivity and dispersal mode shape the landscape genetics of a carnivorous pitcher plant-arthropod metacommunity},
  author    = {Hasegawa, Nonno and Conover, Asa E. and Miryeganeh, Matin and Armitage, David W.},
  journal   = {bioRxiv},
  year      = {2026},
  doi       = {10.64898/2026.08.09.743144}
}`
  };

  const markdownTemplate = `### [Study Title]
* **Authors:** [Author List]
* **Preprint / Paper:** [URL / DOI]
* **Organism / Dataset:** [Species, sample count, SNP count]
* **ADAMIXTURE Usage:** [K values tested, CV settings, GPU/CPU runtime]
* **Key Finding:** [1-2 sentences on what ADAMIXTURE uncovered]
`;

  // -------------------------------------------------------------------------
  // Filtering & Search Logic
  // -------------------------------------------------------------------------
  function applyFilters() {
    let visibleCount = 0;
    const query = searchQuery.trim().toLowerCase();

    caseCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const keywords = (card.getAttribute('data-keywords') || '') + ' ' + card.innerText.toLowerCase();

      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const matchesSearch = !query || keywords.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Handle submit card visibility
    if (submitCard) {
      submitCard.style.display = query ? 'none' : '';
    }

    // Toggle No Results display
    if (visibleCount === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
  }

  // Category Pills Click
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category');
      applyFilters();
    });
  });

  // Search Input
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
    applyFilters();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    applyFilters();
    searchInput.focus();
  });

  resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    activeCategory = 'all';
    filterPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === 'all'));
    applyFilters();
  });

  // -------------------------------------------------------------------------
  // Lightbox Modal for Figures
  // -------------------------------------------------------------------------
  document.querySelectorAll('.figure-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      const src = wrapper.getAttribute('data-img-src');
      const caption = wrapper.getAttribute('data-caption') || '';
      if (src) {
        lightboxImg.src = src;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  }

  lightboxCloseBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // -------------------------------------------------------------------------
  // Submit Modal
  // -------------------------------------------------------------------------
  function openSubmitModal() {
    submitModal.classList.add('active');
    submitModal.setAttribute('aria-hidden', 'false');
  }

  function closeSubmitModal() {
    submitModal.classList.remove('active');
    submitModal.setAttribute('aria-hidden', 'true');
  }

  [headerSubmitBtn, heroSubmitBtn, submitCardBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', openSubmitModal);
    }
  });

  submitModalCloseBtn.addEventListener('click', closeSubmitModal);
  submitModal.addEventListener('click', (e) => {
    if (e.target === submitModal) {
      closeSubmitModal();
    }
  });

  modalCopyTemplateBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(markdownTemplate).then(() => {
      showToast('Markdown template copied to clipboard!');
    });
  });

  // -------------------------------------------------------------------------
  // Copy Citation & Toast
  // -------------------------------------------------------------------------
  function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  if (copyCitationBtn) {
    copyCitationBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(citations.adamixture).then(() => {
        copyBtnText.textContent = 'Copied!';
        showToast('BibTeX citation copied to clipboard!');
        setTimeout(() => {
          copyBtnText.textContent = 'Copy BibTeX';
        }, 2000);
      });
    });
  }

  citeCardBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-citation');
      const textToCopy = citations[key] || citations.adamixture;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Citation copied to clipboard!');
      });
    });
  });

  // Global ESC key listener for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeSubmitModal();
    }
  });
});
