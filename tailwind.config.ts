/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        auto: 'repeat(auto-fit, minmax(15rem, 1fr));',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
      animation: {
        kayb: 'kayb 7s infinite',
      },
      keyframes: {
        kayb: {
          '0%': {
            transform: 'scale(1)',
          },
          '33%': {
            transform: 'scale(1.1)',
          },
          '66%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      colors: {
        purple: {
          1: '#7E3285',
          2: '#9F5EA5',
          3: '#5D0565',
          4: '#47034E',
        },
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/warehouse.jpg')",
        'bg-img-2': "url('/packing.jpg')",

        'seed-1': "url('/farm/seed-1.jpg')",
        'seed-2': "url('/farm/seed-2.jpg'')",

        // 'feature-bg': "url('/feature-bg.png')",
        'feature-bg': "url('/world.map.jpg')",
        pattern: "url('/pattern.png')",
        // 'pattern-2': "url('/pattern-bg.png')",
        // 'pattern-2': "url('/home-1.jpg')",
        'pattern-2': "url('/main/main-4.webp')",
        'life-science-bg': "url('/main/lab.mp4')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
