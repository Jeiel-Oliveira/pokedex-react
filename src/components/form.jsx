import React, { Component } from 'react'

import Button from '../commom/widget/button'
import Input from '../commom/widget/input'



export default class Form extends Component {

    constructor (props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ value: event.target.value })
    }

    handleSubmit(event){        
        alert('Um nome foi enviado: ' + this.state.value)
        event.preventDefault();
    }

    render() {

        return (
            <form className="form-inline p-3" onSubmit={ this.handleSubmit }>
                        
                <div className="form-group">                    
                    <Input 
                        type='text' 
                        placeholder='Pokemon..' 
                        value={this.state.value} 
                        onChange={this.handleChange} />                    
                </div>

                <Button type='submit' color='danger' text='Pesquisar' />

            </form>
        )
    }
}