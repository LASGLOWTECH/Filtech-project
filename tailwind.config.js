

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
  plugins: [],
}


// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });