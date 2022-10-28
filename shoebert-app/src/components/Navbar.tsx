import React from "react";
import Button from "./Button";
import { createUseStyles } from "react-jss";
import theme from "../theme";
import NavigationPng from "../images/NavigationPng.png";

const useStyles = createUseStyles({
  navWhite: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    padding: 30,
    marginBottom: 5,
  },
  logoPlaceholder: {
    //Võiks asendada buttoni laiusega, et brändinimi tuleks täpselt keskele?
    width: 227,
    minWith: 227 /*Kuidas lahendada see, et poenimi ei kaoks logo taha? */,
    top: 10,
    left: 15,
  },
  button: {
    backgroundColor: theme.colors.white,
    cursor: "pointer",
    color: theme.colors.black,
    border: [1, "solid", theme.colors.black],
    width: 128,
    marginLeft: 99,
    maxWidth: "100%",
    fontSize: theme.typography.button,
    fontFamily: theme.font.fontFamily,
    padding: theme.spacing.s,
    transition: "background .2s ease-in-out",
    "&:hover": {
      borderColor: theme.colors.pink,
      color: theme.colors.pink,
    },
  },
  space: {
    opacity: 100,
    padding: 5,
  },
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.navWhite}>
        <div className={classes.logoPlaceholder}></div>
        <img src={NavigationPng} alt="NavigationPng" />
        <a href="/login">
          <button className={classes.button}>Logi sisse</button>
        </a>
      </div>
      <div className="space">
        <p></p>
      </div>
    </div>
  );
};

//Todo: lisada logo (viib alati LandinPagesse), roosa triip, teha css, lisada nupp (komponent "Button").
//Todo: hiljem: Dasbboardile tuleb roosale triibule veel eraldi komponendid "Searchbar" ja "HelloUser" // Roosa triip viidud LandingBodyle.
//Todo: Buttoni link tuleb ära linkida, praegune lahendus ei tööta

export default Navbar;
