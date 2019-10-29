import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {
    value: 1
  }
  render() {
    return (
      <div className="App">
       <button className='addButton' onClick={this.doAddition}>Add</button>
       <p>Added value:{this.state.value}</p>
      </div>
    );
  }
    
   doAddition = ()=>{
    var val = this.state.value;
    this.setState({value: val + val})
  }
  
}

export default App;
