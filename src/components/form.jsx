import React, { Component } from 'react'

import Button from '../commom/widget/button'
import Input from '../commom/widget/input'



export default class Form extends Component {
    
    render() {

        return (
            <form className="form-inline mx-auto p-3" onSubmit={ this.props.onSubmit }>
                
                <div className="form-group">                    
                    <Input 
                        className="mx-auto"
                        type='text' 
                        placeholder='Pokemon..' 
                        value={this.props.value} 
                        onChange={this.props.onChange} />                    
                </div>                

                <Button type='submit' color='danger' text='Pesquisar' />

            </form>
        )
    }
}