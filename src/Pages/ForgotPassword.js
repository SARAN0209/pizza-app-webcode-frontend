const ForgotPassword = () => {
	return (
		<section className="py-5">
			<div className="container py-5">
				<div className="row">
					<div className="col-md">
						<div className="card signin-card text-center mx-auto">
							<div className="card-body">
								<h4 className="py-3">Forgot Your Password</h4>

								<div className="mb-3">
									<input type="password" class="form-control" id="inputPassword2" placeholder="E-Mail" />
								</div>
								<div class="d-grid gap-4 mb-3">
									<button class="btn btn-primary" type="button">
										Reset My Password
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ForgotPassword;
