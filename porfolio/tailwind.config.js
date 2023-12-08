/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      "w990": {"max": "990px"},
      "w950": {"max": "950px"},
      "w630": {"max": "630px"},
      "w560": {"max": "560px"},
      "w400": {"max": "400px"},
      'w768': {'max': '768px'},
      'md': {'min': '768px'},
    }
  },
  plugins: [],
}

