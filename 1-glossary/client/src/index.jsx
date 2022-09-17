import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import List from './components/List.jsx';
import axios from 'axios';
// import Search from './components/Search.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsAndDefinitions: []
    }
    this.getWords = this.getWords.bind(this);
    this.delete = this.delete.bind(this);
    this.editWordObj = this.editWordObj.bind(this);
    // this.search = this.search.bind(this);
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

  editWordObj(wordObj){
    axios.put(
      '/glossary',
      {data: {_id: wordObj._id, definition: wordObj.definition}}
      )
      .then(this.getWords())
      .catch((err)=> console.log('editWord axios error', err))
  }

  // search(word) {
  //   axios.post('/glossary',
  //     {data: {word: word}})
  //     .then((response) => {
  //       this.setState({wordsAndDefinitions: response.data});
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render () {
    return (
    <div>
      <h1>Glossary</h1>
      <Form wordsAndDef={this.state.wordsAndDefinitions} getWords={this.getWords}/> <br/>
      {/* <Search search={this.search.bind(this)}/> */}
      <List
        wordsAndDefinitions={this.state.wordsAndDefinitions}
        getWords={this.getWords}
        delete={this.delete}
        editWordObj={this.editWordObj}
      />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
