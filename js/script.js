// Fylo landing page - JavaScript
// TODO: email form validation (see instructions)
// Fylo landing page - email form validation
const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('email-error');
const field = emailInput.closest('.field');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(message) {
  errorMsg.textContent = message;
  field.classList.add('is-invalid');
  emailInput.setAttribute('aria-invalid', 'true');
}

function clearError() {
  errorMsg.textContent = '';
  field.classList.remove('is-invalid');
  emailInput.removeAttribute('aria-invalid');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = emailInput.value.trim();

  if (!EMAIL_REGEX.test(value)) {
    showError('Please enter a valid email address');
    emailInput.focus();
    return;
  }

  clearError();
  // TODO: send `value` to your server here
  alert('Thanks! We will be in touch at ' + value);
  form.reset();
});

// Remove the error as soon as the user starts correcting the email
emailInput.addEventListener('input', () => {
  if (field.classList.contains('is-invalid') && EMAIL_REGEX.test(emailInput.value.trim())) {
    clearError();
  }
});