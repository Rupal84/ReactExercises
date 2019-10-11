import React from 'react';

const Product = (props) => {
    return (
        <div key={props.data.title} className="single-tile">
                <h3>{props.data.title}</h3>
               Author: <b>{props.data.author}</b><br/>
               Publisher: <b>{props.data.publisher}</b><br/>
                Price: <b>{props.data.price}</b> {props.data.price<400 ? <p>- Best Seller</p> : "" }<br/><br/><br/>
                ProductId: <b>{props.data.prodId}</b> <br/>              
            </div>
    )
}

export default Product;