import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 2s linear infinite', // Adjust the speed as needed
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
          'bg-first': "url('../assests/first-bg.svg')",

      },
      backgroundColor:{
        button:""
      },
      color:{
        blue:"rgba(14, 69, 230, 1)",
        purple:"rgba(198, 0, 202, 1)",
        grey:"rgba(30,30,30,1)",
        cardWhite:"rgba(30,30,30,0.5)",
        cardblack:"rgba(78,78,78,0.5)"
      }
      
        
    },
  },
  plugins: [],
};
export default config;
