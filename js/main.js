// assets/js/main.js

/* Helper: open and close modals by ID */
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 200);
}

/* Index page popup (banner image click) */
function initIndexPopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('popup-overlay');
  const closeBtn = popup && popup.querySelector('.close-btn');
  if (!popup || !overlay || !closeBtn) return;

  function openPopup() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
  closeBtn.addEventListener('click', closePopup);
  overlay.addEventListener('click', closePopup);
  document.querySelectorAll('.slider .item img').forEach(img => {
    img.addEventListener('click', openPopup);
  });
}

/* 3D banner slider rotation */
function initBannerSlider() {
  const slider = document.querySelector('.slider');
  if (!slider) return;
  let angle = 0;
  function rotate() {
    angle = (angle + 1) % 360;
    slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${angle}deg)`;
    requestAnimationFrame(rotate);
  }
  rotate();
}

/* Event page: dynamic ticket & artist forms & success modal */
function initEventForms() {
  const buttons = document.querySelectorAll('.event-btn');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const formType = btn.dataset.formType;
      const container = document.getElementById('dynamic-form-container');
      const formModal = document.getElementById('form-modal');
      if (!container || !formModal) return;

      // Generate form
      container.innerHTML = formType === 'tickets' ? generateTicketForm() : generateArtistForm();
      openModal('form-modal');

      // Ticket count logic
      if (formType === 'tickets') {
        let count = 1;
        const input = document.getElementById('ticket-count');
        document.getElementById('increment').onclick = () => input.value = ++count;
        document.getElementById('decrement').onclick = () => {
          if (count > 1) input.value = --count;
        };
      }

      // Handle form submission
      container.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        closeModal('form-modal');
        const successType = document.getElementById('success-type');
        if (successType) {
          successType.textContent = formType === 'tickets' ? 'tickets' : 'registration';
          openModal('success-modal');
        }
      });
    });
  });

  // Close triggers
  document.getElementById('close-form-modal')?.addEventListener('click', () => closeModal('form-modal'));
  document.getElementById('return-to-events')?.addEventListener('click', () => {
    closeModal('success-modal');
    window.location.hash = '#events';
  });
  document.querySelectorAll('.modal-custom').forEach(modal => {
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(modal.id); });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal('form-modal');
      closeModal('success-modal');
    }
  });
}

/* Contact page inquiry type toggling & submission alert */
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
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function hide() {
    overlay.classList.remove('active');
    overlayImg.src = '';
    document.body.style.overflow = '';
  }

  images.forEach(img => img.addEventListener('click', () => show(img.src, img.alt)));
  closeBtn?.addEventListener('click', hide);
  overlay.addEventListener('click', e => { if (e.target === overlay) hide(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
}

// Form generators (unchanged)

function generateTicketForm() {
  return `
    <form id="ticket-form" autocomplete="off">
      <h4 class="mb-3">Get Tickets</h4>
      <div class="mb-3"><label class="form-label">Name</label>
        <input class="form-control" required>
      </div>
      <div class="mb-3"><label class="form-label">Email</label>
        <input type="email" class="form-control" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Number of Tickets</label>
        <div class="input-group">
          <button type="button" class="btn btn-secondary" id="decrement">-</button>
          <input type="number" min="1" value="1" class="form-control text-center" id="ticket-count" required>
          <button type="button" class="btn btn-secondary" id="increment">+</button>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Payment Method</label>
        <select class="form-select" required>
          <option>Cash</option>
          <option>Credit Card</option>
          <option>Crypto</option>
        </select>
      </div>
      <button class="btn btn-primary w-100" type="submit">Submit</button>
    </form>`;
}

function generateArtistForm() {
  return `
    <form id="artist-form" autocomplete="off">
      <h4 class="mb-3">Register as Artist</h4>
      <div class="mb-3"><label class="form-label">Name</label>
        <input class="form-control" required>
      </div>
      <div class="mb-3"><label class="form-label">Email</label>
        <input type="email" class="form-control" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Role</label>
        <select class="form-select" required>
          <option>Solo Artist</option>
          <option>Group/crew</option>
          <option>Rapper</option>
          <option>Singer</option>
          <option>Dancer</option>
          <option>Writers</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Performance Requirements</label>
        <textarea class="form-control" placeholder="Tech riders, equipment needs, etc."></textarea>
      </div>
      <button class="btn btn-primary w-100" type="submit">Submit</button>
    </form>`;
}

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