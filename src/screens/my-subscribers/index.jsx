import React, { useState, useEffect } from "react";
import styles from './styles.css';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import { withApollo } from "react-apollo";
import * as commonFunctions from '../../utilities/commonFunctions';
import { loader } from "graphql.macro";
import $ from 'jquery';
import {Tabs,  TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css




const emailsubscription = loader('../../graphql/search/getEmailSubscription.graphql');



const MySubscribers = (props) => {

	const [emailList, setEmailList] = useState([]);
	
	const user_type1=localStorage.getItem('userType');

	// const [value,setValue]=useState(Types.READER)
	const user_type=(user_type1==="R") ? "READER" : "AUTHOR"
	
	const handleEmailStatus =  async () => {
	
		
		console.log('type',user_type)
			$("#loadingDiv").show();
		await props.client.query({
			query: emailsubscription,
			
			fetchPolicy: "network-only"
		}).then(response => {
			if (response.data.getEmailSubscription) {
				setEmailList(response.data.getEmailSubscription);
				console.log('resppp',response.data.getEmailSubscription)
				
				$("#loadingDiv").hide();
			}
		}).catch(error => {
			let errorMsg = commonFunctions.parseGraphQLErrorMessage(error);
			console.log(errorMsg, 'error')
			$("#loadingDiv").hide();
		});
	}
	useEffect(()=>{
		handleEmailStatus() 
	},[props])

	// console.log('type',user_type)
	

	return (
		<Typography >
			<div className="search-list">
				<div className="container">
				 <h3>My Subscribers List </h3>
			
					
					<div className="my-bookings">
						<Tabs>
						
							<TabPanel>

								<div className="search-table">
									<table>
										<thead>

                    						 	<th>PROFILE</th>
                     							<th>NAME</th>
												<th> EMAIL ID</th>
										
										</thead>
										<tbody>
											{(emailList && emailList.length > 0) && emailList.map((d, index) => {
														
												 
												
												return (
													<React.Fragment>
														
								
											
														
                            							{user_type === "AUTHOR"  &&
															<React.Fragment>
																<tr key={index}>
                                									<td>
																	{<figure className="profile">
																			<img src={`${d.reader.avatar !== null ? d.reader.avatar : '/images/default.png'}`} alt="profile" />
																		</figure>}
																	</td>
                                  									<td>{`${d.reader.first_name} ${d.reader.last_name}`}</td>
																	<td>{d.reader.email || 'N/A'}</td>
																
																</tr>
															</React.Fragment>
											}

													</React.Fragment>
												)
											})}

											{(emailList && emailList.length === 0) &&
												<tr>
													<td colSpan="9" className="text-center">
														<h5>Data Not Found.</h5>
													</td>
												</tr>
											}
										</tbody>
									</table>

								
								</div>
							</TabPanel>

				

						</Tabs>
					</div>
				</div>


			</div>

		</Typography >
	);
};

const enhance = compose(
	withStyles(styles),
	withRouter,
	withApollo
);
export default enhance( MySubscribers);
