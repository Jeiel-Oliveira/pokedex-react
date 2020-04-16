import React, { Component } from 'react'

import Button from '../commom/widget/button'
import Input from '../commom/widget/input'

import '../css/style.css'

export default class Form extends Component {    
    
    render() {                   
        return (
            
            <form ref={this.myRef} className="form mx-auto" onSubmit={ this.props.onSubmit }>
                <div className="row">
                    <div className="col">
                        <div className="form-group">                    
                            <input 
                                className="mx-auto form-control"
                                type='text' 
                                placeholder='Pokemon..' 
                                value={this.props.value} 
                                onChange={this.props.onChange}
                                onClick={this.props.onClick} />                                                             
                        </div>                
                    </div>                    

                    <div className="col">
                        <Button type='submit' color='primary' text='Pesquisar' className="form-control" />
                    </div>
                </div>                
            </form>
        )
    }
}