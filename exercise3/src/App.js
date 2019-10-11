import React from 'react';
import './App.css';

class App extends React.Component {
   state = {}
  constructor() {
    super();
   this.state = {
      show: true
    }
  }
  render() {
  return (
    <div className="App">
      <button className="ui primary button"
        onClick={()=>this.setState({show: true})}>
          Show text
      </button>
      {this.state.show?this.sayHello():<br/>}
      <button  className="ui inverted primary button" onClick={()=>this.setState({show: false})}>Hide text</button>
    </div>
  );
  }

   sayHello = ()=> {
      return (
        <p className="ui ">Hello React</p>
      )
  }
}

export default App;
