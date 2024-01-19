import { createTheme } from "@mui/material/styles";

const colors = {
  primary: {
    main: "#42a5f5",
    dark: "#1976D2",
  },
  secondary: {
    main: "#ab47bc",
    dark: "#8E24AA",
  },
  success: {
    main: "#388e3c",
    dark: "#1B5E20",
  },
  error: {
    main: "#d32f2f",
    dark: "#C62828",
  },
  warning: {
    main: "#f57c00",
    dark: "#E65100",
  },
  info: {
    main: "#3f51b5",
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...colors,
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...colors,
  },
});

export { darkTheme, lightTheme };
