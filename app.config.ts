import { AppConfigInput } from "nuxt/schema";
import colors from "./constants/colors";

export default defineAppConfig<AppConfigInput>({
  ui: {
    primary: "red",
    gray: "neutral",
  },
  theme: {
    colors,
  },
});
