// main.js

// ========== Event Page: Modal Forms ==========

function generateTicketForm() {
  return `
    <form id="ticket-form" autocomplete="off">
      <h4 class="mb-3">Get Tickets</h4>
      <div class="mb-3">
        <label for="ticket-name" class="form-label">Name</label>
        <input id="ticket-name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="ticket-email" class="form-label">Email</label>
        <input id="ticket-email" type="email" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="ticket-count" class="form-label">Number of Tickets</label>
        <div class="input-group">
          <button type="button" class="btn btn-secondary" id="decrement">-</button>
          <input id="ticket-count" type="number" min="1" value="1" class="form-control text-center" required>
          <button type="button" class="btn btn-secondary" id="increment">+</button>
        </div>
      </div>
      <div class="mb-3">
        <label for="payment-method" class="form-label">Payment Method</label>
        <select id="payment-method" class="form-select" required>
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
      <div class="mb-3">
        <label for="artist-name" class="form-label">Name</label>
        <input id="artist-name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="artist-email" class="form-label">Email</label>
        <input id="artist-email" type="email" class="form-control" required>
      </div>
      <div class="mb-3">
        <label for="artist-role" class="form-label">Role</label>
        <select id="artist-role" class="form-select" required>
          <option>Solo Artist</option>
          <option>Group/crew</option>
          <option>Rapper</option>
          <option>Singer</option>
          <option>Dancer</option>
          <option>Writers</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="performance-req" class="form-label">Performance Requirements</label>
        <textarea id="performance-req" class="form-control" placeholder="Tech riders, equipment needs, etc."></textarea>
      </div>
      <button class="btn btn-primary w-100" type="submit">Submit</button>
    </form>`;
}

// Modal logic for Event forms
document.addEventListener('DOMContentLoaded', function () {
  // Only run if .event-btn exists
  if (document.querySelector('.event-btn')) {
    document.querySelectorAll('.event-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const formType = btn.getAttribute('data-form-type');
        const formModal = document.getElementById('form-modal');
        if (!formModal) return;
        document.getElementById('dynamic-form-container').innerHTML =
          formType === 'tickets' ? generateTicketForm() : generateArtistForm();
        openModal('form-modal');
        // Tickets +/- logic
        if (formType === 'tickets') {
          let count = 1;
          const countInput = document.getElementById('ticket-count');
          document.getElementById('increment').onclick = () => countInput.value = ++count;
          document.getElementById('decrement').onclick = () => {
            if (count > 1) countInput.value = --count;
          };
        }
        // Form submit for both forms
        document.querySelector('#dynamic-form-container form').onsubmit = function(e) {
          e.preventDefault();
          closeModal('form-modal');
          if(document.getElementById('success-type')) {
            document.getElementById('success-type').textContent =
              formType === 'tickets' ? 'tickets' : 'registration';
            openModal('success-modal');
          }
        };
      });
    });
    // Modal close handlers
    if(document.getElementById('close-form-modal')){
      document.getElementById('close-form-modal').onclick = () => closeModal('form-modal');
    }
    document.querySelectorAll('.modal-custom').forEach(modal => {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal(modal.id);
      });
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') {
        closeModal('form-modal');
        closeModal('success-modal');
      }
    });
    if(document.getElementById('return-to-events')){
      document.getElementById('return-to-events').onclick = function() {
        closeModal('success-modal');
        window.location.hash = '#events';
      };
    }
  }

  // ========== Contact Page: Inquiry Type ==========

  if(document.getElementById('inquiry-type')) {
    const inquiryType = document.getElementById('inquiry-type');
    const fileUpload   = document.getElementById('file-upload');
    const songFile    = document.getElementById('song-file');
    const form        = document.getElementById('contact-form');
    const formAlert   = document.getElementById('form-alert');
    inquiryType.addEventListener('change', () => {
      const isSong = inquiryType.value === 'song';
      fileUpload.style.display = isSong ? 'block' : 'none';
      fileUpload.setAttribute('aria-expanded', isSong);
      songFile.tabIndex = isSong ? 0 : -1;
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      formAlert.textContent = 'Thanks! We’ve received your message. We’ll get back to you within 48 hours.';
      formAlert.classList.remove('visually-hidden');
      formAlert.focus();
      form.reset();
      fileUpload.style.display = 'none';
      fileUpload.setAttribute('aria-expanded', false);
      songFile.tabIndex = -1;
      form.classList.remove('was-validated');
    });
  }

  // ========== Gallery/Articles: Fullscreen Image Overlay ==========
  // ... (rest unchanged)
});

let lastFocusedElement;

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  // 1) Remember what had focus
  lastFocusedElement = document.activeElement;
  // 2) Show & announce to AT
  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('show');
    // 3) Move focus into the modal
    const focusable = modal.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable) focusable.focus();
  }, 10);
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  setTimeout(() => {
    modal.style.display = 'none';
    // 4) Restore focus to the trigger
    if (lastFocusedElement) lastFocusedElement.focus();
  }, 200);
}
