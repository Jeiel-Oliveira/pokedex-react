import React from 'react'

export default props => (

    <div className={`row ${props.extraClass}`}>
        {props.children}
    </div>

)