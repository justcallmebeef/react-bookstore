import React from 'react'; 
import CheckoutItem from './CheckoutItem';


const Checkout = (props) => {
    return (
        <div className="checkoutContainer">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-6"><b>Product</b></div>
                        <div className="col-md-6"><b>Price</b></div>
                    </div>
                </div>
                <CheckoutItem checkoutItemsList={props.checkoutItemsList} />
                <h2>Total: ${props.total}</h2>
            <button className="btn btn-primary" id="clearButton" onClick={props.clear}>Empty Cart</button>
            </div>
        </div>
    )
}

export default Checkout