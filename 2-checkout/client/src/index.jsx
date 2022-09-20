import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import F1 from './components/F1.jsx';
import F2 from './components/F2.jsx';
import F3 from './components/F3.jsx';
import Confirmation from './components/Confirmation.jsx';

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
    this.handleSubmitF2 = this.handleSubmitF2.bind(this);
    this.handleSubmitF3 = this.handleSubmitF3.bind(this);
    this.handleSubmitConfirmation = this.handleSubmitConfirmation.bind(this);
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
    event.preventDefault()
    console.log('F1 clicked!')
    this.setState({
      page: 'F2'
    })
  }

  // F2
  handleSubmitF2(){
    event.preventDefault()
    console.log('F2 clicked!')
    this.setState({
      page: 'F3'
    })
  }

  // F3
  handleSubmitF3(){
    event.preventDefault()
    console.log('F3 clicked!')
    this.setState({
      page: 'Confirmation'
    })
  }

  // Confirmation
  handleSubmitConfirmation(){
    event.preventDefault()
    console.log('Confirmation Page clicked! Return to Homepage')
    this.setState({
      page: 'Homepage'
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
    } else if (this.state.page === 'F2') {
      return (
        <div>
          <F2
          address1={this.state.address1}
          address2={this.state.address2}
          city={this.state.city}
          state={this.state.state}
          zipcode={this.state.zipcode}
          phone={this.state.phone}
          onChange={this.onChange}
          handleSubmitF2={this.handleSubmitF2}
          />
        </div>
      )
    } else if (this.state.page === 'F3') {
      return (
        <div>
          <F3
          cc={this.state.cc}
          expiration={this.state.expiration}
          cvv={this.state.cvv}
          billingZip={this.state.billingZip}
          onChange={this.onChange}
          handleSubmitF3={this.handleSubmitF3}
          />
        </div>
      )
    } else if (this.state.page === 'Confirmation') {
      return (
        <div>
          <Confirmation
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          address1={this.state.address1}
          address2={this.state.address2}
          city={this.state.city}
          state={this.state.state}
          zipcode={this.state.zipcode}
          phone={this.state.phone}
          cc={this.state.cc}
          expiration={this.state.expiration}
          cvv={this.state.cvv}
          billingZip={this.state.billingZip}
          handleSubmitConfirmation={this.handleSubmitConfirmation}
          />
        </div>
      )
    } else {
      return (
        <div>
          <h1>Error: You shouldn't be here!</h1>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'))