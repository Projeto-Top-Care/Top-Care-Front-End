import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'default': '#322828',
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
        'verde': '#37BC2C',
        'azul-hover': '#c4d5f3'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'averia': ['"Averia Sans Libre"', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          '0%': {transform: 'translateY(-30px) translateX(-50%)', opacity: '0'},
          '100%': {transform: 'translateY(0px) translateX(-50%)', opacity: '1'},
        },
        checked: {
          '0%': {fontSize: '2px'},
          '50%': {fontSize: '14px'},
          '100%': {fontSize: '10px'}
        },
        slideLeft: {
          '0%': {transform: 'translateX(-50%)', opacity: '0'},
          '100%': {transform: 'translateX(0px)', opacity: '1'},
        },
        slideRight: {
          '0%': {transform: 'translateX(0px)', opacity: '1'},
          '100%': {transform: 'translateX(-50%)', opacity: '0'},
        },
        growUp:{
          '0%': {transform: 'scale(.9)'},
          '100%': {transform: 'scale(1)'}
        }
      },
      animation: {
        'slide-down': 'slideDown 0.2s linear',
        'checked': 'checked 0.2s linear',
        'slide-left': 'slideLeft 0.3s linear',
        'slide-right': 'slideRight 0.3s linear',
        'grow-up': 'growUp 0.3s linear'
      }
    },
  },
  plugins: [],
};
export default config;