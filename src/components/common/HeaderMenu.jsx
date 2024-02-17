import React from "react";

import { Menu, MenuItem } from "@mui/material";

import { Link } from "react-router-dom";

import { routePath } from "../../constant/route";

const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to={`${routePath.categories}?categories=popular`} style={{ textDecoration: 'none', color: 'inherit'}}>
          <MenuItem onClick={handleClose}>Popular</MenuItem>
        </Link>
        <Link to={`${routePath.categories}?categories=toprated`} style={{ textDecoration: 'none', color: 'inherit'}}>
          <MenuItem onClick={handleClose}>Top rated</MenuItem>
        </Link>
        <Link to={`${routePath.categories}?categories=upcoming`} style={{ textDecoration: 'none', color: 'inherit'}}>
          <MenuItem onClick={handleClose}>Up Coming</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default HeaderMenu;
