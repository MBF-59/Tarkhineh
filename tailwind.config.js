/** @type {import('tailwindcss').Config} */
import app from""
import { fontFamily } from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Estedad", ...fontFamily.sans],
      },
      colors: {
        Tint: {
          1:" #E5F2E9",
          2: "#CAE4D3",
          3:" #B0D7BD", 
          4: "#96C9A7",
          5: "#7CBC91",
          6:"#61AE7B" ,
          7:"#4E9968" ,
        },

        Shade: {
          1: "#396F4B",
          2: "#315F41",
          3: "#294F36",
          4: "#21402B",
          5:"#183020",
          6: "#102016",
          7: "#08100B",
        },

        Gray: {
          1:"#F9F9F9",
          2:"#E1E1E1",
          3: "#EDEDED",
          4: "#CBCBCB",
          5: "#ADADAD",
          6:"#757575",
          7: "#717171",
          8: "#353535",
        },
        Black: "#0C0C0C",
        Error: "#C30000",
        ErrorLight: "#ED2E2E",
        ErrorExtralight:"#FFF2F2",
        Success: "#00966D",
        SuccessLight: "#00BA88",
        SuccessExtralight: "#F3FDFA",
        Warning: "#A9791CV",
        WarningLight:"#F4B740",
        WarningExtralight: "#FFF8E1",
                    White: "#FFFFFF",
                     primary:"#417F56", },
      spacing: {
        '15': '3.5625rem', 
        "392":"24.5rem",
        "252":"15.75rem",
        "69":"4.3125rem",
       
      },
      borderRadius: {
        'sm': '4px', 
       
      }, container:{
        center:true,

      },
      screens: {
        hd: "1440px",
      },
         plugins: [
      require('@tailwindcss/forms'),
      // ...
    ],
    },
  },
  plugins: [
 
  ],
}