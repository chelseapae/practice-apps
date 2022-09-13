import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import Search from './components/Form.jsx';
import WordsList from './components/Form.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsAndDefinitions: []
    }
  }




  render () {
    return (
    <div>
      <h1>Glossary</h1>
      <Form />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));