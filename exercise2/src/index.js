import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product'
import './index.css';
import * as serviceWorker from './serviceWorker'
// eslint-disable-next-line
const data = [
    {
        title: 'Angles and Demons',
        publisher: 'Penguin Random House',
        author: 'Dan Brown',
        price: 409,
        prodId: 2012
    },
    {
        title: 'Norse Mythology',
        publisher: 'Bloomsbury Publishing',
        author: 'Neil Gaiman',
        price: 300,
        prodId: 2019
    }
]


const cards = ()=> {
    return data.map(obj=>{
        return (
            <Product data={obj}></Product>
        )
    })
}

const wrapper = <div className="wrapper">
    <h2 >Featured Tiles</h2>
    <div className="tiles-group">
    {cards()}
    </div>
</div>
ReactDOM.render(wrapper, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
