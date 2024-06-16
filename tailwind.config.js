const { plugin } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily:{
        'Blender-Pro-Thin' :['Blender-Pro-Thin'],
        'Blender-Pro-Medium' :['Blender-Pro-Medium'],
        'Blender-Pro-Heavy' :['Blender-Pro-Heavy'],
        'Blender-Pro-Book' :['Blender-Pro-Book'],
        'Nemesys' :['nemesys'],
      },
      
      colors:{
        'cybpnk-grey' : '#21201f',
        'cybpnk-alt' : '#252826',
        'cybpnk-blk' : '#131212',
        'cybpnk-ylw' : '#eabc49',
        'cybpnk-ylw2' : '#fbbf24',
        'cybpnk-blk2' : '#171619',
        'cybpnk-brdr' : '#25252a',
        'jms-blue' : '#14141a',
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 5s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },


    },
  },
  plugins: [

  ],
}

