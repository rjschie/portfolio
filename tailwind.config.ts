import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        lg: '0 8px 15px -3px rgb(0 0 0 / 0.1), 0 0 6px -2px rgb(0 0 0 / .2)',
      },
    },
  },
  plugins: [],
};
export default config;
