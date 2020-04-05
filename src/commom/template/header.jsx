import React from 'react'

import Input from '../widget/input'
import Button from '../widget/button'
import Row from '../layout/row'
import Grid from '../layout/grid'

import './custom.css'

export default props => (    
    
    <header>
        <nav className="navbar navbar-dark fixed-top bg-dark py-5">
            <div className="container">
                                
                <form className="form-inline mt-2 mt-md-0 ">
                    
                    <Input customClass="input-header" type="text" placeholder="Search" ariaLabel="Search" />                                                                                     
                    <Button color='danger' type='submit' text='Procurar' />                        
                    
                </form>      

                <a className="navbar-brand order-1" href="#">{props.title}</a>

            </div>
        </nav>
    </header> 
          
)