

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {screens:{
    xs:'375px',
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px'
  },
    extend: {
      colors:{
        darkBlue:'#193447',
        lightBlue:'#0393c7'
      }
  
    },
  },
  plugins: [require('flowbite/plugin')],
}

