import { createTheme } from "@mui/material/styles";

export const makeMyTripTheme = createTheme({
  palette: {
    primary: { main: "#0071c2" },
    secondary: { main: "#ff9800" },
    background: { default: "#f2f6fc" },
    text: { primary: "#000000" },
  },
  typography: { fontFamily: "Poppins, sans-serif", fontSize: 14 },
});

export const goibiboTheme = createTheme({
  palette: {
    primary: { main: "#33bfff" },
    secondary: { main: "#ff5722" },
    background: { default: "#e3f2fd" },
    text: { primary: "#212121" },
  },
  typography: { fontFamily: "Roboto, sans-serif", fontSize: 15 },
});

export const paytmTheme = createTheme({
  palette: {
    primary: { main: "#002970" },
    secondary: { main: "#00baf2" },
    background: { default: "#ffffff" },
    text: { primary: "#212121" },
  },
  typography: { fontFamily: "Arial, sans-serif", fontSize: 16 },
});

export const musafirTheme = createTheme({
  palette: {
    primary: { main: "#1e3a5f" },
    secondary: { main: "#ffcc00" },
    background: { default: "#f4f4f4" },
    text: { primary: "#333333" },
  },
  typography: { fontFamily: "Open Sans, sans-serif", fontSize: 14 },
});

export const yatraTheme = createTheme({
  palette: {
    primary: { main: "#e31e26" },
    secondary: { main: "#ff8c00" },
    background: { default: "#fdfdfd" },
    text: { primary: "#121212" },
  },
  typography: { fontFamily: "Lato, sans-serif", fontSize: 15 },
});
