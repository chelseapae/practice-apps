import React from 'react';

const F2 = (props) => {
  console.log('PROPS IN F2', props)
  return (
    <div>
      <h1>Shipping Info</h1> <br/>
      <form onSubmit={props.handleSubmitF2}>
        <label>
          Address Line 1: <br/>
          <input type="text" name="address1" onChange={props.onChange}/>
        </label>
        <br/><br/>

        <label>
          Address Line 2: <br/>
          <input type="text" name="address2" onChange={props.onChange}/>
        </label>
        <br/><br/>

        <label>
          City: <br/>
          <input type="text" name="city" onChange={props.onChange}/>
        </label>
        <br/><br/>

        <label>
          State: <br/>
          <input type="text" name="state" onChange={props.onChange}/>
        </label>
        <br/><br/>

        <label>
          Zip Code: <br/>
          <input type="text" name="zipcode" onChange={props.onChange}/>
        </label>
        <br/><br/>

        <label>
          Phone Number: <br/>
          <input type="text" name="phone" onChange={props.onChange}/>
        </label>
        <br/><br/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default F2;