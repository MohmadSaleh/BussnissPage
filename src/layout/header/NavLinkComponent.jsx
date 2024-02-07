import { Typography } from "@mui/material";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children }) => {
  return (
    <Fragment>
      <li>
        <NavLink to={to}>
          {({ isActive }) => (
            <Typography
              color={isActive ? "#17cf97" : "#fff"}
              fontSize={20}
              fontWeight={600}
              sx={{
                p: 2, sm: { display: 'block' },
                transition: '0.3s ease-in-out',
              }}
              variant="h6"
            >
              {children}
            </Typography>
          )}
        </NavLink>
      </li>
    </Fragment>
  );
};

export default NavLinkComponent;
