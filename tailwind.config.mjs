/** @type {import('tailwindcss').Config} */
import yaml from '@rollup/plugin-yaml';
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  prefix: "",
  theme: {
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
}