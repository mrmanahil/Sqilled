import React, { useEffect, useState } from "react";
import styles from './styles.css';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';
import compose from 'recompose/compose';
import UserUtils from '../../utilities/userUtils';

const Home = (props) => {
	const [isLogged, setIslogged] = useState(false);

	useEffect(() => {
		const accessToken = UserUtils.getAccessToken();
		if (accessToken !== null) {
			setIslogged(true);
			// props.history.push('/view-profile');
		}
	}, [props]);
	useEffect(() => {
		document.body.classList.add("home_header");
		return () => {
			document.body.classList.remove("home_header");
		};
	}, [])
	return (
		<Typography >
			<div className="banner">
				<div className="circle_bg">
					<img src="images/circled.png" />
				</div>
				<div className="container" id="home">
					<div className="banner-content">
						<div>

							<h3>Your <span>biggest career</span> move, <br />get started on sqilled</h3>
							<div className="button_block">
								<Link to="/login"><button>professional login</button></Link>
								<Link to="/login"><button>User login</button></Link>
							</div>
							<i class="las la-arrow-down"></i>
						</div>
					</div>

				</div>
			</div>
			<div className="how-it-works-main how-it-works-main-squilled" id="howit_works">
				<div className="container">
					<div className="row">
						<div className="col-sm-5">
							<div className="peopeles_left" >
								<h3>How it works</h3>
								<h4>You sign up on our platform with a tag-line about your strength.</h4>
								<p>Make a short video of your portfolio of services.
									Adjust your availability and set your hourly rate. And that is it. You are ready to provide sqilled services to the world.</p>

							</div>

						</div>
						<div className="col-sm-7">
							{/* <div className="peopeles_right">
							<h3>My Team</h3>								
							<ul>
								<li>
									<figure>
										<img src="images/profile1.jpg"/>
									</figure>
									<div className="how-it-works-content">
										<p>John</p>
										<label>
											<span></span>
											<span></span>
										</label>
									</div>
								</li>
								<li>
									<figure>
										<img src="images/profile2.jpg"/>
									</figure>
									<div className="how-it-works-content">
										<p>Martin</p>
										<label>
											<span></span>
											<span></span>
										</label>
									</div>
								</li>
								<li>
									<figure>
										<img src="images/profile3.jpg"/>
									</figure>
									<div className="how-it-works-content">
										<p>Christian</p>
										<label>
											<span></span>
											<span></span>
										</label>
									</div>
								</li>
								<li>
									<figure>
										<img src="images/profile4.jpg"/>
									</figure>
									<div className="how-it-works-content">
										<p>Chris Lynn</p>
										<label>
											<span></span>
											<span></span>
										</label>
									</div>
								</li>
								<li>
									<figure>
										<img src="images/profile1.jpg"/>
									</figure>
									<div className="how-it-works-content">
										<p>John</p>
										<label>
											<span></span>
											<span></span>
										</label>
									</div>
								</li>
								<li>
									<figure>
										<img src="images/profile2.jpg"/>
									</figure>
									<div className="how-it-works-content">
										<p>Martin</p>
										<label>
											<span></span>
											<span></span>
										</label>
									</div>
								</li>
								<li>
									<figure>
										<img src="images/profile3.jpg"/>
									</figure>
									<div className="how-it-works-content">
										<p>Christian</p>
										<label>
											<span></span>
											<span></span>
										</label>
									</div>
								</li>
								<li>
									<figure>
										<img src="images/profile4.jpg"/>
									</figure>
									<div className="how-it-works-content">
										<p>Chris Lynn</p>
										<label>
											<span></span>
											<span></span>
										</label>
									</div>
								</li>
								
								
							</ul>
						</div>						 */}
							<div className="about_profile flex_about">
								<img src="../images/c2.png" align="left" />
								<div>
									<h5>Adnan Khakoo</h5>
									<p>“Adnan Khakoo is the founder and CEO of Sqilled. Adnan graduated with a Finance and Accounting degree and have worked in the finance and derivatives world since graduating. He has worked for some of the top asset managers namely. Merrill Lynch and JP Morgan. Adnan always wanted to revolutionize the world of sqilled economy having built Sqilled and providing the sqilled economy a platform to earn their living by providing their services to the globe.

										Sqilled is a global platform where professionals can research ideas and convert them into products that can be offered to the clients”</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>


			{/*<div className="professional">
				<div className="container">
				<div className="professional-top">
					<h3>Professional</h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
				</div>
				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					
							<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="row">
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile1.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Johnson</h3>
										<a href="#">Read more</a>
									</div>
									</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile2.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Chris Martin</h3>
										<a href="#">Read more</a>
									</div>
									</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile3.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Shane Watson</h3>
										<a href="#">Read more</a>
									</div>
									</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile4.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Ronald</h3>
										<a href="#">Read more</a>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="row">
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile1.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Johnson</h3>
										<a href="#">Read more</a>
									</div>
									</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile2.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Chris Martin</h3>
										<a href="#">Read more</a>
									</div>
									</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile3.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Shane Watson</h3>
										<a href="#">Read more</a>
									</div>
									</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile4.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Ronald</h3>
										<a href="#">Read more</a>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="row">
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile1.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Johnson</h3>
										<a href="#">Read more</a>
									</div>
									</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile2.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Chris Martin</h3>
										<a href="#">Read more</a>
									</div>
									</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile3.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Shane Watson</h3>
										<a href="#">Read more</a>
									</div>
									</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="professional-box">
									<figure>
										<img src="images/profile4.jpg" />
									</figure>
									<div className="professional-box-content">
										<div>
										<h3>Ronald</h3>
										<a href="#">Read more</a>
										</div>
									</div>
									</div>
								</div>
								</div>
							</div>
							
							
							</div>
							<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
							</a>
						</div>
				</div>
			</div>*/}
			<div className="about" id="aboutus">
				<div className="container">
					<div>

						<h4><span >Our Story</span></h4>
						<h3>Welcome to Sqilled. Your biggest career move. </h3>
						<p>We are creating this platform to empower every individual to offer their skill and services throughout the globe.The idea is to democratize the creator’s economy, where everyone who has a skill, can earn a living by being compensated for providing those skills and services </p>
						<p>Our aim is to ensure every sqilled person on this planet, in every section of the economy, is connected to one another through this platform and work towards a common goal of providing services and improving lives of other individuals and corporations on a click of button.</p>
					</div>
				</div>
			</div>
			{/* <div className="testimonials">
				<div className="container">
					<h4><span>Testimonials</span></h4>
					<h3>Lorem Ipsum is simply dummy </h3>
				</div>
				<div className="gtco-testimonials">
					<div className="owl-carousel owl-carousel1 owl-theme">
						<div>
							<div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
								<div className="card-body">
									<h5>Ronne Galle <br />
										<span> Project Manager </span>
									</h5>
									<p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
										impedit quo minus id quod maxime placeat ” </p>
								</div>
							</div>
						</div>
						<div>
							<div className="card text-center">
								<img className="card-img-top" src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301" alt="" />
								<div className="card-body">
									<h5>Missy Limana<br />
										<span> Engineer </span>
									</h5>
									<p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
										impedit quo minus id quod maxime placeat ” </p>
								</div>
							</div>
						</div>
						<div>
							<div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302" alt="" />
								<div className="card-body">
									<h5>Martha Brown<br />
										<span> Project Manager </span>
									</h5>
									<p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
										impedit quo minus id quod maxime placeat ” </p>
								</div>
							</div>
						</div>
						<div>
							<div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303" alt="" />
								<div className="card-body">
									<h5>Hanna Lisem<br />
										<span> Project Manager </span>
									</h5>
									<p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
										impedit quo minus id quod maxime placeat ” </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}

		</Typography>
	);
};

const enhance = compose(
	withStyles(styles),
	withRouter,
);
export default enhance(Home);
