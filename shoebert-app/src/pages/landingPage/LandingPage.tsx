import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { LogoComp, PinkDiv, Button, Footer } from "../../components";
import theme from "../../theme";
import LogoTrans from "../../images/Logo_trans_png.png";
import LogoWhite from "../../images/Logo_white_png.png";
import LandingBody from "./LandingBody";
import RegisterButton from "../../components/RegisterButton";

const useStyles = createUseStyles({
  footerDark: {
    backgroundColor: theme.colors.brown,
  },
  footerLight: {
    backgroundColor: theme.colors.lightBrown,
  },
  button: {
    backgroundColor: theme.colors.white,
    position: "fixed",
    right: 40,
    top: 193,
    padding: 15,
    border: [`${theme.colors.black} solid 1px`],
    fontFamily: theme.font.fontFamily,
    cursor: "pointer",
    transition: "background .2s ease-in-out",
    "&:hover": {
      opacity: "100%",
    },
  },
});

const LandingPage = () => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const handleDark = () => {
    setDarkMode(!darkMode);
  };
  const adText = "Seitsmepenikoormasaapad -70%"; //@Todo tee muutuja admin page'i kaudu muudetavaks.

  return (
    <div>
      {darkMode ? (
        <LogoComp logosource={LogoWhite} />
      ) : (
        <LogoComp logosource={LogoTrans} />
      )}
      {/*       <PinkDiv cname={classes.pinkDiv} adtext={adText} />*/}
      {darkMode ? (
        <button onClick={handleDark} className={classes.button}>
          Helge ☀️
        </button>
      ) : (
        <button onClick={handleDark} className={classes.button}>
          Sünge 🌙
        </button>
      )}
      <LandingBody darkMode={darkMode} />

      <a href="/register">
        <RegisterButton title={"Registreeru"} />
      </a>
      <a href="/login">
        <Button title={"Logi sisse"} />
      </a>

      {darkMode ? (
        <Footer cname={classes.footerDark} />
      ) : (
        <Footer cname={classes.footerLight} />
      )}
    </div>
  );
};
export default LandingPage;
