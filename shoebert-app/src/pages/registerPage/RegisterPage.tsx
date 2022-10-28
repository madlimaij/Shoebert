import React from "react";
import { createUseStyles } from "react-jss";
import RegisterBox from "./RegisterBox";
import theme from "../../theme";
import LogoTrans from "../../images/Logo_trans_png.png";
import { Footer, LogoComp, PinkDiv } from "../../components";

const useStyles = createUseStyles({
  pinkDiv: {
    backgroundColor: theme.colors.lightPink,
    textAlign: "center",
    padding: 41,
    heigth: "79px",
    fontSize: theme.spacing.l,
  },
});

const RegisterPage = () => {
  const classes = useStyles();
  return (
    <div>
      <LogoComp logosource={LogoTrans} />
      <PinkDiv cname={classes.pinkDiv} />
      <RegisterBox />
      <Footer />
    </div>
  );
};

export default RegisterPage;
