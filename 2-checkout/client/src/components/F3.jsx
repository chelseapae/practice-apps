import React from 'react';

const F3 = (props) => {
  console.log('PROPS IN F3', props)
  return (
    <div>
      <h1>Credit Card Info</h1> <br/>
      <form onSubmit={props.handleSubmitF3}>
        <label>
          Credit Card Number: <br/>
          <input type="text" name="cc" required onChange={props.onChange}/>
        </label>
        <br/><br/>

        <label>
          Expiration Date: <br/>
          <input type="text" name="expiration" required onChange={props.onChange}/>
        </label>
        <br/><br/>

        <label>
          CVV: <br/>
          <input type="text" name="cvv" required onChange={props.onChange}/>
        </label>
        <br/><br/>

        <label>
          Billing Zip Code: <br/>
          <input type="text" name="billingZip" required onChange={props.onChange}/>
        </label>
        <br/><br/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default F3;