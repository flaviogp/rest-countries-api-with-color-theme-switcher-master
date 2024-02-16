/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        "darkBlue": "hsl(209, 23%, 22%)", //(Dark Mode Elements)
        "veryDarkBlueDM": "hsl(207, 26%, 17%)", //(Dark Mode Background)
        "veryDarkBlueLM": "hsl(200, 15%, 8%)", //(Light Mode Text)
        "darkGray": "hsl(0, 0%, 52%)", //(Light Mode Input)
        "veryLightGray": "hsl(0, 0%, 98%)", //(Light Mode Background)
        "white": "hsl(0, 0%, 100%)", //(Dark Mode Text & Light Mode Elements)
      }
    },
  },
  plugins: [],
}

