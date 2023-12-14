import React from "react";
import './Donate.css';

class DonateForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        stayInContact: '',
        firstName: '',
        lastName:'',
        emailAddress:'',
        phoneNumber:'',
        LongNumber:'',
        expriyDate:'',
        cvvNumber:'',
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label className="donate-text">
            First Name
            <br/>
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleInputChange}  className="LongBox donate-text"/>           
          </label>
          <br />
          <label className="donate-text">
            Last Name
            <br/>
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleInputChange} className="LongBox donate-text"/>           
          </label>
          <br />
          <label className="donate-text">
            Email address
            <br/>
            <input
              name="emailAddress"
              type="email"
              value={this.state.emailAddress}
              onChange={this.handleInputChange} className="LongBox donate-text"/>           
          </label>
          <br />
          <label className="donate-text">
            Phone
            <br/>
            <input
              name="phoneNumber"
              type="number"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange} className="LongBox donate-text"/>           
          </label>
          <br/>
          <label className="donate-text">
            Long card number
            <br/>
            <input
              name="longNumber"
              type="number"
              value={this.state.longNumber}
              onChange={this.handleInputChange} className="LongBox donate-text"/>           
          </label>
          <br/> 
          <label className="donate-text">
            Expiry date
            <br/>
            <input
              name="expiryDate"
              type="date"
              value={this.state.exipry}
              onChange={this.handleInputChange} className="ShortBox donate-text" />           
          </label>
          <label className="donate-text">
            CVV
            <br/>
            <input
              name="cvvNumber"
              type="short number"
              value={this.state.cvvNumber}
              onChange={this.handleInputChange} className="ShortBox donate-text"/>           
          </label>
          <br/>
          <label className="donate-text2">
            Stay in contact?
            <br/>
            <input
              name="stayInContact"
              type="checkbox"
              checked={this.state.stayInContact}
              onChange={this.handleInputChange}/>
          </label>
          <br/>
          <input type="submit" value="Submit"  className="button-btn button-text"/>
        </form>
      );
    }
  } 
  export default DonateForm