import { wrap } from "module";
import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import theme from "../theme";
import Button from "./Button";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    display: "flex",
    gap: 15,
    //Hiljem margin asendada top: 305,??
    margin: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    position: "relative",
    width: 450,
    Height: 40,
    margin: 5,
    maxWidth: "100%",
    color: theme.colors.black,
    padding: theme.spacing.s,
    background: "#fff0f0",
    border: [1, "dashed", theme.colors.pink],
    fontSize: theme.typography.h4,
  },

  link: {
    color: theme.colors.pink,
    fontSize: theme.typography.h4,
    textDecoration: "underline",
    cursor: "pointer",
  },

  containerTitle: {
    fontSize: theme.typography.h2,
    color: theme.colors.black,
  },

  containerText: {
    fontSize: theme.typography.h4,
    color: theme.colors.black,
  },
});

const LoginBox = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.containerTitle}>Logi sisse:</div>
      <form>
        <input
          type="text"
          placeholder="e-posti aadress"
          className={classes.inputBox}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Parool"
          className={classes.inputBox}
        />{" "}
        <br />
      </form>
      <a
        className={classes.link}
        onClick={() => alert("aga.. Proovi veel, äkki tuleb ikka meelde?")}
      >
        Unustasid parooli?
      </a>
      <Button title="Logi sisse" pageLink="/dashboard"></Button>
      <div className={classes.containerText}>
        Pole kontot?{" "}
        <a href="/register" className={classes.link}>
          Registreeru
        </a>
      </div>
    </div>
  );
};

//Todo Buttoni pagelink vale! Button vaja siin sees ümber kujundada?
//Todo placeholder font
//kogu container keskele ja vasakule? Kuidas teha
//Todo fontFamily on theme, kastis on lightlightpink

export default LoginBox;
