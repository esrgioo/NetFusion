import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["var(--font-Expletus_Sans)"],
      },
      backgroundImage: {
        "desktop-custom-gradient":
          "linear-gradient(48deg, rgba(108,51,216,1) 16%, rgba(45,0,143,1) 100%)",
        "mobile-custom-gradient":
          "linear-gradient(192deg, rgba(108,51,216,1) 16%, rgba(45,0,143,1) 100%)",
        "custom-gradient":
          "linear-gradient(109.538deg, rgba(249, 240, 255, 1) 0%, rgba(176, 226, 202, 1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
