import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import LogoTrans from "../../images/Logo_trans_png.png";
import { Button, Footer, LogoComp, PinkDiv } from "../../components";
import Cart from "./Cart";
import ListCard from "./ListCard";
import theme from "../../theme";
import useEffectAsync from "../../theme/useEffectAsync";
import { getCurrentUser } from "../../api/controller/authController";
import { AuthUser } from "../../models/AuthUser";
import { getProductList } from "../../api/controller/shopController";
import { setAuthToken } from "../../helpers/authHelpers";
import { ProductList } from "../../models/Product";

const useStyles = createUseStyles({
	container: {
		display: "flex",
		flexDirection: "row",
		alignContent: "space-between",
		gap: 15,
		//top: 200,
		margin: 50,
	},
	listCard: {
		display: "flex",
		flexDirection: "column",
		flexGrow: "2",
		width: "100%",
		/* color: theme.colors.black,
    fontSize: theme.typography.h4,
    fontFamily: theme.font.fontFamily */
	},
	cart: {
		display: "flex",
		border: [1, theme.colors.black],
		/*color: theme.colors.black,*/
		flexGrow: "1",
		height: "100%",
	},
	pinkDiv: {
		backgroundColor: theme.colors.lightPink,
		textAlign: "center",
		heigth: "79px",
		padding: 25,
		fontSize: theme.spacing.l,
	},
});

const DashboardPage = () => {
	const classes = useStyles();
	const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
	const [productList, setProductList] = useState<ProductList[] | null>(null);

	useEffectAsync(async () => {
		const response = await getCurrentUser();
		if (response.isSuccess === true) {
			setCurrentUser(response.body);
		}
	}, []);

	useEffectAsync(async () => {
		const response = await getProductList();
		if (response.isSuccess === true) {
			setProductList(response.body);
		}
	}, []);

	const adText = `Tere tulemast, ${currentUser?.firstName} ${currentUser?.lastName}`;
	return (
		<div>
			<LogoComp logosource={LogoTrans} />
			<PinkDiv cname={classes.pinkDiv} adtext={adText} />
			<div className={classes.container}>
				<div className={classes.listCard}>
					{productList?.map((el) => (
						<ListCard
							name={el.name}
							description={el.description}
							price={el.price}
							size={el.size}
							imageUrl={el.imageUrl}
						/>
					))}
				</div>
				<div className={classes.cart}>
					<Cart />
				</div>
				<a href="/">
					<Button title={"Logi välja"} />
				</a>
			</div>
			<Footer />
		</div>
	);
};
export default DashboardPage;
