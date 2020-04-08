import React from 'react'

export default props => (
    <div className="card mx-auto">
        <div className="text-center">      
            <h3>Moves</h3>
            <ul className="list-group">
                {props.moves}
            </ul>
        </div>                             

        <div className="text-center">
            <h3>Status</h3>
            <ul className="list-group">
                {props.status}
            </ul>
        </div>
    </div>    
)