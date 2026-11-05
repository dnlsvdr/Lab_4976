"use strict";
// Classroom simulation only. The intended behaviour is specified in README.md.
// Credentials are deliberately public fixtures; this is not real authentication.
const DEMO_EMAIL = 'student@example.com';
const DEMO_PASSWORD = 'Playwright123!';
const app = document.querySelector('#app');
function showLogin() {
    app.innerHTML = `<section class="card"><h1>Log in</h1>
    <form id="login-form" novalidate>
      <div class="field"><label for="email">Email</label>
        <input id="email" name="email" type="email" autocomplete="username" aria-describedby="email-error">
        <p class="error" id="email-error"></p></div>
      <div class="field"><label for="password">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" aria-describedby="password-error">
        <p class="error" id="password-error"></p></div>
      <p class="error" id="login-error" role="alert"></p>
      <button class="primary" type="submit">Log in</button>
    </form><p class="form-note">Use the demo account from the lab instructions.</p></section>`;
    document.querySelector('#login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = String(data.get('email') ?? '');
        const password = String(data.get('password') ?? '');
        const emailError = !email.trim() ? 'Email is required.'
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Enter a valid email address.' : '';
        const passwordError = !password ? 'Password is required.' : '';
        showFieldError('email', emailError);
        showFieldError('password', passwordError);
        document.getElementById('login-error').textContent = '';
        if (emailError || passwordError)
            return;
        if (email === DEMO_EMAIL) {
            showDashboard();
        }
        else {
            document.getElementById('login-error').textContent = 'Invalid email or password.';
        }
    });
}
function showFieldError(id, message) {
    document.getElementById(`${id}-error`).textContent = message;
    document.getElementById(id).setAttribute('aria-invalid', String(Boolean(message)));
}
function showDashboard() {
    app.innerHTML = `<section class="card"><h1>Dashboard</h1><p role="status">You are logged in.</p><button class="primary" id="logout" type="button">Log out</button></section>`;
    document.getElementById('logout').addEventListener('click', showLogin);
}
showLogin();
