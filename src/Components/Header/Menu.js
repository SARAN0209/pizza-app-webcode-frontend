import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Menu = () => {

	return (

		<section className="container-fluid menubar py-3">
			<div className="container">
				<div className="row ">
					<div className="col-md d-flex justify-content-between align-items-center ">
						<ul>
							<li>
								<Link to="/"><h1>PIZZA HUT</h1></Link>
							</li>
						</ul>
						<ul className="menuName d-flex align-items-center mb-0">
							<li>
								<Link to="/">HOME</Link>
							</li>
							<li>
							<Link to="cart" className="mx-2">
									<FaShoppingCart className="fs-4 mx-2 text-white" />
									Cart
								</Link>
								

							</li>
							<li className="mx-0 d-flex align-items-center">
								
							<Link to="signin">LOGOUT</Link>

							
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
