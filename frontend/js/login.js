const passwordField = document.querySelector('#password');
const passwordToggle = document.querySelector('#password-toggle');
const loginForm = document.querySelector('#admin-login-form');
const loginStatus = document.querySelector('#login-status');

if (passwordField && passwordToggle) {
  passwordToggle.addEventListener('click', () => {
    const showPassword = passwordField.type === 'password';
    passwordField.type = showPassword ? 'text' : 'password';
    passwordToggle.textContent = showPassword ? 'Hide' : 'Show';
    passwordToggle.setAttribute('aria-pressed', String(showPassword));
    passwordToggle.setAttribute('aria-label', showPassword ? 'Hide password' : 'Show password');
  });
}

if (loginForm && loginStatus) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    loginStatus.textContent = 'The form is only a UI preview. Real admin authentication will be added in a later project stage.';
    loginStatus.classList.add('status-notice');
  });
}
