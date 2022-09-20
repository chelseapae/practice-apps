import React from 'react';

const Confirmation = (props) => {
  console.log('PROPS IN Confirmation', props)
  return (
    <div>
      <h1>Confirm Details</h1> <br/>
      {props.name} <br/>
      {props.email} <br/>
      {props.password} <br/>
      {props.address1} <br/>
      {props.address2} <br/>
      {props.city} <br/>
      {props.state} <br/>
      {props.zipcode} <br/>
      {props.phone} <br/>
      {props.cc} <br/>
      {props.expiration} <br/>
      {props.cvv} <br/>
      {props.billingZip} <br/>
    </div>
  )
}
export default Confirmation;