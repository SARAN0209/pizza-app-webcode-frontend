import axios from "axios";
import { useState, useEffect } from "react";
const SingleProduct = ({ product }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProduct = async () => {
			const response = await axios.get("https://pizzaa-server.herokuapp.com/products/get/{_id}");
			const dharans = response.data;
			console.log(dharans);
			setProducts(dharans);
		};
		getProduct();
	}, []);
	return (
		<section>
			<div className="container p-5">
				<div className="row">
					<div className="col-md-12 d-flex">
						<div className="col-md-6">
							<img src={products.image} alt="" />
						</div>
						<div className="col-md-6 m-auto px-5">
							<h1>CHICAGO FIRE</h1>
							<p>Tomato, bbq sauce, sausage, cheese, red onion, house-made sausage, mozzarella & basil.</p>
							<h3 class="card-title">Rs. 100</h3>
							<button href="#" class="btn btn-primary my-3">
								ADD TO CART
							</button>
							<h6>Category: Pizza</h6>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleProduct;
