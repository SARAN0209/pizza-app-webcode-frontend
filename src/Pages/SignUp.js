import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
	const navigate = useNavigate();
	const [formdata,setformdata]=useState({
		name:"",
		email:"",
		password:"",
		confirmPassword:""
	  })
	function handleClick() {
		navigate("/signin");
	}
	const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            var response = await axios.post('https://pizza-app-webcode-backend.onrender.com/users/signin', {...formdata})
            if(response.data) {
                await localStorage.setItem("token", response.data)
                navigate('/product');
            }
        }catch(err) {
            console.log(err)
        }
    }
	return (
		<section onSubmit={handleSubmit}>
			<div className="container py-5">
				<div className="row">
					<div className="col-md">
						<div className="card signin-card text-center w-25 mx-auto">
							<div className="card-body">
								<h2>Sign Up</h2>
								<div className="my-4">
									<TextField className="my-3 w-100 " id="standard-basic" type="text" label="Name" variant="standard" value={formdata.name}
									onChange={(e)=>setformdata({...formdata,name:e.target.value})} />
									<TextField className="my-3 w-100" id="standard-basic"type="text" label="E-mail" variant="standard" value={formdata.email}
									onChange={(e)=>setformdata({...formdata,email:e.target.value})}/>
									<TextField className="my-3 w-100" id="standard-basic"type="password" label="Password" variant="standard"value={formdata.password}
									onChange={(e)=>setformdata({...formdata,password:e.target.value})} />
									<TextField className="my-3 w-100" id="standard-basic"type="password" label="Confirm Password" variant="standard"value={formdata.confirmPassword}
									onChange={(e)=>setformdata({...formdata,confirmPassword:e.target.value})} />
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
