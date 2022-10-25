import React from "react";
import NavigationPath from "../routes/NavigationPath";
import NavigationPng from "../images/NavigationPng.png";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <img src={NavigationPng} alt="NavigationPng" />
      <Button title = "Logi sisse" pageLink = "/Login" ></Button>
    </div>
  );
};

//Todo: lisada logo (viib alati LandinPagesse), roosa triip, teha css, lisada nupp (komponent "Button").
//Todo: hiljem: Dasbboardile tuleb roosale triibule veel eraldi komponendid "Searchbar" ja "HelloUser" 
//Todo: Buttoni link tuleb ära linkida, praegune lahendus ei tööta

export default Navbar;
