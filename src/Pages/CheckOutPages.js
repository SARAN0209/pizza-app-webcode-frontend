import { Link } from "react-router-dom";
import Menu from "../Components/Header/Menu";

const CheckOutPages = () => {
	return (
		<section>
			<Menu/>
			<div className="container mx-auto my-5">
				<div className="row">
					<div className="col-md-6">
						<div class="">
							<h2 className="py-3">Address Details</h2>
							<label for="exampleFormControlInput1" class="form-label">
								Name
							</label>
							<input type="text" placeholder="Enter your Name" class="form-control mb-3" />
							<label for="exampleFormControlInput1" class="form-label">
								E-Mail
							</label>
							<input type="email" placeholder="Enter your email" class="form-control mb-3" />
							<label for="exampleFormControlInput1" class="form-label">
								PhoneNo
							</label>
							<input type="number" placeholder="Enter your Mobilenumber" class="form-control mb-3" />
							<label for="exampleFormControlInput1" class="form-label">
								Address
							</label>
							<input type="text" placeholder="Enter your address" class="form-control mb-3" />

							<label for="exampleFormControlInput1" class="form-label">
								Pin
							</label>

							<input type="number" placeholder="Enter your pin" class="form-control mb-3" />
						</div>
						<div className="text-center">
							<button class="btn btn-danger my-3 w-100">
								<Link to="/thankyou">COMPLETE YOUR ORDER</Link>
							</button>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default CheckOutPages;
