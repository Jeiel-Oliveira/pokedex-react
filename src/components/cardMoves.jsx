import React from 'react'

export default props => (

    <div className="mx-auto">

        <div className="text-center">                  
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><strong>moves</strong></li>
                {props.moves}
            </ul>
        </div>                             

        <div className="text-center my-5">            
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><strong>Status</strong></li>
                {props.status}
            </ul>
        </div>

    </div>    

)