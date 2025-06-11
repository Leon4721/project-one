// assets/js/main.js

let lastFocusedElement;

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('show');
    // Focus the first focusable element
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length) focusableElements[0].focus();

    // ------ Focus trap starts here ------
    function trap(e) {
      if (e.key === "Escape") {
        closeModal(id);
      }
      if (e.key === "Tab") {
        if (focusableElements.length === 0) return;
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    }
    modal.addEventListener('keydown', trap);

    // Remove trap on close
    modal._removeTrap = () => modal.removeEventListener('keydown', trap);
    // ------ Focus trap ends here ------
  }, 10);
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    modal.style.display = 'none';
    if (lastFocusedElement) lastFocusedElement.focus();
    // Remove focus trap
    if (modal._removeTrap) modal._removeTrap();
  }, 200);
}



/* Events: generate dynamic forms for tickets & media upload */
function initEventForms() {
  document.querySelectorAll('.btn-ticket').forEach(btn => {
    btn.addEventListener('click', () => openModal('ticket-popup'));
  });
  document.querySelectorAll('.btn-media').forEach(btn => {
    btn.addEventListener('click', () => openModal('media-popup'));
  });

  // Close ticket/media popups
  document.querySelectorAll('.popup .close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const popup = btn.closest('.popup');
      if (popup) closeModal(popup.id);
    });
  });

  // Quantity toggle inside generated forms
  document.addEventListener('click', e => {
    if (e.target.id === 'increment') {
      const count = document.getElementById('ticket-count');
      count.value = Math.min(parseInt(count.value) + 1, count.max);
    }
    if (e.target.id === 'decrement') {
      const count = document.getElementById('ticket-count');
      count.value = Math.max(parseInt(count.value) - 1, count.min);
    }
  });
}

/* Contact page: Inquiry type toggles + form validation */
function initContactInquiry() {
  const inquiry = document.getElementById('inquiry-type');
  const fileUpload = document.getElementById('file-upload');
  const songFile = document.getElementById('song-file');
  const form = document.getElementById('contact-form');
  const alertElem = document.getElementById('form-alert');
  if (!inquiry || !form) return;

  inquiry.addEventListener('change', () => {
    const show = inquiry.value === 'song';
    fileUpload.style.display = show ? 'block' : 'none';
    fileUpload.setAttribute('aria-expanded', show);
    songFile.tabIndex = show ? 0 : -1;
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    alertElem.textContent = 'Thanks! We’ve received your message. We’ll get back to you within 48 hours.';
    alertElem.classList.remove('visually-hidden');
    alertElem.focus();

    form.reset();
    fileUpload.style.display = 'none';
    fileUpload.setAttribute('aria-expanded', false);
    songFile.tabIndex = -1;
    form.classList.remove('was-validated');
  });
}

/* Gallery & articles: fullscreen image overlay */
function initFullscreenOverlay() {
  const images = document.querySelectorAll('.track-card img.card-img-top, .image-pane img');
  const overlay = document.getElementById('fullscreenOverlay');
  const overlayImg = document.getElementById('fullscreenImg');
  const closeBtn = document.getElementById('fullscreenClose');
  if (!images.length || !overlay || !overlayImg) return;

  function show(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('show'), 10);
  }
  function hide() {
    overlay.classList.remove('show');
    setTimeout(() => overlay.style.display = 'none', 200);
  }

  images.forEach(img => img.addEventListener('click', () => show(img.src, img.alt)));
  closeBtn && closeBtn.addEventListener('click', hide);
  overlay.addEventListener('click', e => { if (e.target === overlay) hide(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
}

// Initialize all on DOM ready
document.addEventListener('DOMContentLoaded', function () {
  initIndexPopup();
  initBannerSlider();
  initEventForms();
  initContactInquiry();
  initFullscreenOverlay();
});

// Initialize all on DOM ready

document.addEventListener('DOMContentLoaded', function () {
  initIndexPopup();
  initBannerSlider();
  initEventForms();
  initContactInquiry();
  initFullscreenOverlay();
});


 // Cache elements
    const inquiryType = document.getElementById('inquiry-type');
    const fileUpload   = document.getElementById('file-upload');
    const songFile    = document.getElementById('song-file');
    const form        = document.getElementById('contact-form');
    const formAlert   = document.getElementById('form-alert');

    // Toggle file-upload on inquiry change
    inquiryType.addEventListener('change', () => {
      const isSong = inquiryType.value === 'song';
      fileUpload.style.display = isSong ? 'block' : 'none';
      fileUpload.setAttribute('aria-expanded', isSong);
      songFile.tabIndex = isSong ? 0 : -1;
    });

    // Custom validation + in-page alert
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Run HTML5 constraint validation
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      // Show success message
      formAlert.textContent = 'Thanks! We’ve received your message. We’ll get back to you within 48 hours.';
      formAlert.classList.remove('visually-hidden');
      formAlert.focus();

      // Reset form state
      form.reset();
      fileUpload.style.display = 'none';
      fileUpload.setAttribute('aria-expanded', false);
      songFile.tabIndex = -1;
      form.classList.remove('was-validated');
    });
    /* Index page popup (banner image click) */
function initIndexPopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('popup-overlay');
  const closeBtn = document.querySelector('#popup .close-btn');
  if (!popup || !overlay || !closeBtn) return;

  function show() {
    openModal('popup');
  }
  function hide() {
    closeModal('popup');
  }

  overlay.addEventListener('click', hide);
  closeBtn.addEventListener('click', hide);
}

/* Banner carousel */
function initBannerSlider() {
  const slider = document.querySelector('.slider');
  const items = document.querySelectorAll('.slider .item');
  const quantity = parseInt(getComputedStyle(slider).getPropertyValue('--quantity'));
  let index = 1;

  function updateSlider() {
    items.forEach(item => {
      item.style.setProperty('--position', index);
    });
    index = index % quantity + 1;
  }

  setInterval(updateSlider, 5000);
  
}
import express from 'express';
import path from 'path';
const app = express();

// Tell Express: “Anything under /public is served at the web root”
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Running on http://localhost:3000'));


// When you open the modal
function openModal(modal) {
  modal.style.display = "block";
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("role", "dialog");
  document.body.style.overflow = "hidden"; // Prevent background scroll

  // Save previously focused element to restore later
  modal._previouslyFocused = document.activeElement;

  // Focus the first focusable element in the modal
  const focusableElements = modal.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusableElements.length) focusableElements[0].focus();

  // Listen for ESC and Tab
  modal.addEventListener('keydown', trapFocus);
}

// When you close the modal
function closeModal(modal) {
  modal.style.display = "none";
  modal.removeAttribute("aria-modal");
  modal.removeAttribute("role");
  document.body.style.overflow = "";

  // Restore focus
  if (modal._previouslyFocused) modal._previouslyFocused.focus();

  modal.removeEventListener('keydown', trapFocus);
}

// Trap focus and handle ESC
function trapFocus(e) {
  const modal = e.currentTarget;
  const focusableElements = modal.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const first = focusableElements[0];
  const last = focusableElements[focusableElements.length - 1];

  if (e.key === 'Escape') {
    closeModal(modal);
  }
  if (e.key === 'Tab') {
    if (focusableElements.length === 0) return;
    if (e.shiftKey) { // Shift + Tab
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else { // Tab
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  }
}
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  lastFocusedElement = document.activeElement;
  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('show');
    // Focus the first focusable element
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length) focusableElements[0].focus();

    // ------ Focus trap starts here ------
    function trap(e) {
      if (e.key !== "Tab") return;
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
    modal.addEventListener('keydown', trap);

    // Remove trap on close
    modal._removeTrap = () => modal.removeEventListener('keydown', trap);
    // ------ Focus trap ends here ------
  }, 10);
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    modal.style.display = 'none';
    if (lastFocusedElement) lastFocusedElement.focus();
    // Remove focus trap
    if (modal._removeTrap) modal._removeTrap();
  }, 200);
}
