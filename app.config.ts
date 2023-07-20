import { AppConfigInput } from "nuxt/schema";

export default defineAppConfig<AppConfigInput>({
  ui: {
    primary: "green",
    gray: "neutral",
  },
  theme: {
    colors: {
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
    },
  },
});
