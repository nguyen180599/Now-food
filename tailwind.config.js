module.exports = {
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
