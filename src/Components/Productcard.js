import React from "react";
import { useContext } from "react";
import { Cart } from "../Context/Context";


const Productcard = ({ product }) => {
	const { cart, setCart } = useContext(Cart);
	
		// console.log(product)
	return (
		<section>
			<div className="card productCard my-3 border ">
				<div className="card-body">
					<img src={product.image} alt="Farmhouse" className="productCardImg" style={{height:'200px' ,width:'200px'}}></img>
					<h5 className="card-title py-3">{product.name}</h5>
					<h5 className="card-title">
						<span>price :</span> {product.price} Rs/-
					</h5>
					<p className="card-text">{product.desc}</p>
				</div>
				<div className="d-flex justify-content-around align-items-center m-2">
					{cart.includes(product)?
					<button className="btn btn-danger text-center d-inline mx-auto"  onClick={()=>{setCart(cart.filter(e=>e.name!==product.name))}}>
					Remove From Cart
					</button>:
					<button className="btn btn-danger text-center d-inline mx-auto " onClick={()=>{setCart([product,...cart])}}
                    >Add To Cart</button>}
				</div>
			</div>
		</section>
	);
};
export default Productcard;
