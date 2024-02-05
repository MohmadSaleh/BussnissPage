import { Fragment, useState } from "react";
import { Box, IconButton } from "@mui/material";
import Links from "./ui/Links";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import "./NavStyle.css"
import SearchBar from "../../components/searchBarCopmponent";

const HeaderComponent = () => {
  let [menuOpen, setMenuOpen] = useState(false);
  let [menuIcon, setMenuIcon] = useState(< MenuIcon />);
  const hanldeClickedMenu = () => {
    setMenuOpen(!menuOpen);
    { menuOpen ? setMenuIcon(<ClearIcon />) : setMenuIcon(<MenuIcon />) }
  }
  return (
    <Fragment>
      <Box id="navContainer">
        <ul id="navBar" className={menuOpen ? "navBarOpen" : "navBarClose"}>
          <li> <SearchBar id="searchBar" /></li>
          <Links id="links" />

        </ul>
        <IconButton id="mobile"
          onClick={hanldeClickedMenu}>
          {menuIcon}

        </IconButton>
      </Box>

    </Fragment>
  )
}
export default HeaderComponent;
