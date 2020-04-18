import React from 'react'

import '../css/style.css'

export default props => (

    <div className="mx-auto">

        <div className="text-center moves-mobile">            
            <ul className="list-group">
                <li className="list-group-item title-style"><strong>Status</strong></li>
                {props.status}
            </ul>
        </div>

        <div className="text-center mt-3">                  
            <ul className="list-group">
                <li className="list-group-item title-style"><strong>Moves</strong></li>
                {props.moves}
            </ul>
        </div>                                     

    </div>    

)