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

import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = (props: {}) => {
  return (
    <nav>
      <div className="flex flex-row mx-0 my-2 bg-gray-900 text-purple-600">
        <ul className="flex flex-row">
          <li>
            <a className="inline" href="/people">
              People
            </a>
          </li>
          <li>
            <a href="/planets">Planets</a>
          </li>
          <li>
            <a href="/starships">Starships</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
