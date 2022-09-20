import React from "react";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import F1 from './components/F1.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'Homepage'
    }
  }

  render () {
    return (
      <div>
        <p>Ready to purchase?</p>
        <p>
          <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
        </p>
        <p>
          <button type="text"> Yes take my money </button>
        </p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))