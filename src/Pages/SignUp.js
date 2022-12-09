import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
	const navigate = useNavigate();
	function handleClick() {
		navigate("/signin");
	}
	return (
		<section>
			<div className="container py-5">
				<div className="row">
					<div className="col-md">
						<div className="card signin-card text-center w-25 mx-auto">
							<div className="card-body">
								<h2>Sign Up</h2>
								<div className="my-4">
									<TextField className="my-3 w-100 " id="standard-basic" label="Name" variant="standard" />
									<TextField className="my-3 w-100" id="standard-basic" label="E-mail" variant="standard" />
									<TextField className="my-3 w-100" id="standard-basic" label="Password" variant="standard" />
									<TextField className="my-3 w-100" id="standard-basic" label="Confirm Password" variant="standard" />
								</div>
								<div class="d-grid gap-4 mb-3">
									<button class="btn btn-primary" type="button">
										Signup
									</button>
								</div>
								<div>
									Already Have account?
									<span className="text-primary fs-6 mx-2" onClick={(e) => handleClick()}>
										<Link to="/signup" className="text-primary">
											Signin
										</Link>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
