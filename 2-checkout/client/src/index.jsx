import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import F1 from './components/F1.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

      page: 'Homepage',

      name: '',
      email: '',
      password: '',

      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',

      cc: '',
      expiration: '',
      cvv: '',
      billingZip: ''
    }
    this.onChange = this.onChange.bind(this);

    this.handleCheckout = this.handleCheckout.bind(this);

    this.handleSubmitF1 = this.handleSubmitF1.bind(this);
  }

  // General use
  onChange(event) {
    event.preventDefault();
    console.log('event.target.value', event.target.value)
    var changedValue = event.target.name
    this.setState({
      [changedValue]: event.target.value
    })
  }

  // Homepage
  handleCheckout(){
    console.log('Checkout clicked!')
    this.setState({
      page: 'F1'
    })
  }

  // F1
  handleSubmitF1(){
    event.preventDefault
    this.setState({
      page: 'F2'
    })
  }

  render () {
    if (this.state.page === 'Homepage') {
      return (
        <div>
          <p>Ready to purchase?</p>
          <p>
            <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
          </p>
          <p>
            <button type="text" onClick={this.handleCheckout}> Yes take my money </button>
          </p>
        </div>
      )
    } else if (this.state.page === 'F1') {
      return (
        <div>
          <F1
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          onChange={this.onChange}
          handleSubmitF1={this.handleSubmitF1}
          />
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'))