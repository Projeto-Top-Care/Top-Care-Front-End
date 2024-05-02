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
        'cinza-claro':'#E8E8E8',
        'cinza': '#BDBDBD',
        'cinza-escuro': '#4F4F4F',
        'fundo-modal': 'rgba(0, 0, 0, 0.3)',
        'error' : '#E94444',
        'verde': '#37BC2C'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'averia': ['"Averia Sans Libre"', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          '0%': {transform: 'translateY(-10px) translateX(-50%)', opacity: '0'},
          '100%': {transform: 'translateY(0px) translateX(-50%)', opacity: '1'},
        },
      },
      animation: {
        'slide-down': 'slideDown 0.2s linear'
      }
    },
  },
  plugins: [],
};
export default config;