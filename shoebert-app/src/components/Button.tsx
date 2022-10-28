import React from "react";
import { createUseStyles } from "react-jss";
import theme from "../theme";

type ButtonProps = {
  title: string;
  pageLink: any;
};



//KUSTUTADA ÄRA KUI IGAL POOL ON ASENDATUD BUTTONID

const Button: React.FC<ButtonProps> = ({ title, pageLink }) => {
  return (
    <button onClick={pageLink}>
      {title}
    </button>
  );
};

export default Button;
