import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Adjust paths as needed
  theme: {
    extend: {
      colors: {
        customBlue: '#1E40AF',
        customGreen: '#10B981',
        stext:'#FFB22C',
      },
    },
  },
  plugins: [],
};

export default config;
