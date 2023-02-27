import React, { Component } from 'react';
import compose from 'recompose/compose';
import * as commonFunctions from '../../../utilities/commonFunctions';
import { withRouter } from 'react-router-dom';
import { withApollo } from "react-apollo";
import { loader } from "graphql.macro";
import $ from 'jquery';

const SaveEmailSubscriptionl = loader('../../../graphql/search/saveEmailSubscription.graphql');

class SubscribeWithOutCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      hourRate: this.props.hourRate,
      isCardAvail: this.props.isCardAvail,
      cardBrand: this.props.cardBrand,
      availabilityDate: this.props.availabilityDate,
      bookingStartime: this.props.bookingStartime,
      bookingEndTime: this.props.bookingEndTime,
      userType:this.props.userType,
      bookedHour: this.props.bookedHour,
      email: localStorage.getItem('userEmail'),
      amount: this.props.amount,
      authorId: this.props.authorId,
      userName: this.props.userName,
      success: null,
      error: null,
      
    }
  }
 
  handleEmail = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}
  handleSubmit = async (e) => {
    e.preventDefault();
    // const isValid=this.formValidation();
    let { email, authorId } = this.state;

    $("#loadingDiv").show();
    this.props.client.mutate({
      mutation:  SaveEmailSubscriptionl,
      variables: {
       "data":{
         "email":email,
         "token": "",
         "author_id": authorId
       } 
      }
    }).then(response => {
      if (response.data.saveEmailSubscription.status === 'SUCCESS') {
        this.setState({success: response.data.saveEmailSubscription.message });
        this.props.onCloseModal2(response.data.saveEmailSubscription);
        console.log('token1', response.data.saveEmailSubscription )
      } else {
        this.setState({ error: response.data.saveEmailSubscription.message });
        console.log('token2', response.data.saveEmailSubscription)
      }
      $("#loadingDiv").hide();
    }).catch(error => {
      let errorMsg = commonFunctions.parseGraphQLErrorMessage(error);
      this.setState({ error: errorMsg });
      console.log('token', errorMsg )
      $("#loadingDiv").hide();
    });
  }
  render() {

    let { email, userName, firstName, lastName, hourRate, bookedHour, isCardAvail, cardBrand, error } = this.state;

    return (
      <div>
        {error && <div className='pay-error-msg'>{error}.</div>}

        <form onSubmit={this.handleSubmit} className="paymentForm">
          <div className="with-out-card container d-flex justify-content-center payment_form">
            <div className="card mt-5 p-4 text-white">
              <h2>{`${firstName} ${lastName}`}</h2>
              <div className="flex">
                <p>{email}</p>
                <p>{`${hourRate} $/hr - ${bookedHour} Hours`}</p>
              </div>
              {/* <p className="top mb-1">You need to pay</p> */}
              <div className="d-flex flex-row justify-content-between text-align-center xyz">
                <h2><i className="fas fa-dollar-sign"></i><span>Amount to pay: $10</span></h2>
              </div>
              <div className="card-content mt-4 mb-4">
             {/* <label>Enter your Mail ID</label>
             <input type="email" value={(localStorage.getItem('userEmail'))} /> */}
             
                <div class="d-flex">
                <div className="card-brand">{cardBrand}</div>
                 
                  <div class="pl-2">
                    <span class="name">{userName}</span>
                    <div><span class="cross">XXXX XXXX XXXX</span><span class="pin ml-2">{isCardAvail}</span></div>
                  </div>
                </div>
              </div>
              <div className="mt-2"> <button className="btn btn-block btn-lg btn-primary"><span>$10 Make payment </span></button> </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const enhance = compose(
  withRouter,
  withApollo
);
export default enhance((SubscribeWithOutCard));
