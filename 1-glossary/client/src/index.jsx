import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
  }

  render () {
    return (<div>
      <h1>Hello</h1>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));