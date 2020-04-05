import React from 'react'

export default props => (
            
    <div className="card mx-auto">
        <img className="card-img-top" src={props.src} alt="Card image cap" />
        <div className="card-body">
            <p className="card-text">{props.text}</p>
        </div>        
    </div>
                
)