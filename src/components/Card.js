import React from 'react'; 


const Card = (props) => {
    return (
            <div className="card" key={props.book.id}>
            <div className="card-body">
            <h5 className="card-title">{props.book.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.book.author}</h6>
            <p className="card-text">{props.book.description}</p>
            </div>
        </div>
    )
}

export default Card