import { Link } from "react-router-dom";

const CheckOutPages = () => {
	return (
		<section>
			<div className="container mx-auto my-5">
				<div className="row">
					<div className="col-md-6">
						<div class="">
							<h2 className="py-3">Address Details</h2>
							<label for="exampleFormControlInput1" class="form-label">
								Name
							</label>
							<input type="text" class="form-control mb-3" />
							<label for="exampleFormControlInput1" class="form-label">
								E-Mail
							</label>
							<input type="text" class="form-control mb-3" />
							<label for="exampleFormControlInput1" class="form-label">
								PhoneNo
							</label>
							<input type="text" class="form-control mb-3" />
							<label for="exampleFormControlInput1" class="form-label">
								Address
							</label>
							<input type="text" class="form-control mb-3" />

							<label for="exampleFormControlInput1" class="form-label">
								Pin
							</label>

							<input type="text" class="form-control mb-3" />
						</div>
					</div>

					<div className="col-md-6">
						<div class="card w-75 px-4 mx-auto">
							<div class="card-body">
								<h5 class="card-title text-center py-2 mb-3">Cart Totals</h5>
								<div className="d-flex justify-content-between">
									<h6 class="card-text">SubTotal</h6>
									<h6 class="card-text">{100}</h6>
								</div>
								<hr></hr>
								<div className="d-flex justify-content-between">
									<h6 class="card-text">Total</h6>
									<h6 class="card-text">{100}</h6>
								</div>
							</div>
							<div className="text-center">
								<button class="btn btn-danger my-3 w-100">
									<Link to="/thankyou">COMPLETE YOUR ORDER</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CheckOutPages;
