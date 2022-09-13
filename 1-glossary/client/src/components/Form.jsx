import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }
  }

  render() {
    return(
        <div>
          Enter your word and definition: <br/><br/>
          <form>
            <label>
              Word:<br/>
              <input type="text" name="word" />
            </label><br/><br/>
            <label>
              Definition:<br/>
              <input type="text" name="definition" />
            </label><br/><br/>
          <input type="submit" value="Submit" />
          </form>
        </div>
    )
  }
}

export default Form;