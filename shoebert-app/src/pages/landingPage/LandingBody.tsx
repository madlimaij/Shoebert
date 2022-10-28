import { NONAME } from "dns";
import React from "react";
import { createUseStyles } from "react-jss";
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
  },
  slogan: {
    backgroundColor: "white",
    fontSize: 24,
    height: "auto",
    width: "40%", //@Todo: muuta kasti suurus relatiivseks
    padding: 5,
    position: "relative",
    top: 100,
    left: 200,
    border: 1,
    borderColor: theme.colors.black,
  },
});

const LandingBody: React.FC = () => {
  const adText = "Seitsmepenikoormasaapad -70%"; //@Todo tee muutuja admin page'i kaudu muudetavaks.
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.slogan}>
        Mehised saapad. Poriloikudes keksimiseks.
        {/* @Todo: Tekst muudetavaks? Tekst vahetub koos pildiga? */}
      </div>
      <button className={classes.buttonGoShop}>MINE POODI</button>
    </div>
  );
};

//Teha css, lisada slogan ja nupp (see nupp on komponent "BodyButton", mis viib login lehele)

export default LandingBody;
