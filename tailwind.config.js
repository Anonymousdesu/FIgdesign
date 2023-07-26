/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkgray: "#b1b1b1",
        royalblue: {
          "100": "#335bc3",
          "200": "#325bc3",
          "300": "#1a48bf",
        },
        gainsboro: "#d9d9d9",
        gray: {
          "100": "#8f8f8f",
          "200": "#211f1f",
          "300": "#030303",
          "400": "rgba(129, 126, 126, 0.24)",
          "500": "rgba(0, 0, 0, 0.8)",
          "600": "rgba(0, 0, 0, 0.5)",
          "700": "rgba(0, 0, 0, 0.65)",
          "800": "rgba(0, 0, 0, 0.48)",
        },
        blueviolet: "#9747ff",
        darkslategray: "#444",
        silver: "#c4c3c3",
        cornflowerblue: "#3897f0",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f0f0f0",
        },
        ghostwhite: "#ebebf5",
      },
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
        comfortaa: "Comfortaa",
        montserrat: "Montserrat",
        "times-new-roman": "'Times New Roman'",
        "ingrid-darling": "'Ingrid Darling'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "8xs": "5px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      smi: "13px",
      "5xl": "24px",
      sm: "14px",
      mini: "15px",
      "17xl": "36px",
      "19xl": "38px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
