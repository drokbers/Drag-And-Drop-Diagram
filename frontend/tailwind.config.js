const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#6366F1",
      slate: "#64748b",
      stone: '#e7e5e4',
      zinc: '#a1a1aa',
      gray: '#f9fafb',
      white: '#ffffff',
    },
    extend: {},
  },
  plugins: [],
});

