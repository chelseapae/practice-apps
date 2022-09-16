import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import Search from './components/Search.jsx';
import List from './components/List.jsx';
import $ from 'jquery';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsAndDefinitions: []
    }
    this.getWords = this.getWords.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount(){
    this.getWords();
  }


  getWords(){
    axios.get('/glossary')
    .then((results) => this.setState({wordsAndDefinitions: results.data}))
    .catch((err)=> console.log('axios error', err))
  }


  delete(word){
    axios.delete(
      '/glossary',
      {data: {word: word}}
      )
      .then(this.getWords())
      .catch((err)=> console.log('axios error', err))
  }

  render () {
    return (
    <div>
      <h1>Glossary</h1>
      <Form wordsAndDef={this.state.wordsAndDefinitions} getWords={this.getWords}/> <br/>
      {/* <Search wordsAndDef={this.state.wordsAndDefinitions}/> */}
      <List
        wordsAndDefinitions={this.state.wordsAndDefinitions}
        getWords={this.getWords}
        delete={this.delete}
      />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

  // getWords() {
  //   $.ajax({
  //     type: 'GET',
  //     url: '/glossary'
  //   })
  //     .then(data => {
  //       console.log('DATA FROM GET WORDS', data)
  //       this.setState({wordsAndDefinitions: data})
  //     })
  // }