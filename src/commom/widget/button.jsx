import React from 'react'

export default props => (

    <button className={ `btn btn-${props.color} my-2 my-sm-0` } type={props.type}>{props.text}</button>
    
)