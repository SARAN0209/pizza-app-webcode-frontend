import React,{ useContext, useEffect, useState } from "react";
import Menu from "../Components/Header/Menu";
import Productcard from "../Components/Productcard";
import BannerImage from "../Images/Bannerpizza.png";
import { Cart } from "../Context/Context";
import axios from "axios";

const Home = () => {
	const {cart} = useContext(Cart) 
	// console.log(cart)
	const [products, setProducts] = useState([]);
	useEffect(()=>{
		const getproduct=async ()=>{
            const res= await axios.get("https://pizza-app-webcode-backend.onrender.com/products/getproduct");
            // console.log(res.data);
           setProducts(res.data)
          
         }
          getproduct()
	} ,[])

	return (
		<section>
			<Menu cart={cart}/>
			<div className="container-fluid bg-danger px-3 py-5">
				<div className="container">
					<div className="row text-start d-flex align-items-center">
						<div className="col-md-6 px-3 ">
							<div className="text-white">
								<h4>Testy Pizza</h4>
								<h1 style={{ fontWeight: "700" }}>HOT SPICY</h1>
								<p className="fs-6">Tomato, bbq sauce, sausage, cheese, red onion, house-made sausage, mozzarella & basil. 12″ / 420 g / No Spicy</p>
							</div>
						</div>
						<div className="col-md-6 text-end px-5">
							<img src={BannerImage} alt="PizzaImg" className="BannerImage"></img>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto text-center py-5">
				<div className="row my-5">
					<div className="col-md-12">
						<h1 className="font-weight-bold" style={{ fontWeight: "700" }}>
							SPECIAL FOR YOU
						</h1>
						<h3>Veg & Nonveg Pizza's</h3>
						<div className="d-flex justify-content-center flex-wrap">
							{products.map((prod) => (
								<Productcard key={prod._id} product={prod} />
								
							))}

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
