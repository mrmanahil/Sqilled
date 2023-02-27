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
	useEffect(()=>{
		document.body.classList.add("home_header");
		return () => {
			document.body.classList.remove("home_header");
		};
	},[])
	return (
		<Typography>
			<div className="container-full">
				<div className="row">
					<div className="col-md-4 loginLeftNewBg">
						<div className="loginLeftNew"><div>
							<img src="images/login-otp-banner2.png" />
								<h3>Contact</h3>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
								</div>
								</div></div>
								<div className="col-md-8 marginAuto">
									<div className="about-left">
										<h3>Get in Touch</h3>
										<form name="register">
											<div className="more-flex more-flex-border">
												<div className="loginForm">
													<div className="form-group">
														<input type="text" placeholder="Full Name" name="email" className=""/></div>
														<div className="form-group">
														<input type="Email" placeholder="Email" name="email" className=""/></div>
														<div className="form-group">
															<textarea placeholder="Type ur message"></textarea>
														</div>
															<div className="form-group login-button">
															<button type="sumbit">Get in Touch</button>
															
															</div>
															</div>
															</div>
															</form>
															</div>
															</div>
															</div>
															</div>
		</Typography>
	);
};

const enhance = compose(
	withStyles(styles),
	withRouter,
);
export default enhance(Home);
