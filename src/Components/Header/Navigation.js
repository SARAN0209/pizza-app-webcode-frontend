
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import SingleProduct from "../../Pages/SingleProduct";
import SignIn from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";
import CartPage from "../../Pages/CartPage";
import CheckOutPages from "../../Pages/CheckOutPages";
const Navigation = () => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="singleproduct" element={<SingleProduct />} />
			<Route path="/" element={<SignIn />} />
			<Route path="signup" element={<SignUp />} />
			<Route path="cart" element={<CartPage />} />
			<Route path="checkout" element={<CheckOutPages />} />
		</Routes>
	);
};

export default Navigation;

