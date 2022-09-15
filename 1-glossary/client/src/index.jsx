import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import Search from './components/Search.jsx';
import List from './components/List.jsx';
import $ from 'jquery';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsAndDefinitions: []
    }
    this.getWords = this.getWords.bind(this);
  }

  componentDidMount(){
    this.getWords();
  }

  getWords() {
    $.ajax({
      type: 'GET',
      url: '/glossary'
    })
      .then(data => {
        console.log('DATA FROM GET WORDS', data)
        this.setState({wordsAndDefinitions: data})
      })
  }

  render () {
    return (
    <div>
      <h1>Glossary</h1>
      <Form wordsAndDef={this.state.wordsAndDefinitions}/> <br/>
      {/* <Search wordsAndDef={this.state.wordsAndDefinitions}/> */}
      <List wordsAndDefinitions={this.state.wordsAndDefinitions} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));