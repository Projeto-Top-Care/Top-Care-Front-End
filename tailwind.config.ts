import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaria': '#B5A6F3',
        'secundaria': '#C9E47B',
        'terciaria': '#DFEAFF',
        'preto': '#322828',
        'branco': '#F5F5F5',
        'cinza': '#BDBDBD',
        'cinza-escuro': '#4F4F4F',
        'fundo-modal': 'rgba(0, 0, 0, 0.3)'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'averia': ['"Averia Sans Libre"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;