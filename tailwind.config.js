


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif']
    },
    screens: {
      'phone': '350px',
      'tablet': '540px',
      'laptop': '1000px',
    },
    blur: {
      xs: '2px',
    }
  },
  plugins: [],
}

