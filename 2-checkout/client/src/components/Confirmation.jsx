import React from 'react';

const Confirmation = (props) => {
  console.log('PROPS IN Confirmation', props)
  return (
    <div>
      <h1>Confirm Details</h1> <br/>
      <b>Name:</b> {props.name} <br/>
      <b>Email:</b> {props.email} <br/>
      <b>Password:</b> {props.password} <br/><br/>
      <b>Address Line 1:</b> {props.address1} <br/>
      <b>Address Line 2:</b> {props.address2} <br/>
      <b>City:</b> {props.city} <br/>
      <b>State:</b> {props.state} <br/>
      <b>Zip Code:</b> {props.zipcode} <br/>
      <b>Phone Number:</b> {props.phone} <br/><br/>
      <b>Credit Card Number:</b> {props.cc} <br/>
      <b>Expiration Date:</b> {props.expiration} <br/>
      <b>CVV:</b> {props.cvv} <br/>
      <b>Billing Zip Code:</b> {props.billingZip} <br/><br/>

      <button type="submit" onClick={props.handleSubmitConfirmation}> Purchase </button>
    </div>
  )
}
export default Confirmation;