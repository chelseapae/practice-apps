// import React from 'react';

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       word: ''
//     }
//   }

//   onChange(e) {
//     this.setState({
//       word: e.target.value
//     });
//   }

//   searchWord(event) {
//     event.preventDefault()
//     this.props.search(this.state.word)
//       .then(() => {
//         this.setState({
//           word: ''
//         })
//       })
//   }

//   render() {
//     return (
//       <form onSubmit={this.searchWord.bind(this)}>
//         <input onChange={this.onChange.bind(this)} type="text" value={this.state.word}/>
//         <input type="submit" value="search"></input>
//       </form>
//     )
//   }
// }

// export default Search