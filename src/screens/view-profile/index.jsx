import React, { useState, useEffect } from "react";
import styles from './styles.css';
import Typography from '@material-ui/core/Typography';
import { withApollo } from "react-apollo";
import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';
import compose from 'recompose/compose';
import { Modal } from "react-responsive-modal";
import { Player } from 'video-react';
import UserUtils from '../../utilities/userUtils';
import * as commonFunctions from '../../utilities/commonFunctions';
import { loader } from "graphql.macro";
import $ from 'jquery';
import { confirmAlert } from 'react-confirm-alert';
const USER = loader('../../graphql/auth/user.graphql');
const DELETE_USER = loader('../../graphql/auth/deleteuser.graphql');
const EditProfile = (props) => {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');
	const [tagLine, setTagLine] = useState('');
	const [qualification, setQualification] = useState('');
	const [certification, setCertification] = useState('');
	const [experience, setExperience] = useState('');
	const [profileImage, setProfileImage] = useState('');
	const [hourRate, setHourRate] = useState('');
	const [videoUrl, setVideoUrl] = useState('');

	const [userType, setUserType] = useState('');
	const [topicOfInterest, setTopicOfInterest] = useState('');
	const [minHourlyRate, setMinHourlyRate] = useState('');
	const [maxHourlyRate, setMaxHourlyRate] = useState('');

	const [profileSuccess, setProfileSuccess] = useState('');
	const [hasErrors, setHasErrors] = useState({});

	const [openModal, setOpenModal] = useState(false);
	const[delData,setDelData]=useState('')

	useEffect(() => {
		const accessToken = UserUtils.getAccessToken();
		if (accessToken === null) {
			props.history.push('/login');
		}

		const userId = UserUtils.getUserID();
		if (userId === null) {
			props.history.push('/login');
		} else {
			$("#loadingDiv").show();
			props.client.query({
				query: USER,
				variables: {
					data: userId
				},
				fetchPolicy: "network-only"
			}).then(response => {
				if (response.data.user) {
					setFirstName(response.data.user.first_name);
					setLastName(response.data.user.last_name);
					setEmail(response.data.user.email);
					setCity(response.data.user.city);
					setState(response.data.user.state);
					setCountry(response.data.user.country);
					setQualification(response.data.user.qualification);
					setExperience(response.data.user.experience);
					setHourRate(response.data.user.hourly_rate);
					setTagLine(response.data.user.tag_line);
					setCertification(response.data.user.certification);
					setUserType(response.data.user.type);
					setProfileImage(response.data.user.avatar);
					setVideoUrl(response.data.user.video_url);
					// setTopicOfInterest(response.data.user.topicOfInterest && response.data.user.topicOfInterest);
					let temp = [];
					response.data.user.topicOfInterest && response.data.user.topicOfInterest.map((d) => {
						temp.push(d.name);
						return null;
					});
					setTopicOfInterest(temp);

					setMinHourlyRate(response.data.user.min_hourly_rate);
					setMaxHourlyRate(response.data.user.max_hourly_rate);
				}
				$("#loadingDiv").hide();
			}).catch(error => {
				let errorMsg = commonFunctions.parseGraphQLErrorMessage(error);
				console.log(errorMsg, 'error');
				$("#loadingDiv").hide();
			});
		}

		const videoData = (UserUtils.getSaveVideo());
		if (videoData !== null) {
			let error = {};
			console.log(videoData, 'videoData')
			if (videoData === "SUCCESS") {
				$(window).scrollTop(0);
				setProfileSuccess(`Video Upload Successfully.`);
				$("#loadingDiv").hide();
			} else {
				error.videoFail = videoData;
				setHasErrors(error);
			}
			setTimeout(() => {
				setProfileSuccess('');
				setHasErrors({});
			}, 10000)
		}

		return () => {
			UserUtils.removeSaveVideo();
		}


	}, [props]);

	const onCloseModal = () => {
		setOpenModal(false);
	}
	const openSlotModal = () => {
		setOpenModal(true);
	}
	const handleDeletemain = () => {
		confirmAlert({
			customUI: ({ onClose }) => {
			  return (
				<div className='custom-ui'>
				  <h1>Are you sure?</h1>
				  <p>You want to delete this Account?</p>
				  <button onClick={onClose}>No</button>
				  <button onClick={() => {
					  handleDelete()
					  onClose()
				  }}>Yes, Delete it!</button>
				</div>
				
			  )
			}
		  })
		 
		const handleDelete=(e)=>{
		props.client.mutate({
		  mutation: DELETE_USER
		  
	  }).then(response => {
		  setDelData('profile deleted sucessfully');
	
		  props.history.push('/login');
		  UserUtils.logout();
					$("#loadingDiv").hide();
					
		}).catch(error => {
		let errorMsg = commonFunctions.parseGraphQLErrorMessage(error);
		console.log(errorMsg, 'error');
		$("#loadingDiv").hide();
	});
  
}
	}
	return (
		<Typography >

			<div className="profile-sec">
				<div className="container">
					<div className="profile-form">
						<h3>Profile  <Link to="/edit-profile">Edit</Link> <Link onClick={handleDeletemain} className="deleteIcon">Delete</Link></h3>
						

						<div className="profile_box">
							{profileSuccess !== '' && <div className='success-msg'>{profileSuccess}</div>}
							{hasErrors.videoFail && <div className='error'>{hasErrors.videoFail}</div>}
							<figure>
								<img src={`${(profileImage !== null && profileImage !== '') ? profileImage : '/images/default.png'}`} alt="profile" />
							</figure>
							<div className="form-group">
								<label>First Name</label>
								<span>{`${firstName} ${lastName}`}</span>
							</div>
							<div className="form-group">
								<label>Email</label>
								<span>{email || 'N/A'}</span>
							</div>
							<div className="form-group">
								<label>City</label>
								<span>{city || 'N/A'}</span>
							</div>
							<div className="form-group">
								<label>State</label>
								<span>{state || 'N/A'}</span>
							</div>
							<div className="form-group">
								<label>Country</label>
								<span>{country || 'N/A'}</span>
							</div>
							{userType === 'W' &&
								<React.Fragment>
									<div className="form-group">
										<label>Tag Line</label>
										<span>{tagLine || 'N/A'}</span>
									</div>
									<div className="form-group">
										<label>Qualification</label>
										<span>{qualification || 'N/A'}</span>
									</div>
									<div className="form-group">
										<label>Certification</label>
										<span>{certification || 'N/A'}</span>
									</div>
									<div className="form-group">
										<label>Experience</label>
										<span>{experience || 'N/A'}</span>
									</div>
									<div className="form-group">
										<label>My video</label>
										<span className="video-profile" onClick={openSlotModal}>Profile Video</span>
									</div>
									<div className="form-group">
										<label>Hourly Rate </label>
										<span>{`${hourRate ? `$${hourRate}/hr` : 'N/A'}`}</span>
									</div>
								</React.Fragment>
							}
							{userType === 'R' &&
								<React.Fragment>
									<div className="form-group">
										<label>Topic of Interest </label>
										<span>
											{`${(topicOfInterest.length > 0 && topicOfInterest.join(', ')) || 'N/A'}`}
										</span>
									</div>
									<div className="form-group">
										<label>Hourly Rate </label>
										<span>{`${minHourlyRate ? `Min: ${minHourlyRate} - Max: ${maxHourlyRate} $/hr` : 'N/A'}`}</span>
									</div>
								</React.Fragment>
							}

						</div>

						<Modal open={openModal} onClose={onCloseModal} closeOnOverlayClick={false}>
							<div className="video-play">
								<h3>Profile Video</h3>
								{videoUrl === "" && <p>Video Not Found</p>}
								<div className='player-wrapper'>

									{videoUrl !== "" &&
										<Player
											preload={'auto'}
											playsInline
											poster=""
											src={videoUrl}
										/>
									}

								</div>
							</div>
						</Modal>
					</div>
				</div>
			</div>
		</Typography>
	);
};

const enhance = compose(
	withStyles(styles),
	withRouter,
	withApollo
);
export default enhance(EditProfile);
