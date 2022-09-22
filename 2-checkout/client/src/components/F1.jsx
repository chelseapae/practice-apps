import React from 'react';

const F1 = (props) => {
  console.log('PROPS IN F1', props)
  return (
    <div>
      <h1>Create Account</h1> <br/>
      <form onSubmit={props.handleSubmitF1}>
        <label>
          Name: <br/>
          <input type="text" name="name" required onChange={props.onChange}/>
        </label>
        <br/><br/>

        <label>
          Email: <br/>
          <input type="text" name="email" required onChange={props.onChange}/>
        </label>
        <br/><br/>

        <label>
          Password: <br/>
          <input type="text" name="password" required onChange={props.onChange}/>
        </label>
        <br/><br/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default F1;