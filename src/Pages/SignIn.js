import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import {useFormik} from "formik";
import Swal from "sweetalert2";

const SignIn = () => {
	const navigate=useNavigate()

let formik = useFormik({
	initialValues: {
		email:"",
		password:""
	},
	validate:(values)=>{
		const errors ={};
		if (!values.email){
			errors.email = "Email is Required";	
		}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
		}
		if(!values.password){
			errors.password = "Password is Required"
		}
		return errors;

	},
	onSubmit: async (values) => {
		try {
		  const response = await axios.post('https://pizza-app-webcode-backend.onrender.com/users/signin', {...values});
		  navigate("/");
		 if(response.data) {
			localStorage.setItem("token", response.data);
		 }
		} catch (error) {
		  console.log(error.response.data.meg);
		  Swal.fire({
			title: "Wrong Details",
			icon: "error",
			confirmButtonText: "okay",
		  });
		}
	  },
})

	return (
		<section >
			<div className="container py-5">
				<div className="row">
					<div className="col-md">
						<div className="card signin-card text-center w-25 mx-auto">
							<div className="card-body">
								<div className="user-pic mx-auto my-3 d-flex justify-content-center align-items-center text-white fs-1">
									<BiUserCircle />
								</div>
								<h2>Sign In</h2>
								<form onSubmit={formik.handleSubmit}>
								<div className="my-4">
								<span style={{ color: "red" }}>{formik.touched.email&&formik.errors.email}</span>
                                    <input type="email" class="form-control" name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} /><br/>
									<span style={{ color: "red" }}>{formik.touched.password&&formik.errors.password}</span>
                                    <input type="password" class="form-control" name="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} />
								</div>
								<div class="d-grid gap-4 mb-3">
								<div class="d-grid gap-4 mb-3">
								<input type="submit" class="form-control btn btn-warning" value={"Login"} />
								</div>
									<button class="btn btn-primary" type="submit" >
										<Link to="/forgetpassword">Forgot Password?</Link>
									</button>
								</div>
								<div>
									Don’t have an account?
									<span className="text-primary fs-6 mx-2 ">
										<Link to="/signup" className="text-primary">
											Sign up
										</Link>
									</span>
								</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
