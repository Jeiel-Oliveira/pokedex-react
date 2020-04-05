import React from 'react'

export default props => (

    <input className={`form-control mr-sm-2 ${props.customClass}` } type={props.type} placeholder={props.placeholder} aria-label={props.ariaLabel} />    

)