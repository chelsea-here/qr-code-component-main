import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {     
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'gray-light': 'hsl(212, 45%, 89%)',
        'blue-gray': 'hsl(220, 15%, 55%)',
        'blue-dark': 'hsl(218, 44%, 22%)',
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      fontSize: {
        'sm': '0.9375rem',
        'md': '1.375rem'
    },
  },
  plugins: [],
}
}
export default config;
