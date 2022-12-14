import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

const SignIn = () => {
	const navigate=useNavigate()
	const [formdata,setformdata]=useState({
	  email:"",
	  password:""
	})
   console.log(formdata)
	const [error,seterror]=useState()
  
	const handelSubmit=async(e)=>{
		
	  e.preventDefault();
	  console.log(formdata);
	  try {
	  
  
  
		const res= await axios.post("https://pizza-app-webcode-backend.onrender.com/users/signin",{...formdata});
		// console.log(res);
		const message=res.data.message;
		if(res.data.token){
		 
	   
		 navigate("/home")
	 
		}else{
	   
		  seterror(message)
		}
		
	  } catch (error) {
		console.log(error);
		
	  }
	
  
  
  
	}

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
								<div className="my-4">
									<TextField className="my-3 w-100 " id="standard-basic" type="text" value={formdata.email}
                                      onChange={(e)=>setformdata({...formdata,email:e.target.value})}  label="E-Mail" variant="standard" />
									<TextField className="my-3 w-100" id="standard-basic" type="password" value={formdata.password}
                                      onChange={(e)=>setformdata({...formdata,password:e.target.value})} label="Password" variant="standard" />
								</div>
								<div class="d-grid gap-4 mb-3">
								<Button variant="contained"  onClick={(e)=>{handelSubmit()}}> Submit </Button>
									<button class="btn btn-primary" type="submit" onClick={handelSubmit}>
										<Link to="/forgetpassword">Forgot Password?</Link>
									</button>
								</div>
								<div>
									Don???t have an account?
									<span className="text-primary fs-6 mx-2 ">
										<Link to="/signup" className="text-primary">
											Sign up
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

export default SignIn;
