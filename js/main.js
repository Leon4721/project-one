// main.js

// ========== Event Page: Modal Forms ==========

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

  if(document.querySelectorAll('.track-card img.card-img-top, .image-pane img').length){
    const overlay = document.getElementById('fullscreenOverlay');
    const overlayImg = document.getElementById('fullscreenImg');
    const overlayClose = document.getElementById('fullscreenClose');
    function showFullscreen(src, alt) {
      overlayImg.src = src;
      overlayImg.alt = alt || '';
      overlay.classList.add('active');
      document.body.style.overflow = "hidden";
    }
    function hideFullscreen() {
      overlay.classList.remove('active');
      overlayImg.src = "";
      document.body.style.overflow = "";
    }
    document.querySelectorAll('.track-card img.card-img-top, .image-pane img').forEach(img => {
      img.addEventListener('click', function () {
        showFullscreen(this.src, this.alt);
      });
    });
    if(overlayClose) overlayClose.addEventListener('click', hideFullscreen);
    if(overlay) overlay.addEventListener('click', function(e){
      if(e.target === overlay) hideFullscreen();
    });
    document.addEventListener('keydown', function(e){
      if(e.key === "Escape") hideFullscreen();
    });
  }
});

// ========== Helper Functions ==========
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
  }
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 200);
  }
}
//----index page pop up----//
 document.addEventListener('DOMContentLoaded', function() {
        // References
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('popup-overlay');
        const closeBtn = popup.querySelector('.close-btn');

        // Open popup
        function openPopup() {
          overlay.style.display = 'block';
          popup.style.display = 'block';
          document.body.style.overflow = 'hidden';
        }

        // Close popup
        function closePopup() {
          popup.style.display = 'none';
          overlay.style.display = 'none';
          document.body.style.overflow = '';
        }

        // Close when clicking the × or the overlay
        closeBtn.addEventListener('click', closePopup);
        overlay.addEventListener('click', closePopup);

        // Attach click–listeners to each slider image
        document.querySelectorAll('.slider .item img').forEach(img => {
          img.addEventListener('click', openPopup);
        });
      });
      // assets/js/script.js

// Popup functionality
const openBtn = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('popup-overlay');
const closeBtn = document.querySelector('#popup .close-btn');

openBtn.addEventListener('click', () => {
  overlay.classList.remove('d-none');
  popup.classList.remove('d-none');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.add('d-none');
  popup.classList.add('d-none');
});

// 3D banner slider animation
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  let angle = 0;

  function rotate() {
    angle = (angle + 1) % 360;
    slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${angle}deg)`;
    requestAnimationFrame(rotate);
  }

  rotate();
});
