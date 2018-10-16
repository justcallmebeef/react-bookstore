import React from 'react'; 


const CheckoutItem = (props) => {
    var item = props.checkoutItemsList.map(itemBooks => {
        return (
            <div className="list-group-item" key={itemBooks.id}>
                <div className="row">
                    <div className="col-md-8">{itemBooks.title}</div>
                    <div className="col-md-2">{itemBooks.price}</div>
                </div>
            </div>
        )
    })
    return (
        <div className="checkoutItem">
            {item}
        </div>
    )
}

export default CheckoutItem