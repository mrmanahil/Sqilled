import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import compose from 'recompose/compose';
import * as commonFunctions from '../../../utilities/commonFunctions';
import { withRouter } from 'react-router-dom';
import { withApollo } from "react-apollo";
import { loader } from "graphql.macro";
import $ from 'jquery';

const  SaveEmailSubscriptionl = loader('../../../graphql/search/saveEmailSubscription.graphql');

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#303238",
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF"
      }
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238"
      }
    }
  }
};

class SubscribeWithCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      hourRate: this.props.hourRate,
      availabilityDate: this.props.availabilityDate,   
      userType:this.props.userType, 
      authorId: this.props.authorId,
      email:localStorage.getItem('userEmail'),
      success: null,
      error: null,
      
    }
   
  }
  // console.log('email',email)
  handleEmail = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}
  formValidation=()=>{
    const {email}=this.state;
    let isValid=true;
    const errors={}
    if(email===null){
      errors.emailvalid="please provide your mail id"
      isValid=false;
    }
  }
  getStripeToken = async (e) => {
    e.preventDefault();
    $("#loadingDiv").show();
    let tokenRes = await this.props.stripe.createToken({  authorId: this.props.authorId });
    
    console.log('token1',tokenRes)
    let {email,authorId } = this.state;
    
    if (tokenRes.token) {  
      this.props.client.mutate({
        mutation:  SaveEmailSubscriptionl,
        variables: {
         "data":{
           "email":email,
           "token": tokenRes.token.id,
           "author_id": authorId
         } 
        }
      }).then(response => {
        if (response.data.saveEmailSubscription.status === 'SUCCESS') {
          this.setState({success: response.data.saveEmailSubscription.message });
          this.props.onCloseModal2(response.data.saveEmailSubscription);
          console.log('token2', response.data.saveEmailSubscription )
        } else {
          this.setState({ error: response.data.saveEmailSubscription.message });
          console.log('token2', response.data.saveEmailSubscription)
        }
        $("#loadingDiv").hide();
      }).catch(error => {
        let errorMsg = commonFunctions.parseGraphQLErrorMessage(error);
        this.setState({ error: errorMsg });
        console.log('token2', errorMsg )
        $("#loadingDiv").hide();
      });
    
      $("#loadingDiv").hide();
    }else {
      if (tokenRes.error) {
        this.setState({ error: tokenRes.error.message });
      }
      $("#loadingDiv").hide();
    }
    
  }

  render() {

    let { email, firstName, lastName,   error } = this.state;

    return (
      <div className="payment_form">
       
        {error && <div className='pay-error-msg'>{error}</div>}
        <div className="card mt-5 p-4 text-white">
          <h2 className="form_heading">{`${firstName} ${lastName}`}</h2>
          <div className="flex">
          <h2>{`${firstName} ${lastName}`}</h2>
          {/* <label>Enter your Mail ID</label>
             <input type="email" value={(localStorage.getItem('userEmail'))} /> */}
          </div>
          {/* <p className="top mb-1">You need to pay</p> */}
          <p>{email}</p>
          <div className="d-flex flex-row justify-content-between text-align-center xyz">
          
            <h2><i className="fas fa-dollar-sign"></i><span>Amount to pay: $10</span></h2>
          </div>
          <form onSubmit={this.getStripeToken} className="paymentForm payment_form">
          <input
            className="form-control"
            type="hidden" name="amount"
           
            disabled
          />
          <CardElement
            hidePostalCode={true}
            className="form-control card"
            options={CARD_ELEMENT_OPTIONS}
          />
         <input
            className="btn btn-primary"
            type="submit"
            value={`$ 10 Pay`}
          />
        </form>
        </div>
        
        
      </div>

    );
  }
}

const enhance = compose(
  withRouter,
  withApollo
);
export default enhance(injectStripe(SubscribeWithCard));
