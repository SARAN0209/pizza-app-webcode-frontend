
import { useState, useEffect, useContext } from "react";

// import { AiFillPlusSquare, AiFillMinusSquare, } from "react-icons/ai";
import{AiFillDelete }from "react-icons/ai";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";
import Menu from "../Components/Header/Menu";
import { Cart } from "../Context/Context";

const CartPage = () => {
	const onToken = (token) => {
        console.log(token)
    }
	const{cart, setCart} = useContext(Cart)
	const [count, setCount] = useState(1);
	const [total, setTotal] = useState();
	useEffect(() => {
        setTotal(cart.reduce((acc, cuu) => acc + cuu.price, 0))

    }, [cart])
	// const handleInc = () => {
	// 	if (count - 1 >= 1) {
	// 		setCount(count - 1);
	// 	}
	// };

	return (
		<section>
			<Menu/>
			<div className="d-flex justify-content-center align-item-center" style={{ padding: "80px" }}>
				<h1>Place the Order</h1>
			</div>
			<div className="container">
				<div className="row d-flex my-5">
					<div className="col-md-6">
						<div>
							{
								cart.map((product)=>{
									return <div key={product._id}>
									
						<div class="table-responsive">
							<table class="table">
								<thead>
									<tr className="align-middle">
										{/* <th scope="col">Sl no</th> */}
										<th scope="col">Product</th>
										<th scope="col">Price</th>
										{/* <th scope="col">Quantity</th> */}
										<th scope="col">Sub-Total</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										{/* <th className="align-middle" scope="row">
											1
										</th> */}
										<td className="align-middle">
										<h4> <span className="value">{product.name}</span></h4>
										</td>
										<td className="align-middle">
										<h4> <span className="value">{product.price}</span></h4>
										</td>
										<td className="align-middle">
											<div className="d-flex align-items-center">
												{/* <p onClick={() => handleInc(product.id)} className="px-1 fs-4">
													<AiFillMinusSquare />
												</p> */}
												<p className="px-1" style={{ fontWeight: "800" }}>
													{count}
												</p>
												{/* <p onClick={() => setCount(count + 1)} className="px-1 fs-4">
													<AiFillPlusSquare />
												</p> */}
											</div>
										</td>
										<td className="align-middle">
											<p class="card-text fs-5">{product.price* count}</p>
										</td>
										<th className="align-middle" scope="row">
										<button className='btn btn-danger ' onClick={() => { setCart(cart.filter(e => e.name !== product.name)) }} >
											<AiFillDelete /></button>
										</th>
										
									</tr>
								</tbody>
							</table>
						</div>
						</div>
						})
					}
						</div>
					</div>
					<div className="col-md-6">
						<div class="card w-75 px-4 mx-auto">
							<div class="card-body">
								<h5 class="card-title text-center py-2 mb-3">Cart Totals</h5>
								<div className="d-flex justify-content-between">
									<h6 class="card-text">SubTotal</h6>
									<h6 class="card-text">{total * count}</h6>
								</div>
								<hr></hr>
								<div className="d-flex justify-content-between">
									<h6 class="card-text">Shipping charges</h6>
									<h6 class="card-text"> 30 </h6>
								</div>
								<hr></hr>
								<div className="d-flex justify-content-between">
									<h6 class="card-text">Total</h6>
									<h6 class="card-text">{30 + total*count}</h6>
								</div>
							</div>
							<div className="text-center">
								<button class="btn btn-danger my-3 w-100">
								<StripeCheckout
                                token={onToken}
                                name="PAYMENT GATEWAY"
                                currency="INR"
								amount={30 + total*count + "00"}
                                stripeKey="pk_test_51MbGIeSDkbtMIT5KRHIf5NwmxrfcHiZ3TA2tK54UdRUpxqJPo5hGqHJqD0PQZJ20ARBehZUjQsHM71YoQAvtaDH500wlFnGpfa"
                            />
								</button>
								<p>NOTE : Please confirm the address after payment done </p>
								<button class="btn btn-danger my-3 w-100">
								<Link to="/checkout">CONFRIM TO ADDRESS</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartPage;

