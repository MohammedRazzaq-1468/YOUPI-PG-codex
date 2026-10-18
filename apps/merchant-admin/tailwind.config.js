/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/views/**/*.{html,jsx,js}",
    "./src/**/*.{js,jsx}",
    "./public/js/**/*.js"
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--bg)',
          card: 'var(--bg-card)',
          surface: 'var(--bg-surface)',
          border: 'var(--border)',
          text: 'var(--text)',
          muted: 'var(--text-muted)',
          primary: 'var(--primary)',
        }
      }
    },
  },
  plugins: [],
};
