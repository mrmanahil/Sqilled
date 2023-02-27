import React, { useEffect, useState } from "react";
import styles from './styles.css';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';
import compose from 'recompose/compose';
import UserUtils from '../../utilities/userUtils';
import classNames from "classnames";

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
		<Typography >
			<div className="banner">
				<div className="circle_bg">
					<img src="images/circled.png" />
				</div>
				<div className="container">
					<div className="banner-content">
						<div>							
							<h4>Pricing</h4>
							<h3>Lorem Ipsum is simply dummy text<br/> of the printing and typesetting</h3>
							<div className="button_block">
								<Link to="/login"><button>Get Started</button></Link>
								<Link to="/login"><button>Contact US</button></Link>
							</div>						
						</div>
					</div>
				</div>
			</div>
			<div className="pricing_block">
			<div class="text-center">
    <div class="container">
		<div className="pricing_block_top">
		
		<h4><span>Pricing Plans</span></h4>
      	<h3>Lorem Ipsum is simply dummy </h3>
		  </div>
        <div class="row pt-4">
		<div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal"><i class="las la-money-check-alt"></i> Local Talent</h4>
                    </div>
                    <div class="card-body">
                        <h1><b>$15 </b><small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul> <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal"><i class="las la-money-check-alt"></i> Remote Talent</h4>
                    </div>
                    <div class="card-body">
                        <h1><b>$0 </b><small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul> <button type="button" class="btn btn-lg btn-block btn-outline-info">Get started</button>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal"><i class="las la-money-check-alt"></i> 30+ Niche Roles</h4>
                    </div>
                    <div class="card-body">
                        <h1><b>$29 </b><small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>30 users included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                        </ul> <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
                    </div>
                </div>
            </div>
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
