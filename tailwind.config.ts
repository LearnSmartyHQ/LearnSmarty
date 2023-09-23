import type { Config } from 'tailwindcss';
// import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: [
      //     'var(--font-raleway)',
      //     ...fontFamily.sans,
      //   ],
      // },
      colors: {
        primary: {
          DEFAULT: '#f0fdf4',
        },
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        progress: 'progress 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
