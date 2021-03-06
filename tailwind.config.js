module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{html,js}",
    './src/**/*.js'
  ]
  ,
  plugins: [
    require('@tailwindcss/forms')
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'light-purple': '#ffedff',
      'light-green': "#defcf9",
      'dk-lt-green': '#A0FFF0',
      'lt-bl-purple': '#cadefc',
      'yellow-orange': '#F9A826',
      'teal': '#247291',
      'mustard-yellow': '#F8DA5B',
      'bright-green': '#00FF64',
      'cream': '#EEF2E2'
    },
    extend: {
      colors: {
        'light-purple': '#ffedff',
        'light-green': "#defcf9",
        'lt-bl-purple': '#cadefc',
        'yellow-orange': '#F9A826',
        'teal': '#247291',
        'mustard-yellow': '#F8DA5B',
        'bright-green': '#00FF64',
        'cream': '#EEF2E2',



      }
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Roboto Serif', 'serif'],
      mono: ['Helvetica', 'mono']
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
    borderRadius: {
      '4xl': '2rem',
    }
  }
}
  // ...

