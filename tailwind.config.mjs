/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      outfit: ["Outfit", "system-ui", "sans-serif"],
    },
    spacing: {
      0: 0,
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      13: "3.25rem",
      14: "3.5rem",
      15: "3.75rem",
      16: "4rem",
      18: "4.5rem",
      20: "5rem",
      22: "5.5rem",
      24: "6rem",
      26: "6.5rem",
      28: "7rem",
      30: "7.5rem",
      32: "8rem",
      34: "8.5rem",
      36: "9rem",
      38: "9.5rem",
      40: "10rem",
      42: "10.5rem",
      44: "11rem",
      46: "11.5rem",
      48: "12rem",
      50: "12.5rem",
      52: "13rem",
      54: "13.5rem",
      56: "14rem",
      58: "14.5rem",
      60: "15rem",
      62: "15.5rem",
      64: "16rem",
      68: "17rem",
      72: "18rem",
      76: "19rem",
      80: "20rem",
      84: "21rem",
      88: "22rem",
      92: "23rem",
      96: "24rem",
    },
    fontSize: {
      "2xs": [
        "0.625rem",
        {
          lineHeight: "0.875rem",
        },
      ],
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.125rem",
        },
      ],
      md: [
        "1rem",
        {
          lineHeight: "1.25rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "1.75rem",
        {
          lineHeight: "2.25rem",
        },
      ],
      "4xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "5xl": [
        "2.25rem",
        {
          lineHeight: "2.75rem",
        },
      ],
      "6xl": [
        "2.5rem",
        {
          lineHeight: "3rem",
        },
      ],
      "7xl": [
        "2.75rem",
        {
          lineHeight: "3.25rem",
        },
      ],
      "8xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "9xl": [
        "3.5rem",
        {
          lineHeight: "4rem",
        },
      ],
      "10xl": [
        "4rem",
        {
          lineHeight: "4.5rem",
        },
      ],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: "#A8C5F0",
          100: "#85AEEA",
          200: "#6297E4",
          300: "#4080DE",
          400: "#246BD1",
          DEFAULT: "#1D55A5",
          600: "#18478B",
          700: "#163E79",
          800: "#123568",
          900: "#0F2C57",
          950: "#0C2345",
        },
        accent: {
          50: "#F8D8E6",
          100: "#F3B5D0",
          200: "#ED92BA",
          300: "#E76FA4",
          400: "#E14C8E",
          DEFAULT: "#DB2777",
          600: "#CD226E",
          700: "#BC1F65",
          800: "#AB1C5C",
          900: "#991952",
          950: "#881649",
        },
        base: {
          light: "#FFFFFF",
          dark: "#141414",
        },
        grey: {
          50: "#F3F4F7",
          100: "#DAE0E6",
          200: "#C2CAD6",
          300: "#A9B5C6",
          400: "#91A0B5",
          500: "#788BA5",
          600: "#627693",
          700: "#51627B",
          800: "#414F62",
          900: "#313B49",
          950: "#202731",
        },
        feedback: {
          success: {
            light: "#EFFBF0",
            DEFAULT: "#1B5E20",
          },
          warning: {
            light: "#FDECE2",
            DEFAULT: "#F68B51",
          },
          error: {
            light: "#FDEDED",
            DEFAULT: "#9B0808",
          },
        },
      },
    },
  },
  plugins: [],
};
