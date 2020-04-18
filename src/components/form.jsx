import React, { Component } from 'react'

import Button from '../commom/widget/button'
import Input from '../commom/widget/input'

import '../css/style.css'

export default class Form extends Component {    
    
    render() {                   
        return (
            
            <form ref={this.myRef} className="form mx-auto" onSubmit={ this.props.onSubmit }>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="form-group">                    
                            <input                                                                                                                                
                                id="input_search" 
                                className="mx-auto form-control"
                                type='text' 
                                placeholder='Pokemon..' 
                                value={this.props.value} 
                                onChange={this.props.onChange}
                                onKeyPress={this.props.onKeyPress} />                                                             
                        </div>                
                    </div>  

                    {this.props.searchBar}                  

                    <div className="col-md-6 col-12">
                        <Button type='submit' color='primary' text='Pesquisar' className="form-control" />
                    </div>
                </div>                
            </form>
        )
    }
}