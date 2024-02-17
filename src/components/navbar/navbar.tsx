import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ bgcolor: "background.default", mb: 3 }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <LocalFireDepartmentIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AniDB
        </Typography>
        <Stack direction="row" spacing={2}>
          <NavLink to="/planets">
            <Button sx={{ color: "text.primary" }}>Planets</Button>
          </NavLink>
          <NavLink to="/people">
            <Button sx={{ color: "text.primary" }}>People</Button>
          </NavLink>
          <NavLink to="/starships">
            <Button sx={{ color: "text.primary" }}>Starships</Button>
          </NavLink>

          <Button
            color="inherit"
            id="resources-button"
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleClick}
            sx={{ color: "text.primary" }}
          >
            Resources
          </Button>
          <Button sx={{ color: "text.primary" }}>Login</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
        >
          <MenuItem onClick={handleClose} sx={{ color: "text.primary" }}>
            Blog
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{ color: "text.primary" }}>
            Podcast
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
