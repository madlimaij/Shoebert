import React from "react";
import { createUseStyles } from "react-jss";
import { PinkDiv } from "../../components";
import RailBoots from "../../images/RailBoots.jpg";
import theme from "../../theme";

const useStyles = createUseStyles({
  container: {
    backgroundImage: `url(${RailBoots})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "100%",
    minHeight: "100%",
    height: "100vh",
  },
  buttonGoShop: {
    position: "fixed",
    right: 110,
    bottom: 200,
    height: 60,
    width: 250,
    fontSize: theme.spacing.xl,
    cursor: "pointer",
    opacity: "70%",
    fontWeight: "bold",
    fontFamily: theme.font.fontFamily,
    transition: "background .2s ease-in-out",
    "&:hover": {
      color: theme.colors.pink,
      opacity: "100%",
    },
  },

  slogan: {
    backgroundColor: "white",
    fontSize: theme.spacing.l,
    fontWeight: "bold",
    height: "auto",
    width: "fit-content",
    padding: 10,
    position: "relative",
    top: 150,
    left: 200,
    border: 1,
    borderColor: theme.colors.black,
    opacity: "70%",
  },
  pinkDiv: {
    backgroundColor: theme.colors.pink,
    textAlign: "center",
    heigth: "79px",
    padding: 25,
    fontSize: theme.spacing.l,
  },
});

const LandingBody: React.FC = () => {
  const adText = "Seitsmepenikoormasaapad -70%";
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <br />
      <PinkDiv cname={classes.pinkDiv} adtext={adText} />
      <p className={classes.slogan}>
        Mehised saapad.
        {/* @Todo: Tekst muudetavaks? Tekst vahetub koos pildiga? */}
      </p>
      <p className={classes.slogan}>
        Poriloikudes keksimiseks.
        {/* @Todo: Tekst muudetavaks? Tekst vahetub koos pildiga? */}
      </p>
      <a href="/login">
        <button className={classes.buttonGoShop}>MINE POODI</button>
      </a>
    </div>
  );
};

//Teha css, lisada slogan ja nupp (see nupp on komponent "BodyButton", mis viib login lehele)

export default LandingBody;
