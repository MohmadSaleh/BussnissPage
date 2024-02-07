import { Fragment, useState } from "react";
import { Box, IconButton, Switch } from "@mui/material";
import Links from "./ui/Links";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import SearchBar from "../../components/searchBarCopmponent";
import ProfileButton from "./ui/porofileButtonComponent";
import './headerStyleCss/NavStyle.css'

const HeaderComponent = ({ isDarkTheme, onThemeChange }) => {
  let [menuOpen, setMenuOpen] = useState(false);
  let [menuIcon, setMenuIcon] = useState(< MenuIcon />);
  const hanldeClickedMenu = () => {
    setMenuOpen(!menuOpen);
    { menuOpen ? setMenuIcon(<ClearIcon />) : setMenuIcon(<MenuIcon />) }
  }
  const handleThemeChange = (event) => {
    onThemeChange(event.target.checked);
  };
  return (
    <Fragment>
      <Box id="navContainer">
        <box>LOGO</box>
        <ul id="navBar" className={menuOpen ? "navBarOpen" : "navBarClose"}>
          <li> <SearchBar id="searchBar" /></li>
          <Links id="links" />
          <li> <Switch checked={isDarkTheme} onChange={handleThemeChange} /></li>
          <li><ProfileButton /></li>

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
