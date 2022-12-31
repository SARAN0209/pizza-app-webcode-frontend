import { useState } from "react";

import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartPage = () => {
	const [count, setCount] = useState(1);

	const handleInc = () => {
		if (count - 1 >= 1) {
			setCount(count - 1);
		}
	};

	return (
		<section>
			<div className="d-flex justify-content-center align-item-center" style={{ padding: "80px" }}>
				<h1>Place the Order</h1>
			</div>
			<div className="container">
				<div className="row d-flex my-5">
					<div className="col-md-6">
						<div class="table-responsive">
							<table class="table">
								<thead>
									<tr className="align-middle">
										<th scope="col">Sl no</th>
										<th scope="col">Product</th>
										<th scope="col">Price</th>
										<th scope="col">Quantity</th>
										<th scope="col">Sub-Total</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th className="align-middle" scope="row">
											1
										</th>
										<td className="align-middle">
											<p class="card-text fs-5">Veg</p>
										</td>
										<td className="align-middle">
											<p class="card-text fs-5">100</p>
										</td>
										<td className="align-middle">
											<div className="d-flex align-items-center">
												<p onClick={() => handleInc()} className="px-1 fs-4">
													<AiFillMinusSquare />
												</p>
												<p className="px-1" style={{ fontWeight: "800" }}>
													{count}
												</p>
												<p onClick={() => setCount(count + 1)} className="px-1 fs-4">
													<AiFillPlusSquare />
												</p>
											</div>
										</td>
										<td className="align-middle">
											<p class="card-text fs-5">{100 * count}</p>
										</td>
										{/* <th className="align-middle" scope="row">
											X
										</th> */}
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="col-md-6">
						<div class="card w-75 px-4 mx-auto">
							<div class="card-body">
								<h5 class="card-title text-center py-2 mb-3">Cart Totals</h5>
								<div className="d-flex justify-content-between">
									<h6 class="card-text">SubTotal</h6>
									<h6 class="card-text">{100 * count}</h6>
								</div>
								<hr></hr>
								<div className="d-flex justify-content-between">
									<h6 class="card-text">Total</h6>
									<h6 class="card-text">{100 * count}</h6>
								</div>
							</div>
							<div className="text-center">
								<button class="btn btn-danger my-3 w-100">
									<Link to="/checkout">PROCEED TO CHECKOUT</Link>
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
