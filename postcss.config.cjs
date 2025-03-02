// export default {
//   plugins: {
//     '@tailwindcss/postcss': {},
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'), // Optional but recommended
  ],
}

// import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

// export default {
//   plugins: [
//     tailwindcss(),
//     autoprefixer(),
//   ],
// };

