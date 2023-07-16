import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import style from "../../Styles/Navbar.module.css";
import { Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MobileNav from "./MobileNav";

const Header = () => {
  const [width, setWidth] = useState(window?.innerWidth);
  const [height, setHeight] = useState(window?.innerHeight);
  const [openProfile, setOpenProfile] = useState(false);

  const updateDimensions = () => {
    setWidth(window?.innerWidth);
    setHeight(window?.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  });

  return (
    <Grid container className={style["header-container"]}>
      {window?.innerWidth < 960 ? (
        <>
          <Grid item xs={10} className={style["mobile-navbar"]}>
            <MobileNav />
          </Grid>
          <Grid item xs={2}>
            Logo
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={2}>
            Logo
          </Grid>
          <Grid item xs={8}>
            <Navbar />
          </Grid>
          <Grid item xs={2}>
            <button
              className={style["profile-btn"]}
              onMouseOver={() => setOpenProfile(true)}
              onMouseOut={() => setOpenProfile(false)}
            >
              <AccountCircleIcon width="2em" />
            </button>
            {openProfile && (
              <ul
                className={style["profile-list"]}
                onMouseOver={() => setOpenProfile(true)}
                onMouseOut={() => setOpenProfile(false)}
              >
                <li>Profile</li>
                <li>Logout</li>
              </ul>
            )}
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Header;
