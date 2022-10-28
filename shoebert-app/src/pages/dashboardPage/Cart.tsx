import React from "react";
import Button from "../../components/Button";
import { createUseStyles } from "react-jss";
import theme from "../../theme";
import Saabas from "../../images/Saabas.png";
import Remove_icon from "../../images/Remove_icon.png";

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    padding: [10, 20, 100, 20],
    right: 30,
    color: theme.colors.pink,
    border: [1, "solid", theme.colors.black],
    //float: "left",
    width: "20%",
  },

  flexContainer1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  flexContainer2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  flexItem1: {
    width: 150,
    height: 100,
    /*  marginRight: 20,
    marginBottom:20, */
    //padding: 20,
    //backgroundColor: "lightgrey",
  },

  flexItem2: {
    width: 150,
    height: 100,
    /*  marginRight: 20,
    marginLeft:20,  */
    padding: 10,
    //backgroundColor: "lightblue",
  },

  flexItem3: {
    width: 30,
    height: 100,
    /* marginRight: 20,
    marginLeft:20,  */
    padding: 20,
    //backgroundColor: "grey",
    //justifyContent: "spaceEvenly",
    aligneItems: "center",
  },

  flexItem4: {
    width: "80%",
    height: 20,
    /* marginRight: 20,
    marginBottom:20, */
    padding: 20,
    backgroundColor: "grey",
  },

  flexItem5: {
    width: "80%",
    height: 20,
    /* marginRight: 20,
    marginBottom:20, */
    padding: 20,
    backgroundColor: "lightGrey",
  },

  title: {
    color: theme.colors.black,
    fontSize: theme.typography.h3,
    fontFamily: theme.font.fontFamily,
    top: 24,
    right: 157,
  },

  /*  price1: {
    color: theme.colors.black,
    // fontSize: theme.typography.h3,
    textAlign: "center",
    alignContent:"center",
    
  },
 */
  price: {
    color: theme.colors.black,
    // fontSize: theme.typography.h3,
    textAlign: "right",
    alignContent: "center",
  },

  description: {
    position: "relative",
    width: "100%",
    height: 40,
    margin: 5,
    //maxWidth: "100%",
    alingItems: "center",
    //textAlign: "center",
    //padding: theme.spacing.s,
    text: theme.typography.body,
    fontFamily: theme.font.fontFamily,
    color: theme.colors.black,
    display: "inlineBlock",
    horisonatlAlign: "center",
  },
  img: {
    /*   textAlign: "left",
        alingItems: "center", */
    hight: "50%",
    width: "50%",
    /*display: "inlineBlock",
     horisonatlAlign: "center", */
  },

  removeIcon: {
    //textAlign: "center",
  },
});

const Cart: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>Ostukorv</h1>
        <div>
          <div className={classes.flexContainer1}>
            <div className={classes.flexItem1}>
              <div className={classes.img}>
                <img src={Saabas} alt="Saabas" />
              </div>
            </div>
            <div className={classes.flexItem2}>
              <div className={classes.description}>
                Soojad saapad, läigivad hästi! Suurus 38 132,12 €
              </div>
              {/* <div className={classes.description}>
            Suurus: 38
          </div>
          <div className={classes.price1}>
          132,12 
          </div> */}
            </div>
            <div className={classes.flexItem3}>
              <div className={classes.removeIcon}>
                <img src={Remove_icon} alt="Remove_icon" />
              </div>
            </div>
          </div>
          {/* <div>Size</div> */}
          <div className={classes.flexContainer2}>
            <div className={classes.flexItem4}>
              <div>Summa:</div>
              <div className={classes.price}>132,12 €</div>
            </div>
            <div></div>
            <div className={classes.flexItem5}>
              <Button title="Maksma" pageLink="/login"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
