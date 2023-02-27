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
			<div className="terms-and-conditions">
				<div className="banner-block">
				<div className="container">
					<h3>Privacy Policy</h3>
					</div>
				</div>
				<div className="container">
					<div className="terms_block">
						<h4>Sub Head</h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						<ul>
							<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
							<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
							<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
							<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
						</ul>
						<h4>Sub Head</h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						<ul>
							<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
							<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
							<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
							<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
						</ul>
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
