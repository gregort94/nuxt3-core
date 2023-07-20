import type { Config } from "tailwindcss";
import colors from "./constants/colors";
const colorsArray = [...colors.gray, ...colors.primary];
export default {
  content: [],
  safelist: colorsArray
    .map((color) => [`bg-${color}-500`, `!bg-${color}-500`])
    .flat(),
  theme: {
    extend: {
      colors: {
        grisha: "#44343",
      },
    },
  },
} satisfies Config;
