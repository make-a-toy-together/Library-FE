import {
  Box,
  Button,
  createTheme,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import Grid2 from "@mui/material/Unstable_Grid2";
import Item from "components/item";
import { SideBar } from "features/sidebar";
import React from "react";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: amber[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={1}>
          <SideBar />
          <Grid2 xs>
            <Item>
              <Button onClick={colorMode.toggleColorMode}>switch</Button>
            </Item>
          </Grid2>
        </Grid2>
      </Box>
    </ThemeProvider>
  );
};

export default App;
