import React, { useState } from 'react';
import { IconButton, Box } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { NavLink } from "react-router-dom";
import ROUTES from '../../../routes/ROUTES';
import { toast } from 'react-toastify';
import '../headerStyleCss/ProfileButton.css'



function ProfileButton() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const logout = () => {
        localStorage.removeItem("token");
        toast.danger("Loged Out successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        window.location.reload();
    };

    return (
        <Box className="profile-dropdown">
            <IconButton onClick={toggleDropdown} className="profile-btn">
                <AccountBoxIcon />
            </IconButton>
            {showDropdown && (
                <Box className="dropdown-content">
                    <NavLink to={ROUTES.PROFILE}>Profile</NavLink>
                    <NavLink to={ROUTES.HOME} onClick={logout}>Log Out</NavLink>
                </Box>
            )}
        </Box>
    );
}

export default ProfileButton;
