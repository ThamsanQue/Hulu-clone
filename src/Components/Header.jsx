import {
  FlashOn,
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
} from "@material-ui/icons";
import React from "react";
import "../Styles/header.css";

function Header() {
  return (
    <div className="header__">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <Home />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hulu_logo_2017.svg/1280px-Hulu_logo_2017.svg.png"
        alt=""
      />
    </div>
  );
}

export default Header;
