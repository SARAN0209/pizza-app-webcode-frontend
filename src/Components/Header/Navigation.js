import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import SingleProduct from "../../Pages/SingleProduct";
import SignIn from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";
import ForgotPassword from "../../Pages/ForgotPassword";
import CartPage from "../../Pages/CartPage";
import CheckOutPages from "../../Pages/CheckOutPages";
import ThankYou from "../../Pages/ThankYou";
import Payment from "../../Pages/payment";

const Navigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="singleproduct" element={<SingleProduct />} />
			<Route path="signIn" element={<SignIn />} />
			<Route path="signup" element={<SignUp />} />
			<Route path="forgetpassword" element={<ForgotPassword />} />
			<Route path="cart" element={<CartPage />} />
			<Route path="payment" element={<Payment/>} />
			<Route path="checkout" element={<CheckOutPages />} />
			<Route path="thankyou" element={<ThankYou />} />
		</Routes>
	);
};

export default Navigation;
