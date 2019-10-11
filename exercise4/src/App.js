import React from 'react';
import Mobile from './Mobile';
import './App.css';

function App() {
  return (
    <div className="App">
      {getMobiles()}
    </div>
  );
}

var phones = [
  {
      model : 'Google Pixel 2 XL',
      price: '62000',
      ram: '4GB',
      camera: '12.2MP',
      os: 'Android pie',
      processor: 'Snapdragon 835 octa core'
  },
  {
    model : 'Apple Iphone X',
    price: '98000',
    ram: '3GB',
    camera: '12MP',
    os: 'iOS v11.1.1',
    processor: 'A11 Bionic hexa-core'
}
]

function getMobiles()
{
  return (
    phones.map((phone)=> {
      return (
        <Mobile phone={phone}></Mobile>
      )
    })
  )
}
export default App;
