/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pop:['Poppins'],
      },
      backgroundImage:{
        intirior:"url('/src/assets/IMAGE/05.jpg')"
      },
      colors:{
        backgroundColor:'#FFF3E3',
        textColor:"#B88E2F",
        ButtonCOlor:"#B88E2F",
        newColor:"#333333",
        newColor2:"#666666",
        innerColor:"#FCF8F3",
        A3A3: '#3A3A3A',
        8989: '#898989',
        B0B0: '#B0B0B0',
        6161: '#616161',
        F9F9: '#9F9F9F',
        redBadge: '#E97171',
        greenBadge: '#2EC1AC',
        productBg: '#F4F5F7',
      },
    },
  },
  plugins: [],
}

