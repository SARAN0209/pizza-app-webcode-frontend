import React,{ useState } from "react";
import Productcard from "../Components/Productcard";
import BannerImage from "../Images/Bannerpizza.png";

var Pizza = [{
	"name" : 'Mashroom pizza',
	"price": '140',
	"desc" : 'mashroom,garlic,capsigum,cheass',
	"image" : 'https://www.shutterstock.com/image-photo/pizza-vegetarian-on-plate-260nw-176980196.jpg'
	},
	{
		"name" : 'cheass Pizza',
		"price": '120',
		"desc" : 'onion,garlic,capsigum,chess',
		"image" : 'https://thumbs.dreamstime.com/b/ham-veg-pizza-salami-pizza-back-38320413.jpg'
	},
	{
		"name" : 'corn pizza',
	"price": '130',
	"desc" : 'corn,garlic,capsigum,chess onion',
	"image" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaC8MvCTZkKe7TXZLLk2J-Vbs7Cu_FZdmBJKI_GMQZ&s'
	},
	
]
var nonvegPizza = [
	{
		"name" : 'Chicken pizza',
	"price": '180',
	"desc" : 'chicken,garlic,capsigum,chess,oinon,tomoto',
	"image" : 'https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp'
	},
	{
		"name" : 'Tandhuri chicken pizza',
	"price": '200',
	"desc" : 'chicken,garlic,capsigum,chess,onion,tomoto',
	"image" : 'https://c.ndtvimg.com/2020-07/gelvd1i_pizza_625x300_07_July_20.jpg'
	},
	{
		"name" : 'fried Chicken pizza',
	"price": '220',
	"desc" : 'chicken,garlic,capsigum,chess,onion,tomoto',
	"image" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkyrK9ZhKp_zQI7FY4ej95Va3SY_mir3pVLcV-P2R&s'
	}
]

const Home = () => {
	const [products, setProducts] = useState(Pizza);
	const [nonproducts, setNonProducts] = useState(nonvegPizza);


	return (
		<section>
			<div className="container-fluid bg-danger px-3 py-5">
				<div className="container">
					<div className="row text-start d-flex align-items-center">
						<div className="col-md-6 px-3 ">
							<div className="text-white">
								<h4>Testy Pizza</h4>
								<h1 style={{ fontWeight: "700" }}>HOT SPICY</h1>
								<p className="fs-6">Tomato, bbq sauce, sausage, cheese, red onion, house-made sausage, mozzarella & basil. 12″ / 420 g / No Spicy</p>
							</div>
						</div>
						<div className="col-md-6 text-end px-5">
							<img src={BannerImage} alt="PizzaImg" className="BannerImage"></img>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto text-center py-5">
				<div className="row my-5">
					<div className="col-md-12">
						<h1 className="font-weight-bold" style={{ fontWeight: "700" }}>
							SPECIAL FOR YOU
						</h1>
						<h3>Veg Pizza</h3>
						<div className="d-flex justify-content-center flex-wrap">
							{products.map((product) => (
								<Productcard key={product._id} product={product} />
							))}
						</div>
					</div>
				</div>

				<div className="row my-5">
					<div className="col-md-12">
						<h3>Non-Veg Pizza</h3>
						<div className="d-flex justify-content-center flex-wrap">
							{nonproducts.map((product) => (
								<Productcard key={product._id} product={product} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
