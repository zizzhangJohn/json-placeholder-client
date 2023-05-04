import { blue, blueGrey, grey } from "@mui/material/colors";

export const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: blue[800],
          },
          divider: grey[300],
          background: {
            default: grey[50],
            paper: grey[100],
          },
          text: {
            primary: "#000",
            secondary: grey[700],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#00bfa5",
          },
          divider: blueGrey[800],
          background: {
            default: blueGrey[900],
            paper: blueGrey[800],
          },
          text: {
            primary: grey[200],
            secondary: grey[500],
          },
        }),
  },
});
