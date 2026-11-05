# Login Lab: requirements

This is a separate login starter, not the Article Desk registration website. It contains intentional bugs. It uses TypeScript with no frontend framework, so the source is `src/app.ts` (not App.tsx).

## Run

Install a current Node.js LTS, open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Keep the terminal running. After changing src/app.ts, stop the server with Control+C and run npm run dev again to rebuild it. This starter does not hot-reload.

## Authoritative requirements

1. Email is required. Empty or whitespace-only Email shows `Email is required.` and stays on Log in.
2. Email must have a basic valid format. A malformed address shows `Enter a valid email address.` and stays on Log in.
3. Password is required. An empty password shows `Password is required.` and stays on Log in.
4. Only the exact demo email and password below allow login. Incorrect credentials show `Invalid email or password.` and stay on Log in. Passwords are case-sensitive.
5. Correct credentials show the `Dashboard` heading and `You are logged in.` status.
6. Leading and trailing whitespace in Email must be ignored before format and credential checks. Do not trim Password.
7. Log out returns to the `Log in` heading and empty fields.

Demo email: `student@example.com`
Demo password: `Playwright123!`

Use these requirements to determine expected behaviour. Do not assume the current application implementation is correct. There is no backend, account creation, real authentication, or persistence. Reloading returns to login.

## Testing

Install Microsoft's Playwright Test for VSCode extension and run Test: Install Playwright, or run npm init playwright@latest in this folder. Choose TypeScript, tests, no GitHub Actions, and install browsers. Do not run both installation methods.

Generate tests with Copilot; the student lab guide provides the prompts and configuration. No solution tests are included.
