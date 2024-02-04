import { Fragment, useState } from "react";
import { Box, IconButton } from "@mui/material";
import Links from "./ui/Links";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import "./NavStyle.css"

const HeaderComponent = () => {
  let [clicked, setClicked] = useState(false);
  const hanldeClickedMenu = () => {
    setClicked(!clicked);
    console.log('menClick: ' + clicked);
  }
  return (
    <Fragment>
      <Box id="navContainer">
        <ul id="navBar">
          <Links />
        </ul>
        <IconButton /* id="mobile" */
          onClick={hanldeClickedMenu}>
          {setClicked ? <MenuIcon /> : <ClearIcon />}

        </IconButton>
      </Box>

    </Fragment>
  )
}
export default HeaderComponent;
