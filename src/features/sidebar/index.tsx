import { styled, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { display, minWidth } from "@mui/system";
import Item from "components/item";
import { NONAME } from "dns";

export const SideBar = () => {
  return (
    <SideBarBase xs={1.5}>
      <Item>Side</Item>
    </SideBarBase>
  );
};

const SideBarBase = styled(Grid2)(() => ({
  minWidth: 250,

  useMediaQuery,
}));
