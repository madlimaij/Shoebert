import React from "react";
import Button from "../../components/NavButton";
import { createUseStyles } from "react-jss";
import theme from "../../theme";
import CartItem from "./CartItem";
import { CartItemType } from "../../models/Cart";

const useStyles = createUseStyles({
	container: {
		display: "flex",
		border: [1, "solid", theme.colors.black],
	},

	flexContainer1: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
	},

	flexContainer2: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		padding: 20,
	},

	flexItem1: {
		flexGrow: "0",
	},

	flexItem2: {
		flexGrow: "1",
		padding: 10,
	},

	flexItem3: {
		flexGrow: "0",
		padding: 20,
	},

	flexItem4: {
		background: theme.colors.lightGray,
		//backgroundColor: "grey",
		padding: 20,
	},

	flexItem5: {
		background: theme.colors.gray,
		/* marginRight: 20,
    marginBottom:20, */
		padding: 20,
	},

	title: {
		color: theme.colors.black,
		fontSize: theme.typography.h2,
		fontFamily: theme.font.fontFamily,
		padding: [0, 20, 0],
	},

	price: {
		color: theme.colors.black,
		fontWeight: "bold",
	},

	description: {
		text: theme.typography.body,
		fontFamily: theme.font.fontFamily,
		color: theme.colors.black,
	},
	img: {},

	removeIcon: {},

	buttonPay: {
		cursor: "pointer",
		color: theme.colors.black,
		background: theme.colors.gray,
		border: [1, "solid", theme.colors.black],
		width: 140,
		maxWidth: "100%",
		fontSize: theme.typography.button,
		fontFamily: theme.font.fontFamily,
		padding: theme.spacing.s,
		transition: "background .2s ease-in-out",
		"&:hover": {
			background: theme.colors.lightGray,
		},
	},
});

type CartProps = {
	cartList: CartItemType[];
	deleteItem: (cartList: CartItemType) => Promise<void>;
};

const Cart: React.FC<CartProps> = ({ cartList, deleteItem }) => {
	const classes = useStyles();
	const totalSum = cartList.reduce((acc, cur) => acc + cur.price, 0);
	return (
		<div className={classes.container}>
			<div>
				<h1 className={classes.title}>Ostukorv</h1>
				<div>
					{cartList?.map((el) => (
						<CartItem deleteItem={deleteItem} product={el} key={el.id} />
					))}
					<div className={classes.flexContainer2}>
						<div className={classes.flexItem4}>
							<div /*className= {classes.sum} */>Summa:</div>
						</div>
						<div className={classes.flexItem5}>
							{cartList.length === 0 ? (
								<div className={classes.price}>Ostukorv on tühi</div>
							) : (
								<div className={classes.price}>{totalSum} €</div>
							)}
							<br />
							<button
								className={classes.buttonPay}
								onClick={() =>
									alert("Maksmine ainult sularahas, aadressil Aia 7")
								}
							>
								Maksma
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
