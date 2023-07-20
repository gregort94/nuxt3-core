import type { Config } from "tailwindcss";
// const {
//   theme: { colors },
// } = useAppConfig();
// const colorsArray =
const colors = {
  gray: ["slate", "cool", "zinc", "neutral", "stone"],
  primary: [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ],
};
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
