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
      },
      
      colors:{
        'cybpnk-grey' : '#21201f',
        'cybpnk-alt' : '#252826',
        'cybpnk-blk' : '#131212',
        'cybpnk-ylw' : '#eabc49',
        'cybpnk-blk2' : '#171619',
        'jms-blue' : '#14141a',
      }

    },
  },
  plugins: [],
}

