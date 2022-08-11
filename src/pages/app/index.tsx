import { Box, styled, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const App = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2 container spacing={1}>
          <Grid2 xs={3}>
            <Item>Side</Item>
          </Grid2>
          <Grid2 xs>
            <Item>Main</Item>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default App;
